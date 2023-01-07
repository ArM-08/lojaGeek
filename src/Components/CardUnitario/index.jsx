import Img from "./../../assets/images/unitario.png"

import styled from "styled-components";


const ProdutoCard =  styled.div`
width: 90%;
margin: 0 auto;
display: flex;
gap: 2vh;
@media(max-width:560px) {
    flex-direction: column;
    align-items: center;
`

const ProductImg = styled.img`
width: 560px;
height: 403px;
@media(max-width:805px) {
    width: 254px;
height: 157px;
justify-content: center;

`
const TextContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
justify-content: center;
`

const ProductTitle = styled.h1`
font-family: 'Raleway';
font-style: normal;
font-weight: 500;
font-size: 52px;
line-height: 0px;
@media(max-width:985px) {
    font-size: 22px;
    line-height: 0px;
`

const ProductValor = styled.h3`

font-family: 'Raleway';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 0px;
@media(max-width:960px) {
    font-size: 16px;
    line-height: 0px;
`

const ProductDescricao = styled.p`
font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 16px;
@media(max-width:960px) {
    font-size: 14px;
    line-height: 16px;
`


const CardUnitario = ( ) => {
    return (
        <ProdutoCard>
            <ProductImg src={Img}></ProductImg>
            <TextContainer>
        <ProductTitle>Produto XYZ</ProductTitle>
        <ProductValor>R$ 60,00 </ProductValor>
        <ProductDescricao>Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam</ProductDescricao>
        </TextContainer>
        </ProdutoCard>
    )

}

export default CardUnitario;