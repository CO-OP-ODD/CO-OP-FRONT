export default function ProductExperienceSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full h-auto px-4 pt-10 md:px-0">
        <div className="grid overflow-hidden rounded-none md:grid-cols-2 h-full max-md:flex max-md:flex-col-reverse">
          {/* 왼쪽 텍스트 박스 */}
          <div className="flex h-full flex-col justify-left bg-[#f3f3f5] px-[2rem] py-[2rem]">
            <div>
              <h3 className="text-[1.8rem] font-bold leading-snug tracking-[-0.05em]">
                젠하이저의 탁월함을 경험해 보세요
              </h3>
              <p className="text-[1.6rem] leading-relaxed text-[#545252] tracking-[-0.05em] font-semibold">
                스튜디오, 무대, 또는 카메라 전문가들이 75년간 젠하이저의
                마이크와 헤드폰을 선택한 이유가 있습니다. 젠하이저는 고품질
                디자인과 엄격한 제조 공정을 추구하면서 탁월한 오디오 품질을
                제공하는 전통을 지켜오고 있습니다. 이것이 바로 젠하이저만의
                차별점입니다.
              </p>
            </div>

            {/* 왼쪽버튼 */}
            <div className="mt-6">
              <button
                type="button"
                className="inline-flex items-center rounded-full bg-black px-[1.5rem] py-[1rem] text-[1rem] font-medium text-white
                hover:bg-[#B70A09] hover:text-white last:border-none transition-colors duration-150"
              >
                젠하이저의 탁월함을 경험해보세요
              </button>
            </div>
          </div>

          {/* 오른쪽 이미지 */}
          <div className="relative bg-black h-full">
            <img
              src="/images/product/img4.png"
              alt="Sennheiser Headphones"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* 하단 텍스트 & 버튼 */}
      <div className="mx-auto w-full px-4 pb-14 pt-12">
        <p className="text-[1.8rem] font-bold leading-relaxed tracking-[-0.03em] text-right">
          젠하이저는 품질과 관리에 최선을 다합니다. 그래서 연장 보증 프로그램인
          <br />
          Heisecare에 가입하면 HD 25 상품에 5년 연장 보증을 제공합니다.
        </p>

        <div className="mt-8 flex justify-end">
          <button
            type="button"
            className="
            inline-flex items-center 
            rounded-full bg-[#f3f3f5] px-[3rem] 
            py-[1rem] text-[1.25rem] font-semibold 
            text-[#222] transition-colors duration-150 hover:bg-[#e0e0e4]
            "
          >
            더 알아보기
          </button>
        </div>
      </div>
    </section>
  );
}
