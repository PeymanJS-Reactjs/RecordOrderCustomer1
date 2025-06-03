import { useState } from "react";
import { cn } from "../../utility";
import { Eye, EyeOff } from "lucide-react";

const PasswordInput = ({ className, placeholder = "" }) => {
  const [type, setType] = useState("password");
  

  return (
    <div className='relative'>
      <input
        className={cn(
          "w-full border mt-1 text-gray-600 focus:text-gray-900 rounded-md border-gray-100 p-3 outline-none focus:border-primary transition-all",
          className
        )}
        type={type}
        placeholder={placeholder}
      />
      <div className='absolute right-3 top-0 h-full w-fit flex justify-center items-center text-gray-800'>
        <button
        onMouseDown={e => e.preventDefault()}
          onClick={() => {
            if (type === "password") setType("text");
            else setType("password");
          }}>
          {type === "password" ? <Eye /> : <EyeOff />}
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;
