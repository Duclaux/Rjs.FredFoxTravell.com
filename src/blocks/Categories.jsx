import React from 'react'
import { motion, useScroll } from "framer-motion"


import Container from '../components/Container'
import Title from '../components/Title'

import Points from '../assets/points.svg'
import CardCateg from '../components/CardCateg'
import Plane from '../assets/plane.svg'
import Plateau from '../assets/plateau.svg'
import Micro from '../assets/micro.svg'
import Custom from '../assets/custom.svg'
import Bg_red from '../assets/bg_red.svg'

function Categories() {
  return (
    <Container styles='relative mb-[70px] lg:mb-[123px'>
        <Title h1='CATEGORY' h2='We Offer Best Services'/>
        <img src={Points} alt="" className='hidden lg:flex absolute top-0 right-0'/>

        <div className='space-y-10 lg:space-y-0 lg:flex lg:items-center lg:justify-between mt-[30px] lg:mt-[60px]'>
            <CardCateg delay='0.7' img={Plateau} h1='Calculated Weather ' p={[ "Built Wicket longer", <br/>, "admire do barton", <br/>, "vanity itself do in it." ]}/>
            <CardCateg delay='0.9' img={Plane} sec_img={Bg_red} style='bg-white rounded-[36px] shadow-md' h1='Best Flights' p={[ "Engrossed listening.", <br/>, "Park gate sell they", <br/>, "west hard for the." ]}/>
            <CardCateg delay='1.1' img={Micro} h1='Local Events' p={[ "Barton vanity itself do", <br/>, "in it. Preferd to men it ", <br/>, "engrossed listening." ]}/>
            <CardCateg delay='1.3' img={Custom} h1='Customization' p={[ "We deliver outsourced", <br/>, "aviation services for", <br/>, "military customers" ]}/>
        </div>
    </Container>
  )
}

export default Categories