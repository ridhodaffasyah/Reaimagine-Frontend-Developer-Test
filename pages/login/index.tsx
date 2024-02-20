import { Button } from "@/components/atom";
import { EmblaCarousel } from "@/components/molecules";
import Link from "next/link";
import { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = { align: "center", containScroll: false };
const SLIDE_COUNT = 6;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const Login = () => {
    return (
        <div className="flex items-center justify-center max-h-screen bg-white py-32 md:py-0">
            <div className="flex flex-col items-center justify-center w-full gap-4">
                <h1 className="text-2xl md:text-4xl font-medium text-black tracking-wide mb-12">Welcome back</h1>
                <form className="flex flex-col gap-4 w-64 md:w-96">
                    <input
                        type="email"
                        placeholder="Email"
                        className="border-2 border-gray-300 rounded-lg px-4 py-2"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="border-2 border-gray-300 rounded-lg px-4 py-2"
                    />
                    <Link className="text-end underline font-medium text-[13px]" href="/signup">
                            Forgot password?
                        </Link>
                    <Button text="Log in" route="" />
                    <span className="text-[13px]">
                        Don&apos;t have an account?{" "}
                        <Link className="underline font-bold" href="/signup">
                            Sign up
                        </Link>
                    </span>
                </form>
            </div>
            <div className="w-3/4 hidden md:flex items-center">
                <EmblaCarousel slides={SLIDES} options={OPTIONS} isLogin/>
            </div>
        </div>
    );
};

export default Login;
