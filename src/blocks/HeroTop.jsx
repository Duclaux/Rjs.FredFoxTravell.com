import React from 'react'

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
            <h1 className='text-[#DF6951] text-[18px] min-[534px]:text-[20px] font-bold pop_bold'>Best Destinations around the world</h1>
            <p className='text-[#181E4B] text-[40px] min-[534px]:text-[55px] lg:text-[84px] font-bold my-[14px] volkhov'>Travel, enjoy<br className='hidden lg:flex'/>and live a new<br className='hidden lg:flex'/>and full life</p>
          </div>

          <div>
            <p className='text-[#5E6282] text-[16px]'>Built Wicket longer admire do barton vanity itself do in it.<br className='hidden min-[534px]:flex'/>Preferred to sportsmen it engrossed listening. Park gate<br className='hidden min-[534px]:flex'/>sell they west hard for the.</p>

            <div className='mt-[35px] min-[534px]:flex items-center min-[534px]:space-x-3 w-fit mx-auto lg:w-auto'>
              <CustomBtn bg_color='bg-[#F2994A]' title='Find out more'/>
              <button className='flex items-start translate-y-[18px] -translate-x-4 min-[534px]:translate-x-0'>
                <img src={Play} alt="" />
                <p className='text-[#686D77] text-[17px] translate-y-[27px]'>Play Demo</p>
              </button>
            </div>
          </div>
        </div>

        {/* div images */}
        <div className='hidden lg:flex'>
          <div>
            <img src={Bg_hero} alt="" />
          </div>

          <div className='absolute top-0 right-0 -z-10'>
            <img src={Bg_color} alt="" className='w-[950px] h-[872.58px]'/>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default HeroTop