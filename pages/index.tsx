import Head from "next/head"
import Image from "next/image";
import { useRef } from 'react';

const imgUrl = '/images/vegetables.jpg';

export default function Web() {
  const draggableRef = useRef<HTMLDivElement>(null);
    
    const handleOnMove = (e: MouseEvent) => {
      const position = e.clientX / window.innerWidth * 100;
      
      if (draggableRef.current) {
        draggableRef.current.style.width = `${position}%`;
      }
    }
      
    document.onmousemove = (e) => handleOnMove(e);
    // document.ontouchmove = (e) => handleOnMove(e.touches[0]);

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
        <title>Next.js Enterprise Boilerplate</title>
      </Head>
      {/* <section className="bg-gray-900 min-h-screen text-white">Diego</section> */}
      <section className="bg-gray-800 min-h-screen text-white">
        <div
          id="left-side"
          className="absolute z-10 overflow-hidden w-full h-[100vh] grid place-items-center bg-gray-800"
          ref={draggableRef}
        >
          <h1
            className="font-sans my-0 mx-[15vw] w-[70vw] h-fit text-5xl font-bold tracking-tight text-clip whitespace-nowrap"
          >
            Which website would you prefer?
          </h1>
          <Image src={imgUrl} alt="colorful vegetables" width={400} height={400} className="rounded"/>
          <button className="bg-green-600 text-white px-4 py-1 rounded">Learn More</button>
          {/* <button
            id='draghandle'
            type='button'
            onMouseDown={handler}
            className='absolute z-20 -right-4 bottom-1/2 bg-sky-900 text-white border-0 rounded-full h-8 w-8 hover:scale-110 active:scale-100 active:border-0 transition ease-in-out'
          >
            {'<>'}
          </button> */}
        </div>

        <div
          id="right-side"
          className="absolute w-full h-[100vh] bg-white grid place-items-center overflow-hidden"
        >
          <h1
            className="mx-[15vw] w-[70vw] h-fit font-sans text-5xl font-bold tracking-tight text-blue-800"
          >
            Which website would you prefer?
          </h1>
          <Image src={imgUrl} alt="colorful vegetables" width={400} height={400} className="border-6 border-red-800 shadow-xl shadow-red-800"/>
          <button className="bg-blue-800 underline px-4 py-1">Learn More</button>
        </div>
      </section>
    </>
  )
}
