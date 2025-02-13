import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/index.jsx";
import About from "./pages/About/index.jsx";
import Error from "./pages/Error/index.jsx";
import Property from "./pages/Property/index.jsx";
import "./styles/main.scss";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/property/:id" element={<Property />} />
      <Route path="/about" element={<About />} />
      <Route path="/error" element={<Error />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default App;