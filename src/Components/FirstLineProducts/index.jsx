import { ProductContainer, TextLineContainer, TitleProduct, ExpandedProductLink, ProductRowContainer, } from "./styled";
import CardProducts from "./../../Components/CardProducts";
import ImgTeste from "./../../assets/images/star-wars.png"



const FirstLineProducts = ()=> {
    return (
        <ProductContainer>
            <TextLineContainer>
            <TitleProduct>Star Wars</TitleProduct>
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
export default FirstLineProducts;