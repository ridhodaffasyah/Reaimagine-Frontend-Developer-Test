import Image from "next/image";
import { Button, ListMenuNavbar } from "@/components/atom";
import { items } from "@/utils/constants";

const Navbar = () => {
  return (
    <nav className="absolute z-2 flex flex-col sm:flex-row gap-4 md:gap-0 bg-white top-0 items-center justify-between w-full py-4 px-12">
      <div className="flex items-center gap-3">
        <Image
          src="/assets/reaimagine-logo.png"
          alt="logo-reaimagine"
          width={20}
          height={20}
          className="md:w-[30px] md:h-[30px]"
        />
        <h1 className="font-bold text-sky-700 text-[16px] sm:text-[20px] tracking-wide">
          Reaimagine
        </h1>
      </div>
      <ListMenuNavbar items={items} />
      <div className="flex gap-2">
        <Button text="Sign up" />
        <Button text="Login" />
      </div>
    </nav>
  );
};

export default Navbar;
