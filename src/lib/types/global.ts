export interface Pagination {
  first: number
  prev: number | null
  next: number | null
  last: number
  pages: number
  items: number
  data: Product[]
}

export interface Product {
  [key: string]: any
  productId: string
  productName: string
  brand: string
  brandId: number
  brandImageUrl: null
  linkText: string
  productReference: string
  productReferenceCode: string
  categoryId: string
  productTitle: string
  metaTagDescription: string
  releaseDate: Date
  clusterHighlights: any
  productClusters: { [key: string]: string }
  searchableClusters: any
  categories: string[]
  categoriesIds: string[]
  link: string
  "Tipo de Producto": string[]
  "Vendido por": string[]
  "Presentación unitarios vitrina"?: string[]
  "Componentes del Producto": string[]
  "Descuentos exclusivos": string[]
  "Descuentos": string[]
  "Tipo de envío": string[]
  "Método de Entrega": string[]
  "Surtido"?: string[]
  "Contiene Pepas"?: string[]
  "Declaración De Origen Natural"?: string[]
  "Peso Por Unidad"?: string[]
  "Advertencias De Almacenamiento"?: string[]
  "Contenido Neto"?: string[]
  Especificaciones?: string[]
  allSpecifications: string[]
  allSpecificationsGroups: any[]
  description: string
  items: any[]
  id: string
  "Descripción del producto"?: string[]
  Descripción?: any[]
  "Presentación/Empaque"?: string[]
  Orgánico?: any[]
  "Número De Unidades"?: string[]
  "Preparación Sugerida"?: string[]
  "Denominación/Variedad"?: string[]
  CantidadBiPrecioMK?: string[]
  "Atributos no visibles"?: any[]
  tipodeoctogono?: string[]
  octogonos?: string[]
  Equivalencia?: string[]
  "Multiplicador-de-unidad:"?: string[]
  itemMetadata?: any
  "Promo paga x lleva y"?: string[]
  "Número De Unidades Por Kilo"?: string[]
  "Contenido Empaque Ecommerce"?: string[]
}