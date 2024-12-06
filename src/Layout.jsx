import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import MainHeader from './Header/MainHeader'
import Home from './Home/Home'
import Footer from './Footer/Footer'

function Layout() {
  return (
    <div className=' '>
        <BrowserRouter>
            <MainHeader/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route/>
                <Route/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    </div>
  )
}

export default Layout