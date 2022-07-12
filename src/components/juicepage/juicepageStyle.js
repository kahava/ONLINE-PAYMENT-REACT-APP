import styled from "styled-components";

export const Container = styled.main`
display: flex;
flex-direction: row;
height: auto;
width: 100%;
padding: 0.5em;
background: #105757; 
justify-content: space-between;
align-items: center;


@media screen and (max-width:480px) {
  display : flex;
  height: auto;
  flex-direction: column;
}
`;