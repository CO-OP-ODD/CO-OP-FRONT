import type { HistoryEntry } from "./types";

interface HistoryItemProps {
  entry: HistoryEntry;
}

export const HistoryItem = ({ entry }:HistoryItemProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 py-12 border-b border-gray-400">
      
      {/* Year */}
      <div className="md:w-24 flex-shrink-0">
        <span className="text-lg md:text-xl font-bold text-black">
          {entry.year}
        </span>
      </div>

      {/* Image */}
      <div className="w-full md:w-[320px] flex-shrink-0">
        <div className="aspect-[3/2] w-full bg-gray-200 overflow-hidden">
          {entry.imageUrl && (
            <img
              src={entry.imageUrl}
              alt={entry.title}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              loading="lazy"
            />
          )}
        </div>
      </div>

      {/* text-column */}
      <div className="flex-1 pt-2 flex flex-col ml-12 justify-end">
        <h3 className="text-xl font-bold text-black mb-3">{entry.title}</h3>
        <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
          {entry.description}
        </p>
      </div>
    </div>
  );
};
