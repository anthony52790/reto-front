'use client'

import { searchProduct } from "@/lib/actions/products"
import { Product } from "@/lib/types/global"
import Input from "@/modules/common/components/input"
import Loading from "@/modules/common/icons/Loading"
import Search from "@/modules/common/icons/Search"
import Link from "next/link"
import { useState } from "react"

export default function AutoComplete() {
  const [value, setValue] = useState<string>('')
  const [results, setResults] = useState<Product[] | null>(null)
  const [debounceTimeout, setDebounceTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleSearch = async (value: string) => {
    if (!value) {
      setResults(null)
      return
    }

    try {
      const res = await searchProduct(value)

      setResults(res)
    } catch (error) {
      console.error('Error al buscar: ', error)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setValue(value)

    if (!value) setResults(null)

    if (debounceTimeout) clearTimeout(debounceTimeout)

    const timeout = setTimeout(() => {
      handleSearch(value)
    }, 2000);

    setDebounceTimeout(timeout)
  }

  return (
    <>
      <Search />
      <Input
        className="w-full outline-none bg-transparent text-black text-sm"
        onChange={handleChange}
        value={value}
        placeholder="Buscar..."
        type='text'
      />
      {value && (
        <div className="autocomplete absolute w-full bg-white top-[40px] left-0 right-0 pt-2 pb-2">
          {results ?
            <>
              {results.length > 0 ? (
                <div className="p-2">
                  <h2 className="font-bold">Productos encontrados:</h2>
                  <ul className="pl-2">
                    {
                      results.map((product) => (
                        <li className="py-1 hover:underline" key={product.productId}>
                          <Link href={`/p/${product.linkText}`}>{product.productName}</Link>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              ) : (
                <p className="text-center">No se encontraron resultados</p>
              )}
            </> : <Loading />
          }
        </div>
      )}
    </>
  )
}