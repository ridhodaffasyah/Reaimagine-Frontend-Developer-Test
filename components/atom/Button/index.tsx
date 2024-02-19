import { ButtonProps } from "@/utils/interface";

const Button = ({ text }: ButtonProps) => {
  return (
    <button
      className={`${
        text === "Login" || text === "Apply now" ? "bg-sky-700" : "bg-white"
      } ${
        text === "Login" || text === "Apply now" ? "text-white" : "text-black"
      } ${
        text === "Login" || text === "Apply now"
          ? "hover:bg-sky-900"
          : "hover:bg-slate-500"
      } hover:text-white transition-all ease-in-out duration-300
        ${
          text !== "Login" && text !== "Apply now"
            ? "border-2 border-gray-300"
            : ""
        }
        ${
          text === "Login" || text === "Apply now"
            ? "px-8 sm:px-12"
            : "px-4 sm:px-6"
        }
        py-1 sm:py-2 rounded-3xl w-auto font-medium tracking-wide text-[9px] sm:text-[12px] lg:text-[14px] xl:text-[16px]`}
    >
      {text}
    </button>
  );
};
export default Button;
