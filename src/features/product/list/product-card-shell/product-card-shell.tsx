import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

type ProductCardShellProps = {
  children?: React.ReactNode;
  highlight?: boolean;
  to?: string; // 링크로 이동할 경로 (값이 있으면 카드 전체를 Link로 렌더링)
};

export default function ProductCardShell({
  children,
  highlight,
  to,
}: ProductCardShellProps) {
  // 공통으로 사용할 클래스 정의 (Link든 div든 동일하게 적용)
  const className = cn(
    "js-product-card",
    "overflow-hidden rounded-2xl border bg-card/70",
    highlight && "lg:col-span-2 lg:row-span-2" // highlight가 true이면 상단의 큰 카드 레이아웃 적용하기
  );

  // to 값이 있으면 카드 전체를 <Link>로 렌더링 (클릭 시 상세페이지 이동)
  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }

  // to 값이 없으면 기존처럼 그냥 div로 렌더링
  return <div className={className}>{children}</div>;
}
