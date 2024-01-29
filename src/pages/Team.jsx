import React, { useState } from 'react'
import {motion} from 'framer-motion'
import { styles } from '../styles'
import { staggerContainer, fadeIn } from '../utils/motion'
import { exploreTeams } from '../constants'
import TeamCard from '../components/TeamCard'

const Team = () => {
  const [active, setActive] = useState('team-2');
  return (
    <div id='team' className='z-10 relative h-[100vh] w-[100%] overflow-hidden mb-20'>
        <motion.div variants={staggerContainer} initial='hidden' whileInView='show' viewport={{ once: false, amount: 0.25}} className={`${styles.innerWidth} ${styles.paddingX} h-full w-full ${styles.flexStart} items-center mt-20 flex-col mx-auto`}>
            <p className={`${styles.sectionSubText} text-center`}>
            | Who Is Working For You.
            </p>
            <h1 className={`${styles.sectionHeadText} text-center`}>Meet The Team.</h1>

            <motion.div
      variants={staggerContainer} 
      initial='hidden' 
      whileInView="show" 
      viewport={{ once: false, amount: 0.25}} 
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70px] gap-5">
        {exploreTeams.map((team, index) => (
          <TeamCard key={team.id} index={index} active={active} handleClick={setActive} {...team} />
        ))}
      </div>
    </motion.div>

            
        </motion.div>
    </div>
  )
}

export default Team