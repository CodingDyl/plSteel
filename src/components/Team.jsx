import React from 'react'
import {motion} from 'framer-motion'
import { styles } from '../styles'
import { staggerContainer, fadeIn } from '../utils/motion'

const Team = () => {
  return (
    <div id='team' className='z-10 relative h-[100vh] w-[100%] overflow-hidden'>
        <motion.div variants={staggerContainer} initial='hidden' whileInView='show' viewport={{ once: false, amount: 0.25}} className={`${styles.innerWidth} ${styles.paddingX} h-full w-full ${styles.flexStart} items-center mt-20 flex-col mx-auto`}>
            <p className={`${styles.sectionSubText} text-center`}>
            | Who Is Working For You.
            </p>
            <h1 className={`${styles.sectionHeadText} text-center`}>Meet The Team.</h1>

            
        </motion.div>
    </div>
  )
}

export default Team