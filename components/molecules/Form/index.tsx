import { FormProps } from "@/utils/interface";
import Link from "next/link";

const Form = ({
  email,
  password,
  error,
  login,
  handleEmail,
  handlePassword,
}: FormProps) => {
  return (
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
        <p className="text-red-500 text-[13px]">Invalid email or password</p>
      )}
      <Link
        className="text-end underline font-medium text-[13px]"
        href="/forgot"
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
  );
};

export default Form;
