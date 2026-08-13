import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Catalogo from "./pages/Catalogo";
import Sobre from "./pages/Sobre";
import Producto from "./pages/Producto";

export default function App() {
  const { pathname } = useLocation();

  return (
    <Layout>
      <ScrollToTop />
      {/* key={pathname} forces a remount on route change, which restarts
          the .rs-page-fade CSS animation — a cheap page-transition without
          pulling in a routing-transition library. */}
      <div key={pathname} className="rs-page-fade">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/producto/:slug" element={<Producto />} />
        </Routes>
      </div>
    </Layout>
  );
}
