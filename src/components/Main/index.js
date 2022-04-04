import React from 'react'
import pc from '../../assets/pc.svg'
import { Container } from './styles'
import {
    Content,
    Title,
    Description,
    Image
} from '../SectionBase/styles'

const Main = () => {
    return (
        <Container>
            <Content>
                <Title>Crie um site ou app para o seu negócio!</Title>
                <Description>
                    Somos uma agência que preza muito pela qualidade e eficiência do serviço. Venha ser nosso cliente e dê um UP na sua empresa!
                </Description>
            </Content>
            <Image src={pc} />
        </Container>
    )
}

export default Main