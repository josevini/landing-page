import React from 'react'
import Menu from '../Menu'
import Main from '../Main'
import About from '../About'

const Layout = () => {
    return (
        <>
            <Menu />
            <Main />
            <About id='about' />
            <Main />
        </>
    )
}

export default Layout