
import CardProducts from "./../../Components/CardProducts";
import { ProductContainer, TextLineContainer, TitleProduct, ExpandedProductLink, ProductRowContainer, } from "./../FirstLineProducts/styled";


const ThirdLineProducts = ()=> {
    return (
        <ProductContainer>
            <TextLineContainer>
            <TitleProduct>Diversos</TitleProduct>
            <ExpandedProductLink href="/home">Ver Tudo</ExpandedProductLink>
            </TextLineContainer>
            <ProductRowContainer>
            <CardProducts></CardProducts>
            <CardProducts></CardProducts>
            <CardProducts></CardProducts>
            <CardProducts></CardProducts>
            <CardProducts></CardProducts>
            <CardProducts></CardProducts>
            </ProductRowContainer>

        </ProductContainer>
    )
}
export default ThirdLineProducts;