import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { BsSendFill } from "react-icons/bs";


import Container from '../components/Container'
import Cercle1 from '../assets/cercle1.svg'
import Cercle2 from '../assets/cercle2.svg'

function NewsLetter() {
  return (
    <div>
        <Container styles=''>
            <div className='relative px-[10px] lg:px-[79px] py-[145px] text-center bg-[#DFD7F9] rounded-tl-[20px] lg:rounded-tl-[190px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px]'>
                <div className='absolute top-0 right-0'>
                    <img src={Cercle2} alt="" />
                </div>

                <div className='hidden lg:flex absolute top-[-15px] right-[-15px] rounded-full pr-[15px] pt-[13px] pl-[10px] pb-[15px] bg-[#747DEF] w-fit'>
                    <BsSendFill size={34.77} color='white' />
                </div>

                <h1 className='text-[#5E6282] text-[15px] md:text-[20px] lg:text-[33px] font-semibold mb-[50px] lg:mb-[74px]'>Subscribe to get information, latest news and other <br className='hidden lg:flex'/>interesting offers about Jadoo</h1>

                <div className='space-y-[30px] lg:flex items-center w-fit mx-auto lg:space-x-10 lg:space-y-0'>
                    <div className='flex items-center rounded-[10px] bg-white py-[25px] px-[31px] space-x-4 max-w-[421px]'>
                        <AiOutlineMail size={21} color='black'/>
                        <input type="email" className='bg-transparent w-full' placeholder='Your email'/>
                    </div>
                    <button className='z-10 text-white text-[17px] font-semibold px-[50px] py-[20px] bg-[#FF946D] rounded-[10px]'>
                        Subscribe
                    </button>
                </div>

                <div className='absolute bottom-0 left-0 opacity-30'>
                    <img src={Cercle1} alt="" />
                </div>
            </div>
        </Container>
    </div>
  )
}

export default NewsLetter