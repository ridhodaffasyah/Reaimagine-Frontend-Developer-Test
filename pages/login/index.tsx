import { useState, useEffect } from "react";
import { EmblaCarousel } from "@/components/molecules";
import Link from "next/link";
import { EmblaOptionsType } from "embla-carousel";
import { useRouter } from "next/router";

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
    } else {
      router.push("/");
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
          // expiresInMins: 60, // optional
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
    <div className="flex items-center justify-center max-h-screen bg-white py-32 md:py-0">
      <div className="flex flex-col items-center justify-center w-full gap-4">
        <h1 className="text-2xl md:text-4xl font-medium text-black tracking-wide mb-12">
          Welcome back
        </h1>
        <div className="flex flex-col gap-4 w-64 md:w-96">
          <input
            type="email"
            placeholder="Email"
            className="border-2 border-gray-300 rounded-lg px-4 py-2"
            value={email}
            onChange={handleEmail}
          />
          <input
            type="password"
            placeholder="Password"
            className="border-2 border-gray-300 rounded-lg px-4 py-2"
            value={password}
            onChange={handlePassword}
          />
          {error && (
            <p className="text-red-500 text-[13px]">
              Invalid email or password
            </p>
          )}
          <Link
            className="text-end underline font-medium text-[13px]"
            href="/signup"
          >
            Forgot password?
          </Link>
          <button
            onClick={login}
            className="bg-black text-white hover:bg-slate-800 rounded-lg py-2 sm:py-4"
          >
            Log in
          </button>
          <span className="text-[13px]">
            Don&apos;t have an account?{" "}
            <Link className="underline font-bold" href="/signup">
              Sign up
            </Link>
          </span>
        </div>
      </div>
      <div className="w-3/4 hidden md:flex items-center">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} isLogin />
      </div>
    </div>
  );
};

export default Login;
