import React from 'react'

function Container( {children, styles} ) {
  return (
    <div className={`${styles} w-full px-[50px] md:px-[80px] lg:px-[100px] xl:px-[280px] 2xl:px-[192px] py-[27px] lg:py-[35px] xl:py-[47px]`}>{ children }</div>
  )
}

export default Container