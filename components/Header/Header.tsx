// import Image from "next/image"
// import logoBeta from "/logoBeta.jpg"
import { motion } from 'framer-motion'

export default function Header() {
  return (
    <>
      <header className="absolute left-0 top-0 z-20 flex flex-row h-[10vh] w-full bg-none p-3 px-4 lg:h-[10vh]">
        {/* <div className="absolute -top-5 -left-5 z-20 flex w-[110vw] h-[20vh] flex-col blur bg-stone-300 opacity-10 p-3 px-8 sm:flex-row lg:h-[10vh]" /> */}
        <button className="peer/hamburguer z-40 p-3 md:hidden flex flex-col place-content-evenly bg-transparent focus:bg-stone-100 rounded-full">
          <span className="block w-5 h-0.5 bg-stone-50"></span>
          <span className="block w-5 h-0.5 bg-stone-50"></span>
          <span className="block w-5 h-0.5 bg-stone-50"></span>
        </button>
        <motion.button 
          initial={{placeContent: 'space-evenly', alignItems: 'center'}}
          whileInView={{placeContent: 'center', alignItems: 'center'}}
          transition={{duration: 0.2}}
          className="absolute h-[6vh] w-[6vh] hidden peer-focus/hamburguer:flex z-50 md:hidden flex-col bg-transparent rounded-full"
        >
          <motion.span 
            initial={{backgroundColor: 'white', transform: 'rotate(0deg)'}}
            whileInView={{position: 'absolute', backgroundColor: '#1e293b', transform: 'rotate(45deg)'}}
            transition={{duration: 0.2}}
            className="block w-5 h-0.5 bg-stone-800"></motion.span>
          <motion.span 
            initial={{backgroundColor: 'white', transform: 'rotate(0deg)'}}
            whileInView={{position: 'absolute', backgroundColor: '#1e293b', transform: 'rotate(-45deg)'}}
            transition={{duration: 0.2}}
            className="block w-5 h-0.5 bg-stone-800"></motion.span>
          <motion.span 
            initial={{backgroundColor: 'white', transform: 'rotate(0deg)'}}
            whileInView={{position: 'absolute', backgroundColor: '#1e293b', transform: 'rotate(45deg)'}}
            transition={{duration: 0.2}}
            className="block w-5 h-0.5 bg-stone-800"></motion.span>
        </motion.button>
        <motion.div 
          initial={{width: 0, height: '100vh'}}
          whileInView={{width: '90vw', height: '100vh'}}
          exit={{width: 0, height: 0}}
          transition={{duration: 0.2}}
          className="absolute shadow left-0 top-0 pt-12 absolute hidden peer-focus/hamburguer:flex flex-col z-30 bg-stone-100 items-start"
        >
          <motion.button 
            initial={{color: 'transparent', width: 0, height: '10%'}}
            whileInView={{color: '#1c1917', width: '100%', height: '10%'}}
            transition={{delay: 0.2, duration: 0.2}}
            className="flex w-full pl-4 items-center font-sans text-xl text-stone-500"
          >
            Portfolio
          </motion.button>
          <motion.button 
            initial={{color: 'transparent', width: 0, height: '10%'}}
            whileInView={{color: '#1c1917', width: '100%', height: '10%'}}
            transition={{delay: 0.2, duration: 0.2}}
            className="flex w-full pl-4 items-center font-sans text-xl text-stone-500"
          >
            About
          </motion.button>
          <motion.button 
            initial={{color: 'transparent', width: 0, height: '10%'}}
            whileInView={{color: '#1c1917', width: '100%', height: '10%'}}
            transition={{delay: 0.2, duration: 0.2}}
            className="flex w-full pl-4 items-center font-sans text-xl text-stone-500"
          >
            Contact
          </motion.button>
        </motion.div>
        <div className="z-30 w-full md:w-1/2 flex justify-center md:justify-start">
          <button className="flex h-full flex-row place-content-center items-center">
            {/* <Image className="aspect-square h-full w-full" src={logoBeta} alt="Logo of Shifting" /> */}
            <p className="pl-2 font-black text-stone-50 text-xl md:text-2xl lg:text-3xl 2xl:pl-4">Shifting</p>
          </button>
        </div>
        <div className="hidden md:flex z-30 my-2 h-full place-content-center items-center space-x-4 md:my-0 md:mr-2 md:w-1/2 md:place-content-end ">
          <button className="flex h-4/5 place-content-center items-center p-2 font-sans text-xl text-stone-50 hover:text-sky-500">
            Portfolio
          </button>
          <button className="flex h-4/5 place-content-center items-center p-2 font-sans text-xl text-stone-50 hover:text-sky-500">
            About
          </button>
          <button className="flex h-4/5 place-content-center items-center p-2 font-sans text-xl text-stone-50 hover:text-sky-500">
            Contact
          </button>
        </div>
      </header>
    </>
  )
}
