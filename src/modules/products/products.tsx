'use client'

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { getProductsPaginate } from "@/lib/actions/products";
import { Product } from "@/lib/types/global";
import { ITEMS_PER_PAGE } from "@/lib/constants";
import Grid from "../layout/templates/grid";
import Card from "../card";
import Loading from "../common/icons/Loading";

export default function Products({ productsInitials }: { productsInitials: Product[] }) {
  const [page, setPage] = useState(2)
  const [endPage, setEndPage] = useState(false)
  const [products, setProducts] = useState<Product[]>(productsInitials)
  const { ref, inView } = useInView()

  const loadMoreProducts = async () => {
    const res = await getProductsPaginate(page, ITEMS_PER_PAGE)

    if (!res.next) {
      setEndPage(true)
    }

    const apiProducts = res.data
    setProducts(products => [...products, ...apiProducts])
    setPage(page => page + 1)
  }

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        loadMoreProducts()
      }, 500)
    }
  }, [inView])

  return (
    <>
      <Grid>
        {products.map((product, index) => (
          <Card product={product} key={product.id} index={index} />
        ))}
      </Grid>
      {!endPage &&
        <div ref={ref} className="flex items-center my-5">
          <Loading/>
        </div>
      }
    </>
  )
}