import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Catalogo from "./pages/Catalogo";
import Sobre from "./pages/Sobre";
import Producto from "./pages/Producto";

export default function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/producto/:slug" element={<Producto />} />
      </Routes>
    </Layout>
  );
}
