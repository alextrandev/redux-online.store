import { Container } from "react-bootstrap";
import { useAppSelector } from "../hooks/hooks";
import ProductCard from "./ProductCard";

function Cart() {
  const cart = useAppSelector(state => state.products.cart);
  // console.log(cart);

  return (
    <Container>
      <h1>Cart</h1>
      {cart.length > 0
        ? <Container style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: '2rem' }}>
          {cart.map(product => (
            <ProductCard product={product} key={product.id} />
          ))}
        </Container>
        : <Container>Cart is empty</Container>
      }
    </Container>
  )
}

export default Cart