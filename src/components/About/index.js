import React from 'react'
import service from '../../assets/service.svg'
import {
    Container,
    Content,
    Title,
    Description,
    Image
} from './styles'

const About = ({ id }) => {
    return (
        <Container id={id}>
            <Image src={service} />
            <Content>
                <Title>Quem somos?</Title>
                <Description>Atuamos no ramo de desenvolvimento de softwares. Criamos websites e aplicativos com as melhores ferramentas do mercado.</Description>
            </Content>
        </Container>
    )
}

export default About