import Image from "next/image";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import { Button } from "@/components/atom";

const local: any = localFont({
  src: "../public/fonts/FontsFree-Net-GelatoScript.ttf",
  variable: "--gelato-font",
});

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <div>
      <h1 className={`${local.className} text-[50px]`}>
        Lorem ipsum dolor sit
      </h1>
      <h2 className={`${inter.className} text-[16px]`}>
        Lorem ipsum dolor sit consectetur. Dignissim tortor ut amet tristique.
        Neque odio nulla semper purus facilisis
      </h2>
      <Button text="Apply now" />
    </div>
  );
};

export default Home;
