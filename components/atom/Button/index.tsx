import { ButtonProps } from "@/utils/interface";

const Button = ({ text }: ButtonProps) => {
    return (
        <button className="bg-blue-900 py-3 px-7 rounded-3xl text-white">{text}</button>
    )
}
export default Button;