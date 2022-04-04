import React from 'react'
import {
    Container,
    TextContent,
    ContactContent,
    ContactImage,
    Form,
    Input,
    Message,
    Submit
} from './styles'
import contact from '../../assets/contact.svg'
import { Title, Description } from '../SectionBase/styles'

const Contact = ({ id }) => {
    return (
        <Container id={id}>
            <TextContent>
                <Title>Entre em contato</Title>
                <Description>
                    Fique a vontade para mandar um E-mail para nossa equipe. Responderemos assim que possível.
                </Description>
            </TextContent>
            <ContactContent>
                <ContactImage src={contact} />
                <Form>
                    <Input type='text' placeholder='Name' />
                    <Input type='email' placeholder='E-mail' />
                    <Message />
                    <Submit type='submit' value='Enviar' />
                </Form>
            </ContactContent>
        </Container>
    )
}

export default Contact