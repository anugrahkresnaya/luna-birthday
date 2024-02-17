'use client'
import Image from "next/image";
import hbdBanner from "../../public/hbd_banner_cropped.png"
import cake from "../../public/cake.png"
import balloon from '../../public/balloons.png'
import kaze11 from '../../public/png_dc_kaze-11.png'
import { AnimatePresence, motion } from 'framer-motion'
import BirthdayMessages from "@/components/birthdayMessages";
import { useState } from "react";
import music from '@/music/music.mp3'
import Realistic from 'react-canvas-confetti/dist/presets/realistic'
import { TConductorInstance } from "react-canvas-confetti/dist/types";

export default function Home() {
  const [step, setStep] = useState(0)
  const [conductor, setConductor] = useState<TConductorInstance>();

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);

    // Start playing the music when transitioning to the "Play Music" step
    if (step === 2) {
      const audio = new Audio(music);
      audio.loop = true
      audio.play();
    }
  }

  const onOnce = () => {
    conductor?.shoot();
  };

  const onInit = ({ conductor }: { conductor: TConductorInstance }) => {
    setConductor(conductor);
  };

  
  const renderContent = () => {
    switch (step) {
      case 0:
        return (
          <motion.div 
            className="flex min-h-screen flex-col items-center justify-center bg-black"
          >
            <button onClick={handleNext} className="bg-purple-400 p-4 rounded-xl text-white">Turn on light</button>
          </motion.div>
        )
      case 1:
        return (
          <motion.div 
            className="flex min-h-screen flex-col items-center justify-center"
            style={{ backgroundColor: '#000'}}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, backgroundColor: '#c87fff' }}
            transition={{ duration: 2 }}
          >
            <div>
              <motion.button 
                onClick={handleNext}
                className="bg-purple-900 p-4 rounded-xl text-white"
                style={{ backgroundColor: '#c87fff'}}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, backgroundColor: '#581C87' }}
                transition={{ duration: 1 }}
              >
                Decorate
              </motion.button>
            </div>
          </motion.div>
        );
      case 2:
        return (
          <div className="relative flex min-h-screen flex-col items-center justify-between bg-[#c87fff] z-0 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                initial={{ opacity: 0, x: -500 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}
                className="z-20"
              >
                <Image src={hbdBanner} width={600} height={600} alt="hbd banner" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 500 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
                className="absolute z-10 bottom-0 left-0 overflow-hidden"
              >
                <Image src={balloon} width={500} height={500} alt='balloon' />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 500 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
                className="absolute z-10 bottom-0 right-0 overflow-hidden"
              >
                <Image src={balloon} width={500} height={500} alt='balloon' />
              </motion.div>
              <div>
                <button 
                  onClick={handleNext}
                  className="bg-purple-900 p-4 rounded-xl text-white mb-4"
                >
                  Play Music
                </button>
              </div>
            </AnimatePresence>
          </div>
        );
      case 3:
        return (
          <div className="flex min-h-screen flex-col items-center justify-between bg-[#c87fff]">
            <div>
              <Image src={hbdBanner} width={600} height={600} alt="hbd banner" />
            </div>
            <div className="absolute z-10 bottom-0 left-0 overflow-hidden">
              <Image src={balloon} width={500} height={500} alt='balloon' />
            </div>
            <div className="absolute z-10 bottom-0 right-0 overflow-hidden">
              <Image src={balloon} width={500} height={500} alt='balloon' />
            </div>
            <div>
              <button 
                onClick={handleNext}
                className="bg-purple-900 p-4 rounded-xl text-white mb-4"
              >
                Put the cake
              </button>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="flex min-h-screen flex-col items-center justify-between bg-[#c87fff]">
            <div>
              <Image src={hbdBanner} width={600} height={600} alt="hbd banner" />
            </div>
            <motion.div
              initial={{ opacity: 0, x: 500 }}
              animate={{ opacity: 1, x: 125 }}
              transition={{ duration: 2 }}
              className="flex flex-row items-end"
            >
              <Image src={cake} width={400} height={400} alt="birthday cake" />
              <motion.div
                initial={{ opacity: 1, x: 0 }}
                animate={{ opacity: 0, x: 0 }}
                transition={{ duration: 6, delay: 3 }}
              >
                <motion.div
                  initial={{ opacity: 1, x: 0 }}
                  animate={{ opacity: 1, x: 400 }}  // Adjust the values as needed
                  transition={{ duration: 2, delay: 3 }}  // Adjust the delay as needed
                >
                  <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ duration: 2, delay: 3 }}  // Adjust the delay as needed
                  >
                    <Image src={kaze11} width={250} height={250} alt='kaze_11' />
                  </motion.div>
                  <h1 className="text-white text-center">misi naro kue</h1>
                </motion.div>
              </motion.div>
            </motion.div>
            <div className="absolute z-10 bottom-0 left-0 overflow-hidden">
              <Image src={balloon} width={500} height={500} alt='balloon' />
            </div>
            <div className="absolute z-10 bottom-0 right-0 overflow-hidden">
              <Image src={balloon} width={500} height={500} alt='balloon' />
            </div>
            <div>
              <button 
                onClick={handleNext}
                className="bg-purple-900 p-4 rounded-xl text-white mb-4"
              >
                A message for you
              </button>
            </div>
          </div>
        )
      case 5:
        return (
          <div className="flex min-h-screen flex-col items-center justify-between bg-[#c87fff]">
            <div>
              <Image src={hbdBanner} width={600} height={600} alt="hbd banner" />
            </div>
            <div>
              <BirthdayMessages />
              <Realistic onInit={onInit} />
            </div>
            <div className="mb-4">
              <Image src={cake} width={400} height={400} alt="birthday cake" />
            </div>
            <div className="absolute z-10 bottom-0 left-0 overflow-hidden">
              <Image src={balloon} width={500} height={500} alt='balloon' />
            </div>
            <div className="absolute z-10 bottom-0 right-0 overflow-hidden">
              <Image src={balloon} width={500} height={500} alt='balloon' />
            </div>
            <div>
              <button 
                onClick={onOnce}
                className="bg-purple-900 p-4 rounded-xl text-white mb-4"
              >
                Shoot Confetti
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  }
  return <main>{renderContent()}</main>;
}
