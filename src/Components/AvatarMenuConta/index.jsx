import { useState,  useRef} from "react"
import styled from "styled-components"


const MenuContainer = styled.div`
position: relative;
display: flex;
justify-content: center;
align-items: center;
font-family: 'Raleway';
font-style: normal;

`




const MenuTrigger = styled.button`
background: #ffffff;
    border-radius: 90px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 6px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    border: none;
    vertical-align: middle;
    transition: box-shadow 0.4s ease;
    margin-left: auto;
    border: 1px solid #2A7AE4;
&&:hover {
    box-shadow: 0 1px 9px rgba(0, 0, 0, 0.5);

`
const TriggerSpan = styled.span`
font-weight: 700;
vertical-align: middle;
font-size: 14px;
margin: 0 10px;
`


const Menu = styled.nav`
background: #ffffff;
border-radius: 8px;
position: absolute;
top: 60px;
right: 0;
width: 300px;
box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
opacity: 0;
visibility: hidden;
transform: translateY(-20px);
transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
&.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}
`
const Avatar = styled.img`
border-radius: 90px;
`

const Lista = styled.ul`
list-style: none;
padding: 0;
margin: 0;
`

const OpcaoLista = styled.li`
border-bottom: 1px solid #dddddd;
cursor:pointer;
`
const LinkLista = styled.a`
text-decoration: none;
color: #333333;
padding: 15px 20px;
display: block;
`

   export  const MenuConta = () =>{
     const logout =()=>{
      sessionStorage.removeItem('token')
      location.reload()
     }
        const refDrop = useRef(null);
        const [open, setOpen] = useState(false)
      const onClick = () => setOpen(!open);
      
      return (
        <div>
          <MenuContainer>
            <MenuTrigger onClick={onClick}>
              <TriggerSpan>User</TriggerSpan>
              <Avatar
              width="30px"
                src="https://www.clipartmax.com/png/middle/97-978328_avatar-icon-free-fa-user-circle-o.png"
                alt="User avatar"
              />
            </MenuTrigger>
            <Menu
              ref={refDrop}
              className={`menu ${open  ? "active" : "inactive"}`}
            >
              <Lista>
                <OpcaoLista>
                  <LinkLista href="#">Minha Conta</LinkLista>
                </OpcaoLista>
                <OpcaoLista>
                  <LinkLista href="#">Historico</LinkLista>
                </OpcaoLista>
                <OpcaoLista onClick={logout}>
                  <LinkLista>Logout</LinkLista>
                </OpcaoLista>
              </Lista>
            </Menu>
          </MenuContainer>
        </div>
      );
    }