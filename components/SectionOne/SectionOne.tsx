// import Image from "next/image"
// import constructionPhoto from "/constructionPhoto.jpg"
import { useEffect, useState } from "react"
// import BlobShape from "components/BlobShape"

export default function SectionOne() {
  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)

  const mouseBlur = (e: React.MouseEvent) => {
    setMouseX(e.clientX)
    setMouseY(e.clientY)
  }

  useEffect(() => {
    const blur = document.getElementById("blur")
    blur?.animate(
      {
        left: `${mouseX - 100}px`,
        top: `${mouseY - 100}px`,
      },
      { duration: 1000, fill: "forwards" }
    )
  }, [mouseX, mouseY])
  return (
    <>
      <section
        onMouseMove={(e) => mouseBlur(e)}
        className="fx-background-change flex h-[100vh] flex-col overflow-hidden pt-2 md:flex-row md:p-0"
      >
        <div id="blur" className="fx-blur-cursor absolute -top-5 left-5 z-0 flex aspect-square" />
        <div className="relative z-10 flex h-1/3 place-content-center items-center pt-3 md:h-full md:w-1/2 md:p-0">
          <p className="fx-floating h-1/2 w-3/4 text-center font-sans text-2xl font-black text-stone-100 md:h-fit md:pl-20 md:text-left md:text-4xl lg:text-5xl">
            What if <br />
            your <span className="text-sky-500">intentions</span>
            <br /> could move us?
          </p>
        </div>
        <div className="z-10 flex h-full w-1/2 place-content-center items-center"></div>
      </section>
    </>
  )
}
