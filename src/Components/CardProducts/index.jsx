import styled from "styled-components";
import Teste from "./../../assets/images/star-wars.png"

export const Card = styled.div`
width: 176px;
height: 252px;
`
export const CardImg = styled.img`
margin: 0;
`

export const CardTitle = styled.h4`
margin: 0;
font-size: 14px;
line-height: 16px;
font-weight: 500;
margin: 3px 0;
font-family: 'Raleway';
font-style: normal;
`

export const CardValor = styled.h3`
margin: 0;
font-size: 16px;
line-height: 19px;
font-weight: 700;
margin: 3px 0;
font-family: 'Raleway';
font-style: normal;
`

export const CardLink = styled.a`
font-size: 16px;
margin: 0;
line-height: 19px;
font-weight: 700;
color: #2A7AE4;
font-family: 'Raleway';
font-style: normal;
margin: 3px 0;
`



const CardProducts = () => {
    return (
    <Card>
        <CardImg src={Teste}/>
        <CardTitle>Product</CardTitle>
        <CardValor>R$ 40,00</CardValor>
        <CardLink>Ver produto</CardLink>
    </Card>
    )

}
export default CardProducts;