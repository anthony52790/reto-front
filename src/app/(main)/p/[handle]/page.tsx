import { getListProducts, getProductByHandle } from "@/lib/actions/products"
import { formatImageCard } from "@/lib/functions"
import { Metadata } from "next"

export async function generateStaticParams() {
  const products = await getListProducts()

  return products.map((product) => ({
    handle: product.linkText
  }))
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ handle: string }>
}): Promise<Metadata> {
  const { handle } = await params

  const product = await getProductByHandle(handle)

  return {
    title: `${product[0].productName} | store`,
    description: product[0].metaTagDescription,
    openGraph: {
      images: [formatImageCard('280', '280', product[0])]
    }
  }

}

export default async function ProductPage({
  params
}: {
  params: Promise<{ handle: string }>
}) {
  const { handle } = await params

  console.log('handle: ', handle)
  return (
    <div></div>
  )
}