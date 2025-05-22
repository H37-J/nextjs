import Image from "next/image";



export default function Home() {

  const imageUrl = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MA7F4_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=cEMrK1BETUx0R013ckd3MURLdGo3MVZya2lKWlJmUEwrYndWOTJiVWJWQUYwVmtIbGRkS25RMVpBRlo0bk5DUVJsakxPWm1CZ1BPV2ljSkhYY2hhdnc'
  const name = 'iPhone 12 Pro Max'
  const hasDiscount = true
  const originalPrice = 122222
  const price = 11111
  const link = 'https://www.apple.com/kr/iphone-12-pro-max/'

  return (
      <div className="grid grid-cols-4 gap-4">
          <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg">
              <div className="relative w-full h-48 bg-gray-100 flex items-center justify-center">
                  {imageUrl ? (
                      <Image
                          src={imageUrl}
                          alt={name}
                          layout="fill" // 부모 요소에 맞춰 이미지 채우기
                          objectFit="contain" // 이미지 비율 유지하며 컨테이너에 맞춤
                          className="p-4" // 이미지 주변에 패딩을 주어 하얀 배경에 잘 보이도록
                      />
                  ) : (
                      <span className="text-gray-400">이미지 없음</span>
                  )}
              </div>
              <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 truncate mb-2">{name}</h3>
                  <div className="flex items-baseline mb-3">
                      {hasDiscount && (
                          <span className="text-gray-500 line-through mr-2 text-sm">
              {originalPrice.toLocaleString()}원
            </span>
                      )}
                      <span className="text-xl font-bold text-red-600">
            {price.toLocaleString()}원
          </span>
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

          <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg">
              <div className="relative w-full h-48 bg-gray-100 flex items-center justify-center">
                  {imageUrl ? (
                      <Image
                          src={imageUrl}
                          alt={name}
                          layout="fill" // 부모 요소에 맞춰 이미지 채우기
                          objectFit="contain" // 이미지 비율 유지하며 컨테이너에 맞춤
                          className="p-4" // 이미지 주변에 패딩을 주어 하얀 배경에 잘 보이도록
                      />
                  ) : (
                      <span className="text-gray-400">이미지 없음</span>
                  )}
              </div>
              <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 truncate mb-2">{name}</h3>
                  <div className="flex items-baseline mb-3">
                      {hasDiscount && (
                          <span className="text-gray-500 line-through mr-2 text-sm">
              {originalPrice.toLocaleString()}원
            </span>
                      )}
                      <span className="text-xl font-bold text-red-600">
            {price.toLocaleString()}원
          </span>
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

          <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg">
              <div className="relative w-full h-48 bg-gray-100 flex items-center justify-center">
                  {imageUrl ? (
                      <Image
                          src={imageUrl}
                          alt={name}
                          layout="fill" // 부모 요소에 맞춰 이미지 채우기
                          objectFit="contain" // 이미지 비율 유지하며 컨테이너에 맞춤
                          className="p-4" // 이미지 주변에 패딩을 주어 하얀 배경에 잘 보이도록
                      />
                  ) : (
                      <span className="text-gray-400">이미지 없음</span>
                  )}
              </div>
              <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 truncate mb-2">{name}</h3>
                  <div className="flex items-baseline mb-3">
                      {hasDiscount && (
                          <span className="text-gray-500 line-through mr-2 text-sm">
              {originalPrice.toLocaleString()}원
            </span>
                      )}
                      <span className="text-xl font-bold text-red-600">
            {price.toLocaleString()}원
          </span>
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

          <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg">
              <div className="relative w-full h-48 bg-gray-100 flex items-center justify-center">
                  {imageUrl ? (
                      <Image
                          src={imageUrl}
                          alt={name}
                          layout="fill" // 부모 요소에 맞춰 이미지 채우기
                          objectFit="contain" // 이미지 비율 유지하며 컨테이너에 맞춤
                          className="p-4" // 이미지 주변에 패딩을 주어 하얀 배경에 잘 보이도록
                      />
                  ) : (
                      <span className="text-gray-400">이미지 없음</span>
                  )}
              </div>
              <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 truncate mb-2">{name}</h3>
                  <div className="flex items-baseline mb-3">
                      {hasDiscount && (
                          <span className="text-gray-500 line-through mr-2 text-sm">
              {originalPrice.toLocaleString()}원
            </span>
                      )}
                      <span className="text-xl font-bold text-red-600">
            {price.toLocaleString()}원
          </span>
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
      </div>


  );
}
