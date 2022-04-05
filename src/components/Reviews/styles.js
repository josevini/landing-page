import styled from 'styled-components'
import {
    SectionBase,
    Content as ContentBase,
    Title as TitleBase,
    Description as DescriptionBase,
} from '../SectionBase/styles'

export const Container = styled(SectionBase)`
    height: auto;
    padding: 3em 0;
    background-color: #F2F2F2;
    flex-direction: column;
    align-items: center;
`

export const Content = styled(ContentBase)`
    text-align: center;
    margin-bottom: 1em;
`

export const Title = styled(TitleBase)`

`

export const ReviewsContent = styled(ContentBase)`
    max-width: 1200px;
    flex-flow: row wrap;

    @media (max-width: 650px) {
        justify-content: center;
    }
`

export const ReviewsPost = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-basis: calc(33% - 1em);
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

export const Photo = styled.img`
    border-radius: 50%;
`

export const Review = styled(DescriptionBase)`
    line-height: 1.2em;
    margin: 0.5em 0;
`