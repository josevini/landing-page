import React, { useState } from 'react'
import {
    Navbar,
    TopNavigation,
    MainNavigation,
    CodeIcon,
    MenuIcon,
    MenuClose
} from './styles'

const Menu = () => {
    const [menuVisible, setMenuVisible] = useState(false)

    const toggleMenu = () => {
        setMenuVisible(!menuVisible)
    }

    return (
        <Navbar>
            <TopNavigation>
                <a href='.'>
                    <CodeIcon />
                </a>
                <div onClick={toggleMenu}>
                    {!menuVisible ? <MenuIcon/> : <MenuClose/>}
                </div>
            </TopNavigation>
            <MainNavigation menuVisible={menuVisible}>
                <a href="#about">Sobre</a>
                <a href="#services">Serviços</a>
                <a href="#reviews">Avaliações</a>
                <a href="#contact">Contato</a>
            </MainNavigation>
        </Navbar>
    )
}

export default Menu