import React from 'react'
import { Container, TextContent, ServicesContent, PageIcon, MobileIcon, ChromeIcon, ServicesPost, TitlePost } from './styles'
import { Title, Description } from '../SectionBase/styles'

const Services = ({ id }) => {
    return (
        <Container id={id}>
            <TextContent>
                <Title>Nossos serviços</Title>
                <Description>
                    Veja alguns dos serviços prestados pela gente e caso tenha interesse, entre em contato com a gente!
                </Description>
            </TextContent>
            <ServicesContent>
                <ServicesPost>
                    <PageIcon />
                    <TitlePost>Sites</TitlePost>
                    <Description>
                        Criação de páginas web, conhecidas como sites, totalmente responsivas e com as melhores ferramentas.
                    </Description>
                </ServicesPost>
                <ServicesPost>
                    <MobileIcon />
                    <TitlePost>Aplicativos</TitlePost>
                    <Description>
                        Criação de aplicativos móveis para Android e IOS.
                    </Description>
                </ServicesPost>
                <ServicesPost>
                    <ChromeIcon />
                    <TitlePost>SEO</TitlePost>
                    <Description>
                        Cuidamos da otimização para mecanismos de busca do seu, o deixando melhor indexado.
                    </Description>
                </ServicesPost>
            </ServicesContent>
        </Container>
    )
}

export default Services