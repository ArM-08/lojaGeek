import axios from "axios";
import { useState } from "react";
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
const Input = styled.input`

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
cursor:pointer;
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


const Cadastrar = () => {

const [name, setName] = useState('');
const [email, setEmail] = useState('')
const [senha, setSenha] = useState('')
const [endereco, setEndereco] = useState('')
const [conta, setConta] = useState('')
const [cep, setCEP] = useState('')

const handleSubmit = (e) =>{
    e.preventDefault();
    const usuario = {name, email, senha, endereco, cep, conta}
    axios.post('http://localhost:8000/public/registrar', usuario)
    .then(()=> {
        alert('Cadastrado com sucesso')
        setName('')
        setEmail('')
        setSenha('')
        setEndereco('')
        setConta('')
        setCEP('')
       
    })
    .catch(error=>{
        if( error?.response?.data?.message){
            alert(error.response.data.message)
        } else {
            alert('Erro desconhecido, Contate a ADM')
        }
        
    })
                  }
                  

    return (
        <>
        <NavBar/>
        <PageContainer>
            <FormLogin onSubmit={handleSubmit}>
                <LoginTitle>Cadastrar</LoginTitle>
                <Input value={name}  onChange={e => setName(e.target.value)} placeholder="Nome"></Input>
                <Input value={email}  onChange={e => setEmail(e.target.value)} placeholder="Escreva seu email"></Input>
                <Input value={senha}  onChange={e => setSenha(e.target.value)} placeholder="Escreva sua senha"></Input>
                <Input value={endereco}  onChange={e => setEndereco(e.target.value)} placeholder="Endereço"></Input>
<Input value={conta}  onChange={e => setConta(e.target.value)} placeholder="conta"></Input>
<Input value={cep}  onChange={e => setCEP(e.target.value)} placeholder="CEP"></Input>
<ButtonLogin type="submit" >Cadastrar</ButtonLogin>

            </FormLogin>
            </PageContainer>
        <Footer/>
        </>
    )
}
export default Cadastrar;
