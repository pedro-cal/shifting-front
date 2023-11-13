import Image from "next/image"
import logoBeta from "/logoBeta.jpg"

export default function Header() {
  return (
    <>
      <header className="flex h-10 flex-col bg-stone-900 sm:flex-row lg:h-16 2xl:h-32">
        <div className="w-1/2">
          <button className="flex flex-row place-content-center items-center">
            <Image
              className="aspect-square w-10 border-2 border-solid border-stone-500 lg:w-16 2xl:w-32"
              src={logoBeta}
              alt="Photo of a construction in New York"
            />
            <p className="pl-2 text-stone-50 lg:text-3xl 2xl:pl-4 2xl:text-6xl">Shifting</p>
          </button>
        </div>
        <div className="my-2 flex h-10 place-content-center items-center space-x-2 md:my-0 md:mr-2 md:w-1/2 md:place-content-end md:p-1.5 lg:h-16 2xl:h-32">
          <button className="flex h-8 w-1/4 place-content-center items-center rounded-full border-2 border-solid border-stone-500 p-2 text-stone-500 hover:bg-stone-800 active:bg-stone-800 md:border-stone-50 md:text-stone-50 lg:h-10 lg:text-2xl 2xl:h-20 2xl:text-4xl">
            Portfolio
          </button>
          <button className="flex h-8 w-1/4 place-content-center items-center rounded-full border-2 border-solid border-stone-500 p-2 text-stone-500 hover:bg-stone-800 active:bg-stone-800 md:border-stone-50 md:text-stone-50 lg:h-10 lg:text-2xl 2xl:h-20 2xl:text-4xl">
            About
          </button>
          <button className="flex h-8 w-1/4 place-content-center items-center rounded-full border-2 border-solid border-stone-500 p-2 text-stone-500 hover:bg-stone-800 active:bg-stone-800 md:border-stone-50 md:text-stone-50 lg:h-10 lg:text-2xl 2xl:h-20 2xl:text-4xl">
            Contact
          </button>
        </div>
      </header>
    </>
  )
}
