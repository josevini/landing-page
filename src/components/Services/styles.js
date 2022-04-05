import styled from 'styled-components'
import { SectionBase, Content } from '../SectionBase/styles'
import { TabletMobileCombo } from '@styled-icons/entypo/TabletMobileCombo'
import { Web } from '@styled-icons/material-rounded/Web'
import { Chrome } from '@styled-icons/boxicons-logos/Chrome'

export const Container = styled(SectionBase)`
    height: auto;
    padding: 3em 0;
    flex-direction: column;
    align-items: center;
    color: #fff;
    background-image: linear-gradient(130deg, rgba(36, 40, 55, 1) 30%, rgba(53, 58, 74, 1) 60%, rgba(88, 97, 133, 1) 100%);
`

export const TextContent = styled(Content)`
    text-align: center;
    margin-bottom: 1em;
`

export const ServicesContent = styled(Content)`
    max-width: 1200px;
    flex-flow: row wrap;

    @media (max-width: 650px) {
        justify-content: center;
    }
`

export const MobileIcon = styled(TabletMobileCombo)`
    width: 1.56em;
    color: #242837;
`

export const PageIcon = styled(Web)`
    width: 2em;
    color: #242837;
`

export const ChromeIcon = styled(Chrome)`
    width: 2em;
    color: #242837;
`

export const ServicesPost = styled.section`
    flex-basis: calc(33% - 1em);
    height: 300px;
    background-color: #F2F2F2;
    padding: 0.9375em;
    color: #000;
    margin: 0.5em;
    
    @media (max-width: 820px) {
        flex-basis: calc(50% - 1em);
    }

    @media (max-width: 650px) {
        flex-basis: 350px;
    }
`

export const TitlePost = styled.h2`
    margin: 0.5em 0;
`