import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductSkeletonPage from "@/features/product/shared/product-skeleton-page/ProductSkeletonPage";
import ProductPage from "@/features/product/list/product-page/product-page";
import ProductDetailPage from "@/features/product/detail/product-detail-page/product-detail-page";

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
