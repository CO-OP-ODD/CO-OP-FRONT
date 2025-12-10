import ProductDetailHero from "@/features/product/detail/product-detail-hero/product-detail-hero";
import ProductDetailNav from "@/features/product/detail/product-detail-nav/product-detail-nav";
import ProductDetailPage from "@/features/product/detail/product-detail-page/product-detail-page";
import ProductDetailSpecsSection from "@/features/product/detail/product-detail-specs-section/product-detail-specs-section";
import ProductExperienceSection from "@/features/product/shared/product-experience-section/product-experience-section";
import ProductHeroSection from "@/features/product/shared/product-hero-section/product-hero-section";


export const ProductDetail = () => {
    
    return (
        <div className="product-detail">
            <ProductDetailNav />
            
            <ProductDetailHero />
            
            <ProductDetailPage />
            
            <ProductDetailSpecsSection />
            
            <ProductExperienceSection />
            
            <ProductHeroSection />
        </div>
    );
};