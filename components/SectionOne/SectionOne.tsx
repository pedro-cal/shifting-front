// import Image from "next/image"
// import constructionPhoto from "/constructionPhoto.jpg"
import { Target } from "framer-motion"
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
  
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const blurRef = useRef<HTMLDivElement>(null)
  const startRef = useRef<HTMLDivElement>(null)
  const tierOneRef = useRef<HTMLDivElement>(null)
  const tierTwoRef = useRef<HTMLDivElement>(null)
  const tierThreeRef = useRef<HTMLDivElement>(null)
  const tierFourRef = useRef<HTMLDivElement>(null)
  const tierFiveRef = useRef<HTMLDivElement>(null)
  const tierSixRef = useRef<HTMLDivElement>(null)
  const tierSevenRef = useRef<HTMLDivElement>(null)
  const tierEightRef = useRef<HTMLDivElement>(null)
  const tierNineRef = useRef<HTMLDivElement>(null)
  const endRef = useRef<HTMLDivElement>(null)
  //let ctx = null
  //let touchLocation = null
  

  useEffect(() => {
    const blur = document.getElementById("blur")
    blur?.animate(
      {
        left: `${blurX}px`,
        top: `${blurY}px`,
        translate: '-50% -50%'
      },
      { duration: 500, fill: "forwards" }
    )
  }, [blurX, blurY])

  const tiers = [tierOneRef, tierTwoRef, tierThreeRef, tierFourRef, tierFiveRef, tierSixRef, tierSevenRef, tierEightRef, tierNineRef]
  let c = 0

  const mouseBlur = (e: React.MouseEvent) => {
    setBlurX(e.clientX)
    setBlurY(e.clientY)
  }

  function tracingError(){
    setCount(0)
    if(mouseIsDown){
      setMouseIsDown(false)
      if(startRef.current !== null){
        setError(true)
        startRef.current.style.backgroundColor = 'transparent'
        while(c < 9){
          console.log(c)
          const tierSelected = tiers[c].current
          if(tierSelected !== null){
            tierSelected.style.backgroundColor = 'transparent'
          }
          c++
        }
        window.getSelection()?.removeAllRanges()
        alert('Try Again')
      }
    }
    if(isTouched){
      setIsTouched(false)
      if(startRef.current !== null){
        setError(true)
        startRef.current.style.backgroundColor = 'transparent'
        while(c < 9){
          console.log(c)
          const tierSelected = tiers[c].current
          if(tierSelected !== null){
            tierSelected.style.backgroundColor = 'transparent'
          }
          c++
        }
        window.getSelection()?.removeAllRanges()
        alert('Try Again')
      }
    }
  }

  function activateStart(){
    setError(false)
    if(mouseIsDown && startRef.current){
      startRef.current.style.backgroundColor = 'white'
      setStartIsActive(true)
    }
    if(blurRef.current){
      blurRef.current.style.display = 'flex'
    }
  }
  
  function tracing(e: React.MouseEvent){
    if(mouseIsDown && startIsActive){
      console.log('working')
      setError(false)
      mouseBlur(e)
      const currentElement = document.elementFromPoint(e.clientX, e.clientY)
      const tierID = currentElement?.id
      let tierSelected
      const pattern = /[0-9]/g
      if(tierID){
        if(tierID.match(pattern)){
          tierSelected = tiers[parseInt(tierID)].current
        }else{
          tierSelected = null
        }
      }  
      if(tierSelected){
        tierSelected.style.backgroundColor = 'white'
      }
      setCount(count + 1)
    }
  }

  function activateEnd(){
    
    if(mouseIsDown && endRef.current){
      endRef.current.style.backgroundColor = 'white'
      setEndIsActive(true)
      if(startIsActive && endIsActive){
        alert('Well Done!')
        setMouseIsDown(false)
      }
      if(blurRef.current){
        blurRef.current.style.display = 'none'
      }
    }
  }

  function handleMouseDown() {
    setMouseIsDown(true)
  }


  function touchTracing(e: React.TouchEvent){
    setError(false)
    const touchLocation = e.targetTouches[0]
    if(blurRef.current){
      blurRef.current.style.display = 'flex'
      blurRef.current.style.width = '8%'
      blurRef.current.style.height = '4%'
    }
    setBlurX(touchLocation.pageX)
    setBlurY(touchLocation.pageY)
    const currentElement = document.elementFromPoint(touchLocation.pageX, touchLocation.pageY)
    const tierID = currentElement?.id
    if(tierID === 'error'){
      setError(true)
      if(startRef.current){
        startRef.current.style.backgroundColor = 'transparent'
      }
      if(endRef.current){
        endRef.current.style.backgroundColor = 'transparent'
      }
      while(c < 9){
        console.log(c)
        const tierSelected = tiers[c].current
        if(tierSelected !== null){
          tierSelected.style.backgroundColor = 'transparent'
        }
        c++
      }
      window.getSelection()?.removeAllRanges()
      alert('Try Again')
    }
    if(tierID === 'start' && startRef.current){
      startRef.current.style.backgroundColor = 'white'
      setStartIsActive(true)
    }
    if(tierID === 'end' && endRef.current){
      endRef.current.style.backgroundColor = 'white'
      setEndIsActive(true)
    }
    if(startIsActive && endIsActive){
      alert('Well Done!')
      setIsTouched(false)
      if(blurRef.current){
        blurRef.current.style.display = 'none'
      }
    }
    let tierSelected
    const pattern = /[0-9]/g
    if(tierID){
      if(tierID.match(pattern)){
        tierSelected = tiers[parseInt(tierID)].current
      }else{
        tierSelected = null
      }
    }
    if(tierSelected){
      tierSelected.style.backgroundColor = 'white'
    }
  }

  // function handleTouchEnd(){
  //   if(isTouched && endRef.current){
  //     endRef.current.style.backgroundColor = 'white'
  //     setEndIsActive(true)
  //     if(startIsActive && endIsActive){
  //       alert('Well Done!')
  //       setIsTouched(false)
  //     }
  //   }
  // }

  function stop(){
    setMouseIsDown(false)
    setIsTouched(false)
    //ctx = null
  }

  // const mouseBlur = (e: React.MouseEvent) => {
  //   setBlurX(e.clientX)
  //   setBlurY(e.clientY)
  // }

  // function reposition(e: React.MouseEvent) {
  //   if(canvasRef.current){
  //     setMouseX((e.clientX) - canvasRef.current?.offsetLeft)
  //     setMouseY((e.clientY) - canvasRef.current?.offsetTop)
  //   }
  // }
  
  // function trace(e: React.MouseEvent) {
  //   if(canvasRef.current){
  //     ctx = canvasRef.current.getContext("2d")
  //     // if(blurRef.current){
  //     //   blurRef.current.style.display = 'flex'
  //     // }
  //     if (ctx !== null && mouseIsDown === true){
  //       ctx.beginPath()
  //       ctx.lineWidth = 40
  //       ctx.lineCap = 'round'
  //       ctx.strokeStyle = 'white'
  //       ctx.moveTo(mouseX, mouseY)
  //       console.log(mouseX, mouseY)
  //       reposition(e)
  //       ctx.lineTo(mouseX, mouseY)
  //       ctx.stroke()
  //     }
  //   } 
    
  // }

  

  // function touchBlur(e: React.TouchEvent){
  //   touchLocation = e.targetTouches[0]
  //   setBlurX(touchLocation.pageX)
  //   setBlurY(touchLocation.pageY)
  // }

  // function touchReposition(e: React.TouchEvent) {
  //   touchLocation = e.targetTouches[0]
  //   if(canvasRef.current){
  //     setPageX(touchLocation.pageX - canvasRef.current?.offsetLeft)
  //     setPageY(touchLocation.pageY - canvasRef.current?.offsetTop)
  //   }
  // }

  // function handleTouchStart(e: React.TouchEvent){
  //   setIsTouched(true)
  //   touchReposition(e)
  // }

  // function touchTrace(e: React.TouchEvent) {
  //   touchBlur(e)
  //   if(canvasRef.current){
      
  //     if(blurRef.current){
  //       console.log('Funcionou')
  //       blurRef.current.style.display = 'flex'
  //     }

  //     ctx = canvasRef.current.getContext("2d")
      
  //     if (ctx !== null && isTouched === true){
  //       ctx.beginPath()
  //       ctx.lineWidth = 5
  //       ctx.lineCap = 'round'
  //       ctx.strokeStyle = '#c0392b'
  //       ctx.moveTo(pageX, pageY)
  //       touchReposition(e)
  //       ctx.lineTo(pageX, pageY)
  //       ctx.stroke()
  //     }
  //   } 
    
  // }

  
  

  return (
    <>
      <section
        //onMouseMove={(e) => mouseBlur(e)}
        className="fx-background-change flex h-[100vh] w-[100vw] flex-col md:flex-row overflow-hidden pt-2 md:p-0"
      >
        {/* <div id="blur" className="fx-blur-cursor absolute flex md:-top-5 md:left-5 z-50 aspect-square" /> */}
        <div className="relative z-10 flex h-1/2 place-content-center items-center pt-3 md:h-full md:w-1/2 md:p-0">
          <p className="fx-floating h-1/2 w-full md:w-3/4 text-5xl md:text-5xl text-center font-sans font-black text-stone-100 md:h-fit md:pl-20 md:text-left mt-[5%] md:mt-auto">
            <span className="block md:hidden">What if your</span>
            <span className="hidden md:block">What if</span>
            {/* <br className="hidden md:block"/> */}
            <span className="hidden md:block">your</span>
            <span className="text-sky-500 text-6xl md:text-5xl">intentions</span>
            <br />
            <span className="text-4xl md:text-5xl">could move us?</span>
          </p>
        </div>
        <div className="peer z-10 flex flex-col h-1/2 md:h-full w-full md:w-1/2 place-content-start md:place-content-center items-center overflow-hidden">
          <div onMouseDown={handleMouseDown} onMouseUp={stop} className="relative w-[80%] md:w-[75%] lg:w-[50%] aspect-square flex flex-col content-center place-content-center items-center border-solid border-2 border-white overflow-hidden">
            <p className="absolute top-[5%] z-50  text-white text-center text-lg md:text-[1.5vw] w-2/3">
              Hold the cursor and<br/>fill the symbol.
            </p>
            <div
              id="start"
              onMouseDown={handleMouseDown} 
              onMouseMove={activateStart}
              onTouchMove={touchTracing}
              ref={startRef} 
              className="touch-none skew-x-[-45deg] z-40 absolute top-[30%] right-[36%] w-[12%] h-[5%] border-solid border-t-2 border-0 border-white"
            ></div>
            <div
              id="0"
              onMouseDown={handleMouseDown} 
              onMouseEnter={tracing}
              onTouchMove={touchTracing} 
              ref={tierOneRef} 
              className="touch-none skew-x-[-45deg] z-40 absolute top-[35%] right-[41%] w-[12%] h-[5%]"
            ></div>
            <div
              id="1"
              onMouseDown={handleMouseDown} 
              onMouseEnter={tracing}
              onTouchMove={touchTracing} 
              ref={tierTwoRef} 
              className="touch-none skew-x-[-45deg] z-40 absolute top-[40%] right-[46%] w-[12%] h-[5%]"
            ></div>
            <div
              id="2"
              onMouseDown={handleMouseDown} 
              onMouseEnter={tracing}
              onTouchMove={touchTracing} 
              ref={tierThreeRef} 
              className="touch-none skew-x-[-45deg] z-40 absolute top-[45%] right-[52%] w-[12%] h-[7.5%]"
            ></div>
            <div
              id="3"
              onMouseDown={handleMouseDown} 
              onMouseEnter={tracing}
              onTouchMove={touchTracing} 
              ref={tierFourRef} 
              className="touch-none skew-x-[-45deg] z-40 absolute top-[52%] right-[60%] w-[12%] h-[8%]"
            ></div>
            <div
              id="4"
              onMouseDown={handleMouseDown} 
              onMouseEnter={tracing}
              onTouchMove={touchTracing} 
              ref={tierFiveRef} 
              className="touch-none skew-x-[-45deg] z-40 absolute top-[52%] right-[47%] w-[13.5%] h-[8%]"
            ></div>
            <div
              id="5"
              onMouseDown={handleMouseDown} 
              onMouseEnter={tracing}
              onTouchMove={touchTracing} 
              ref={tierSixRef} 
              className="touch-none skew-x-[-45deg] z-40 absolute top-[52%] right-[34%] w-[13.5%] h-[8%]"
            ></div>
            <div
              id="6"
              onMouseDown={handleMouseDown} 
              onMouseEnter={tracing}
              onTouchMove={touchTracing} 
              ref={tierSevenRef} 
              className="touch-none skew-x-[-45deg] z-40 absolute top-[60%] right-[42%] w-[12%] h-[5%]"
            ></div>
            <div
              id="7"
              onMouseDown={handleMouseDown} 
              onMouseEnter={tracing}
              onTouchMove={touchTracing} 
              ref={tierEightRef} 
              className="touch-none skew-x-[-45deg] z-40 absolute top-[65%] right-[47%] w-[12%] h-[5%]"
            ></div>
            <div
              id="8"
              onMouseDown={handleMouseDown} 
              onMouseEnter={tracing}
              onTouchMove={touchTracing} 
              ref={tierNineRef} 
              className="touch-none skew-x-[-45deg] z-40 absolute top-[70%] right-[52%] w-[12%] h-[5%]"
            ></div>
            <div
              id="end" 
              ref={endRef} 
              onMouseMove={activateEnd}
              onTouchMove={touchTracing} 
              className="touch-none skew-x-[-45deg] z-40 absolute top-[75%] right-[56.5%] w-[13%] h-[5%] border-solid border-2 border-t-0 border-white"
            ></div>
            <div className="absolute z-10 w-full h-full bg-stone-800 border-solid border-[1px] border-white/20"></div>
            <div
              id="error"
              onMouseEnter={tracingError}
              onTouchMove={tracingError}
              className="absolute z-40 left-0 w-[25%] h-full bg-stone-800 "
            ></div>
            <div
              id="error"
              onMouseEnter={tracingError}
              onTouchMove={touchTracing}
              className="absolute z-40 right-0 w-[30%] h-full bg-stone-800 "
            ></div>
            {/* <div 
              className="absolute z-40 top-[30%] right-[30%] w-[20%] border-solid border-2 border-b-0 border-white"
            ></div> */}
            <div
              id="error"
              onMouseEnter={tracingError}
              onTouchMove={touchTracing}
              className="absolute top-[30%] right-[60%] z-40 h-[30%] w-[30%] bg-stone-800 skew-x-[-45deg] border-solid border-r-2 border-white"
            ></div>
            <div
              id="error"
              onMouseEnter={tracingError}
              onTouchMove={touchTracing}
              className="absolute top-[30%] right-[20%] z-40 h-[22.5%] w-[25%] bg-stone-800 skew-x-[-45deg] border-solid border-l-2 border-b-2 border-white"
            ></div>
            <div
              id="error"
              onMouseEnter={tracingError}
              onTouchMove={touchTracing}
              className="absolute top-[60%] right-[61%] z-40 h-[20%] w-[25%] bg-stone-800 skew-x-[-45deg] border-solid border-r-2 border-t-2 border-white"
            ></div>
            <div
              id="error"
              onMouseEnter={tracingError}
              onTouchMove={touchTracing}
              className="absolute top-[52%] right-[15%] z-40 h-[27.5%] w-[30%] bg-stone-800 skew-x-[-45deg] border-solid border-l-2 border-white"
            ></div>
          {/* <div onMouseDown={handleMouseDown}  onMouseUp={stop} className="mt-[0%] flex flex-col content-center place-content-center items-center border-solid border-2 border-white">
            <div className="absolute top-[25%] z-10 w-[40%] h-[60%] bg-stone-800 border-solid border-[1px] border-white/20"></div>
            <div
              onMouseMove={tracingError}
              className="absolute z-40 top-[35%] right-[30%] w-[13%] h-[50%] bg-stone-800 "
            ></div>
            <div
              onMouseMove={tracingError}
              className="absolute z-40 top-[35%] right-[5%] w-[9.5%] h-[50%] bg-stone-800 "
            ></div>
            <div 
              className="skew-x-[-45deg] z-40 absolute top-[40.5%] right-[16.4%] w-[4%] border-solid border-2 border-b-0 border-white"
            ></div>
            <div
              onMouseMove={tracingError}
              className="absolute top-[40.5%] right-[25%] z-40 h-[19.7%] w-[10%] bg-stone-800 skew-x-[-45deg] border-solid border-r-2 border-white"
            ></div>
            <div
              onMouseMove={tracingError}
              className="absolute top-[40.5%] right-[11%] z-40 h-[15%] w-[9%] bg-stone-800 skew-x-[-45deg] border-solid border-l-2 border-b-2 border-white"
            ></div>
            <div
              onMouseMove={tracingError}
              className="absolute top-[60%] right-[25%] z-40 h-[16.8%] w-[9%] bg-stone-800 skew-x-[-45deg] border-solid border-r-2 border-t-2 border-white"
            ></div>
            <div
              onMouseMove={tracingError}
              className="absolute top-[55.2%] right-[10%] z-40 h-[21.5%] w-[10%] bg-stone-800 skew-x-[-45deg] border-solid border-l-2 border-white"
            ></div>
            <canvas 
              id="canvas"
              ref={canvasRef}
              onMouseMove={trace}
              onPointerMove={mouseBlur}
              onMouseDown={handleMouseDown}
              //onMouseUp={stop}
              onTouchStart={handleTouchStart}
              onTouchMove={touchTrace}
              onTouchEnd={stop}
              className="absolute top-[45%] peer z-30 mt-2 touch-none bg-black overflow-hidden border-solid border-2 border-transparent"
            ></canvas> */}
          
          </div>
          <div 
            id="blur"
            ref={blurRef}
            className="fx-blur-cursor absolute hidden -top-5 left-5 z-50"
          ></div>
        </div>
      </section>
    </>
  )
}

//border-solid border-2 border-orange-400