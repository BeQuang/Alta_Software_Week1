import { useDispatch } from "react-redux";
import { getCartProduct, getTotalPrice, removeFromCart } from "./cart.slice";
import { useSelector } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();

  const cartProducts = useSelector(getCartProduct);
  const totalPrice = useSelector(getTotalPrice);

  const handleRemoveFromCart = (productId: string) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartProducts.map((product) => (
        <div key={product.id}>
          <span>{product.title}</span>
          <span> Count {product.amount}</span>
          <span> Price: ${product.price}</span>
          <button onClick={() => handleRemoveFromCart(product.id)}>
            Remove
          </button>
        </div>
      ))}
      <p>Total Price: ${totalPrice}</p>
    </div>
  );
};

export default Cart;
