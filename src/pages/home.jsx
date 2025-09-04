import React, { useEffect } from "react";
import products from "../assets/products.json";
import ProductBox from "../components/ProductBox";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

function Home() {
  const [siteProducts, setSiteProducts] = React.useState([]);

  useEffect(() => {
    setSiteProducts(products);
  }, [products]);

  const search = (event) => {
    const searchText = event.target.value;

    if (searchText === "") {
      setSiteProducts(products);
    } else {
      const prod = siteProducts.filter((el) =>
        el.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setSiteProducts(prod);
    }
  };

  const options = ["Price Ascending", "Price Descending", "Alphabetical"];

  const sortProduct = (e) => {
    if (e === "Alphabetical") {
      const alph = siteProducts
        .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
        .slice();
      setSiteProducts(alph);
    } else if (e === "Price Ascending") {
      const priceAscending = siteProducts
        .sort((a, b) => (a.price > b.price ? 1 : b.price > a.price ? -1 : 0))
        .slice();

      setSiteProducts(priceAscending);
    } else if (e === "Price Descending") {
      const priceDesc = siteProducts
        .sort((a, b) => (a.price < b.price ? 1 : b.price < a.price ? -1 : 0))
        .slice();

      setSiteProducts(priceDesc);
    }
  };

  return (
    <div>
      <div className="home-title">
        <h1>Home page</h1>
        <p></p>
        <p>Welcome to our sneaker section</p>
      </div>
      <div className="search-bar">
        <input
          type="search"
          placeholder="Search..."
          onChange={(event) => search(event)}
        ></input>
        <Dropdown
          options={options}
          onChange={(e) => sortProduct(e.value)}
          placeholder="Filters"
        />
      </div>

      <div className="product-wrapper">
        {siteProducts.map((product) => (
          <ProductBox product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
