import styled from 'styled-components'
import { Menu, Close } from 'styled-icons/material'
import { CodeSlash } from '@styled-icons/bootstrap'

export const Container = styled.nav`
    width: 100%;
    background-color: #1d1d1d;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    color: #fff;
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
        display: ${props => props.menuVisible ? 'none' : 'block'};
    }

`

export const MenuClose = styled(Close)`
    width: 25px;
    color: #fff;
    display: none;

    @media(max-width: 768px) {
        display: ${props => props.menuVisible ? 'block' : 'none'};
    }
`

export const MainNavigation = styled.ul`
    list-style: none;
    display: flex;
    > a {
        text-decoration: none;
        display: inline-block;
        margin: 0 10px;
        padding: 8px;
        color: #fff;
        border-radius: 12px;
        transition: 0.5s;
        
        &:hover {
            background-color: #c3c3c323;
        }
    }

    @media(max-width: 768px) {
        width: 100%;
        display: ${props => props.menuVisible ? 'flex' : 'none'};
        flex-direction: column;

        > a {
            margin: 10px 0;
        }
    }
`