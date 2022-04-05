import styled from 'styled-components'
import { TabletMobileCombo } from '@styled-icons/entypo/TabletMobileCombo'
import { Web } from '@styled-icons/material-rounded/Web'
import { Chrome } from '@styled-icons/boxicons-logos/Chrome'
import {
    MainSection as MainSectionBase,
    ContentSection as ContentSectionBase,
    Title as TitleBase,
    Description as DescriptionBase,
    Post as PostBase,

} from '../SectionBase/styles'

export const Container = styled(MainSectionBase)`
    height: auto;
    padding: 3em 0;
    flex-direction: column;
    align-items: center;
    color: #fff;
    background-image: linear-gradient(130deg, rgba(36, 40, 55, 1) 30%, rgba(53, 58, 74, 1) 60%, rgba(88, 97, 133, 1) 100%);
`

export const TextContent = styled(ContentSectionBase)`
    text-align: center;
    margin-bottom: 1em;
`

export const ServicesContent = styled(ContentSectionBase)`
    max-width: 1200px;
    flex-flow: row wrap;

    @media (max-width: 650px) {
        justify-content: center;
    }
`

export const Title = styled(TitleBase)``

export const Description = styled(DescriptionBase)``

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

export const ServicesPost = styled(PostBase)`
    background-color: #F2F2F2;
`

export const TitlePost = styled.h2`
    margin: 0.5em 0;
`