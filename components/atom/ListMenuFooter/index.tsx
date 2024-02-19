import { ListMenuProps } from "@/utils/interface";
import Link from "next/link";

const ListMenuFooter = ({ items }: ListMenuProps) => {
  return (
    <ul className="hidden sm:flex flex-col gap-1">
      {items?.map((item, index) => (
        <Link
          className="hover:text-sky-950 hover:font-bold font-light text-white sm:text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px]"
          key={index}
          href={item.link}
        >
          {item.name}
        </Link>
      ))}
    </ul>
  );
};

export default ListMenuFooter;
