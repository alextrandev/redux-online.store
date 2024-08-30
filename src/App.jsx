import { Button } from "react-bootstrap"
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { useEffect } from "react";
import { fetchProducts } from "./store/productSlice";
import ProductCard from "./components/productCard";

function App() {

  const products = useAppSelector(state => state.products.products);
  console.log(products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch]);

  return (
    <div className="">
      {products.map(product => (
        <ProductCard product={product} />
      ))}
    </div>
  )
}

export default App
