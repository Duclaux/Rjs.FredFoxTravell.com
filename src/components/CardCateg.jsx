import React from 'react'
import { motion } from 'framer-motion'


function CardCateg(props) {
  return (
    <motion.div 
        className='relative mx-auto w-fit'
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
        <div className={`${props.style} text-center px-[42px] pb-[45px] w-fit`}>
            <img src={props.img} alt="" className='mx-auto'/>

            <div>
                <h1 className='text-[#1E1D4C] text-[20px]'>{props.h1}</h1>
                <p className='text-[#5E6282] text-[16px]'>{props.p}</p>
            </div>
        </div>

        <img src={props.sec_img} alt="" className='absolute bottom-[-20px] left-[-30px] -z-10'/>
    </motion.div>
  )
}

export default CardCateg