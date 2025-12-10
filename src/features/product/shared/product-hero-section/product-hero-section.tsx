export default function ProductHeroSection() {
  return (
    <section className="w-full bg-white pb-[4rem] pt-[7rem]">
      {/* 상단 타이틀 */}
      <div className="mx-auto w-full px-[1rem] text-center">
        <h2 className="text-[1.75rem] md:text-[1.5rem] xs:text-[1.3rem] font-bold leading-relaxed tracking-[-0.02em] mb-[7rem]">
          수십 년의 역사를 거슬러 올라가 청취의 미래를 재정의하는 헤드폰 경험.
          <br />
          가능성은 수도 없이 많고 매순간 몰입감이 넘칩니다.
        </h2>
      </div>

      <div className="mx-auto mb-[10rem] flex max-w-[75rem] grid-cols-1 gap-[2.5rem] px-[1rem] md:grid-cols-2 md:gap-[3.5rem] ">
        {/* 좌측 */}
        <div
          className="flex items-center justify-center bg-[#ECEBF0] mt-40"
          style={{
            width: "38.6875rem",
            height: "auto",
          }}
        >
          <img
            src="/images/product/img08_2.png"
            alt="Sennheiser headphone"
            className="h-auto w-[70%] object-contain"
          />
        </div>

        {/* 우측 */}
        <div
          className="flex flex-col items-center"
          style={{
            width: "26.25rem",
            height: "auto",
          }}
        >
          <div>
            <img
              src="/images/product/img08_3.png"
              alt="Sennheiser headphone"
              className="mb-[1.5rem] h-auto w-full object-contain bg-[#ECEBF0]"
            />
          </div>

          <p className="max-w-[26rem] text-[0.9rem] text-[#333] px-[0.7rem] font-semibold tracking-[-0.02em]">
            압박 없이. 방해 없이. 지금 이 순간에 몰입하다. 이때 우리는 우리
            자신을 발견합니다. 그리고 그러기 위해서는, 단지 들어야 합니다. HD 25
            는 선명함을 되찾아 어디로 움직이든 감동을 느낄 수 있게 합니다.
          </p>
        </div>
      </div>

      {/* 영상 */}
      <div className="mx-auto mt-[4rem] w-full px-[1rem] bg-[#000]">
        <div
          className="relative w-full rounded-2xl"
          style={{ paddingBottom: "56.25%" }}
        >
          <iframe
            className="absolute left-0 top-0 h-full w-full pointer-events-none"
            src="https://www.youtube.com/embed/RdSMPBUYWG0?autoplay=1&mute=1&loop=1&playlist=RdSMPBUYWG0&controls=0&rel=0&modestbranding=1"
            title="Product Experience Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
