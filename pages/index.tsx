import Image from "next/image";
import localFont from "next/font/local";
import { Button } from "@/components/atom";
import Layout from "@/components/layout";

const local: any = localFont({
  src: "../public/fonts/FontsFree-Net-GelatoScript.ttf",
  variable: "--gelato-font",
});

const Home = () => {
  return (
    <Layout>
      <div className="flex flex-col gap-4">
        <h1 className={`${local.className} text-[50px]`}>
          Lorem ipsum dolor sit
        </h1>
        <h2 className={`text-[16px]`}>
          Lorem ipsum dolor sit consectetur. Dignissim tortor ut amet tristique.
          Neque odio nulla semper purus facilisis
        </h2>
        <Button text="Apply now"/>
      </div>
    </Layout>
  );
};

export default Home;
