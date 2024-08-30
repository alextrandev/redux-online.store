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
    <div>
      <h1>Products List</h1>
      {products.map(product => (
        <Container key={product.id}>
          <ProductCard product={product} />
        </Container>
      ))}
    </div>
  )
}

export default List