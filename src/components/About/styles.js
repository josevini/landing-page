import styled from 'styled-components'
import { SectionBase } from '../SectionBase/styles'

export const AboutSection = styled(SectionBase)`
    background-color: #F2F2F2;
    align-items: center;
    justify-content: space-evenly;

    @media (max-width: 768px) {
        height: 500px;
        flex-direction: column-reverse;
        justify-content: center;
    }
`

export const Content = styled.section`
    text-align: left;
    max-width: 600px;
    padding: 0 2em;
`

export const Title = styled.h1`
    font-size: 2.5em;
    line-height: 1.3em;
    margin-bottom: 0.6em;

    @media (max-width: 768px) {
        font-size: 1.8em;
    }
`

export const Description = styled.p`
    line-height: 1.5em;
    margin-bottom: 0.9em;
    @media (max-width: 768px) {
        font-size: 0.9em;
    }
`

export const Image = styled.img`
    width: max(40vw, 360px);
`