import React from 'react'
import Menu from '../Menu'
import Main from '../Main'
import About from '../About'
import Services from '../Services'
import Reviews from '../Reviews'
import Contact from '../Contact'

const Layout = () => {
    return (
        <>
            <Menu />
            <Main />
            <About id='about' />
            <Services id='services' />
            <Reviews id='reviews' />
            <Contact id='contact' />
        </>
    )
}

export default Layout