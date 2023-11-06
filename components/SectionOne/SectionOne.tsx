import Image from 'next/image'
import constructionPhoto from "/constructionPhoto.jpg"

export default function SectionOne(){
   
    return(
        <>
            <section className="pt-2 md:p-0 bg-stone-950 flex flex-col md:flex-row h-screen">
                <div className="pt-3 md:p-0 h-1/3 md:h-full md:w-1/2 flex items-center place-content-center">
                    <p className="md:pl-20 w-3/4 h-1/2 md:h-fit font-sans text-center md:text-left text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-9xl text-stone-100 font-black">What if we could follow your intentions and fulfill your ideas?</p>
                </div>
                <div className="h-2/3 md:h-full md:w-1/2 flex items-center place-content-center">
                    <Image
                        className="w-2/3"
                        src={constructionPhoto}
                        alt="Photo of a construction in New York"
                    />
                </div>
            </section>
        </>
    )
}

