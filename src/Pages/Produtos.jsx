import styled from "styled-components";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import { TitleProduct, TextLineContainer, ProductRowContainer} from "../Components/FirstLineProducts/styled";
import CardProducts from "../Components/CardProducts";

const ProdutosContainer = styled.div`
width: 90vw;
margin: 0 auto;
height:auto;
padding: 20px;
`
export const PageContainer = styled.div`
width: 100vw;
background: #E5E5E5;
height:auto;

`

const ButtonAddProduct = styled.button`
width: 184px;
height: 51px;
background: #2A7AE4;
border: none;
color: #FFF;
@media (max-width: 768px) {
    width: 151px;
    height: 41px;

`





const Produtos = () => {
    return (
<>
<NavBar></NavBar>
<PageContainer>
    <ProdutosContainer>
    <TextLineContainer>
<TitleProduct>Todos os produtos</TitleProduct>
<ButtonAddProduct>Adicionar produto</ButtonAddProduct>
</TextLineContainer>
<ProductRowContainer>
<CardProducts></CardProducts>
            <CardProducts></CardProducts>
            <CardProducts></CardProducts>
            <CardProducts></CardProducts>
            <CardProducts></CardProducts>
            <CardProducts></CardProducts><CardProducts></CardProducts>
            <CardProducts></CardProducts>
            <CardProducts></CardProducts>
            <CardProducts></CardProducts>
            <CardProducts></CardProducts>
            <CardProducts></CardProducts><CardProducts></CardProducts>
            <CardProducts></CardProducts>
            <CardProducts></CardProducts>
            <CardProducts></CardProducts>
            <CardProducts></CardProducts>
            <CardProducts></CardProducts>
</ProductRowContainer>
</ProdutosContainer>
</PageContainer>
<Footer></Footer>
</>
    )
}

export default Produtos;
