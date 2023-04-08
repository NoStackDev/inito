import Image from "next/image";
import React, { HTMLAttributes, useEffect, useState } from "react";
import clsx from "clsx";

interface Props extends HTMLAttributes<HTMLDivElement> {}

export default function Carousel({ children }: Props) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [previousSlide, setPreviousSlide] = useState<number>(0);
  const [animationDirection, setAnimationDirection] = useState<string | null>(
    null
  );

  const slides = React.Children.toArray(children);

  useEffect(() => {
    if (React.Children.toArray(children).length > 1) {
      setPreviousSlide(React.Children.toArray(children).length - 1);
    }
  }, [React.Children.toArray(children).length]);

  const nextSlideOnClick = () => {
    setPreviousSlide(currentSlide);
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
      setAnimationDirection("left");
    } else {
      setCurrentSlide(0);
      setAnimationDirection("left");
    }
  };

  const prevSlideOnClick = () => {
    setPreviousSlide(currentSlide);

    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
      setAnimationDirection("right");
    } else {
      setCurrentSlide(slides.length - 1);
      setAnimationDirection("right");
    }
  };

  const onIndicatorClick = (slideIndex: number) => {
    if (currentSlide != slideIndex) {
      setCurrentSlide(slideIndex);
      setPreviousSlide(currentSlide);
      setAnimationDirection(currentSlide < slideIndex ? "left" : "right");
    }
  };

  const onAnimationEnd = () => {
    setAnimationDirection(null);
  };

  return (
    <div>
      <div className="relative w-full overflow-x-hidden">
        <div
          className={clsx(
            "w-full relative mt-4 float-left -mr-[100%]",
            animationDirection === "left" && "animate-slide-prev-left",
            animationDirection === "right" && "animate-slide-prev-right"
          )}
        >
          {slides[previousSlide]}
        </div>
        <div
          className={clsx(
            "w-full relative mt-4 float-left -mr-[100%]",
            animationDirection === "left" && "animate-slide-current-left",
            animationDirection === "right" && "animate-slide-current-right"
          )}
          onAnimationEnd={onAnimationEnd}
        >
          {slides[currentSlide]}
        </div>
      </div>

      <div className="flex justify-between items-center mt-6 lg:mt-10">
        <div className="bg-primary/acquamarine rounded-full  w-[44px] h-[44px] flex items-center justify-center">
          <Image
            src="/arrow.svg"
            alt="left arrow"
            aria-label="click to move the carousel left"
            height={60}
            width={60}
            className="w-6 h-auto rotate-180"
            onClick={prevSlideOnClick}
          />
        </div>

        <div className="flex gap-4">
          {slides.map((dot, index) => {
            return (
              <button
                className={clsx(
                  "w-2 h-2 rounded-full",
                  (index === currentSlide && "bg-primary/acquamarine") ||
                    "bg-secondary/light-grey"
                )}
                aria-label={`click to move to testimony ${index + 1}`}
                key={index}
                onClick={() => onIndicatorClick(index)}
              ></button>
            );
          })}
        </div>

        <div className="bg-primary/acquamarine rounded-full  w-[44px] h-[44px] flex items-center justify-center">
          <Image
            src="/arrow.svg"
            alt="left arrow"
            aria-label="click to move the carousel right"
            height={60}
            width={60}
            className="w-6 h-auto"
            onClick={nextSlideOnClick}
          />
        </div>
      </div>
    </div>
  );
}
