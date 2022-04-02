import styled from 'styled-components'
import { Menu, Close } from 'styled-icons/material'
import { CodeSlash } from '@styled-icons/bootstrap'

export const Navbar = styled.nav`
    width: 100%;
    position: absolute;
    z-index: 100;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    color: #fff;

    @media (max-width: 768px) {
        position: relative;
        background: rgba(36, 40, 55,1);
        border-bottom: 1px solid #b7b7b7;
    }
`

export const TopNavigation = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    
    @media(max-width: 768px) {
        flex: 1 1;
    }
`

export const CodeIcon = styled(CodeSlash)`
    width: 35px;
    color: #fff;
    cursor: pointer;
`

export const MenuIcon = styled(Menu)`
    width: 25px;
    color: #fff;
    display: none;

    @media(max-width: 768px) {
        display: block;
    }

`

export const MenuClose = styled(Close)`
    width: 25px;
    color: #fff;
    display: none;

    @media(max-width: 768px) {
        display: block;
    }
`

export const MainNavigation = styled.ul`
    list-style: none;
    display: flex;
    > a {
        text-decoration: none;
        display: block;
        padding: 15px;
        color: #fff;
    }

    @media(max-width: 768px) {
        width: 100%;
        display: ${props => props.menuVisible ? 'flex' : 'none'};
        flex-direction: column;
    }
`