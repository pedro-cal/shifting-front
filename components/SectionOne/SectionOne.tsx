import Image from "next/image"
import constructionPhoto from "/constructionPhoto.jpg"

export default function SectionOne() {
  return (
    <>
      <section className="flex h-screen flex-col bg-stone-950 pt-2 md:flex-row md:p-0">
        <div className="flex h-1/3 place-content-center items-center pt-3 md:h-full md:w-1/2 md:p-0">
          <p className="h-1/2 w-3/4 text-center font-sans text-2xl font-black text-stone-100 md:h-fit md:pl-20 md:text-left md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-9xl">
            What if we could follow your intentions and fulfill your ideas?
          </p>
        </div>
        <div className="flex h-2/3 place-content-center items-center md:h-full md:w-1/2">
          <Image className="w-2/3" src={constructionPhoto} alt="Photo of a construction in New York" />
        </div>
      </section>
    </>
  )
}
