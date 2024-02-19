import Layout from "@/components/layout";
import { Hero } from "@/components/organism";
import { Button } from "@/components/atom";
import { EmblaCarousel } from "@/components/organism";
import { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = { align: "center", containScroll: false };
const SLIDE_COUNT = 6;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const Home = () => {
  return (
    <Layout>
      <Hero />
      <div className="px-8 py-16 gap-4 flex flex-col">
        <div className="flex items-center justify-between">
          <h1 className="text-[14px] md:text-[24px] xl:text-[32px] font-medium">
            Lorem ipsum dolor sit amet consectetur. Cras id in quis.
          </h1>
          <Button text="Lorem" />
        </div>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
    </Layout>
  );
};

export default Home;
