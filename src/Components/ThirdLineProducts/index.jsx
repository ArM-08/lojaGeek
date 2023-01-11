
import CardProducts from "./../../Components/CardProducts";
import { ProductContainer, TextLineContainer, TitleProduct, ExpandedProductLink, ProductRowContainer, } from "./../FirstLineProducts/styled";
import ImgTeste from "./../../assets/images/star-wars.png"

const ThirdLineProducts = ()=> {
    return (
        <ProductContainer>
            <TextLineContainer>
            <TitleProduct>Diversos</TitleProduct>
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
export default ThirdLineProducts;