import { ListMenuProps } from "@/utils/interface";
import Link from "next/link";

const ListMenuNavbar = ({ items }: ListMenuProps) => {
  return (
    <ul className="hidden sm:flex gap-3">
      {items.map((item, index) => (
        <Link
          className="hover:text-sky-950 hover:font-bold text-black font-semibold sm:text-[12px] lg:text-[14px] xl:text-[16px]"
          key={index}
          href={item.link}
        >
          {item.name}
        </Link>
      ))}
    </ul>
  );
};

export default ListMenuNavbar;
