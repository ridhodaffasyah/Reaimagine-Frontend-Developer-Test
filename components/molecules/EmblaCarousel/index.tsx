/* eslint-disable @next/next/no-img-element */
import React from "react";
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
  const [emblaRef] = useEmblaCarousel(options, [Autoplay(), ClassNames()]);

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
                  <div className="absolute px-8 py-8 flex flex-col gap-6">
                    <h1 className=" font-semibold text-[36px]">
                      {textByIndex(index)[0]}{" "}
                    </h1>
                    <p className="font-semibold text-[16px]">
                      {textByIndex(index)[1]}{" "}
                    </p>
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
