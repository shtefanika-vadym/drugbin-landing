import React, { useState, useEffect, useRef, useMemo } from "react";
import { ArrowRight } from "../Icon";
import { useBreakpoints } from "src/hooks/useBreakpoints";
import {
  CarouselContainer,
  CarouselWrapper,
  CarouselContent,
  NavButton,
  CardWrapper,
} from "./Carousel.styled";

interface CarouselProps {
  children: React.ReactNode[];
  itemsToShow?: number;
  autoScrollInterval?: number;
}

export const Carousel: React.FC<CarouselProps> = ({
  children,
  itemsToShow: defaultItemsToShow = 4,
  autoScrollInterval = 3000,
}) => {
  const { isMobile, isTablet } = useBreakpoints();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  
  const itemsToShow = useMemo(() => {
    if (isMobile) return 1;
    if (isTablet) return 2;
    return defaultItemsToShow;
  }, [isMobile, isTablet, defaultItemsToShow]);
  
  const totalItems = children.length;
  const maxIndex = Math.max(0, totalItems - itemsToShow);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  useEffect(() => {
    // Reset index when itemsToShow changes
    setCurrentIndex(0);
  }, [itemsToShow]);

  useEffect(() => {
    if (isPaused || totalItems <= itemsToShow) return;

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, autoScrollInterval);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, maxIndex, autoScrollInterval, totalItems, itemsToShow]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      // Swipe left - go to next
      goToNext();
    } else if (distance < -minSwipeDistance) {
      // Swipe right - go to previous
      goToPrevious();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <CarouselContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {!isMobile && (
        <NavButton
          onClick={goToPrevious}
          aria-label="Previous"
          $isLeft
        >
          <ArrowRight />
        </NavButton>
      )}
      <CarouselWrapper
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <CarouselContent 
          $currentIndex={currentIndex} 
          $itemsToShow={itemsToShow}
          $isMobile={isMobile}
        >
          {children.map((child, index) => (
            <CardWrapper key={index} $itemsToShow={itemsToShow} $isMobile={isMobile}>
              {child}
            </CardWrapper>
          ))}
        </CarouselContent>
      </CarouselWrapper>
      {!isMobile && (
        <NavButton
          onClick={goToNext}
          aria-label="Next"
        >
          <ArrowRight />
        </NavButton>
      )}
    </CarouselContainer>
  );
};

