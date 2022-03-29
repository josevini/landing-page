import React, { useState } from 'react'
import {
    Container,
    TopNavigation,
    MainNavigation,
    Item,
    MenuIcon
} from './styles'

const Menu = () => {
    const [valueHidden, setValueHidden] = useState(true)
    return (
        <Container>
            <TopNavigation>
                LOGO
                <MenuIcon
                    onClick={() => {
                        setValueHidden(!valueHidden)
                    }}
                />
            </TopNavigation>
            <MainNavigation hidden={valueHidden}>
                <Item href="#">Sobre</Item>
                <Item href="#">Serviços</Item>
                <Item href="#">Contato</Item>
            </MainNavigation>
        </Container>
    )
}

export default Menu