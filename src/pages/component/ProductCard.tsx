import Image from "next/image";

interface ProductCardProps {
    imageUrl: string;
    name: string;
    content: string;
    price: number;
    link: string;
}

const ProductCard = ({imageUrl, name, content, price, link}: ProductCardProps) => {
    return (
        <div
            className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg">
            <div className="relative w-full h-48 bg-white flex items-center justify-center">
                {imageUrl ? (
                    <Image
                        src={imageUrl}
                        alt={name}
                        layout="fill"
                        objectFit="contain"
                        className="p-4"
                    />
                ) : (
                    <span className="text-gray-400">이미지 없음</span>
                )}
            </div>
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 truncate mb-2">{name}</h3>
                <div className="flex items-baseline mb-3">

                    {/*<span className="text-md text-gray-400">{content}</span>*/}
                    {/*<span className="text-xl font-bold text-gray-400">{price}</span>*/}
                </div>
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-blue-600 text-white text-center py-2 rounded-md hover:bg-blue-700 transition duration-200"
                >
                    지금 구매하기
                </a>
            </div>
        </div>
    );
};

export default ProductCard;