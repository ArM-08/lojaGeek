import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";

const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3vh;
`;
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
`;

const PageContainer = styled.div`
  width: 100%;
  height: auto;
  background: #e5e5e5;
  padding: 50px;
`;
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


`;
const LoginTitle = styled.h2`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
`;

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const usuario = {
      email,
      senha,
    };

    axios
      .post("http://localhost:8000/public/login", usuario)
      .then((resposta) => {
        sessionStorage.setItem("token", resposta.data.access_token);
        alert("Login com sucesso");
        setEmail("");
        setSenha("");
        navigate("/");
      })
      .catch((erro) => {
        if (erro?.response?.data?.message) {
          alert(erro.response.data.message);
        } else {
          alert("Erro Inesperado, entre em contato com ADM");
        }
      });
  };

  return (
    <>
      <NavBar />
      <PageContainer>
        <FormLogin onSubmit={handleSubmit}>
          <LoginTitle>Iniciar Sessão</LoginTitle>
          <InputLogin
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Escreva seu email"
          ></InputLogin>
          <InputLogin
            required
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Escreva sua senha"
          ></InputLogin>
          <ButtonLogin type="submit">Entrar</ButtonLogin>
        </FormLogin>
      </PageContainer>
      <Footer />
    </>
  );
};
export default Login;
