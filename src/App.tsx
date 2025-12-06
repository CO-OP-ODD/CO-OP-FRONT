import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductSkeletonPage from "@/pages/ProductSkeletonPage";
import ProductPage from "@/pages/ProductPage";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* 처음 접속하면 스켈레톤 페이지 */}
        <Route path="/" element={<ProductSkeletonPage />} />

        {/* 실제 상품 페이지 */}
        <Route path="/products" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}
