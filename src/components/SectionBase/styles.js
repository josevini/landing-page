import styled from 'styled-components'

export const SectionBase = styled.section`
    width: 100%;
    height: 600px;
    display: flex;
    position: relative;

    @media (max-width: 768px) {
        height: 500px;
        flex-direction: column;
        justify-content: center;
    }
`

export const Content = styled.section`
    max-width: 600px;
    display: flex;
    flex-direction: column;
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