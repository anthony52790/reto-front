import Link from "next/link";
import AutoComplete from "../../components/autoComplete";
import House from "@/modules/common/icons/House";

export default function Nav() {
  return (
    <header className='flex shadow-md sm:px-10 px-6 py-3 bg-white font-[sans-serif] min-h-[70px] top-0 sticky z-50'>
      <div className="flex w-full max-w-screen-xl mx-auto">
        <div className='flex items-center relative lg:gap-y-4 gap-y-4 gap-x-4 w-full'>
          <div className='flex items-center'>
            <Link href='/' className="border-none outline-none flex items-center justify-center rounded-full p-2 hover:bg-gray-100 transition-all">
              <House />
            </Link>
          </div>

          <div className="w-[100%] bg-gray-100 flex items-center border max-md:order-1 border-transparent focus-within:border-black focus-within:bg-transparent px-4 rounded-sm h-10 transition-all relative">
            <AutoComplete />
          </div>
        </div>
      </div>
    </header>
  )
}