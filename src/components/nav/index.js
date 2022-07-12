import { useAuth0 } from "@auth0/auth0-react"

import { Nav, Logo, LogOut } from "./navStyle"

const Navbar = () => {
  const {logout} = useAuth0();
  return (
      <Nav>
    <Logo>GraceJuice</Logo>
    <LogOut onClick={()=> logout()}>Logout</LogOut>
    </Nav>
  )
}

export default Navbar;