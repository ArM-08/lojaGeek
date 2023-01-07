import styled from "styled-components";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";


const FormLogin = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 3vh;

`
const InputLogin = styled.input`
width: 423px;
height: 63.13px;
border: none;
font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
color: #A2A2A2;
@media (max-width: 768px) {
    width: 275px;
    height: 41px
`

const PageContainer = styled.div`
width:100%;
height:auto;
background: #E5E5E5;
padding: 50px;


`
const ButtonLogin = styled.button`
width: 423px;
height: 63.13px;
background: #2A7AE4;
color: #FFF;
Border: none;
font-family: 'Raleway';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 21px;
@media (max-width: 768px) {
    width: 109px;
    height: 40px


`
const LoginTitle = styled.h2`
font-family: 'Raleway';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 21px;`


const Login = () => {
    return (
        <>
        <NavBar/>
        <PageContainer>
            <FormLogin>
                <LoginTitle>Iniciar Sessão</LoginTitle>
<InputLogin placeholder="Escreva seu email"></InputLogin>
<InputLogin placeholder="Escreva sua senha"></InputLogin>
<ButtonLogin>Entrar</ButtonLogin>
            </FormLogin>
            </PageContainer>
        <Footer/>
        </>
    )
}
export default Login;