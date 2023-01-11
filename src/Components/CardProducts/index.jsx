import styled from "styled-components";


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



const CardProducts = ({img, name, value, link}) => {
    return (
    <Card>
        <CardImg src={img}/>
        <CardTitle>{name}</CardTitle>
        <CardValor>{value}</CardValor>
        <CardLink href={link}>Ver Produto</CardLink>
    </Card>
    )

}
export default CardProducts;