import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductSkeletonPage from "@/features/product/shared/product-skeleton-page/ProductSkeletonPage.tsx";
import ProductPage from "@/features/product/list/product-page/product-page.tsx";

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
