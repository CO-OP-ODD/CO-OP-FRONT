import './App.scss'
import ProductSkeletonPage from "@/pages/ProductSkeletonPage";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* 첫 로딩 시 스켈레톤 페이지 */}
        <Route path="/products/loading" element={<ProductSkeletonPage />} />

        {/* 실제 상품 페이지 */}
        <Route path="/products" element={<ProductPage />} />

        {/* 기본 경로 */}
        <Route path="*" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}
