import ImgTeste from "./../../assets/images/star-wars.png"
import CardProducts from "./../../Components/CardProducts";

import { ProductContainer, TextLineContainer, TitleProduct, ExpandedProductLink, ProductRowContainer, } from "./../FirstLineProducts/styled";

const SecondLineProducts = ()=> {
    return (
        <ProductContainer>
            <TextLineContainer>
            <TitleProduct>Consoles</TitleProduct>
            <ExpandedProductLink href="/produtos">Ver Tudo</ExpandedProductLink>
            </TextLineContainer>
            <ProductRowContainer>
            <CardProducts img={ImgTeste} name= {"Product"} value= {"R$ 40,00"} link={"/produto"}></CardProducts>
            <CardProducts img={ImgTeste} name= {"Product"} value= {"R$ 40,00"} link={"/produto"}></CardProducts>
            <CardProducts img={ImgTeste} name= {"Product"} value= {"R$ 40,00"} link={"/produto"}></CardProducts>
            <CardProducts img={ImgTeste} name= {"Product"} value= {"R$ 40,00"} link={"/produto"}></CardProducts>
            <CardProducts img={ImgTeste} name= {"Product"} value= {"R$ 40,00"} link={"/produto"}></CardProducts>
            <CardProducts img={ImgTeste} name= {"Product"} value= {"R$ 40,00"} link={"/produto"}></CardProducts>
            </ProductRowContainer>

        </ProductContainer>
    )
}
export default SecondLineProducts;