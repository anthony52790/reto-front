import { formatImageCard, formatPrice } from "@/lib/functions";
import { Product } from "@/lib/types/global";
import Image from "next/image";
import AllSpecifications from "../allSpecifications";

export default function ProductDetails({ product }: { product: Product }) {
  return (
    <div className="font-[sans-serif] p-4">
      <div className="lg:max-w-6xl max-w-xl mx-auto">
        <div id={product.productId} className="grid items-start grid-cols-1 lg:grid-cols-2 gap-8 max-lg:gap-12 max-sm:gap-8">
          <div className="w-full lg:sticky top-0">
            <div className="flex flex-row gap-2">
              <div className="flex-1">
                <Image
                  src={`${formatImageCard('560', '560', product)}`}
                  alt={product.productName}
                  width={560}
                  height={560}
                  className="w-full  aspect-[1/1] object-cover"
                  loading="lazy"
                  title={product.productName}
                />
              </div>
            </div>
          </div>

          <div className="w-full">
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-gray-800">{product.productName}</h1>
              <h2 className="text-gray-500 mt-1 text-sm">{product.brand}</h2>
              <div className="flex items-center flex-wrap gap-4 mt-4">
                <h4 className="text-gray-800 text-2xl sm:text-3xl font-bold">{formatPrice(product?.items[0]?.sellers[0]?.commertialOffer?.Price)}</h4>
                <p className="text-gray-500 text-lg">{`Quedan: ${product?.items[0]?.sellers[0]?.commertialOffer.AvailableQuantity}`}</p>
              </div>
            </div>

            <hr className="my-6 border-gray-300" />

            <div>
              <div className="mt-6 flex flex-wrap gap-4">
                <button type="button"
                  className="bg-gray-700 font-semibold hover:bg-gray-800 text-white text-sm px-2 py-2 w-[45%] text-center">Comprar</button>
              </div>
            </div>

            <hr className="my-6 border-gray-300" />

            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800">Información del Producto</h3>
              <div className="mt-2" role="accordion">
                <div className="hover:bg-gray-100 transition-all">
                  <div className="pb-4 px-4">
                    <AllSpecifications product={product} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}