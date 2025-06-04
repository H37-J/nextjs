import requests
import re
import os
from urllib.parse import urlparse
from concurrent.futures import ThreadPoolExecutor

class VideoDownloader:
    def __init__(self):
        self.session = requests.Session()
        self.session.headers.update({
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        })

    def find_video_urls(self, page_url):
        """웹 페이지에서 비디오 URL 찾기"""
        try:
            response = self.session.get(page_url)
            response.raise_for_status()

            # 일반 MP4/WebM 비디오 찾기
            video_urls = re.findall(r'(https?://[^\s]+?\.(?:mp4|webm|mov|avi|flv))', response.text, re.I)

            # HLS/DASH 스트림 찾기
            m3u8_urls = re.findall(r'(https?://[^\s]+?\.m3u8?)', response.text, re.I)
            mpd_urls = re.findall(r'(https?://[^\s]+?\.mpd)', response.text, re.I)

            return list(set(video_urls + m3u8_urls + mpd_urls))
        except Exception as e:
            print(f"Error finding video URLs: {e}")
            return []

    def download_video(self, url, output_dir="downloads"):
        """비디오 다운로드"""
        try:
            if not os.path.exists(output_dir):
                os.makedirs(output_dir)

            parsed_url = urlparse(url)
            filename = os.path.basename(parsed_url.path) or "video.mp4"
            filepath = os.path.join(output_dir, filename)

            print(f"Downloading {url}...")

            if url.endswith('.m3u8'):
                self.download_hls(url, filepath)
            elif url.endswith('.mpd'):
                self.download_dash(url, filepath)
            else:
                with self.session.get(url, stream=True) as r:
                    r.raise_for_status()
                    with open(filepath, 'wb') as f:
                        for chunk in r.iter_content(chunk_size=8192):
                            f.write(chunk)

            print(f"Download completed: {filepath}")
            return filepath
        except Exception as e:
            print(f"Error downloading video: {e}")
            return None

    def download_hls(self, m3u8_url, output_path):
        """HLS 스트림 다운로드 (FFmpeg 필요)"""
        try:
            import subprocess
            cmd = [
                'ffmpeg',
                '-i', m3u8_url,
                '-c', 'copy',
                '-bsf:a', 'aac_adtstoasc',
                output_path
            ]
            subprocess.run(cmd, check=True)
        except Exception as e:
            print(f"HLS download failed. Make sure FFmpeg is installed. Error: {e}")

    def download_dash(self, mpd_url, output_path):
        """DASH 스트림 다운로드 (FFmpeg 필요)"""
        try:
            import subprocess
            cmd = [
                'ffmpeg',
                '-i', mpd_url,
                '-c', 'copy',
                output_path
            ]
            subprocess.run(cmd, check=True)
        except Exception as e:
            print(f"DASH download failed. Make sure FFmpeg is installed. Error: {e}")

if __name__ == "__main__":
    downloader = VideoDownloader()
    page_url = input("Enter webpage URL containing video: ")

    video_urls = downloader.find_video_urls(page_url)

    if not video_urls:
        print("No video URLs found.")
    else:
        print("Found video URLs:")
        for i, url in enumerate(video_urls, 1):
            print(f"{i}. {url}")

        selected = input(f"Enter number to download (1-{len(video_urls)}): ")
        try:
            selected_idx = int(selected) - 1
            if 0 <= selected_idx < len(video_urls):
                downloader.download_video(video_urls[selected_idx])
            else:
                print("Invalid selection.")
        except ValueError:
            print("Please enter a valid number.")