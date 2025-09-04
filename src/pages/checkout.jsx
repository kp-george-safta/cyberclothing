import { useCart } from "../CartContext.jsx";
const Checkout = () => {
  const { cart, removeFromCart } = useCart();

  // multiply price * quantity for total
  const total = cart.reduce(
    (sum, product) => sum + Number(product.price) * product.quantity,
    0
  );

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
                <div className="checkout-pic">
                  <img
                    src={product.imgSrc}
                    alt={product.name}
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="checkout-name">
                  {product.name} - {product.price} {product.currency}
                  <p className="checkout-quantity">Quantity: x{product.quantity}</p>
                  <button
                    className="remove-button"
                    onClick={() => removeFromCart(product.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      {cart.length > 0 && (
        <div className="checkout-total">
          Total cost: {total} {cart[0]?.currency}
        </div>
      )}
    </div>
  );
};

export default Checkout;
