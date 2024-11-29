import { Route, Routes } from "react-router-dom";
import "./App.css";
import Create from "./firebase/components/Create";
import Details from "./firebase/components/Details";
import Card from "./firebase/components/Card";
import NotFound from "./firebase/components/NotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/create" element={<Create />} />
        <Route path="/hotels/:id" element={<Details />} />
        <Route path="/" element={<Card />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
