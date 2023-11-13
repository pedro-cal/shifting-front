import Image from "next/image"
import logoBeta from "/logoBeta.jpg"

export default function Header(){

    return(
        <>
            <header className="z-20 h-10 lg:h-16 2xl:h-32 w-full bg-stone-900 flex flex-col sm:flex-row fixed">
                <div className="w-full md:w-1/2">
                    <button className="flex flex-row items-center place-content-center">
                        <Image
                            className="w-10 lg:w-16 2xl:w-32 aspect-square border-2 border-stone-500 border-solid"
                            src={logoBeta}
                            alt="Photo of a construction in New York"
                        />
                        <p className="pl-2 2xl:pl-4 text-stone-50 lg:text-3xl 2xl:text-6xl">Shifting</p>
                    </button>
                </div>
                <div className="bg-stone-950 md:bg-transparent h-10 lg:h-16 2xl:h-32 md:p-1.5 md:w-1/2 flex items-center place-content-center md:place-content-end space-x-2">
                    <button className="my-2 md:my-0 md:mr-2 hover:bg-stone-800 active:bg-stone-800 w-1/4 h-8 lg:h-10 2xl:h-20 p-2 border-2 border-stone-500 md:border-stone-50 border-solid flex items-center place-content-center text-stone-500 md:text-stone-50 lg:text-2xl 2xl:text-4xl rounded-full">Portfolio</button>
                    <button className="my-2 md:my-0 md:mr-2 hover:bg-stone-800 active:bg-stone-800 w-1/4 h-8 lg:h-10 2xl:h-20 p-2 border-2 border-stone-500 md:border-stone-50 border-solid flex items-center place-content-center text-stone-500 md:text-stone-50 lg:text-2xl 2xl:text-4xl rounded-full">About</button>
                    <button className="my-2 md:my-0 md:mr-2 hover:bg-stone-800 active:bg-stone-800 w-1/4 h-8 lg:h-10 2xl:h-20 p-2 border-2 border-stone-500 md:border-stone-50 border-solid flex items-center place-content-center text-stone-500 md:text-stone-50 lg:text-2xl 2xl:text-4xl rounded-full">Contact</button>
                </div>
            </header>
        </>
    )
}