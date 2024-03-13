import { motion } from 'framer-motion'
import React from 'react'

function Title(props) {
  return (
    <motion.div 
      className={`space-y-5 ${props.text}`}
      initial={{
        y:40,
        opacity:0
      }}
      whileInView={{
        y:0,
        opacity:1
      }}
      transition={{
        duration:1,
        delay:0.2
      }}
    >
        <h1 className='text-[#5E6282] text-[18px]'>{props.h1}
        </h1>
        <h2 className='text-[#14183E] text-[28px] lg:text-[50px]'>{props.h2}</h2>
    </motion.div>
  )
}

export default Title