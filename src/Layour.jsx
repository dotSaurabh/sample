import React from 'react'
import Header from './component/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './component/Footer/Footer'

function Layour() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layour