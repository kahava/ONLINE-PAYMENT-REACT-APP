import styled from "styled-components";
import backImg from "../../images/home2.svg";

export const Container = styled.main`
height: 100vh;
width: 100vw;
background-image: url(${backImg});
background-position: center;
background-size: cover;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const Heading = styled.h1`
font-size: 2rem;
text-transform: uppercase;
	background: linear-gradient(to right, #09009f 0%,   #00ff95 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	font: {
		size: 2rem;
		
	};
font-weight: 1000;
`
export const Desc = styled.p`
font-size: 2rem;
color: black;
font-weight: 700;
`
export const Button = styled.button`
height: 3em;
width: 10em;
border-width: 0.2em;
color: #EEB10B;
font-size: 1rem;
font-weight: 700;
border-color: #00ff95;
border-radius: 1.5rem;
`;

export const Footer = styled.div`
height: 3em;
width: 100vw;
display: flex;
/* justify-content: space-around; */
align-items: center;
bottom: 0px;
position: fixed;

`;

export const FooterImg = styled.img`
height: 2em;
width: 2em;
`;

export const FooterPara = styled.p`
font-size: 1.5rem;

`