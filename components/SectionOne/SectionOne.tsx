// import Image from "next/image"
// import constructionPhoto from "/constructionPhoto.jpg"
import { motion, Target } from "framer-motion"
import { useEffect, useRef, useState } from "react"
// import BlobShape from "components/BlobShape"

export default function SectionOne() {
  const [blurX, setBlurX] = useState(0)
  const [blurY, setBlurY] = useState(0)
  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)
  const [pageX, setPageX] = useState(0)
  const [pageY, setPageY] = useState(0)
  const [count, setCount] =useState(0)
  const [mouseIsDown, setMouseIsDown] = useState(false)
  const [isTouched, setIsTouched] = useState(false)
  const [startIsActive, setStartIsActive] = useState(false)
  const [endIsActive, setEndIsActive] = useState(false)
  const [error, setError] = useState(false)
  //const [button, setButton] = useState(<div></div>)
  const [hiddenSectionPosition, setHiddenSectionPosition] = useState("100%")
  const [hiddenSectionDisplay, setHiddenSectionDisplay] = useState("none")
  const [dragBox, setDragbox] = useState("50%")
  const [position, setPosition] = useState("75%")
  const [touchPosition, setTouchPosition] = useState("87%")
  const [isVisible, setIsVisible] = useState(false)
  const [revealSectionTrail, setRevealSectionTrail] = useState("flex")
  const [hideSectionTrail, setHideSectionTrail] = useState("none")
  const [textDisplay, setTextDisplay] = useState("0%")
  
  const draggableRef = useRef<HTMLDivElement>(null)
  // const canvasRef = useRef<HTMLCanvasElement>(null)
  // const blurRef = useRef<HTMLDivElement>(null)
  // const startRef = useRef<HTMLDivElement>(null)
  // const tierOneRef = useRef<HTMLDivElement>(null)
  // const tierTwoRef = useRef<HTMLDivElement>(null)
  // const tierThreeRef = useRef<HTMLDivElement>(null)
  // const tierFourRef = useRef<HTMLDivElement>(null)
  // const tierFiveRef = useRef<HTMLDivElement>(null)
  // const tierSixRef = useRef<HTMLDivElement>(null)
  // const tierSevenRef = useRef<HTMLDivElement>(null)
  // const tierEightRef = useRef<HTMLDivElement>(null)
  // const tierNineRef = useRef<HTMLDivElement>(null)
  // const endRef = useRef<HTMLDivElement>(null)
  

  // useEffect(() => {
  //   const blur = document.getElementById("blur")
  //   blur?.animate(
  //     {
  //       left: `${blurX}px`,
  //       top: `${blurY}px`,
  //       translate: '-50% -50%'
  //     },
  //     { duration: 500, fill: "forwards" }
  //   )
  // }, [blurX, blurY])

  // const tiers = [tierOneRef, tierTwoRef, tierThreeRef, tierFourRef, tierFiveRef, tierSixRef, tierSevenRef, tierEightRef, tierNineRef]
  // let c = 0

  // const mouseBlur = (e: React.MouseEvent) => {
  //   setBlurX(e.clientX)
  //   setBlurY(e.clientY)
  // }

  // function tracingError(){
  //   setCount(0)
  //   if(mouseIsDown){
  //     setMouseIsDown(false)
  //     if(startRef.current !== null){
  //       setError(true)
  //       startRef.current.style.backgroundColor = 'transparent'
  //       while(c < 9){
  //         console.log(c)
  //         const tierSelected = tiers[c].current
  //         if(tierSelected !== null){
  //           tierSelected.style.backgroundColor = 'transparent'
  //         }
  //         c++
  //       }
  //       window.getSelection()?.removeAllRanges()
  //       alert('Try Again')
  //     }
  //   }
  //   if(isTouched){
  //     setIsTouched(false)
  //     if(startRef.current !== null){
  //       setError(true)
  //       startRef.current.style.backgroundColor = 'transparent'
  //       while(c < 9){
  //         console.log(c)
  //         const tierSelected = tiers[c].current
  //         if(tierSelected !== null){
  //           tierSelected.style.backgroundColor = 'transparent'
  //         }
  //         c++
  //       }
  //       window.getSelection()?.removeAllRanges()
  //       alert('Try Again')
  //     }
  //   }
  // }

  // function activateStart(){
  //   setError(false)
  //   if(mouseIsDown && startRef.current){
  //     startRef.current.style.backgroundColor = 'white'
  //     setStartIsActive(true)
  //   }
  //   if(blurRef.current){
  //     blurRef.current.style.display = 'flex'
  //   }
  // }
  
  // function tracing(e: React.MouseEvent){
  //   if(mouseIsDown && startIsActive){
  //     console.log('working')
  //     setError(false)
  //     mouseBlur(e)
  //     const currentElement = document.elementFromPoint(e.clientX, e.clientY)
  //     const tierID = currentElement?.id
  //     let tierSelected
  //     const pattern = /[0-9]/g
  //     if(tierID){
  //       if(tierID.match(pattern)){
  //         tierSelected = tiers[parseInt(tierID)].current
  //       }else{
  //         tierSelected = null
  //       }
  //     }  
  //     if(tierSelected){
  //       tierSelected.style.backgroundColor = 'white'
  //     }
  //     setCount(count + 1)
  //   }
  // }

  // function activateEnd(){
    
  //   if(mouseIsDown && endRef.current){
  //     endRef.current.style.backgroundColor = 'white'
  //     setEndIsActive(true)
  //     if(startIsActive && endIsActive){
  //       //alert('Well Done!')
  //       setDragbox("0%")
  //       setHiddenSectionPosition("50%")
  //       setMouseIsDown(false)
  //     }
  //     if(blurRef.current){
  //       blurRef.current.style.display = 'none'
  //     }
  //   }
  // }

  // function handleMouseDown() {
  //   setMouseIsDown(true)
  // }


  // function touchTracing(e: React.TouchEvent){
  //   setError(false)
  //   const touchLocation = e.targetTouches[0]
  //   if(blurRef.current){
  //     blurRef.current.style.display = 'flex'
  //     blurRef.current.style.width = '8%'
  //     blurRef.current.style.height = '4%'
  //   }
  //   setBlurX(touchLocation.pageX)
  //   setBlurY(touchLocation.pageY)
  //   const currentElement = document.elementFromPoint(touchLocation.pageX, touchLocation.pageY)
  //   const tierID = currentElement?.id
  //   if(tierID === 'error'){
  //     setError(true)
  //     if(startRef.current){
  //       startRef.current.style.backgroundColor = 'transparent'
  //     }
  //     if(endRef.current){
  //       endRef.current.style.backgroundColor = 'transparent'
  //     }
  //     while(c < 9){
  //       console.log(c)
  //       const tierSelected = tiers[c].current
  //       if(tierSelected !== null){
  //         tierSelected.style.backgroundColor = 'transparent'
  //       }
  //       c++
  //     }
  //     window.getSelection()?.removeAllRanges()
  //     alert('Try Again')
  //   }
  //   if(tierID === 'start' && startRef.current){
  //     startRef.current.style.backgroundColor = 'white'
  //     setStartIsActive(true)
  //   }
  //   if(tierID === 'end' && endRef.current){
  //     endRef.current.style.backgroundColor = 'white'
  //     setEndIsActive(true)
  //   }
  //   if(startIsActive && endIsActive){
  //     alert('Well Done!')
  //     setIsTouched(false)
  //     if(blurRef.current){
  //       blurRef.current.style.display = 'none'
  //     }
  //   }
  //   let tierSelected
  //   const pattern = /[0-9]/g
  //   if(tierID){
  //     if(tierID.match(pattern)){
  //       tierSelected = tiers[parseInt(tierID)].current
  //     }else{
  //       tierSelected = null
  //     }
  //   }
  //   if(tierSelected){
  //     tierSelected.style.backgroundColor = 'white'
  //   }
  // }

  // function stop(){
  //   setMouseIsDown(false)
  //   setIsTouched(false)
  // }

  const mouseDown = () => {
    setMouseIsDown(true)
  }

  const hidden = () => {
    setIsVisible(false)
  }
  
  const displayed = () => {
    setIsVisible(true)
  }
  
  const mouseUp = () => {
    setMouseIsDown(false)
  }

  const revealSection = (e:React.MouseEvent) => {
    if(mouseIsDown){
      klaviyo.push(['track', 'Reveal Event']);
      const a = (window.innerWidth/2) - e.currentTarget.clientWidth
      const xPosition = e.clientX - ((window.innerWidth/2) + (a/2))
      setPosition(`${xPosition}px`)
      if(xPosition > 44){
        if(draggableRef.current){
          draggableRef.current.style.left = position
          let test = draggableRef.current.style.left
        }
      }else{
        setPosition('44px')
        setDragbox("0%")
        setHiddenSectionPosition("50%")
        setHiddenSectionDisplay("flex")
        setRevealSectionTrail("none")
        setHideSectionTrail("flex")
        if(draggableRef.current){
          draggableRef.current.style.left = position
          let test = draggableRef.current.style.left
        }
        console.log(e.clientX)
      }
    }
  }

  const hide = () => {setHiddenSectionDisplay("none")}
  
  const hideSection = (e:React.MouseEvent) => {
    if(mouseIsDown){
      const a = (window.innerWidth/2) - e.currentTarget.clientWidth
      const xPosition = e.clientX - (a/2)
      setPosition(`${xPosition}px`)
      if(xPosition < 250){
        if(draggableRef.current){
          draggableRef.current.style.left = position
          let test = draggableRef.current.style.left
        }
      }else{
        setPosition('250px')
        setDragbox("50%")
        setHiddenSectionPosition("100%")
        setTimeout(hide, 2000)
        setRevealSectionTrail("flex")
        setHideSectionTrail("none")
        if(draggableRef.current){
          draggableRef.current.style.left = position
          let test = draggableRef.current.style.left
        }
      }
      console.log(xPosition)
    }
  }

  const touchRevealSection =  (e:React.TouchEvent) => {
    const screenWidth = window.innerWidth
    if(screenWidth < 768){
      const touchLocation = e.targetTouches[0]
      const xPosition = (touchLocation.pageX / window.innerWidth) * 100
      setTouchPosition(`${xPosition}%`)
      if(xPosition > 4){
        if(draggableRef.current){
          draggableRef.current.style.left = touchPosition
        }
      }else{
        setHiddenSectionPosition("0%")
        setTouchPosition('4%')
        setHiddenSectionDisplay("block")
        setRevealSectionTrail("none")
        setHideSectionTrail("flex")
        setTextDisplay("100%")
        if(draggableRef.current){
          console.log(textDisplay)
          draggableRef.current.style.left = touchPosition
          let test = draggableRef.current.style.left
        }
      }
    }else{
      const touchLocation = e.targetTouches[0]
      const a = (window.innerWidth/2) - e.currentTarget.clientWidth
      const xPosition = touchLocation.pageX - ((window.innerWidth/2) + (a/2))
      setTouchPosition(`${xPosition}px`)
      console.log(touchPosition)
      if(xPosition > 9){
        if(draggableRef.current){
          draggableRef.current.style.left = touchPosition
        }
      }else{
        setTouchPosition('9px')
        setDragbox("0%")
        setHiddenSectionPosition("50%")
        setHiddenSectionDisplay("flex")
        setRevealSectionTrail("none")
        setHideSectionTrail("flex")
        if(draggableRef.current){
          console.log(textDisplay)
          draggableRef.current.style.left = touchPosition
          let test = draggableRef.current.style.left
        }
      }
    }
  }

  const touchHideSection =  (e:React.TouchEvent) => {
    const screenWidth = window.innerWidth
    if(screenWidth < 768){
      const touchLocation = e.targetTouches[0]
      const xPosition = (touchLocation.pageX / window.innerWidth) * 100
      setTouchPosition(`${xPosition}%`)
      if(xPosition < 87){
        if(draggableRef.current){
          draggableRef.current.style.left = touchPosition
        }
      }else{
        setHiddenSectionPosition("100%")
        setTouchPosition('87%')
        setTimeout(hide, 2000)
        setRevealSectionTrail("flex")
        setHideSectionTrail("none")
        setTextDisplay("0%")
        if(draggableRef.current){
          console.log(textDisplay)
          draggableRef.current.style.left = touchPosition
          let test = draggableRef.current.style.left
        }
      }
    }else{
      const touchLocation = e.targetTouches[0]
      const a = (window.innerWidth/2) - e.currentTarget.clientWidth
      const xPosition = touchLocation.pageX - (a/2)
      setTouchPosition(`${xPosition}px`)
      console.log(touchPosition)
      if(xPosition < 255){
        if(draggableRef.current){
          draggableRef.current.style.left = touchPosition
        }
      }else{
        setTouchPosition('255px')
        setDragbox("50%")
        setHiddenSectionPosition("100%")
        setTimeout(hide, 2000)
        setRevealSectionTrail("flex")
        setHideSectionTrail("none")
        if(draggableRef.current){
          console.log(textDisplay)
          draggableRef.current.style.left = touchPosition
          let test = draggableRef.current.style.left
        }
      }
    }
    
  }
 

  return (
    <>
      <section
        //onMouseMove={(e) => mouseBlur(e)}
        style={{overflow: 'hidden !important'}}
        className="fx-background-change relative flex h-screen w-screen flex-col md:flex-row overflow-hidden pt-2 md:p-0"
      >
        {/* <div id="blur" className="fx-blur-cursor absolute flex md:-top-5 md:left-5 z-50 aspect-square" /> */}
        <motion.div
          initial={{right: textDisplay}}
          animate={{right: textDisplay}}
          transition={{duration: 2}} 
          className="relative z-10 flex place-content-center items-center pt-3 h-1/2 md:h-full md:w-1/2 md:p-0 overflow-hidden"
        >
          <p 
            className="fx-floating h-1/2 w-full md:w-3/4 text-5xl md:text-5xl text-center font-sans font-black text-stone-100 md:h-fit md:pl-20 md:text-left mt-[5%] md:mt-auto"
          >
            <span className="block md:hidden">What if your</span>
            <span className="hidden md:block">What if</span>
            {/* <br className="hidden md:block"/> */}
            <span className="hidden md:block">your</span>
            <span className="text-sky-500 text-6xl md:text-5xl">intentions</span>
            <br />
            <span className="text-4xl md:text-5xl">could move us? </span>
          </p>
        </motion.div>
        <motion.div
          initial={{left: dragBox}}
          animate={{left: dragBox}}
          transition={{duration: 2}}
          className="peer z-20 md:absolute flex flex-col h-1/2 md:h-full w-full md:w-1/2 place-content-start md:place-content-center items-center overflow-hidden"
        >
          <motion.div
            id="reveal-section-trail"
            initial={{display: revealSectionTrail}}
            animate={{display: revealSectionTrail}}
            transition={{delay: 2}}
            onMouseMove={revealSection}
            onMouseLeave={mouseUp}
            onTouchMove={touchRevealSection} 
            className="bg-transparent md:bg-stone-800 md:hidden relative w-full md:w-[80%] md:w-[75%] lg:w-[50%] pt-[10%] aspect-square flex flex-col content-center place-content-center items-center border-none md:border-solid border-2 border-white overflow-hidden"
          >
            <p className="absolute top-[15%] md:top-[10%] text-white text-center text-2xl md:text-[2.5vw] lg:text-[1.5vw] w-[90%] select-none">
              Drag the button to the left to REVEAL the Hidden Section.
            </p>
            <div
              style={{textAlignLast: "justify"}} 
              className="absolute relative h-[10%] w-[90%] lg:w-[70%] border-solid border-2 border-white text-white p-1 flex items-center space-around"
            >
              <p className="w-[100%]  select-none">&#9665; &#9665; &#9665; &#9665; &#9665;</p>
              <div
                onMouseMove={displayed}
                onTouchMove={displayed} 
                className="absolute left-0 h-[100%] w-[8%]"
              ></div>
              <div 
                onMouseMove={hidden}
                onTouchMove={hidden}
                className="absolute right-0 h-[100%] w-[8%]"
              ></div>
            </div>
            <motion.div
              id="cursor-button"
              initial={{left: position}}
              animate={{left: position}}
              transition={{duration: 0}}
              ref={draggableRef}
              onMouseDown={mouseDown}
              onMouseUp={mouseUp}
              className="absolute hidden lg:block h-[12%] aspect-square rounded-full bg-white border-solid border-2 border-white"
            ></motion.div>
            <motion.div
              id="touch-button"
              initial={{left: touchPosition}}
              animate={{left: touchPosition}}
              transition={{duration: 0}}
              ref={draggableRef}
              onMouseDown={mouseDown}
              onMouseUp={mouseUp}
              className="absolute lg:hidden h-[12%] aspect-square rounded-full bg-white border-solid border-2 border-white"
            ></motion.div>
          </motion.div>
          <motion.div
            id="hide-section-trail"
            initial={{display: hideSectionTrail}}
            animate={{display: hideSectionTrail}}
            transition={{delay: 2}}
            onMouseMove={hideSection}
            onMouseLeave={mouseUp}
            onTouchMove={touchHideSection}  
            className="bg-transparent md:bg-stone-800 md:hidden relative w-full md:w-[80%] md:w-[75%] lg:w-[50%] pt-[10%] aspect-square flex flex-col content-center place-content-center items-center border-none md:border-solid border-2 border-white overflow-hidden"
          >
            <p className="absolute top-[15%] md:top-[10%] text-white text-center text-2xl md:text-[2.5vw] lg:text-[1.5vw] w-[90%] select-none">
              Drag the button to the right to HIDE the Text Section.
            </p>
            <div 
              style={{textAlignLast: "justify"}}
              className="absolute relative h-[10%] w-[90%] lg:w-[70%] border-solid border-2 border-white text-white p-1 flex items-center space-around"
            >
              <p className="w-[100%]  select-none">&#9655; &#9655; &#9655; &#9655; &#9655;</p>
              <div
                onMouseMove={displayed} 
                className="absolute left-0 h-[100%] w-[8%]"
              ></div>
              <div 
                onMouseMove={hidden}
                className="absolute right-0 h-[100%] w-[8%]"
              ></div>
            </div>
            <motion.div
              id="cursor-button"
              initial={{left: position}}
              animate={{left: position}}
              transition={{duration: 0}}
              ref={draggableRef}
              onMouseDown={mouseDown}
              onMouseUp={mouseUp}
              className="absolute hidden lg:block h-[12%] aspect-square rounded-full bg-white border-solid border-2 border-white"
            ></motion.div>
            <motion.div
              id="touch-button"
              initial={{left: touchPosition}}
              animate={{left: touchPosition}}
              transition={{duration: 0}}
              ref={draggableRef}
              onMouseDown={mouseDown}
              onMouseUp={mouseUp}
              className="absolute lg:hidden h-[12%] aspect-square rounded-full bg-white border-solid border-2 border-white"
            ></motion.div>
          </motion.div>
          {/* <div 
            id="blur"
            ref={blurRef}
            className="fx-blur-cursor absolute hidden -top-5 left-5 z-50"
          ></div> */}
        </motion.div>
        <motion.div 
          initial={{left: hiddenSectionPosition, display: hiddenSectionDisplay}}
          animate={{left: hiddenSectionPosition, display: hiddenSectionDisplay}}
          transition={{duration: 2}}
          className="absolute z-60 flex h-1/2 place-content-center items-center pt-3 md:h-full w-full md:w-1/2 md:p-0">
          <p className="z-20 fx-floating h-1/2 w-full md:w-3/4 text-5xl md:text-5xl text-center font-sans font-white text-stone-100 md:h-fit md:pl-20 md:text-left mt-[5%] md:mt-auto">
            THERE WILL BE A TEXT IN HERE
          </p>
        </motion.div>
      </section>
    </>
  )
}

//border-solid border-2 border-orange-400