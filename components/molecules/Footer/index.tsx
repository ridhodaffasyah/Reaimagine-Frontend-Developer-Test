import Image from "next/image";
import { ListMenuFooter } from "@/components/atom";
import {
  socialItems,
  companyItems,
  pressItems,
  contactItems,
} from "@/utils/constants";

const Footer = () => {
  return (
    <footer className="w-full bg-sky-900 p-6 md:p-14 pr-0 flex gap-24 justify-between">
      <div className="w-5/6 flex flex-col justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/assets/reaimagine-logo.png"
            alt="logo-reaimagine"
            width={20}
            height={20}
            className="md:w-[30px] md:h-[30px]"
          />
          <h1 className="font-bold text-white text-[12px] sm:text-[16px] tracking-wide">
            Reaimagine
          </h1>
        </div>
        <div className="text-white text-[10px] md:text-[14px]">
          <p>© 2024 Reaimagine, Inc. All rights reserved.</p>
        </div>
      </div>
      <div className="hidden md:flex flex-col w-3/4 gap-12 justify-between">
        <div className="flex w-full justify-around gap-4">
          <div className="w-full flex flex-col gap-1">
            <h1 className="font-bold text-white sm:text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px]">
              Social
            </h1>
            <ListMenuFooter items={socialItems} />
          </div>
          <div className="w-full flex flex-col gap-1">
            <h1 className="font-bold text-white sm:text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px]">
              Company
            </h1>
            <ListMenuFooter items={companyItems} />
          </div>
        </div>
        <div className="flex w-full justify-around gap-4">
          <div className="w-full flex flex-col gap-1">
            <h1 className="font-bold text-white sm:text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px]">
              Press
            </h1>
            <ListMenuFooter items={pressItems} />
          </div>
          <div className="w-full flex flex-col gap-1">
            <h1 className="font-bold text-white sm:text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px]">
              Contact
            </h1>
            <ListMenuFooter items={contactItems} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
