import { motion } from 'framer-motion'
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const imgUrl = "/images/vegetables.jpg"


export default function SectionTwo(){
    
    const draggableRef = useRef<HTMLDivElement>(null)
    const draggableIconRef = useRef<HTMLDivElement>(null)
    const draggableIconDivRef = useRef<HTMLDivElement>(null)
    const [isTouched, setIsTouched] = useState(false)

    useEffect(() => {
    //     //document.ondrag = (e) => handleDrag(e)
    //     // document.ontouchmove = (e) => handleOnMove(e.touches[0]);
        }, [])
    
    const handleDrag = (e: MouseEvent) => {
        const position = (e.clientX / window.innerWidth) * 100
        if (draggableRef.current) {
            draggableRef.current.style.width = `${position}%`
        }
        if (draggableIconDivRef.current) {
            draggableIconDivRef.current.style.width = `100%`
        }
        if (draggableIconRef.current) {
            draggableIconRef.current.style.left = `${position-1.6}%`
            if(window.innerWidth > 1024){
                draggableIconRef.current.style.width = `3vw`
            }else{
                draggableIconRef.current.style.width = `6vw`
            }
        }
    }

    const handleTouch = (e:React.TouchEvent) => {
        setIsTouched(true)
        if(isTouched === true){
            const touchLocation = e.targetTouches[0]
            const position = (touchLocation.pageX / window.innerWidth) * 100;
            if (draggableRef.current) {
                draggableRef.current.style.width = `${position}%`
            }
            if (draggableIconDivRef.current) {
                draggableIconDivRef.current.style.width = `100%`
            }
            if (draggableIconRef.current) {
                draggableIconRef.current.style.left = `${position - 3}%`
                if(window.innerWidth > 1024){
                    draggableIconRef.current.style.width = `3vw`
                }else{
                    draggableIconRef.current.style.width = `6vw`
                }
            }
        }
        
    }

    return(
        <>
            <section className="relative flex section-background min-h-screen bg-zinc-800 text-white">
                <motion.div
                    id="left-side"
                    className="absolute z-20 grid h-[103%] w-full place-items-center overflow-hidden bg-zinc-800 border-solid border-r-2 border-zinc-700"
                    ref={draggableRef}
                    initial={{width: 0}}
                    whileInView={{width: '51%'}}
                    viewport={{ once: true }}
                    transition={{duration: 1.25}}
                >
                    <h1 className="mx-[5vw] md:mx-[14.5vw] my-0 h-fit w-[90vw] md:w-[70vw] text-center text-clip lg:whitespace-nowrap font-sans text-5xl font-bold tracking-tight">
                        Which website would you prefer?
                    </h1>
                    <Image src={imgUrl} 
                        alt="colorful vegetables" 
                        width={400} height={400} 
                        className="rounded"
                    />
                    <button className="rounded bg-green-600 px-4 py-1 text-white">Learn More</button>
                </motion.div>
                <motion.div
                        id='drag-icon-div'
                        ref={draggableIconDivRef}
                        className='absolute w-full h-full left-0 bg-transparent z-20'
                        initial={{x:0, width: 0}}
                        whileInView={{x:0, width: '51%'}}
                        viewport={{ once: true }}
                        transition={{duration: 1.25}}
                    >
                        <motion.div
                            id='drag-icon'
                            draggable="true"
                            onDrag={handleDrag}
                            onDragEnd={handleDrag}
                            onTouchMove={(e) => handleTouch(e)}
                            ref={draggableIconRef}
                            className="absolute rounded-full w-[6vw] h-[6vw] xl:w-[3vw] xl:h-[3vw] inset-y-[50%] left-[94.2%] lg:left-[94%] xl:left-[96.8%] bg-zinc-700 p-0 md:p-1 lg:p-2 xl:p-0 flex place-content-center"
                        >
                            <p className='align-middle text-sm md:text-2xl lg:text-3xl'>&hArr;</p>
                        </motion.div>
                    </motion.div>
                <div 
                    id="right-side"
                    className="absolute grid z-10 h-[103%] w-full place-items-center overflow-hidden bg-zinc-50"
                    >
                    <h1 className="h-fit w-[90vw] md:w-[70vw] font-sans text-5xl text-center font-bold tracking-tight text-blue-800">
                        Which website would you prefer?
                    </h1>
                    <Image
                        src={imgUrl}
                        alt="colorful vegetables"
                        width={400} height={400}
                        className="border-6 border-red-800 shadow-xl shadow-red-800"
                    />
                    <button className="bg-blue-800 px-4 py-1 underline">Learn More</button>
                </div>
            </section>
        </>
    )
}