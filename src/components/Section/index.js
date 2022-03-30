import React from 'react'
import { Container } from './styles'

const Section = ({ title, id }) => {
    return (
        <Container id={id}>
            <h1>{title}</h1>
        </Container>
    )
}

export default Section