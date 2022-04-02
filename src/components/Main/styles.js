import styled from 'styled-components'
import { SectionBase } from '../Section/styles'

export const Container = styled(SectionBase)`
    height: 600px;
    align-items: center;
    justify-content: space-evenly;
    color: #fff;
    background: linear-gradient(103deg, rgba(36, 40, 55, 1) 0%, rgba(53, 58, 74, 1) 100%);

    @media (max-width: 768px) {
        height: 500px;
        flex-direction: column;
        justify-content: center;
    }
`

export const Content = styled.section`
    text-align: left;
    max-width: 600px;
    padding: 0 2em;
`

export const Title = styled.h1`
    font-size: 2.1em;
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

export const PcImage = styled.img`
    width: max(40vw, 360px);
`