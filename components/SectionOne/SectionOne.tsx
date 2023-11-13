import Image from 'next/image'
import constructionPhoto from "/constructionPhoto.jpg"
import { useEffect, useState, } from 'react'

export default function SectionOne(){
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);
    
    function mouseBlur(e){
        setMouseX(e.clientX);
        setMouseY(e.clientY);        
    }

    useEffect(() => {
        const blur = document.getElementById("blur");
        blur.animate({
            left: `${mouseX}px`,
            top: `${mouseY}px`,
        }, {duration: 2000, fill: "forwards"});
    }, [mouseX, mouseY]);
    
    return(
        <>
            <section onMouseMove={mouseBlur} className="box-border relative pt-10 lg:pt-16 2xl:pt-32 bg-stone-950 flex flex-wrap flex-col md:flex-row h-screen overflow-hidden">
            <div id="blur" className='absolute flex z-0 h-0 lg:h-40 aspect-square bg-transparent lg:bg-gradient-to-r from-stone-50 via-stone-600 to-stone-800 -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl opacity-50'></div>
                <div className="z-10 pt-3 md:p-0 h-1/3 md:h-full md:w-1/2 flex items-center place-content-center">
                    <p className="md:pl-20 w-3/4 h-1/2 md:h-fit font-sans text-center md:text-left text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-9xl text-stone-100 font-black">What if we could follow your intentions and fulfill your ideas?</p>
                </div>
                <div className="z-10 h-2/3 md:h-full md:w-1/2 flex items-center place-content-center">
                    <Image
                        className="w-2/3 xl:w-1/2"
                        src={constructionPhoto}
                        alt="Photo of a construction in New York"
                    />
                </div>
                
            </section>
        </>
    )
    }
