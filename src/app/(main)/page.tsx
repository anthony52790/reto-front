import { getProductsPaginate } from "@/lib/actions/products"
import { INITIAL_PAGE, ITEMS_PER_PAGE } from "@/lib/constants"

import Products from "@/modules/products"

export default async function Home(props:any) {
  const params = await props.params
  console.log('props: ',params)
  const productsInitials = await getProductsPaginate(INITIAL_PAGE, ITEMS_PER_PAGE)

  return (
    <main className="bg-white">
      <div className="container p-4 mx-auto flex flex-col">
        <div className="flex flex-row">
          <div className="w-1/3 hidden sm:block">
          </div>
          <div className="w-full">
            <div className="mb-8 border-0">
              <div className="bg-slate-200 rounded-[8px] p-6">
                <h1 className="text-[1.5rem] text-center sm:text-[2rem] sm:text-left text-black ">Listado de productos</h1>
              </div>
            </div>
            <Products productsInitials={productsInitials?.data || []} />
          </div>
        </div>
      </div>
    </main>
  )
}
