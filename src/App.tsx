import "./App.css";
import Cart from "./redux/Cart/Cart";
import ProductForm from "./redux/Products/ProductForm";
import ProductList from "./redux/Products/ProductList";

function App() {
  return (
    <div className="App">
      <ProductList />
      <ProductForm />
      <Cart />
    </div>
  );
}

export default App;
