import localFont from "next/font/local";
import { Button, ContainerImage } from "@/components/atom";
import { imageItems } from "@/utils/constants";
import Link from "next/link";

const local: any = localFont({
  src: "../../../public/fonts/FontsFree-Net-GelatoScript.ttf",
  variable: "--gelato-font",
});

const Hero = () => {
  return (
    <div className="flex justify-between px-6 md:pl-12 lg:pl-24 md:pr-12 pb-0 bg-zinc-50 gap-16">
      <div className="flex flex-col gap-4 items-center w-full lg:w-5/12 md:items-start mt-32 md:mt-52 lg:mt-72">
        <h1
          className={`${local.className} text-[20px] md:text-[30px] xl:text-[80px]`}
        >
          Lorem ipsum dolor sit
        </h1>
        <h2
          className={`text-[10px] md:text-[11px] xl:text-[18px] text-center md:text-start`}
        >
          Lorem ipsum dolor sit consectetur. Dignissim tortor ut amet tristique.
          Neque odio nulla semper purus facilisis
        </h2>
        <div className="flex gap-4 items-center">
          <Button text="Apply now" />
          <Link
            href="#"
            className="text-[10px] md:text-[10px] lg:text-[12px] xl:text-[14px]"
          >
            Lorem ipsum dolor sit
          </Link>
        </div>
      </div>
      <div className="hidden md:flex w-auto gap-6 justify-center">
        <div className="flex flex-col gap-6">
          {imageItems.slice(0, 3).map((item, index) => (
            <ContainerImage key={index} src={item} />
          ))}
        </div>
        <div className="flex flex-col gap-6 mt-10">
          {imageItems.slice(3).map((item, index) => (
            <ContainerImage key={index} src={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
