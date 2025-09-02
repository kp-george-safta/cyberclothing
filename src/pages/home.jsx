import products from '../assets/products.json';
import ProductBox from "../components/ProductBox";

function Home() {
  return (
    <div>
      <div className="home-title">
        <h1>Home page</h1>
        <p></p>
        <p>Welcome to our sneaker section</p>
      </div>

      <div className="product-wrapper">
        {products.map((product) => (
          <ProductBox product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
