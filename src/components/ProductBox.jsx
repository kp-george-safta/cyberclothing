import {Link} from "react-router-dom";
const ProductBox = ({product}) => (
 <Link className="product-box" to={`/${product.id}/productpage`}
    state={{ product }}     // pass product as route state
    style={{ textDecoration: "none", color: "inherit" }}>
    <div className="product-image-wrapper">
      <div className="product-image" style={{ backgroundImage: `url(${product.imgSrc})` }}>
        {/* <img src={product.imgSrc} alt="shoe" /> */}
      </div>
    </div>
    <div className="product-details">
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">
        {product.price}
        <span className="product-currency">{product.currency}</span>
      </p>
      <span className="product-tag">{product.tag}</span>
    </div>
  </Link>
);

export default ProductBox;
