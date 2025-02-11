import { Product } from "@/lib/types/global";

export default function AllSpecifications({ product }: { product: Product }) {
  let items = product.allSpecifications.map((specification, index) => {
    return <li key={index} className="text-[15px]"><b>{specification}</b>: {product[specification][0]}</li>
  })

  return <ul>{items}</ul>
}