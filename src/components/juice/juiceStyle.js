import styled from "styled-components";



export const Container  = styled.div`
display: flex;
flex-direction: column;
justify-items: center;
align-items: center;
justify-content: center;
height: 28em;
max-width: 90%;
background: white;
margin-top: 0.5em;
border-radius: 1.5em;



`;


export const JuiceName = styled.h1`
font-size: 1.5rem;
color: #0A8F8B;


`;

export const JuiceDesc = styled.p`
font-size: 1rem;
color: #0A8F8B;
font-weight: 700;

`
export const JuiceImg = styled.img`
height: 18.75em;
max-width: 21.875em;
`;
export const CheckoutDiv = styled.div`
height: 4em;
width: 16em;
display: flex;
justify-content: space-between;
align-items: center;


`

export const PriceDiv = styled.h1`
font-size: 2rem;
color: #EBBD05;
font-weight: 700;
`

export const Button = styled.button`
height: 3em;
width: 7em;
background: radial-gradient(#91762E, #F3B408);
border-radius: 1.5em;
color: #03FBC0;
font-size: 1rem;
font-weight: 600;
align-items: center;
justify-items: center;
border: none;
`;