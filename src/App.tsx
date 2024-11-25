import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Greet from "./components/Greet";
import Login from "./components/Login";
import Person from "./components/Person";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/greet" element={<Greet name="Quang" />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/person"
            element={<Person name={{ first: "Thanh", last: "Quang" }} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
