import React from 'react'
import { motion } from "framer-motion";

import Container from '../components/Container'
import CustomBtn from '../components/CustomBtn'

import Bg_hero from '../assets/bg_hero.png'
import Bg_color from '../assets/bg_color.png'
import Play from '../assets/play.svg'

function HeroTop() {
  return (
    <Container styles=''>
      <div className='mt-[90px] flex items-center justify-between'>
        {/* div messages */}
        <div className='text-center lg:text-left'>
          <div>
            <motion.h1 
              initial={{
                y:50,
                opacity:0
              }}

              animate={{
                y:0,
                opacity:1
              }}

              transition={{
                duration:0.7,
                delay:0.2,
                ease:'easeInOut'
              }}

              className='text-[#DF6951] text-[18px] min-[534px]:text-[20px] font-bold pop_bold'>Best Destinations<br className='min-[534px]:hidden'
            /> around the world </motion.h1>
            <motion.p 
              initial={{
                y:60,
                opacity:0
              }}

              animate={{
                y:0,
                opacity:1
              }}

              transition={{
                duration:0.9,
                delay:0.5,
                ease:'easeInOut'
              }}

              className='text-[#181E4B] text-[40px] min-[534px]:text-[55px] lg:text-[84px] font-bold my-[14px] volkhov'>Travel, enjoy<br className='hidden lg:flex'
            />and live a new<br className='hidden lg:flex'/>and full life</motion.p>
          </div>

          <motion.div
            initial={{
              y:60,
              opacity:0
            }}

            animate={{
              y:0,
              opacity:1
            }}

            transition={{
              duration:0.9,
              delay:0.7,
              ease:'easeInOut'
            }}
          >
            <p className='text-[#5E6282] text-[16px]'>Built Wicket longer admire do barton vanity itself do in it.<br className='hidden min-[534px]:flex'/>Preferred to sportsmen it engrossed listening. Park gate<br className='hidden min-[534px]:flex'/>sell they west hard for the.</p>

            <div className='mt-[35px] min-[534px]:flex items-center min-[534px]:space-x-3 w-fit mx-auto lg:w-auto'>
              <CustomBtn bg_color='bg-[#F2994A]' title='Find out more'/>
              <button className='flex items-start translate-y-[18px] -translate-x-4 min-[534px]:translate-x-0'>
                <img src={Play} alt="" />
                <p className='text-[#686D77] text-[17px] translate-y-[27px]'>Play Demo</p>
              </button>
            </div>
          </motion.div>
        </div>

        {/* div images */}
        <div className='hidden lg:flex'>
          <motion.div
            initial={{
              y:100,
              opacity:0
            }}
            animate={{
              y:0,
              opacity:1
            }}
            transition={{
              duration:0.7,
              delay:0.2,
              ease:'easeInOut'
            }}
          >
            <img src={Bg_hero} alt="" />
          </motion.div>

          <div className='absolute top-0 right-0 -z-10'>
            <img src={Bg_color} alt="" className='w-[950px] h-[872.58px]'/>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default HeroTop