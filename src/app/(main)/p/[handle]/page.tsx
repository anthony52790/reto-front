import { Metadata } from "next"
import { getListProducts, getProductByHandle } from "@/lib/actions/products"
import { formatImageCard } from "@/lib/functions"

import ProductDetails from "@/modules/product-details/ProductDetails"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  try {
    const products = await getListProducts()

    return products.map((product) => ({
      handle: product.linkText
    }))
  } catch (error) {
    console.error(
      `Failed to generate static paths for product pages: ${error instanceof Error ? error.message : "Unknown error"
      }.`
    )
    return []
  }
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ handle: string }>
}): Promise<Metadata> {
  const { handle } = await params

  const [product] = await getProductByHandle(handle)

  if (!product) {
    notFound()
  }

  return {
    title: `${product?.productName} | store` || '',
    description: product?.metaTagDescription || '',
    openGraph: {
      images: [formatImageCard('280', '280', product)]
    }
  }

}

export default async function ProductPage({
  params
}: {
  params: Promise<{ handle: string }>
}) {
  const { handle } = await params
  const [product] = await getProductByHandle(handle)

  if (!product) {
    notFound()
  }

  return (
    <ProductDetails product={product} />
  )
}