
import AnimatedContent from "@/components/reactbits/AnimatedContent";
import {ABOUT_ITEMS} from '@/data/about/aboutItems';
import Folder from "@/components/reactbits/Folder";

export default function AboutUs() {
  return (
    <div>
  <div className="w-full aspect-[4/3] overflow-hidden mb-12">
    <AnimatedContent distance={90} duration={0.9} delay={0.2}>
      <img className="w-full" src="/images/about/hero.png" alt="메인이미지" />
    </AnimatedContent>
  </div>

  <div className="w-full">
    <AnimatedContent distance={90} duration={0.9} delay={0.2}>
      <h2 className="text-3xl font-bold mb-6">Our Brands</h2>
      <p className="text-gray-700 text-base md:text-md">
        Sennheiser Group은 Sennheiser 브랜드뿐만 아니라 Neumann과 두 개의 기술 브랜드인 AMBEO 및 Merging을 포함합니다. 당사의 고유한 브랜드를 통해 고객의 요구에 완벽하게 맞춤화된 포괄적인 전문 오디오 솔루션을 제공합니다.
      </p>
    </AnimatedContent>
    <AnimatedContent distance={90} duration={0.9} delay={0.3}>
    <div className="w-full min-h-[400px] overflow-x-hidden relative flex justify-center items-center mt-12 mb-12 pt-12 ">
      <Folder
        size={2}
        color="#BA1F1E"
        className="custom-folder origin-center" // origin-center 중요
        items={ABOUT_ITEMS.map(item => (
          <img
            key={item.title}
            src={item.image}
            alt={item.alt}
            className="w-full h-full object-cover rounded-[10px] origin-center"
          />
        ))}
      />
    </div>
    </AnimatedContent>
  </div>
</div>


  );
}
