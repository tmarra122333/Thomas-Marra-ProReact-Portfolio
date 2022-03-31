import React from 'react'
import './header.css'

const Header = () => {
  return (
    <header>
      <div className="container header__container"></div>
      <h5>Hello I'm</h5>
      <h1>Tommy Marra</h1>
      <h5 className="text-light">Fullstack Developer</h5>
    </header>
  )
}

export default Header