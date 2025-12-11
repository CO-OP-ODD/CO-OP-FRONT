import { useMemo, useState } from "react";
import ProductBreadcrumbs from "@/features/product/list/product-breadcrumbs/product-breadcrumbs";
import ProductCardShell from "@/features/product/list/product-card-shell/product-card-shell";
import ProductFilterBar from "@/features/product/list/product-filter-bar/product-filter-bar";
import ProductGridSection from "@/features/product/list/product-grid-section/product-grid-section";
import { PRODUCTS } from "@/data/products";
import type { Category } from "@/data/productFilterConstants";

// 컴포넌트 이름을 대문자로 시작
export const Product = () => {
    const [selectedCategory, setSelectedCategory] = useState<Category>("전체");

    const filtered = useMemo(() => {
        if (selectedCategory === "전체") return PRODUCTS;
        return PRODUCTS.filter((p) => p.category === selectedCategory);
    }, [selectedCategory]);

    const topProducts = filtered.slice(0, 3);
    const gridProducts = filtered.slice(3);

    return (
        <div className="product">
            <ProductBreadcrumbs />

            <ProductFilterBar
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
            />

            <ProductCardShell>
                <ProductGridSection
                    topProducts={topProducts}
                    gridProducts={gridProducts}
                />
            </ProductCardShell>
        </div>
    );
};