
import type { HistoryEntry } from "./types";
import AnimatedContent from "@/components/animation/AnimatedContent";


interface HistoryItemProps {
  item: HistoryEntry;
  delay: number;
}

export const HistoryItem = ({ item, delay }: HistoryItemProps) => {

  return (
    <AnimatedContent
      distance={120}
      direction="vertical"
      duration={1.2}
      delay={delay}
      threshold={0.35}
      ease="power3.out"
      initialOpacity={0}
      animateOpacity
    >
      <div className="flex flex-col md:flex-row gap-4 py-12 border-b border-gray-400">
        
        {/* Year */}
        <AnimatedContent distance={20} duration={0.8} delay={0.1} >
          <div className="md:w-24 flex-shrink-0">
            <span className="text-lg md:text-xl font-bold text-black">
              {item.year}
            </span>
          </div>
        </AnimatedContent>

        {/* Image */}
        <AnimatedContent distance={20} duration={0.9} delay={0.25}>
        <div className="w-full md:w-[320px] flex-shrink-0">
          <div className="aspect-[3/2] w-full bg-gray-200 overflow-hidden">
            {item.imageUrl && (
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover hover:grayscale-0 transition-all duration-500"
                loading="lazy"
              />
            )}
          </div>
        </div>
        </AnimatedContent>

        {/* Text Column */}
        <AnimatedContent distance={20} duration={1.0} delay={0.35} className="flex">
        <div className="flex-1 pt-2 flex flex-col ml-12 flex justify-end">
          <h3 className="font-semibold mb-3">{item.title}</h3>
          <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
            {item.description}
          </p>
        </div>
        </AnimatedContent>

      </div>
    </AnimatedContent>
    
  );
};
