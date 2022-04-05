import React from 'react'
import Person1 from '../../assets/person1.jpg'
import Person2 from '../../assets/person2.jpg'
import Person3 from '../../assets/person3.jpg'
import {
    Container,
    Content,
    Title,
    ReviewsContent,
    ReviewsPost,
    Photo,
    Review,
} from './styles'

const Reviews = ({ id }) => {
    return (
        <Container id={id}>
            <Content>
                <Title>Nossas avaliações</Title>
            </Content>
            <ReviewsContent>
                <ReviewsPost>
                    <Photo src={Person1} />
                    <Review>Minhas vendas aumentaram depois que passei a vender no e-commerce!</Review>
                    <h3>Sara</h3>
                </ReviewsPost>
                <ReviewsPost>
                    <Photo src={Person2} />
                    <Review>Ótimos atendimento e serviço! Super recomendo.</Review>
                    <h3>Clara</h3>
                </ReviewsPost>
                <ReviewsPost>
                    <Photo src={Person3} />
                    <Review>Muito bom, não tenho nada a reclamar, só agradecer pelo trabalho.</Review>
                    <h3>João</h3>
                </ReviewsPost>
            </ReviewsContent>
        </Container>
    )
}

export default Reviews