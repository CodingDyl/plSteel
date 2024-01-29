import React, { useState } from 'react'
import {motion} from 'framer-motion'
import { styles } from '../styles'
import { staggerContainer, fadeIn } from '../utils/motion'
import { exploreTeams } from '../constants'
import TeamCard from '../components/TeamCard'
import { TypingText, TitleText } from '../components/CustomTexts'

const Team = () => {
  const [active, setActive] = useState('team-2');
  return (
    <section className={`${styles.paddings}`} id="team">
        <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
            <TypingText title="| Who Is Working For You." textStyles="text-center" />
        <TitleText
          title={<>Meet the Team.</>}
          textStyles="text-center"
        />

            <motion.div
      variants={staggerContainer} 
      initial='hidden' 
      whileInView="show" 
      viewport={{ once: false, amount: 0.25}} 
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
        {exploreTeams.map((team, index) => (
          <TeamCard key={team.id} index={index} active={active} handleClick={setActive} {...team} />
        ))}
      </div>
    </motion.div>

            
        </motion.div>
    </section>
  )
}

export default Team