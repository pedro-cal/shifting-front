import Head from "next/head"
import Image from "next/image"
import { useEffect, useRef } from "react"
import Form from "components/Form/Form"
import Header from "components/Header/Header"
import SectionOne from "components/SectionOne/SectionOne"

const imgUrl = "/images/vegetables.jpg"

export default function Home() {
  const draggableRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.onmousemove = (e) => handleOnMove(e)
    // document.ontouchmove = (e) => handleOnMove(e.touches[0]);
  }, [])

  const handleOnMove = (e: MouseEvent) => {
    const position = (e.clientX / window.innerWidth) * 100

    if (draggableRef.current) {
      draggableRef.current.style.width = `${position}%`
    }
  }

  return (
    <>
      <Head>
        <meta property="og:url" content="https://next-enterprise.vercel.app/" />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/Blazity/next-enterprise/main/project-logo.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <title>Shifting</title>
      </Head>

      <section>
        <Header />
      </section>
      <section>
        <SectionOne />
      </section>

      <section className="section-background min-h-screen bg-gray-800 text-white">
        <div
          id="left-side"
          className="absolute z-10 grid h-[100vh] w-full place-items-center overflow-hidden bg-zinc-800"
          ref={draggableRef}
        >
          <h1 className="mx-[15vw] my-0 h-fit w-[70vw] text-clip whitespace-nowrap font-sans text-5xl font-bold tracking-tight">
            Which website would you prefer?
          </h1>
          <Image src={imgUrl} alt="colorful vegetables" width={400} height={400} className="rounded" />
          <button className="rounded bg-green-600 px-4 py-1 text-white">Learn More</button>
        </div>

        <div id="right-side" className="absolute grid h-[100vh] w-full place-items-center overflow-hidden bg-white">
          <h1 className="mx-[15vw] h-fit w-[70vw] font-sans text-5xl font-bold tracking-tight text-blue-800">
            Which website would you prefer?
          </h1>
          <Image
            src={imgUrl}
            alt="colorful vegetables"
            width={400}
            height={400}
            className="border-6 border-red-800 shadow-xl shadow-red-800"
          />
          <button className="bg-blue-800 px-4 py-1 underline">Learn More</button>
        </div>
      </section>
      <section>
        <Form />
      </section>
    </>
  )
}
