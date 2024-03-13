import React from 'react'
import { motion } from 'framer-motion'



function CardBooks(props) {
  return (
    <motion.div 
        className='flex items-center space-x-7'
        initial={{
          y:50,
          opacity:0
        }}

        whileInView={{
          y:0,
          opacity:1
        }}

        transition={{
          duration:1,
          delay:`${props.delay}`
        }}
    >
        
        <div className={`p-[17px] rounded-[17px] w-fit ${props.bg}`}>
            <img src={props.img} alt="" />
        </div>

        <div className='text-[17px] lg:text-[22px] space-y-1'>
            <h1 className='text-[#5E6282] font-bold'>{props.h1}</h1>
            <p className='text-[#5E6282]'>{props.p}</p>
        </div>
    </motion.div>
  )
}

export default CardBooks