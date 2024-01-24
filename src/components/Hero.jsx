import React from 'react'
import Navbar from './Navbar'
import { background } from '../assets'

const Hero = () => {
  return (
    <>
      <div className="bg-background h-[100vh] w-[100%] bg-cover bg-no-repeat bg-center bg-center bg-blend-overlay bg-black/25">
        <Navbar />
      </div>
    </>
  )
}

export default Hero