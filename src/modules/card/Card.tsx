import { formatImageCard } from "@/lib/functions";
import { Product } from "@/lib/types/global";
import Image from "next/image";
import Link from "next/link";

export default function Card({ product, index }: { product: Product, index: number }) {
  return (
    <div className="bg-gray-100 p-2 overflow-hidden">
      <div className="bg-white flex flex-col h-full">
        <div className="w-full py-5">
          <Image
            src={`${formatImageCard('200', '200', product)}`}
            alt={product?.productName}
            width={200}
            height={200}
            className="aspect-[1/1] w-auto object-cover m-auto block"
            priority={index > 6 ? false : true}
            loading={index > 6 ? 'lazy' : undefined}
          />
        </div>
        <div className="p-4 text-center flex-1">
          <h4 className="text-sm sm:text-base font-bold text-gray-800 min-h-[50px]">{product?.productName}</h4>
          <h4 className="text-sm sm:text-base text-gray-800 font-bold mt-2">{product?.items[0]?.sellers[0]?.commertialOffer?.Price}</h4>
        </div>
        <Link href={`/p/${product.linkText}`} className="bg-gray-700 font-semibold hover:bg-gray-800 text-white text-sm px-2 py-2 w-full text-center">Ver mas</Link>
      </div>
    </div>
  )
}