import React from 'react'

import Title from '../components/Title'
import Container from '../components/Container'
import CardSleling from '../components/CardSleling'

import Coliseum from '../assets/coliseum.jpeg'
import BigBen from '../assets/bigBen.jpeg'
import Paris from '../assets/paris.jpg'

function Selling() {
  return (
    <Container>
        <Title h1='Top Selling' h2='Top Destinations'/>
        

        <div className='space-y-10 lg:space-y-0 lg:flex lg: items-center lg:justify-between mt-[30px] lg:mt-[60px]'>
            <CardSleling delay='0.9' img={Coliseum} h1='Rome, Italty' h2='$5,42k' h3='10 Days Trip'/>
            <CardSleling delay='1.1' img={BigBen} h1='London, UK' h2='$4.2k' h3='12 Days Trip'/>
            <CardSleling delay='1.3' img={Paris} h1='Full Europe' h2='$5,42k' h3='28 Days Trip'/>
        </div>
    </Container>
  )
}

export default Selling