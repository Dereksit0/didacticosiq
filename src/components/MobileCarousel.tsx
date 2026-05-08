"use client";
import { useRef, ReactNode } from "react";

interface Props {
  children: ReactNode;
  gridClass: string;
  gapClass: string;
}

export default function MobileCarousel({ children, gridClass, gapClass }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      // Find the first child's width to scroll exactly one item at a time
      const firstChild = scrollRef.current.firstElementChild as HTMLElement;
      const scrollAmount = firstChild ? firstChild.offsetWidth + 24 : scrollRef.current.clientWidth; 
      
      const targetLeft = direction === "left" 
        ? scrollRef.current.scrollLeft - scrollAmount 
        : scrollRef.current.scrollLeft + scrollAmount;

      scrollRef.current.scrollTo({
        left: targetLeft,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="relative w-full">
      <div 
        ref={scrollRef} 
        className={`flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-6 md:pb-0 ${gapClass} ${gridClass} md:overflow-visible`}
      >
        {children}
      </div>

      {/* Mobile Navigation Buttons */}
      <div className="flex items-center justify-center gap-4 mt-2 sm:hidden">
        <button 
          onClick={() => scroll("left")}
          className="w-12 h-12 rounded-full bg-white text-[#008180] shadow-md border border-[#008180]/20 flex items-center justify-center active:bg-gray-50 transition-colors"
          aria-label="Anterior"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          onClick={() => scroll("right")}
          className="w-12 h-12 rounded-full bg-white text-[#008180] shadow-md border border-[#008180]/20 flex items-center justify-center active:bg-gray-50 transition-colors"
          aria-label="Siguiente"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
