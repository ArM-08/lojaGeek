import styled from "styled-components";

export const FooterContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
`

export const FirstContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
align-items: center;
background: #EAF2FD;
height: auto;
padding: 64px;
gap: 115px;
width: 100%;

`

export const SecondContainer = styled.div`
height: 102px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 5px;


`

export const Logo = styled.img`
display: flex;
align-Self: start;
`
export const TextLinksContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-Self: start;
gap: 3.5vh;
`

export const Links = styled.a`
font-family: 'Raleway';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
text-decoration: none;
color: #464646;
`

export const FormContainer = styled.div`

`

export const FormFale = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
gap: 2vh;
`

export const InputForm = styled.input`
width: 560px;
height: 56px;
background: #FFFFFF;
border-radius: 4px;
border:none;
font-family: 'Raleway';
font-style: normal;
@media (max-width: 768px) {
    width: 434px;
`

export const ButtonForm = styled.button`
width: 165px;
height: 51px;
background: #2A7AE4;
border: none;
color : #FFF;
font-family: 'Raleway';
font-style: normal;
`

export const TextSecondLine = styled.h3`
font-family: 'Raleway';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 1px;
text-align: center;
`
