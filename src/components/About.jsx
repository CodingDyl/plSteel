import React from 'react'
import { styles } from '../styles'
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from '../utils/motion';
import { downArrow } from '../assets';

const About = () => {
  return (
    <section id='about' className='z-10 relative h-[100vh] w-[100%] overflow-hidden'>
      <motion.div variants={staggerContainer} initial='hidden' whileInView='show' viewport={{ once: false, amount: 0.25}} className={`${styles.innerWidth} ${styles.paddingX} h-full w-full ${styles.flexCenter} flex-col mx-auto`}>
        <p className={`${styles.sectionSubText} text-center`}>
          | Introduction.
        </p>
        <h1 className={`${styles.sectionHeadText} text-center`}>About Us</h1>

        <div className='flex flex-col gap-2'>
        <motion.p variants={fadeIn('up', 'tween', 0.2, 1)} className="mt-8 font-normal md:text-[25px] text-[15px] text-center text-secondary-white">
          Since our establishment in 1993, <span className="font-extrabold text-white">PL Steel</span> Services has thrived on a steadfast commitment to Customer Service. We go beyond mere transactions; we seek to understand and fulfill <span className="font-extrabold text-white">YOUR</span> needs as our valued customer.
        </motion.p>
        <motion.p variants={fadeIn('up', 'tween', 0.2, 1)} className="mt-8 font-normal sm:text-[25px] text-[15px] text-center text-secondary-white">
        We are not just a steel company; we are your <span className="font-extrabold text-white">strategic partner in success</span>. PL Steel Services is where your vision meets our expertise, creating a synergy that propels your projects to new heights. <span className="font-extrabold text-white">Experience the difference with us</span> – where customer service is not just a promise but the cornerstone of our identity.
        </motion.p>
        </div>
        

        <motion.img variants={fadeIn('up', 'tween', 0.3, 1)}  src={downArrow} alt="down arrow" className="w-[18px] h-[28px] object-contain mt-[28px]"/>
      </motion.div>
    </section>
  )
}

export default About