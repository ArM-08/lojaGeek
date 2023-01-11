import styled from "styled-components";



export const NavContainer = styled.header`
display: flex;
width: 90vw;
height: 115px;
align-items: center;
margin: 0 auto;
gap: 10px;
background: #FFF
border: 1px solid #EEE;



`
export const LogoImg = styled.img`
width: 176px;
height: 50px;
flex: none;
order: 0;
flex-grow: 0;
@media (max-width: 1024px) {
    width: 100px;
    height: 28px;
`
export const BarraContainer = styled.div`
display: flex;
width: auto;
height:40px;
align-items: center;
background-color: #F5F5F5;
border-radius: 20px;
padding: 3px ;
@media (max-width: 536px) {
  width: 0px;
  background-color: #FFF

`

export const BarraPesquisa = styled.input`
width: 393px;
font-family: 'Raleway';
font-style: normal;
height: 40px;
background-color: #F5F5F5;
border-radius: 20px;
display: flex;
flex-direction: row;
align-items: center;
padding: 3px;
border: none;
color: #A2A2A2;
@media (max-width: 1024px) {
    width: 272px;}
@media (max-width: 536px) {
   visibility: hidden;
`
export const CenterContainer = styled.div`
display: flex;
width: 100%;

align-items: center;




justify-content: space-between;
`


export const Lupa = styled.img`
`


export const ButtonLogin = styled.button`

display: flex;
box-sizing: border-box;
text-align: center;
text-decoration: none;
width: 182px;
font-family: 'Raleway';
font-style: normal;
height: 51px;
color: #2A7AE4;
border: 1px solid #2A7AE4;
background-color: #FFF;
justify-content: center;
align-items: center;
font-size: 15px;


&:hover{
    background-color: #2A7AE4;
    color: #FFF}
}
@media (max-width: 1024px) {
    width: 166px;
    height: 40px;

@media (max-width: 536px) {
    width: 133px;
    height: 40px;
`

