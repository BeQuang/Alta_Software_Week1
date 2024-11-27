import { Product } from "./Products/ProductSlice";

const validateProduct = (product: Product): Promise<Product> =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      if (product.title.length === 0) {
        reject("No title");
      }
      if (product.price <= 0) {
        reject("Price is not incorrect");
      }
      resolve(product);
    }, 1000)
  );

export default validateProduct;
