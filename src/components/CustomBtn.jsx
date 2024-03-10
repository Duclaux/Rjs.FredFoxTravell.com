import React from 'react'

function CustomBtn(props) {
  return (
    <button className={`${props.bg_color} text-white px-[27px] py-[19px] rounded-[10px] text-[18px]`}>{props.title}</button>
  )
}

export default CustomBtn