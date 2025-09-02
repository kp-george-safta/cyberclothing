import {Link} from "react-router-dom";
const ProductBox = ({product}) => (
 <Link to={`/${product.id}/productpage`}
    state={{ product }}     // pass product as route state
    style={{ textDecoration: "none", color: "inherit" }}>
 <div className="product-box">
    <div className="product-image">
      <img src={product.imgSrc} alt="shoe" style={{width: '100%'}} />
      <img className="favorite" src="" alt="" />
    </div>
    <div>
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">
        {product.price}
        <span className="product-currency">{product.currency}</span>
      </p>
      <span className="product-tag">{product.tag}</span>
    </div>
  </div>
  </Link>
);

export default ProductBox;
