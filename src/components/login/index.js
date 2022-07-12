import { Button, Container, Desc, Footer, FooterImg, FooterPara, Heading } from "./loginStyle"
import kdImg from "./../../images/kd.jpg";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const {loginWithRedirect} = useAuth0();
  return (
    
    <Container>
     <Heading>Welcome Grace Fresh Juice</Heading>
     <Desc>Login to our app to choose your favorite juice</Desc> 
     <Button onClick={()=> loginWithRedirect() }>Login</Button>
     <Footer>
       <FooterPara>Powered by</FooterPara>
       <FooterImg src={kdImg} alt="Kahava Designer" />
     </Footer>
    </Container>
  )
}

export default Login;