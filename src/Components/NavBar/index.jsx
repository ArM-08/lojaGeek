import logo from "./../../assets/images/logo.png";
import { NavContainer, LogoImg, CenterContainer, BarraContainer, BarraPesquisa, Lupa, ButtonLogin } from "./styled";
import lupa from "./../../assets/images/Vector.png"



const NavBar = ()=> {
    return (
        
        <NavContainer>
        <LogoImg
        src={logo}
        alt="Logo"/>
        <CenterContainer>
        <BarraContainer>
        <BarraPesquisa
        placeholder="O que deseja encontrar ?"
        />
        <Lupa
        src={lupa}
        />
        </BarraContainer>
        <ButtonLogin>Login</ButtonLogin>
        </CenterContainer>
        </NavContainer>
    )
}


export default NavBar;