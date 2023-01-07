import { ProductContainer, TextLineContainer, TitleProduct, ExpandedProductLink, ProductRowContainer, } from "./styled";
import CardProducts from "./../../Components/CardProducts";




const FirstLineProducts = ()=> {
    return (
        <ProductContainer>
            <TextLineContainer>
            <TitleProduct>Star Wars</TitleProduct>
            <ExpandedProductLink href="/">Ver Tudo</ExpandedProductLink>
            
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
export default FirstLineProducts;