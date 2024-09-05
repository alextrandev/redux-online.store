import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useAppSelector } from "../hooks/hooks"

function StoreNavBar() {
  const cart = useAppSelector(state => state.products.cart);

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand>Online Store</Navbar.Brand>
          <Nav className="me-auto">
            <Link to={"/"} style={{ color: "white", padding: "10px" }}>
              Home
            </Link>
            <Link to={"/cart"} style={{ color: "white", padding: "10px" }}>
              Cart &#40;{cart.reduce((total, product) => total + product.price, 0)}€&#41;
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default StoreNavBar