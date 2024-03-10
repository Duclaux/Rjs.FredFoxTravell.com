import { motion } from 'framer-motion';
import React from 'react'
import { IoIosSend } from "react-icons/io";

function CardSleling(props) {
  return (
    <motion.div 
        className='text-[#5E6282] mx-auto w-fit rounded-[24px] relative shadow-lg'
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
        <div className='max-w-[314px] h-auto max-h-[457px]'>
            <img src={props.img} alt="" className='h-[457px] object-cover rounded-[24px]'/>
        </div>

        <div className='absolute bottom-0 bg-white w-full px-[20px] pt-[27px] pb-[35px] rounded-b-[24px]'>
            <div className='flex items-center justify-between'>
                <h1>{props.h1}</h1>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                <h2>{props.h2}</h2>
            </div>

            <div className='flex items-center space-x-3 mt-[24px]'>
                <IoIosSend size={15} color='black'/>
                <h3>{props.h3}</h3>
            </div>
        </div>
    </motion.div>
  )
}

export default CardSleling