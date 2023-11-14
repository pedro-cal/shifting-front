// import Image from "next/image"
// import logoBeta from "/logoBeta.jpg"

export default function Header() {
  return (
    <>
      <header className="absolute left-0 top-0 z-20 flex h-[10vh] w-full flex-col bg-none p-3 px-8 sm:flex-row lg:h-[10vh]">
        {/* <div className="absolute -top-5 -left-5 z-20 flex w-[110vw] h-[20vh] flex-col blur bg-stone-300 opacity-10 p-3 px-8 sm:flex-row lg:h-[10vh]" /> */}
        <div className="z-30 w-1/2">
          <button className="flex h-full flex-row place-content-center items-center">
            {/* <Image className="aspect-square h-full w-full" src={logoBeta} alt="Logo of Shifting" /> */}
            <p className="pl-2 font-black text-stone-50 lg:text-3xl 2xl:pl-4 2xl:text-3xl">Shifting</p>
          </button>
        </div>
        <div className="z-30 my-2 flex h-full place-content-center items-center space-x-4 md:my-0 md:mr-2 md:w-1/2 md:place-content-end ">
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
