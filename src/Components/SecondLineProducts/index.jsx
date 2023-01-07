
import CardProducts from "./../../Components/CardProducts";

import { ProductContainer, TextLineContainer, TitleProduct, ExpandedProductLink, ProductRowContainer, } from "./../FirstLineProducts/styled";

const SecondLineProducts = ()=> {
    return (
        <ProductContainer>
            <TextLineContainer>
            <TitleProduct>Consoles</TitleProduct>
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
export default SecondLineProducts;