import { useSelector } from "react-redux";
import { getProductSelector, Product, removeProduct } from "./ProductSlice";
import { useDispatch } from "react-redux";
import { addToCart } from "../Cart/cart.slice";

const ProductList = () => {
  const products = useSelector(getProductSelector);
  const dispatch = useDispatch();

  const removeStore = (id: string) => {
    dispatch(removeProduct(id));
  };

  const addToCartHandle = (product: Product) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <h2>List item</h2>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <span>
              {product.title} Price: {product.price}
            </span>
            <button onClick={() => removeStore(product.id)}>Remove</button>
            <button onClick={() => addToCartHandle(product)}>
              Add to cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
