import Image from "next/image";
import { ListFAQProps } from "@/utils/interface";
import { useState } from "react";

const ListFAQ = ({ question, answer }: ListFAQProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="py-3 border-b-2 border-zinc-300">
      <button
        className="flex justify-between items-center w-full"
        onClick={handleClick}
      >
        <h1 className="font-bold text-[12px] md:text-[18px]">{question}</h1>
        <Image
          src={isExpanded ? "/assets/up-arrow.png" : "/assets/down-arrow.png"}
          alt="down-arrow"
          width={isExpanded ? 15 : 20}
          height={isExpanded ? 15 : 20}
        />
      </button>
      <div
        className={`text-[10px] md:text-[14px] text-justify mt-2 transition-all duration-300 ${
          isExpanded ? "max-h-auto" : "max-h-0 overflow-hidden"
        }`}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default ListFAQ;
