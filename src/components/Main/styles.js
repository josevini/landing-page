import styled from 'styled-components'
import {
    MainSection as MainSectionBase,
    ContentSection as ContentSectionBase,
    Title as TitleBase,
    Description as DescriptionBase,
    Image as ImageBase
} from '../SectionBase/styles'

export const Container = styled(MainSectionBase)`
    align-items: center;
    justify-content: space-evenly;
    color: #fff;
    background: linear-gradient(130deg, rgba(36, 40, 55, 1) 30%, rgba(53, 58, 74, 1) 60%, rgba(88, 97, 133, 1) 100%);
`

export const Content = styled(ContentSectionBase)``

export const Title = styled(TitleBase)``

export const Description = styled(DescriptionBase)``

export const Image = styled(ImageBase)``