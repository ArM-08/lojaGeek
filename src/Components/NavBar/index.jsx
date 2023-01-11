import logo from "./../../assets/images/logo.png";
import {
  NavContainer,
  LogoImg,
  CenterContainer,
  BarraContainer,
  BarraPesquisa,
  Lupa,
  ButtonLogin,
  
} from "./styled";
import lupa from "./../../assets/images/Vector.png";
import { useState } from "react";
import avatar from "./../../assets/images/avatar.png";
import { MenuConta } from "../AvatarMenuConta";

const NavBar = () => {
  const token = sessionStorage.getItem("token");

  const [logado, setLogado] = useState(token != null);

  return (
    <NavContainer>
      <a href="/">
        <LogoImg src={logo} alt="Logo" />
      </a>
      <CenterContainer>
        <BarraContainer>
          <BarraPesquisa placeholder="O que deseja encontrar ?" />
          <Lupa src={lupa} />
        </BarraContainer>
        {!logado && (
          <ButtonLogin as="a" href="/login">
            Login
          </ButtonLogin>
        )}

        {logado && (
          <MenuConta type="submit">
            <img width="20px" src={avatar}></img>
          </MenuConta>
        )}
      </CenterContainer>
    </NavContainer>
  );
};

export default NavBar;
