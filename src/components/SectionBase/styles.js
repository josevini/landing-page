import styled from 'styled-components'

export const MainSection = styled.section`
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

export const ContentSection = styled.section`
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
    
    @media (max-width: 360px) {
        width: 100vw;
    }
`

export const Post = styled.article`
    height: 300px;
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