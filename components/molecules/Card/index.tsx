import { CardProps } from "@/utils/interface";
import Image from "next/image";

const Card = ({ title, description, image, index }: CardProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col">
        <Image
          src={image}
          alt={title}
          width={480}
          height={450}
          className="shadow-md"
        />
        <span className="bg-white text-[12px] md:text-[16px] rounded-full px-1 md:px-2 flex items-center absolute mt-2 ml-2 text-sky-600 border-2 border-sky-500">
          {index + 1}
        </span>
      </div>
      <div>
        <h1 className="font-bold">{title}</h1>
        <p className="text-[14px]">{description}</p>
      </div>
    </div>
  );
};

export default Card;
