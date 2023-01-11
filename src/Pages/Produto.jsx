import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import { PageContainer } from "./Produtos";
import { ProductContainer,  TitleProduct, ProductRowContainer } from "../Components/FirstLineProducts/styled";
import CardUnitario from "../Components/CardUnitario";
import CardProducts from "../Components/CardProducts";
import ImgTeste from "./../assets/images/star-wars.png"


const Produto = ()=> {
    return(
<>
<NavBar/>
<PageContainer>
<CardUnitario/>
<ProductContainer>
    <TitleProduct>Produtos Similares</TitleProduct>
    <ProductRowContainer>
    <CardProducts img={ImgTeste} name= {"Product"} value= {"R$ 40,00"} link={"/produto"}></CardProducts>
            <CardProducts img={ImgTeste} name= {"Product"} value= {"R$ 40,00"} link={"/produto"}></CardProducts>
            <CardProducts img={ImgTeste} name= {"Product"} value= {"R$ 40,00"} link={"/produto"}></CardProducts>
            <CardProducts img={ImgTeste} name= {"Product"} value= {"R$ 40,00"} link={"/produto"}></CardProducts>
            <CardProducts img={ImgTeste} name= {"Product"} value= {"R$ 40,00"} link={"/produto"}></CardProducts>
            <CardProducts img={ImgTeste} name= {"Product"} value= {"R$ 40,00"} link={"/produto"}></CardProducts>
    </ProductRowContainer>
    </ProductContainer>
</PageContainer>
<Footer/>
</>
    )
}

export default Produto;