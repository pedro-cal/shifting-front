import Image from "next/image"
import constructionPhoto from "/constructionPhoto.jpg"
import { useEffect, useState, } from 'react'

export default function SectionOne() {
  const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);
    
    const mouseBlur = (e: React.MouseEvent) => {
        setMouseX(e.clientX);
        setMouseY(e.clientY);        
    };

    useEffect(() => {
        const blur = document.getElementById("blur");
        blur?.animate({
            left: `${mouseX}px`,
            top: `${mouseY}px`,
        }, {duration: 2000, fill: "forwards"});
    }, [mouseX, mouseY]);
  return (
    <>
      <section onMouseMove={(e) => mouseBlur(e)} className="flex h-[90vh] flex-col bg-stone-950 pt-2 md:flex-row md:p-0 overflow-hidden">
        <div id="blur" className='absolute flex z-0 h-0 lg:h-40 aspect-square bg-transparent lg:bg-gradient-to-r from-stone-50 via-stone-600 to-stone-800 -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl opacity-50'></div>
        <div className="z-10 flex h-1/3 place-content-center items-center pt-3 md:h-full md:w-1/2 md:p-0">
          <p className="h-1/2 w-3/4 text-center font-sans text-2xl font-black text-stone-100 md:h-fit md:pl-20 md:text-left md:text-4xl lg:text-5xl">
            What if our work could follow your <span className="text-sky-500">intentions</span>?
          </p>
        </div>
        <div className="z-10 flex h-full place-content-center items-center">
          <Image className="w-2/3 rounded" src={constructionPhoto} alt="Photo of a construction in New York" />
        </div>
      </section>
    </>
  )
}
