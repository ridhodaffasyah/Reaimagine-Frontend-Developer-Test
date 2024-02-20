import { ButtonProps } from "@/utils/interface";
import { useRouter } from "next/router";

const Button = ({ text, route }: ButtonProps) => {
  const router = useRouter();

  const handleRoute = (route: string) => {
    router.push(`/${route}`);
  };

  return (
    <button
      className={`${
        text === "Login" ||
        text === "Apply now" ||
        text === "Lorem" ||
        text === "See the details"
          ? "bg-sky-700"
          : text === "Log in"
          ? "bg-black"
          : "bg-white"
      } ${
        text === "Login" ||
        text === "Apply now" ||
        text === "Lorem" ||
        text === "See the details" ||
        text === "Log in"
          ? "text-white"
          : "text-black"
      } ${
        text === "Login" ||
        text === "Apply now" ||
        text === "Lorem" ||
        text === "See the details"
          ? "hover:bg-sky-900"
          : text === "Log in"
          ? "hover:bg-slate-800"
          : "hover:bg-slate-500"
      } hover:text-white transition-all ease-in-out duration-300
        ${
          text !== "Login" &&
          text !== "Apply now" &&
          text !== "Lorem" &&
          text !== "See the details" &&
          text !== "Log in"
            ? "border-2 border-gray-300"
            : ""
        }
        ${
          text === "Login" ||
          text === "Apply now" ||
          text === "Lorem" ||
          text === "See the details" ||
          text === "Log in"
            ? "px-8 sm:px-12"
            : "px-4 sm:px-6"
        }
        ${
          text === "Log in"
            ? "rounded-lg py-2 sm:py-4"
            : "rounded-3xl py-1 sm:py-2"
        } w-auto font-medium tracking-wide text-[9px] sm:text-[10px] lg:text-[14px] xl:text-[16px]`}
      onClick={() => handleRoute(route)}
    >
      {text}
    </button>
  );
};
export default Button;
