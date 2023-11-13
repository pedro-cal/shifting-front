import Head from "next/head"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import Form from "components/Form/Form"
import Header from "components/Header/Header"
import SectionOne from "components/SectionOne/SectionOne"

const imgUrl = "/images/vegetables.jpg"

export default function Home() {
  const draggableRef = useRef<HTMLDivElement>(null);
  const bgAngle = useState<number>(90);

  useEffect(() => {
    document.onmousemove = (e) => handleOnMove(e);
    // document.ontouchmove = (e) => handleOnMove(e.touches[0]);
  }, [])
  useEffect(() => {
    handleBackgroundChanges();
    // document.ontouchmove = (e) => handleOnMove(e.touches[0]);
  }, [])

  function handleBackgroundChanges() {
    const elementId = 'gradient-button-transition'; // <-- id of the button we're transitioning

    // DEFINE YOUR GRADIENT COLORS HERE
    // Pct refers to the percentage position of the gradient stop point.
    const gradientStopOne = [
        { pct: 0,  color: { r: 255, g: 113, b: 71 } }, // The first color in your gradient
        { pct: 100, color: { r: 0, g: 55, b: 255 } }   // The color you want your first color to transition to
    ];
    const gradientStopTwo = [
        { pct: 0,  color: { r: 224, g: 65, b: 127 } }, // The second color in your gradient
        { pct: 100, color: { r: 0, g: 173, b: 255 } }  // The color you want your second color to transition to
    ]

    // Apply our gradient programmatically so we can completely manipulate the gradient from JS rather than CSS
    const c1 = gradientStopOne[0].color;
    const c2 = gradientStopTwo[0].color;
    const bgElement = document.getElementById(elementId);
    if (bgElement) {
      bgElement.style.background = `linear-gradient(${bgAngle}deg, rgb(${c1.r}, ${c1.g}, ${c1.b}), rgb(${c2.r}, ${c2.g}, ${c2.b}))`;
    }
      
    // This function transitions between two rgb colors
    // const getColor = function(pct, colorSet) {
    //     for (var i = 1; i < colorSet.length - 1; i++) {
    //         if (pct < colorSet[i].pct) {
    //             break;
    //         }
    //     }
    //     // This conversion figures out the transition between two rgb values
    //     const lower = colorSet[i - 1];
    //     const upper = colorSet[i];
    //     const range = upper.pct - lower.pct;
    //     const rangePct = (pct - lower.pct) / range;
    //     const pctLower = 1 - rangePct;
    //     const pctUpper = rangePct;
    //     const color = {
    //         r: Math.floor(lower.color.r * pctLower + upper.color.r * pctUpper),
    //         g: Math.floor(lower.color.g * pctLower + upper.color.g * pctUpper),
    //         b: Math.floor(lower.color.b * pctLower + upper.color.b * pctUpper)
    //     };
    //     // And returns the rgb code
    //     return `rgb(${color.r}, ${color.g}, ${color.b})`;
    // }
  }

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
          className="absolute z-10 grid h-[100vh] w-full place-items-center overflow-hidden bg-sky-700"
          ref={draggableRef}
        >
          <h1 className="mx-[15vw] my-0 h-fit w-[70vw] text-clip whitespace-nowrap font-sans text-5xl font-bold tracking-tight">
            Which website would you prefer?
          </h1>
          <Image src={imgUrl} alt="colorful vegetables" width={400} height={400} className="rounded" />
          <button className="rounded bg-green-600 px-4 py-1 text-white">Learn More</button>
          {/* <button
            id='draghandle'
            type='button'
            onMouseDown={handler}
            className='absolute z-20 -right-4 bottom-1/2 bg-sky-900 text-white border-0 rounded-full h-8 w-8 hover:scale-110 active:scale-100 active:border-0 transition ease-in-out'
          >
            {'<>'}
          </button> */}
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

//border-2 border-white border-solid
