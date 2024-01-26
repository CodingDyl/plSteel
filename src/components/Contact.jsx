import React from 'react'
import {motion} from 'framer-motion'
import { styles } from '../styles'
import { staggerContainer, fadeIn } from '../utils/motion'
import MapComponent from './MapComponent'

const Contact = () => {
  return (
    <>
        <motion.div variants={staggerContainer} initial='hidden' whileInView='show' viewport={{ once: false, amount: 0.25}} className={`${styles.innerWidth} ${styles.paddingX} h-auto w-[100%] ${styles.flexCenter} flex-col mx-auto`}>
            <p className={`${styles.sectionSubText} text-center`}>
            | Get In Touch.
            </p>
            <h1 className={`${styles.sectionHeadText} text-center`}>Contact Us.</h1>


        </motion.div>
    </>
  )
}

export default Contact