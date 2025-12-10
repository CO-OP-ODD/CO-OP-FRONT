import ScrollStack, { ScrollStackItem } from '@/lib/ScrollStack'
import {ABOUT_ITEMS} from './aboutItems';

export default function AboutUs() {
  return (
    <div>
      <div className="w-full aspect-[4/3] overflow-hidden mb-12">
        <img className="w-full" src="/images/about/hero.png" alt="메인이미지" />
      </div>
      <div className="w-full">
        <h2 className='text-3xl font-bold mb-6 '>Our Brands</h2>
        <p className='text-gray-700 text-base md:text-md'>Sennheiser Group은 Sennheiser 브랜드뿐만 아니라 Neumann과 두 개의 기술 브랜드인 AMBEO 및 Merging을 포함합니다. 당사의 고유한 브랜드를 통해 고객의 요구에 완벽하게 맞춤화된 포괄적인 전문 오디오 솔루션을 제공합니다.</p>
        <ScrollStack>
          {ABOUT_ITEMS.map((item)=>(
            <ScrollStackItem key={item.title}>
              
              <div className="txt flex-col gap-6 w-full">
                <h3 className="mb-3 font-semibold">
                  {item.title}
                </h3>
                <p>{item.description}</p>
              </div>
              <img src={item.image} alt={item.alt} />
              
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </div>
  );
}
