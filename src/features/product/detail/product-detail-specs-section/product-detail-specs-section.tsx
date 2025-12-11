import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { COMMON_PRODUCT_DETAILS } from "@/data/products";

// COMMON_PRODUCT_DETAILS 타입 그대로 받아서 쓰는 컴포넌트
type ProductDetailSpecsSectionProps = {
  details?: {
    features: string[];
    keySpecs: { label: string; value: string }[];
    techSpecs: { label: string; value: string }[];
    techDetailGroups: {
      id: string;
      title: string;
      content: string; // HTML 문자열
    }[];
  };
};

// 기능,주요 사양,기술 사양 섹션 전체를 담당하는 컴포넌트
export default function ProductDetailSpecsSection({
  details = COMMON_PRODUCT_DETAILS,
}: ProductDetailSpecsSectionProps) {
  // 비구조화 할당으로 필요한 데이터만 뽑아서 사용
  const { features, keySpecs, techDetailGroups } = details;

  return (
    <>
      {/* 기능 섹션 - 아코디언 */}
      <section
        id="features"
        className="mx-auto max-w-full px-8 pt-16 pb-6 scroll-mt-20"
      >
        <Accordion type="multiple" className="w-full">
          <AccordionItem value="features">
            <AccordionTrigger className="text-left no-underline hover:no-underline [&>svg]:hidden">
              <h2 className="text-[3rem] font-semibold leading-[1.1]">기능</h2>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="mt-6 list-disc pl-6 text-[1.25rem] leading-[1.8]">
                {features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* 주요 사양 - 아코디언 */}
      <section
        id="key-specs"
        className="mx-auto max-w-full px-8 pt-4 pb-6 scroll-mt-20"
      >
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="key-specs">
            <AccordionTrigger className="text-left hover:no-underline [&>svg]:hidden">
              <h2 className="text-[3rem] font-semibold leading-[1.1]">
                주요 사양
              </h2>
            </AccordionTrigger>

            <AccordionContent>
              <div className="mt-4 w-full">
                {keySpecs.map((spec, idx) => (
                  <div
                    key={idx}
                    className={cn(
                      //className들을 깔끔하게 합치는 유틸 함수.
                      "grid w-full grid-cols-[1.5fr_2fr] items-center px-4 py-4 text-left",
                      "cursor-pointer transition-colors duration-150",
                      "hover:bg-[#B70A09] hover:text-white last:border-none"
                    )}
                  >
                    {/* 항목 이름 */}
                    <span className="text-[1.25rem]">{spec.label}</span>

                    {/* 설명 텍스트 */}
                    <span className="text-[1.25rem]">{spec.value}</span>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* 기술 사양 */}
      <section
        id="tech-specs"
        className="mx-auto max-w-full px-8 pt-4 pb-20 scroll-mt-20"
      >
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="tech-specs">
            <AccordionTrigger className="text-left no-underline hover:no-underline [&>svg]:hidden">
              <h2 className="text-[3rem] font-semibold leading-[1.1]">
                기술 사양
              </h2>
            </AccordionTrigger>

            <AccordionContent className="pb-0">
              {/* 내부 소분류 아코디언 */}
              <Accordion type="single" collapsible className="mt-4 w-full">
                {techDetailGroups.map((group) => (
                  <AccordionItem
                    key={group.id}
                    value={group.id}
                    className="last:border-none"
                  >
                    <AccordionTrigger className="group py-3 text-left text-[0.95rem] md:text-base font-medium no-underline hover:no-underline [&>svg]:hidden">
                      <div className="flex items-center justify-between w-full">
                        <span>{group.title}</span>
                        <div
                          className="
                            bg-[#f4f4f6] text-[#111] 
                            flex h-[3.375rem] w-[3.375rem] items-center justify-center rounded-full 
                            transition-colors duration-200 
                            hover:bg-[#B70A09] hover:text-white 
                            group-data-[state=open]:bg-[#B70A09] group-data-[state=open]:text-white
                          "
                        >
                          <ChevronDown className="h-5 w-5 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                        </div>
                      </div>
                    </AccordionTrigger>

                    <AccordionContent className="px-4 pb-6 pt-1">
                      <div
                        dangerouslySetInnerHTML={{ __html: group.content }}
                      />
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </>
  );
}
