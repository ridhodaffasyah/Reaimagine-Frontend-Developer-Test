import Layout from "@/components/layout";
import {
  HeroSection,
  CarouselSection,
  CardSection,
  FAQSection,
} from "@/components/organism";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  useEffect(() => {
    //If there is token in local storage, go to profile page
    const token = localStorage.getItem("token");

    if (token) {
      router.push("/profile");
    } else {
      router.push("/");
    }
  }, []);

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
