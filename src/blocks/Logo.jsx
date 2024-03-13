import React from 'react'
import Container from '../components/Container'

import Logo1 from '../assets/logo1.png'
import Logo2 from '../assets/logo2.png'
import Logo3 from '../assets/logo3.png'
import Logo4 from '../assets/logo4.png'
import Logo5 from '../assets/logo5.png'


function Logo() {
  return (
    <Container styles='space-y-10 lg:space-y-0 lg:flex lg:items-center lg:justify-evenly mt-[70px] lg:mt-[100px] mb-[70px] lg:mb-[130px]'>
        <img src={Logo1} alt=""  className='w-fit mx-auto lg:mx-0'/>
        <img src={Logo2} alt="" className='w-fit mx-auto lg:mx-0'/>
        <div className='px-[25px] py-[15px] bg-white rounded-[10px] shadow-lg w-fit mx-auto lg:mx-0'>
            <img src={Logo3} alt="" className='w-fit mx-auto lg:mx-0'/>
        </div>
        <img src={Logo4} alt="" className='w-fit mx-auto lg:mx-0'/>
        <img src={Logo5} alt="" className='w-fit mx-auto lg:mx-0'/>
    </Container>
  )
}

export default Logo