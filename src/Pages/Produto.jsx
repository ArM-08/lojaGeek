import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import { PageContainer } from "./Produtos";
import { ProductContainer,  TitleProduct, ProductRowContainer } from "../Components/FirstLineProducts/styled";
import CardUnitario from "../Components/CardUnitario";
import CardProducts from "../Components/CardProducts";



const Produto = ()=> {
    return(
<>
<NavBar/>
<PageContainer>
<CardUnitario/>
<ProductContainer>
    <TitleProduct>Produtos Similares</TitleProduct>
    <ProductRowContainer>
        <CardProducts></CardProducts>
        <CardProducts></CardProducts>
        <CardProducts></CardProducts>
        <CardProducts></CardProducts>
        <CardProducts></CardProducts>
        <CardProducts></CardProducts>
    </ProductRowContainer>
    </ProductContainer>
</PageContainer>
<Footer/>
</>
    )
}

export default Produto;