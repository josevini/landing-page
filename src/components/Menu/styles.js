import styled from 'styled-components'
import { Menu } from 'styled-icons/material'

export const Container = styled.nav`
    width: 100%;
    background-color: #1D1D1D;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
`

export const TopNavigation = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
`

export const MenuIcon = styled(Menu)`
    width: 20px;
    height: 20px;
    display: none;

    @media(max-width: 768px) {
        display: block;
    }

`

export const MainNavigation = styled.ul`
    list-style: none;
    @media(max-width: 768px) {
        width: 100%;
    }
`

export const Item = styled.a`
    text-decoration: none;
    display: inline-block;
    margin: 0 10px;
`