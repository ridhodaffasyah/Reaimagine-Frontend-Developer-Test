/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import ClassNames from "embla-carousel-class-names";
import imageByIndex from "@/utils/imageByIndex";
import textByIndex from "@/utils/textByIndex";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
  isLogin?: boolean;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options, isLogin } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(
    options,
    isLogin ? [ClassNames()] : [Autoplay(), ClassNames()]
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    if (emblaApi) {
      emblaApi.scrollNext();
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const goToPrevSlide = () => {
    if (emblaApi) {
      emblaApi.scrollPrev();
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className={`${isLogin ? "embla-login" : "embla"}`}>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide embla__class-names" key={index}>
              <div className="embla__slide__number">
                <span>{index + 1}</span>
              </div>
              <div className="flex">
                <img
                  className={`${
                    isLogin ? "embla__slide__img-login" : "embla__slide__img"
                  } `}
                  src={imageByIndex(index)}
                  alt="Your alt text"
                />
                {isLogin ? (
                  <div className="absolute px-8 py-8 flex flex-col gap-6 justify-between w-full h-full">
                    <div>
                      <h1 className=" font-semibold text-[36px] text-white">
                        {textByIndex(index)[0]}{" "}
                      </h1>
                      <p className="font-semibold text-[16px] text-white">
                        {textByIndex(index)[1]}{" "}
                      </p>
                    </div>
                    <div className="flex flex-col gap-12">
                      <p className="font-semibold text-[16px] text-white">
                        {textByIndex(index)[2]}
                      </p>
                      <div className="flex gap-4">
                        <button
                          className="rounded-full bg-transparent p-2 border-2 border-white hover:bg-black hover:border-black"
                          onClick={goToPrevSlide}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="white"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 19l-7-7 7-7"
                            />
                          </svg>
                        </button>
                        <button
                          className="rounded-full bg-transparent p-2 border-2 border-white hover:bg-black hover:border-black"
                          onClick={goToNextSlide}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="white"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
