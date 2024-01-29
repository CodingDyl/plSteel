import React, { useRef, useState } from 'react'
import {motion} from 'framer-motion'
import { styles } from '../styles'
import { staggerContainer, fadeIn } from '../utils/motion'
import EmployeeInfo from '../components/EmployeeInfo'
import { contactPeople } from '../constants'

import { Avatar, Text, Group } from '@mantine/core';
import { IconPhoneCall, IconAt } from '@tabler/icons-react';

const Contact = () => {
    const EmployeeCard = ({ name, cell, email, position }) => (
        <Group wrap="nowrap" className='bg-[#25618b]/40 border-solid border-white-100 w-[325px] border-2 p-4 rounded-xl'>
        <Avatar
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
          size={94}
          radius="md"
        />
        <div>
          <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
            {position}
          </Text>

          <Text fz="md" fw={500} >
            {name}
          </Text>

          <Group wrap="nowrap" gap={10} mt={3}>
            <IconAt stroke={1.5} size="1rem" />
            <Text fz="xs" c="dimmed">
              {email}
            </Text>
          </Group>

          <Group wrap="nowrap" gap={10} mt={5}>
            <IconPhoneCall stroke={1.5} size="1rem" />
            <Text fz="xs" c="dimmed">
              {cell}
            </Text>
          </Group>
        </div>
      </Group>
    )
  
  return (
    <>
        <motion.div variants={staggerContainer} initial='hidden' whileInView='show' viewport={{ once: false, amount: 0.25}} className={`${styles.innerWidth} ${styles.paddingX} h-auto w-[100%] ${styles.flexCenter} flex-col mx-auto`}>
            <p className={`${styles.sectionSubText} text-center`}>
            | Get In Touch.
            </p>
            <h1 className={`${styles.sectionHeadText} text-center`}>Contact Us.</h1>

            {/* Employee View */}
            <div className='flex flex-col gap-4 md:gap-0 md:flex-row w-[100%] justify-center md:justify-between items-center'>
                {contactPeople.map((contact) => (
                    <EmployeeCard key={contact.name} {...contact}/>
                ))}
            </div>

        

        </motion.div>
    </>
  )
}

export default Contact