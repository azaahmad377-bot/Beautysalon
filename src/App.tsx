import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Layanan from "./pages/Layanan";
import Tentang from "./pages/Tentang";
import Kontak from "./pages/Kontak";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/layanan" element={<Layanan />} />
        <Route path="/tentang" element={<Tentang />} />
        <Route path="/kontak" element={<Kontak />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;