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
          : "bg-white"
      } ${
        text === "Login" ||
        text === "Apply now" ||
        text === "Lorem" ||
        text === "See the details"
          ? "text-white"
          : "text-black"
      } ${
        text === "Login" ||
        text === "Apply now" ||
        text === "Lorem" ||
        text === "See the details"
          ? "hover:bg-sky-900"
          : "hover:bg-slate-500"
      } hover:text-white transition-all ease-in-out duration-300
        ${
          text !== "Login" &&
          text !== "Apply now" &&
          text !== "Lorem" &&
          text !== "See the details"
            ? "border-2 border-gray-300"
            : ""
        }
        ${
          text === "Login" ||
          text === "Apply now" ||
          text === "Lorem" ||
          text === "See the details"
            ? "px-8 sm:px-12"
            : "px-4 sm:px-6"
        }
        py-1 sm:py-2 rounded-3xl w-auto font-medium tracking-wide text-[9px] sm:text-[10px] lg:text-[14px] xl:text-[16px]`}
      onClick={() => handleRoute(route)}
    >
      {text}
    </button>
  );
};
export default Button;
