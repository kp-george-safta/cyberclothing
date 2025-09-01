
import ProductBox from "../components/ProductBox";
function Home() {
  const products = [
    {
      id: 1,
      imgSrc: "/public/products/j4cavestone.png",
      name: "Air Jordan 4 Retro Cave Stone",
      price: 1016,
      currency: "RON",
      tag: "NOU",
    },
    {
      id: 2,
      imgSrc: "/public/products/jordan4 blue.jpg",
      name: "Air Jordan 4 Retro W Denim Worn Blue",
      price:1016,
      currency: " RON",
      tag: "NOU",
    },
    {
      id: 3,
      imgSrc: "public/products/nikeshox.jpg",
      name: "Nike W Shox TL",
      price: 769 ,
      currency: "RON",
      tag: "TRENDING",
    },
    {
      id: 4,
      imgSrc: "public/products/y3.jpg",
      name: "Y-3 NIZZASTAR HI",
      price: 1899 ,
      currency: "RON",
      tag: "TRENDING",
    },

    {
      id: 5,
      imgSrc: "/public/products/HOKA.jpg",
      name: "HOKA® M Clifton 10",
      price: 803 ,
      currency: "RON",
      tag: "NOU",
    },
    {
      id: 6,
      imgSrc: "public/products/j1yellow.webp",
      name: "Air Jordan 1 Retro High OG Yellow Ochre ",
      price: 860 ,
      currency: "RON",
      tag: "NOU",
    },
    {
      id: 7,
      imgSrc: "public/products/vans.webp",
      name: "VANS KNU SKOOL",
      price: 415,
      currency: "RON",
      tag: "NOU",
    },
    {
      id: 8,
      imgSrc: "public/products/nikeaf1.webp",
      name: "NIKE AIR FORCE 1",
      price: 599,
      currency: "RON",
      tag: "TRENDING",
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
