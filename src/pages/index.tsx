import products from "@/pages/data/products";
import ProductCard from "@/pages/component/ProductCard";

export default function Home() {

    return (
        <>
            <div id="header" className="flex flex-col items-center justify-center text-black py-20 pb-5 mx-auto space-y-2">
                <h1 className="text-xl font-bold text-[32px]">H Market</h1>
                <div className="flex space-x-1">
                    <h2 className="font-bold text-[18px] p-6"><a href="#">가전</a></h2>
                    <h2 className="font-bold text-[18px] p-6"><a href="#">기타</a></h2>
                    <h2 className="font-bold text-[18px] p-6"><a href="#">도구 및 장비</a></h2>
                    <h2 className="font-bold text-[18px] p-6"><a href="#">뷰티 및 건강</a></h2>
                    <h2 className="font-bold text-[18px] p-6"><a href="#">스포츠 및 레저</a></h2>
                    <h2 className="font-bold text-[18px] p-6"><a href="#">의류</a></h2>
                    <h2 className="font-bold text-[18px] p-6"><a href="#">컴퓨터 및 사무용품</a></h2>
                    <h2 className="font-bold text-[18px] p-6"><a href="#">통신</a></h2>
                </div>
            </div>

            <div className="p-20 py-0 grid grid-cols-3 gap-12">
                {products.map((product, index) => (
                    <ProductCard
                        key={index}
                        imageUrl={product.imageUrl}
                        name={product.name}
                        content={product.content}
                        price={product.price}
                        link={product.link}
                    />
                ))}
            </div>
            <div className="p-20 text-center">
                <span className="text-gray-400">&#34;이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.&#34;</span>
            </div>
        </>


    );
}
