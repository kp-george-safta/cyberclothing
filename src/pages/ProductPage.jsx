import { useParams } from "react-router-dom";
import products from "../assets/products.json";

function ProductPage() {
  const { id } = useParams();
  const product = products.find((prod) => Number(prod.id) === Number(id));

  return (
    <div className="ppbox">
      <img
        className="ppimg"
        width={"500px"}
        height={"500px"}
        src={product.imgSrc}
      ></img>
      <div className="pptext">
        <h1 className="ppname"> {product.name}</h1>
        <p className="ppid"> {product.id}</p>
        <div className="ppvalue">
          <p className="ppprice"> {product.price}</p>
          <p className="ppcurrency"> {product.currency}</p>
        </div>
        <p className="pptag">{product.tag}</p>

        <button className="ppcart">Add to cart</button>
      </div>
    </div>
  );
}

export default ProductPage;
