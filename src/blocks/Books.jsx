import React from 'react'
import Title from '../components/Title'
import Container from '../components/Container'
import CardBooks from '../components/CardBooks'
import Carre from '../assets/carre.svg'
import Water from '../assets/water.svg'
import Taxi from '../assets/taxi.svg'
import Img1 from '../assets/img1.png'
import { BiSolidLeaf } from "react-icons/bi";
import { FiMap } from "react-icons/fi";
import { BsFillSendFill } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import Build from '../assets/building.svg'


function Books() {
  return (
    <Container styles='text-left lg:flex lg:items-center justify-between'>
        <div>
            <Title h1='Easy and Fast' h2={[ "Book your next trip",<br className='hidden min-[458px]:flex'/>, "in 3 easy steps" ]} text='text-center lg:text-start'/>
            
            <div className='space-y-[50px] lg:space-y-[64px] mt-[30px] lg:mt-[42px]'>
                <CardBooks delay='0.5' img={Carre} bg='bg-[#F0BB1F]' h1='Choose Destination' p={[ "Lorem ipsum dolor sit amet, consectetur", <br/>, "adipiscing elit. Urna, tortor tempus." ]}/>
                <CardBooks delay='0.7' img={Water} bg='bg-[#F15A2B]' h1='Make Payment' p={[ "Lorem ipsum dolor sit amet, consectetur", <br/>, "adipiscing elit. Urna, tortor tempus." ]}/>
                <CardBooks delay='0.9' img={Taxi} bg='bg-[#006380]' h1='Reach Airport on Selected Date' p={[ "Lorem ipsum dolor sit amet, consectetur", <br/>, "adipiscing elit. Urna, tortor tempus." ]}/>
            </div>
        </div>

        <div className='pt-[26px] px-[10px] lg:px-[33px] pb-[41px] bg-white shadow-lg rounded-[30px] w-fit'>
            <img src={Img1} alt="" />

            <div className='mt-[34px]'>
                <div className='text-[#84829A] mb-[19px] space-y-2'>
                    <h1 className='text-[17px] lg:text-[24px] font-medium text-black'>Trip To Greece</h1>
                    <p className='text-[15px] lg:text-[21px]'>14-29 June | by Robbin joseph</p>
                </div>

                <div className='flex items-center space-x-5'>
                    <BiSolidLeaf size={18.62} className='px-[14px] py-[15px] w-[47.88px] h-[47.88px] bg-[#F5F5F5] rounded-full hover:bg-[#8A79DF] text-[#84829A] hover:text-white duration-700 transition-all'/>
                    <FiMap size={18.62} className='px-[14px] py-[15px] w-[47.88px] h-[47.88px] bg-[#F5F5F5] rounded-full hover:bg-[#8A79DF] text-[#84829A] hover:text-white duration-700 transition-all'/>
                    <BsFillSendFill size={18.62} className='px-[14px] py-[15px] w-[47.88px] h-[47.88px] bg-[#F5F5F5] rounded-full hover:bg-[#8A79DF] text-[#84829A] hover:text-white duration-700 transition-all'/>
                </div>

                <div className='flex items-center justify-between mt-[38.58px]'>
                    <div className='flex items-center space-x-3 '>
                        <img src={Build} alt="" className='w-[21.28px] h-[21.28px]'/>
                        <h1 className='text-[#84829A] text-[15px] lg:text-[21px] font-medium'>24 people going</h1>
                    </div>

                    <AiOutlineHeart size={26.6} color='#4152CA'/>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default Books