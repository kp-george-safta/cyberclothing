import { useParams } from "react-router-dom";
import products from "../assets/products.json";

function ProductPage() {
  const { id } = useParams();
  const product = products.find((prod) => Number(prod.id) === Number(id));

  return (
    <div>
      <p>Product ID: {product.id}</p>
      <p>Product ID: {product.name}</p>
      <p>Product ID: {product.price}</p>
      <p>Product ID: {product.currency}</p>
    </div>
  );
}

export default ProductPage;
