import React, { useState } from 'react'
// import { IoIosArrowDown } from 'react-icons/io'
import { HiOutlineMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import Container from '../components/Container'

import Logo from '../assets/logo.svg'

function Navbar() {

  const [ hidLinks, setHidLinks ] = useState(false)
 
  // const [ hidLng, setHidLng ] = useState(0)
  // const showLng = () => {
    // setHidLng(!hidLng)
  // }

  const showLinks = () => {
    setHidLinks(!hidLinks)
  }
  // const des liens
  const links = ['Desitnations', 'Hotels', 'Flights', 'Bookings']

  return (
    <Container styles='absolute flex items-center justify-between'>
        {/* logo */}
        <div>
          <img src={Logo} alt="" className='w-[90px] h-[26px] lg:w-[183px] lg:h-[53px]'/>
        </div>

        {/* liens */}
        <div className={!hidLinks ? `text-[#212832] absolute -left-full top-0 transition-all duration-500 lg:relative lg:left-0 w-[70%] lg:grid lg:justify-items-end` : `text-[#212832] absolute left-0 top-[80px] transition-all duration-500 lg:relative lg:top-0 lg:left-0 w-[79%] lg:grid lg:justify-items-end`}>
          <ul className='bg-[#FFF1DA] w-[100%] py-[30px] text-center space-y-6  lg:bg-transparent lg:w-auto lg:py-0 lg:space-y-0 lg:flex lg:items-center lg:space-x-16 xl:space-x-24'>
            {
              links.map((link) => (
                <li className='text-[20px] lg:text-[17px] cursor-pointer'>{link}</li>
              ))
            }

            <li className='mx-auto text-[20px] lg:text-[17px cursor-pointer hover:border-[1px] hover:px-[22px] hover:py-[9px] hover:border-[#212832] hover:rounded-[5px] w-fit transition-all duration-600'>Login</li>
            <li className='mx-auto text-[20px] lg:text-[17px cursor-pointer px-[22px] py-[9px] border-[1px] border-[#212832] rounded-[5px] w-fit'>Sign up</li>
          </ul>
        </div>

        {/* langue et menu */}
        <div className='flex items-center space-x-5'>
          {/* <div className='flex items-center space-x-1 cursor-pointer relative' onClick={showLng}>
            <h1>EN</h1>
            <IoIosArrowDown color='black' size={15}/>

            <div className={hidLng == 0 ? `absolute -top-[50px] left-0 opacity-0 transition-all duration-500` : `absolute -left-[3px] top-[25px] opacity-1 transition-all duration-500`}>
              <h1>FR</h1>
              <h1>IT</h1>
            </div>
          </div> */}

          <select name="lgn" id="3" className='bg-transparent'>
            <option value="En">EN</option>
            <option value="Fr">FR</option>
            <option value="It">IT</option>
          </select>

          <div className='lg:hidden cursor-pointer' onClick={showLinks}>
            {
              !hidLinks ? <HiOutlineMenu color='black' size={50}/> : <AiOutlineClose color='black' size={50}/>
            }
          </div>
        </div>
    </Container>
  )
}

export default Navbar