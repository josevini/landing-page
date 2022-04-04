import styled from 'styled-components'
import { SectionBase, Content, Image } from '../SectionBase/styles'

export const Container = styled(SectionBase)`
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-image: linear-gradient(130deg, rgba(36, 40, 55, 1) 30%, rgba(53, 58, 74, 1) 60%, rgba(88, 97, 133, 1) 100%);
    color: #fff;
`

export const TextContent = styled(Content)`
    text-align: center;
`

export const ContactContent = styled(Content)`
    max-width: unset;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    @media (max-width: 820px) {
        flex-direction: column;
    }
`

export const ContactImage = styled(Image)`
    width: max(25vw, 360px);
    @media (max-width: 820px) {
        display: none;
    }
`

export const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`

export const Input = styled.input`
    flex-basis: calc(50% - 0.6em);
    height: 2.5em;
    padding: 0.5em;
    margin: 0.3em;
    border: none;
    outline: none;
    border-radius: 2px;

    @media (max-width: 460px) {
        flex-basis: calc(100% - 0.6em);
        height: 2.8em;
    }
`

export const Message = styled.textarea`
    flex: 1 1 calc(100% - 0.6em);
    height: 10em;
    padding: 0.5em;
    margin: 0.3em;
    border: none;
    outline: none;
    border-radius: 2px;
`

export const Submit = styled.input`
    height: 2.5em;
    flex-basis: 7em;
    padding: 0.5em;
    margin: 0.3em;
    border: none;
    outline: none;
    border-radius: 2px;
`