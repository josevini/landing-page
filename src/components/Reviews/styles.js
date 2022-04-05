import styled from 'styled-components'
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
    background-color: #F2F2F2;
    flex-direction: column;
    align-items: center;
`

export const Content = styled(ContentSectionBase)`
    text-align: center;
    margin-bottom: 1em;
`

export const Title = styled(TitleBase)``

export const ReviewsContent = styled(ContentSectionBase)`
    max-width: 1200px;
    flex-flow: row wrap;

    @media (max-width: 650px) {
        justify-content: center;
    }
`

export const ReviewsPost = styled(PostBase)`
    height: auto;
    text-align: center;
`

export const Photo = styled.img`
    border-radius: 50%;
`

export const Review = styled(DescriptionBase)`
    line-height: 1.2em;
    margin: 0.5em 0;
`