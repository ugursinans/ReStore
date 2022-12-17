import Container from "@mui/material/Container";
import { useState, useEffect } from "react";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";

export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://localhost:5001/Product")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <Container>
      <ProductList products={products}></ProductList>
    </Container>
  );
}
