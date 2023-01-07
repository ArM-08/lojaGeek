import logo from "./../../assets/images/Logo.png";
import { FooterContainer, FirstContainer, Logo, TextLinksContainer, Links, FormContainer, FormFale, InputForm, ButtonForm, SecondContainer, TextSecondLine } from "./styled";

const Footer =() => {
    return(
<FooterContainer>
<FirstContainer>
<Logo 
src={logo}
alt="logo"/>
<TextLinksContainer>
<Links href="/">Quem somos nós</Links>
<Links href="/">Politica de Privacidade</Links>
<Links href="/">Programa de fidelidade</Links>
<Links href="/">Nossas Lojas</Links>
<Links href="/">Quero ser franqueado</Links>
<Links href="/">Anuncie aqui</Links>
</TextLinksContainer>
<FormContainer>
    <FormFale>
        <InputForm placeholder="Nome"></InputForm>
        <InputForm  placeholder="Escreva sua mensagem"></InputForm>
        <ButtonForm>Enviar Mensagem</ButtonForm>
    </FormFale>
</FormContainer>
</FirstContainer>
<SecondContainer>
<TextSecondLine>Desenvolvido por Alan Moraes</TextSecondLine>
<TextSecondLine>2023</TextSecondLine>
</SecondContainer>
</FooterContainer>
    )
}
export default Footer;
