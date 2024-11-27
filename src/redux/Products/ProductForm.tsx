import { useState } from "react";
import {
  addProduct,
  addProductAsync,
  getErrorMessage,
  Product,
} from "./ProductSlice";
import { useAppDispatch } from "../store.hooks";
import { useSelector } from "react-redux";

const ProductForm = () => {
  const dispatch = useAppDispatch();
  const errorMessage = useSelector(getErrorMessage);

  const [product, setProduct] = useState<Product>({
    title: "",
    price: 0,
    id: "",
  });

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) =>
    setProduct((prev) => {
      (prev as any)[name] = value;
      const newValue = { ...prev };
      return newValue;
    });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addProductAsync(product));
  };

  return (
    <>
      <h2>Add Product to the store</h2>
      {errorMessage && <span>error: {errorMessage}</span>}
      <form onSubmit={handleSubmit}>
        <input
          style={{ border: errorMessage ? "1px solid red" : "1px solid black" }}
          type="text"
          placeholder="Product title"
          name="title"
          value={product.title}
          onChange={handleChange}
        />
        <input
          style={{ border: errorMessage ? "1px solid red" : "1px solid black" }}
          type="number"
          placeholder="Product price"
          name="price"
          value={product.price}
          onChange={handleChange}
        />
        <input
          style={{ border: errorMessage ? "1px solid red" : "1px solid black" }}
          type="text"
          placeholder="Product id"
          name="id"
          value={product.id}
          onChange={handleChange}
        />
        <button type="submit">Add product</button>
      </form>
    </>
  );
};

export default ProductForm;
