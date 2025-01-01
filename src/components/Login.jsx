import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../features/Auth/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogInUser = () => {
    const userData = { email, password };

    if (email == "" || password == "") {
      alert("Please enter valid email and password");
    } else {
      dispatch(loginUser(userData));
      setEmail("");
      setPassword("");
      navigate("welcome-netflix");
    }
  };

  return (
    <div className=" flex  justify-center  w-full ">
      <div
        className="
       h-[85vh]
         rounded-tr-md
          rounded-tl-md
          
            lg:py-16 lg:px-16
             xl:py-12   xl:px-16
             md:py-8
             md:px-16
             md:bg-[rgba(0,0,0,0.65)]  "
      >
        <p className="text-white text-3xl font-bold">Sign In</p>

        <div
          className=" w-[260px] sm:w-[320px] h-14 text-md 
           mt-4
           md:mt-3
          lg:mt-6 xl:mt-8 "
        >
          <input
            className="  bg-[rgba(27,27,27,0.6)]  border border-gray-500
   rounded  h-full w-full px-4   outline-none 
    text-white   placeholder:text-gray-300"
            type="text"
            placeholder="Email or mobile number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div
          className="
            w-[260px]
       sm:w-[320px] h-14   text-sd mt-4 "
        >
          <input
            className=" bg-[rgba(27,27,27,0.6)] border border-gray-500
 rounded h-full w-full px-4   outline-none  text-white 
       placeholder:text-gray-300
             "
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          className="bg-[#F50914]
            hover:bg-red-700  
            font-semibold
            w-[260px]
           sm:w-[320px]
              mt-4 py-2 px-4  cursor-pointer text-white  rounded  "
          onClick={handleLogInUser}
        >
          Sign In
        </button>

        <div className="mt-4 text-center md:mt-3 ">
          <p className="text-white">OR</p>
        </div>

        <button
          className="bg-[rgba(128,128,128,0.45)] 
           font-semibold w-[260px]
            sm:w-[320px] md:mt-3
             mt-4 py-2 px-4
              cursor-pointer
               text-white rounded"
        >
          <p>Use a Sign-In Code</p>
        </button>

        <div className=" mt-4 lg:mt-4 md:mt-2 text-center">
          <p className="text-white hover:underline">Forget password?</p>
        </div>

        <div className=" mt-4  md:mt-5 lg:mt-10 xl:ms-2 xl:mt-16">
          <p className="text-white">
            New to Netflix?{" "}
            <span className="font-bold hover:underline cursor-pointer">
              Sign up now.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
