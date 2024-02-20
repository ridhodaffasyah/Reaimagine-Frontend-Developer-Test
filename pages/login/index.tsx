import { Button } from "@/components/atom";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-sky-700">
      <div className="flex flex-col items-center justify-center w-full h-full bg-white gap-4">
        <h1 className="text-4xl font-bold text-sky-700">Login</h1>
        <form className="flex flex-col gap-4 w-96">
          <input
            type="text"
            placeholder="Username"
            className="border-2 border-gray-300 rounded-3xl px-4 py-2"
          />
          <input
            type="password"
            placeholder="Password"
            className="border-2 border-gray-300 rounded-3xl px-4 py-2"
          />
          <Button text="Login" route=""/>
        </form>
      </div>
    </div>
  );
};

export default Login;
