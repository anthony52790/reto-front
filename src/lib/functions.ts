import { Product } from "./types/global"

export const formatImageCard = (width: string, height: string, product: Product): string => {
  const imageId = product?.items[0]?.images[0]?.imageId
  const imageText = product?.items[0]?.images[0]?.imageText

  return `https://plazavea.vteximg.com.br/arquivos/ids/${imageId}-${width}-${height}/${imageText}.jpg`
}