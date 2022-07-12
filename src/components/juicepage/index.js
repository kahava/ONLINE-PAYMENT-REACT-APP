import { MangoJuice, PassionJuice, AvocadoJuice } from "../juice";
import {Container} from "./juicepageStyle";
import Navbar from "../nav";

const JuicePage = () => {
  return (
    <>
    <Navbar/>
    <Container>
<MangoJuice/>
<AvocadoJuice/>
<PassionJuice/>
    </Container>
    </>
  )
}
export default JuicePage;