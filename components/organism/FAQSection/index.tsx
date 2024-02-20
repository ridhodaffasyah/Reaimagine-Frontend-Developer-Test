import { ListFAQ } from "@/components/atom";
import { FAQItems } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";

const FAQSection = () => {
  return (
    <section className="px-12 pt-12 pb-20 flex flex-col md:flex-row items-center gap-6 md:gap-32 justify-between">
      <h1 className="text-[20px] md:text-[32px] font-medium w-full md:w-1/2 ">
        Lorem ipsum doolor sit amet
      </h1>
      <div className="flex flex-col w-full">
        {FAQItems.map((item, index) => (
          <ListFAQ key={index} question={item.question} answer={item.answer} />
        ))}
        <Link
          href="#"
          className="mt-6 flex items-center gap-3 underline text-[14px] md:text-[16px]"
        >
          More FAQs
          <Image
            src="/assets/right-arrow.png"
            alt="right-arrow"
            width={17}
            height={5}
          />
        </Link>
      </div>
    </section>
  );
};

export default FAQSection;
