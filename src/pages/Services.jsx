import React from 'react'

import { motion } from 'framer-motion';
import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';
import { TypingText, TitleText } from '../components/CustomTexts';
import {IconCheck} from "@tabler/icons-react";
import { sector1, sector2 } from '../constants';
import { SimpleGrid } from '@mantine/core';

const Services = () => {

  const Services1 = ({title}) => (
    <div className="flex gap-4 align-center items-center mb-2 px-6 py-4 bg-[#25618b]/40 hover:bg-[#25618b]/80 text-white rounded-full border-2 border-white cursor-pointer">
        <div className="flex justify-center items-center border-solid border-2 align-center rounded-full px-2 py-2 bg-[rgba(0, 0, 0, 0.5)]">
            <IconCheck />
        </div>
        <h3 className='text-white text-[15px] md:text-[20px] font-bold text-center'>
            {title}
        </h3>
    </div>
);
const Services2 = ({title}) => (
    <div className="flex gap-4 align-center items-center mb-2 px-6 py-4 bg-[#25618b]/40 hover:bg-[#25618b]/80 text-white rounded-full border-2 border-white cursor-pointer">
        <div className="flex justify-center items-center border-solid border-2 align-center rounded-full px-2 py-2 bg-transparent">
            <IconCheck />
        </div>
        <h3 className='text-white text-[15px] md:text-[20px] font-bold text-center'>
            {title}
        </h3>
    </div>
    
);

  return (
    <section className={`${styles.paddings}`} id='services'>
        <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
       <TypingText title="| What We Offer." textStyles="text-center" />
        <TitleText
          title={<>Our Services.</>}
          textStyles="text-center"
        /> 

        <div className={`${styles.paddingX} ${styles.flexCenter} `}>
        <SimpleGrid cols={{ base:1, xs:1, sm:1, md:2, lg:2 }} verticalSpacing="xl" className="pt-10">
            <div className="flex flex-col justify-center align-left">
            {sector1.map((sector1, index) => (
              <Services1 key={sector1.title} index={index} {...sector1} />
            ))}
            </div>
            <div className="flex flex-col justify-center align-left">
                {sector2.map((sector2, index) => (
                    <Services2 key={sector2.title} index={index} {...sector2} />
                ))}
            </div>
        </SimpleGrid>
        </div>
        </motion.div>

    </section>
  )
}

export default Services