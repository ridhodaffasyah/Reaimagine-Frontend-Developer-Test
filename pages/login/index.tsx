/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { EmblaCarousel, Form, Circles } from "@/components/molecules";
import { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = { align: "center", containScroll: false };
const SLIDE_COUNT = 6;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const router = useRouter();

  useEffect(() => {
    //If there is token in local storage, go to profile page
    const token = localStorage.getItem("token");

    if (token) {
      router.push("/profile");
    }
  }, []);

  const login = async () => {
    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: email,
          password: password,
        }),
      });
      // Save the token in local storage
      const data = await response.json();
      localStorage.setItem("token", data.token);
      if (response.ok) {
        // Redirect to "/profile" after successful login
        router.push("/profile");
      } else {
        // Handle the error here, e.g. show an error message
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 3000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <section className="flex items-center justify-center max-h-screen bg-white py-32 md:py-0">
      <div className="flex flex-col items-center justify-center w-full  gap-4 z-[2]">
        <Circles isLoginRegPath isProfile={false} />
        <div className="flex flex-col-reverse items-center mb-12 gap-4">
          <h1 className="text-2xl md:text-4xl font-medium text-black tracking-wide">
            Welcome back
          </h1>
          <Link
            href="/"
            className="flex gap-2 items-center hover:underline text-[10px] md:text-[14px]"
          >
            <Image
              src="/assets/left-arrow.png"
              alt="left-arrow"
              width={20}
              height={20}
              className="w-[15px] h-[15px] md:w-[20px] md:h-[20px]"
            />
            Back
          </Link>
        </div>
        <Form
          email={email}
          password={password}
          error={error}
          login={login}
          handleEmail={handleEmail}
          handlePassword={handlePassword}
        />
      </div>
      <div className="w-3/4 hidden md:flex items-center">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} isLogin />
      </div>
    </section>
  );
};

export default Login;
