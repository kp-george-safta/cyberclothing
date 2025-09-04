import { useCart } from "../CartContext.jsx";
import "/Users/admin/Desktop/dev/cyberclothing/src/styles/pages/checkout.scss";

const Checkout = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div>
      <h1 className="checkout-title">Your Cart:</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((product) => (
            <li key={product.id}>
              <div className="checkout-box">
                {" "}
                <div className="checkout-pic">
                  <img
                    src={product.imgSrc}
                    alt="shoe"
                    style={{ width: "100%" }}
                  ></img>{" "}
                </div>
                <div className="checkout-name">
                  {" "}
                  {product.name} - {product.price} {product.currency}
                  <button
                    className="remove-button"
                    onClick={() => removeFromCart(product.id)}
                  >
                    Remove
                  </button>
                </div>{" "}
              </div>{" "}
            </li>
          ))}
        </ul>
      )}
      <div className="checkout-total">Total cost:</div>
    </div>
  );
};

export default Checkout;
