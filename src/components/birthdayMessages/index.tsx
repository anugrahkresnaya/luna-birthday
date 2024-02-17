'use client'
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"
import Image from "next/image"
import Hi from '../../../public/kaze_hi.png'
import Realistic from "react-canvas-confetti/dist/presets/realistic"
import { TConductorInstance } from "react-canvas-confetti/dist/types"

const BirthdayMessages: React.FC = () => {
  const [conductor, setConductor] = useState<TConductorInstance>();
  const messages = [
    'Hellooooo, Kak Lunaaa!!!',
    'Todayyyy...',
    'Is your special day',
    "That's why...",
    'As your lil bro',
    'I made all this for you kak',
    'As a present to you',
    'And...',
    'Thanks for everything kak',
    'everything that you have done',
    'is really makes me happy',
    'I wish you all the best kak',
    'May your life be at ease',
    'May all your wishes come true',
    'And...',
    'I hope this year will be better for you',
    'And i hope...',
    'the happiness is always with you',
    'Lastly...',
    'Happy Birthday, kak lunaaa!!! 🎉',
  ]

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentMessageIndex === messages.length - 1) {
        clearInterval(interval);
      } else {
        setCurrentMessageIndex((prevIndex) => prevIndex + 1);
      }
    }, 3500)

    return () => clearInterval(interval)
  }, [currentMessageIndex, messages.length])

  useEffect(() => {
    // Check if the current message index is 1 and trigger confetti shooting
    if (currentMessageIndex === 19) {
      conductor?.shoot();
    }
  }, [currentMessageIndex, conductor]);


  const onInit = ({ conductor }: { conductor: TConductorInstance }) => {
    setConductor(conductor);
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentMessageIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="text-[45px] text-white"
      >
        <div className="flex items-center">
          <h1>{messages[currentMessageIndex]}</h1>
          {currentMessageIndex === 0 && <Image src={Hi} width={100} height={100} alt="kaze hi" />}
        </div>
      </motion.div>
      <Realistic onInit={onInit} />
    </AnimatePresence>
  )
}

export default BirthdayMessages