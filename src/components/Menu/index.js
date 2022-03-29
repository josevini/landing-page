import React from 'react'
import {
    Container,
    TopNavigation,
    MainNavigation,
    Item,
    MenuIcon
} from './styles'

const Menu = () => {
    return (
        <Container>
            <TopNavigation>
                LOGO
                <MenuIcon />
            </TopNavigation>
            <MainNavigation>
                <Item href="#">Sobre</Item>
                <Item href="#">Serviços</Item>
                <Item href="#">Contato</Item>
            </MainNavigation>
        </Container>
    )
}

export default Menu