import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import MainHeader from './Header/MainHeader'
import Home from './Home/Home'
import Footer from './Footer/Footer'
import MobileFooter from './Footer/MobileFooter'
import ProductDetails from './ProductDetails/ProductDetails'

function Layout() {
  return (
    <div className=' '>
        <BrowserRouter>
            <MainHeader/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path="/:productname/:id" element={<ProductDetails/>}/>
                <Route/>
            </Routes>
            <Footer/>
            <MobileFooter/>
        </BrowserRouter>
    </div>
  )
}

export default Layout