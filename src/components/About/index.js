import React from 'react'
import service from '../../assets/service.svg'
import { AboutSection } from './styles'
import {
    Content,
    Title,
    Description,
    Image
} from './styles'

const About = ({ id }) => {
    return (
        <AboutSection id={id}>
            <Image src={service} />
            <Content>
                <Title>Quem somos?</Title>
                <Description>Somos uma agência que atua no ramo de desenvolvimento de softwares. Criamos websites e aplicativos com as melhores ferramentas do mercado.</Description>
            </Content>
        </AboutSection>
    )
}

export default About