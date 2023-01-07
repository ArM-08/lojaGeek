import styled from "styled-components";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import { PageContainer } from "./Produtos";




const FormAddProduct = styled.form`
display: flex;
flex-direction: column;
align-items: center;
gap: 2vh;
width: 559px;
margin: 0 auto;
padding: 48px;
@media (max-width: 768px)and (min-width: 768px) {
    width: 690px;}
    @media (max-width: 715px)and (min-width:200px){
        width: 300px;
    }
    

`

const InputAddProduct = styled.input`
width: 559px;
height: 56px;
background: #FFFFFF;
border-radius: 4px;
border: none;
color: #A2A2A2;
font-family: 'Raleway';
font-style: normal;
@media (max-width: 768px)and (min-width: 715px) {
    width: 690px;}
@media (max-width: 715px)and (min-width:200px){
    width: 300px;
}
`

const ButtonAddProduct = styled.button`
width: 559px;
height: 51px;
background: #2A7AE4;
padding: 16px;
gap: 10px;
color: #FFFFFF;
border: none;
font-family: 'Raleway';
font-style: normal
font-weight: 400;
font-size: 16px;
@media (max-width: 768px) and (min-width: 768px) {
    width: 690px;}
    @media (max-width: 715px)and (min-width:200px){
        width: 300px;
    }

`

const TitleFormAddProduct = styled.h1`
font-family: 'Raleway';
font-style: normal;
align-self: start;
font-weight: 700;
font-size: 32px;
`




const AddProduct = () => {
    return(
        <>
        <NavBar/>
        <PageContainer>
        <FormAddProduct>
            <TitleFormAddProduct>Adicionar novo produto</TitleFormAddProduct>
            <InputAddProduct placeholder="URL da imagem"/>
            <InputAddProduct placeholder="Categoria"/>
            <InputAddProduct placeholder="Nome do produto"/>
            <InputAddProduct placeholder="Preço do produto"/>
            <InputAddProduct placeholder="Descrição do produto"/>
<ButtonAddProduct>Adicionar Produto</ButtonAddProduct>
        </FormAddProduct>
        </PageContainer>
        <Footer/>
        </>
    )
}

export default AddProduct;