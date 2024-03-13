import React from 'react'
import Categories from '../blocks/Categories'
import Selling from '../blocks/Selling'
import Books from '../blocks/Books'
import Logo from '../blocks/Logo'
import NewsLetter from '../blocks/NewsLetter'

function Body() {
  return (
    <>
        <Categories />
        <Selling/>
        <Books/>

        <Logo/>
        <NewsLetter/>
    </>
  )
}

export default Body