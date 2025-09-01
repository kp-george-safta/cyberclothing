
import ProductBox from "../components/ProductBox";
function Home() {
  const products = [
    {
      id: 1,
      imgSrc: "/public/products/j4cavestone.png",
      name: "Air Jordan 4 Retro Cave Stone",
      price: "1016",
      currency: "RON",
      tag: "NOU",
    },
    {
      id: 2,
      imgSrc: "/public/products/jordan4 blue.jpg",
      name: "Air Jordan 4 Retro W Denim Worn Blue",
      price: "1016",
      currency: "RON",
      tag: "NOU",
    },
    {
      id: 3,
      imgSrc: "/public/products/jordan4 blue.jpg",
      name: "Air Jordan RETRO...",
      price: "111",
      currency: "EUR",
      tag: "VECHI",
    },
    {
      id: 4,
      imgSrc: "/public/products/jordan4 blue.jpg",
      name: "",
      price: "111",
      currency: "EUR",
      tag: "VECHI",
    },

    {
      id: 5,
      imgSrc: "/public/products/jordan4 blue.jpg",
      name: "Air Jordan RETRO...",
      price: "111",
      currency: "EUR",
      tag: "VECHI",
    },
  ];

  return (
    <div>
      <div className="Home-title">
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
