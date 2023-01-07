import styled from "styled-components";
import hero from "./../../assets/images/hero.png"



export const ImgHeaderContainer = styled.div`
Display: flex;
width 100vw;
background: linear-gradient(180deg, rgba(0, 0, 0, 0) 41.15%, rgba(0, 0, 0, 0.8) 100%), url(${hero});
background-repeat: no-repeat;
background-position: center;
background-size: cover;
min-height: 352px;
height: auto;

`
export const TextContainer = styled.div`
width: 90%;
height: auto;
margin: 0 auto;
flex-direction: column;
display: flex;
align-items: start;

justify-content: center;
`


export const TitleImgHeader = styled.h1`
color: #FFF;
font-size: 60px;
font-family: 'Raleway';
font-style: normal;
`
export const TextImgHeader = styled.h2`
color: #FFF;
font-family: 'Raleway';
font-style: normal;
`
export const ButtonHeader = styled.button`
padding: 16px;
gap: 10px;
width: 130px;
height: 51px;
background-color: #2A7AE4;
color: #FFF;
border: none;
margin-bottom: 30px;
font-family: 'Raleway';
font-style: normal;
`
