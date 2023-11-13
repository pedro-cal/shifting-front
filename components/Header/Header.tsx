import Image from "next/image"
import logoBeta from "/logoBeta.jpg"

export default function Header() {
  return (
    <>
      <header className="flex h-[10vh] flex-col bg-stone-900 p-3 px-8 sm:flex-row lg:h-[10vh]">
        <div className="w-1/2">
          <button className="flex h-full flex-row place-content-center items-center">
            <Image className="aspect-square h-full w-full" src={logoBeta} alt="Logo of Shifting" />
            <p className="pl-2 text-stone-50 lg:text-3xl 2xl:pl-4 2xl:text-3xl">Shifting</p>
          </button>
        </div>
        <div className="my-2 flex h-full place-content-center items-center space-x-4 md:my-0 md:mr-2 md:w-1/2 md:place-content-end ">
          <button className="flex h-4/5 place-content-center items-center p-2 font-sans text-xl text-stone-50 hover:text-sky-500">
            Portfolio
          </button>
          <button className="flex h-4/5 place-content-center items-center p-2 font-sans text-xl text-stone-50 hover:text-sky-500">
            About
          </button>
          <button className="flex h-4/5 place-content-center items-center p-2 font-sans text-xl text-stone-50 hover:text-sky-500">
            Contact
          </button>
        </div>
      </header>
    </>
  )
}
