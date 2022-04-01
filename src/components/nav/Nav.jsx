import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageDetail} from 'react-icons/bi'

const Nav = () => {
  return (
    <div>
      <a href="#"><AiOutlineHome/></a>
      <a href="#about"><AiOutlineUser/></a>
      <a href="#projects"><RiServiceLine/></a>
      <a href="#contact"><BiMessageDetail/></a>
    </div>
  )
}

export default Nav