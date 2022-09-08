import React from 'react'
import BottomBar from './BottomBar'
import MiddleBar from './MiddleBar'
import TopBar from './Topbar'

const Navbar = () => {
  return (
    <header >
      <TopBar/>
      <MiddleBar/>
      <BottomBar/>
    </header>
  )
}

export default Navbar