import React from 'react'
import Navbar from './Navbar'
import { styles } from '../styles'
import animationData from '../assets/hero_animation.json'
import Lottie from 'lottie-react'

const Hero = () => {
  return (
    <>
      <div className="bg-background h-[100vh] w-[100%] bg-cover bg-no-repeat bg-center bg-center bg-blend-overlay bg-black/35">
        <Navbar />
        <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl flex flex-col justify-center md:flex-row mx-auto items-center md:justify-between gap-5`}>
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>CHANGING THE WAY WE DO STEEL</h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>Since 1993.</p>
          </div>

          <Lottie animationData={animationData} />
        </div>
      </div>
    </>
  )
}

export default Hero