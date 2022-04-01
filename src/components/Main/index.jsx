import React from 'react'
import pc from '../../assets/pc.svg'
import {
    Container,
    Content,
    Title,
    Description,
    PcImage
} from './styles'

const Main = () => {
    return (
        <Container>
            <Content>
                <Title>Crie um site e dê vida ao seu negócio!</Title>
                <Description>
                    Somos uma agência que preza muito pela qualidade e eficiência do serviço. Venha fazer um site com a gente e dê um UP na sua empresa!
                </Description>
            </Content>
            <PcImage src={pc} />
        </Container>
    )
}

export default Main