import puppeteer from "puppeteer";

const browser = await puppeteer.launch({
    headless: false,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-save-password-bubble']
});



let page = await browser.newPage()
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

page.on('dialog', async dialog => {
    const dialogType = dialog.type()
    await delay(2000)
    if (dialogType === 'confirm' || dialogType === 'alert') {
        await dialog.accept();
        await page.reload()
    }
});

await page.goto('https://www.kdisk.co.kr/index.php')

await page.evaluate(() => {
    const idInput = document.querySelector('input[name="mb_id"]');
    const pwInput = document.querySelector('input[name="mb_pw"]');
    if(idInput) idInput.setAttribute('autocomplete', 'off');
    if(pwInput) pwInput.setAttribute('autocomplete', 'off');
});


const pages = await browser.pages();

// 예를 들어, 두 번째 탭으로 전환하여 조작하고 싶다면:
await pages[0].close();

// await page.click('#footer_appVersion > div > a:nth-child(3)')
// await delay(3000)
// await page.goto('https://www.ondisk.co.kr/index.php')

page = pages[1]

await page.bringToFront()

await delay(5000)
await page.type('#page-login-inside > form > div.row.row_id > p.ctrl.ctrl-id > input', 'these9907');
await page.type('input[name="mb_pw"]', 'star8903!@');
await page.click('#page-login-inside > form > div.row.row_pw > p.ctrl-btnlogin > a > input[type=image]');

await page.waitForNavigation()

await delay(2000)
page = await browser.newPage()
page.on('dialog', async dialog => {
    const dialogType = dialog.type()
    await delay(2000)
    if (dialogType === 'confirm' || dialogType === 'alert') {
        await dialog.accept();
        await page.reload()
    }
});
await page.goto('https://www.kdisk.co.kr/main/mypage.php?doc=regist')

console.log('페이지이동')
// #frm > table > tbody > tr:nth-child(4) > td:nth-child(1) > input
await delay(2000)
await page.click('#frm > table > tbody > tr:nth-child(4) > td:nth-child(1) > input')
await page.click('#regist_etc_frm > div.right_area > a:nth-child(1) > img')


for(let i = 1; i <= 100; i ++) {
    console.log('시작')
    if (i === 1) {
        await delay(1000)
    } else {
        await delay(1810000)
    }
    console.log(getCurrentTimeString() + ':' + `${i}번째 실행`)
    await page.click('#frm > table > tbody > tr:nth-child(7) > td:nth-child(1) > input')
    await page.click('#regist_etc_frm > div.right_area > a:nth-child(1) > img')


}


function getCurrentTimeString() {
    const date = new Date();
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    const hh = String(date.getHours()).padStart(2, '0');
    const min = String(date.getMinutes()).padStart(2, '0');
    const ss = String(date.getSeconds()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd} ${hh}:${min}:${ss}`;
}
