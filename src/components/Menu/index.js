import React, { useState } from 'react'
import {
    Container,
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
        <Container>
            <TopNavigation>
                <a href='.'>
                    <CodeIcon />
                </a>
                <MenuIcon
                    menuVisible={menuVisible}
                    onClick={toggleMenu}
                />
                <MenuClose
                    menuVisible={menuVisible}
                    onClick={toggleMenu}
                />
            </TopNavigation>
            <MainNavigation menuVisible={menuVisible}>
                <a href="#about">Sobre</a>
                <a href="#services">Serviços</a>
                <a href="#contact">Contato</a>
            </MainNavigation>
        </Container>
    )
}

export default Menu