import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductSkeletonPage from "@/pages/product/shared/ProductSkeletonPage";
import ProductPage from "@/pages/product/list/ProductPage";
import ProductDetailPage from "./pages/product/detail/ProductDetailPage";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* 처음 접속하면 스켈레톤 페이지 */}
        <Route path="/" element={<ProductSkeletonPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
      </Routes>
    </Router>
  );
}
