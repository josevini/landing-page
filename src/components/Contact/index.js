import React from 'react'
import contact from '../../assets/contact.svg'
import {
    Container,
    TextContent,
    ContactContent,
    ContactImage,
    Title,
    Description,
    Form,
    Input,
    Message,
    Submit
} from './styles'

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