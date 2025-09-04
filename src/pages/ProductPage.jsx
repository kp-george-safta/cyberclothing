import { useParams } from "react-router-dom";
import products from "../assets/products.json";
import {useCart} from "../CartContext.jsx";
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useState } from "react";

function ProductPage() {
  const { id } = useParams();
  const product = products.find((prod) => Number(prod.id) === Number(id));
  const {addToCart} = useCart();
  const [showNotif, setShowNotif] = useState(false); 

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

        <ToastContainer />

        <button 
          className="ppcart"
          onClick={() => {
            addToCart(product);
            setShowNotif(true);
            console.log('clicked "Add to cart"')
            toast(
              "Added to cart!",
              {
                
                autoclose: 4000,
              }
            );
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductPage;
