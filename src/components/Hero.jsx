import React from 'react'
import Navbar from './Navbar'
import { styles } from '../styles'
import animationData from '../assets/plsteel.json'
import Lottie from 'lottie-react'

const Hero = () => {
  return (
    <>
        <div className={`${styles.paddingX} h-full w-full flex flex-col justify-center items-center text-center gap-1 `}>
          <div>
            <p className={`${styles.heroSubText} text-white-100`}>Since 1993.</p>
            <h1 className={`${styles.heroHeadText} text-white`}>CHANGING THE WAY WE DO STEEL</h1>
          </div>
        </div>
    </>
  )
}

export default Hero