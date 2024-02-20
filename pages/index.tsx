import Layout from "@/components/layout";
import {
  HeroSection,
  CarouselSection,
  CardSection,
  FAQSection
} from "@/components/organism";

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <CarouselSection />
      <CardSection />
      <FAQSection />
    </Layout>
  );
};

export default Home;
