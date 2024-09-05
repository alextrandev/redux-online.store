import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { useEffect } from "react";
import { fetchProducts } from "../store/productSlice";
import { Container } from "react-bootstrap";
import ProductCard from "./ProductCard";

function List() {
  const products = useAppSelector(state => state.products.products);
  // console.log(products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch]);

  return (
    <Container>
      <h1>Products List</h1>
      <Container style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: '2rem' }}>
        {products.map(product => (
          <ProductCard product={product} key={product.id} />
        ))}
      </Container>
    </Container>
  )
}

export default List