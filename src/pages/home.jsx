import ProductBox from "../components/ProductBox";

function Home() {
  const products = [
    {
      id: 1,
      imgSrc: "/public/products/j4cavestone.png",
      name: "Air Jordan NON RETRO...",
      price: "1116",
      currency: "RON",
      tag: "NOU",
    },
    {
      id: 2,
      imgSrc: "/public/products/jordan4 blue.jpg",
      name: "Air Jordan RETRO...",
      price: "234",
      currency: "USD",
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
      name: "Air Jordan RETRO...",
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
      <div>Home page</div>

      <div className="product-wrapper">
        {products.map((product) => (
          <ProductBox product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
