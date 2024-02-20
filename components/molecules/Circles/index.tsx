import { Circle } from "@/components/atom";

const Circles = ({
  isLoginRegPath,
  isProfile,
}: {
  isLoginRegPath: boolean;
  isProfile: boolean;
}) => {
  const circles = [
    `absolute block list-none ${
      isLoginRegPath ? "bg-gray-100" : "bg-slate-700"
    } animate-[circles_25s_linear_infinite] bottom-[-150px] left-[25%] w-[80px] h-[80px] delay-0`,
    `absolute block list-none ${
      isLoginRegPath ? "bg-gray-100" : "bg-slate-700"
    } animate-[circles_12s_linear_infinite] bottom-[-150px] left-[70%] w-[20px] h-[20px] delay-0`,
    `absolute block list-none ${
      isLoginRegPath ? "bg-gray-100" : "bg-slate-700"
    } animate-[circles_50s_linear_infinite] bottom-[-150px] left-[10%] w-[20px] h-[20px] delay-0`,
    `absolute block list-none ${
      isLoginRegPath ? "bg-gray-100" : "bg-slate-700"
    } animate-[circles_45s_linear_infinite] bottom-[-150px] left-[25%] w-[15px] h-[15px] delay-0`,
    `absolute block list-none ${
      isLoginRegPath ? "bg-gray-100" : "bg-slate-700"
    } animate-[circles_15s_linear_infinite] bottom-[-150px] left-[35%] w-[150px] h-[150px] delay-0`,
    `absolute block list-none ${
      isLoginRegPath ? "bg-gray-100" : "bg-slate-700"
    } animate-[circles_8s_linear_infinite] bottom-[-150px] left-[65%] w-[20px] h-[20px] delay-0`,
    `absolute block list-none ${
      isLoginRegPath ? "bg-gray-100" : "bg-slate-700"
    } animate-[circles_30s_linear_infinite] bottom-[-150px] left-[5%] w-[110px] h-[110px] delay-0`,
    `absolute block list-none ${
      isLoginRegPath ? "bg-gray-100" : "bg-slate-700"
    } animate-[circles_10s_linear_infinite] bottom-[-150px] left-[50%] w-[25px] h-[25px] delay-0`,
    `absolute block list-none ${
      isLoginRegPath ? "bg-gray-100" : "bg-slate-700"
    } animate-[circles_5s_linear_infinite] bottom-[-150px] left-[85%] w-[150px] h-[150px] delay-0`,
  ];

  return (
    <ul
      className={`absolute z-[-999] p-0 top-0 left-0 ${
        isProfile ? "w-full" : "w-full md:w-[57%]"
      } h-full overflow-hidden`}
    >
      {circles.map((circle, index) => (
        <Circle key={index} className={circle} />
      ))}
    </ul>
  );
};

export default Circles;
