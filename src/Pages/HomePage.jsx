import React from "react";
import Login from "../components/Login";

const HomePage = () => {
  return (
    <>
   <div
  className="w-full h-[50%]
      md:bg-[url('/src/images/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-fullview.jpg')] 
    md:bg-no-repeat
    md:bg-cover
    md:bg-blend-multiply
    bg-black md:bg-opacity-50 
      
    "
   >
  
 {/* Netflix Logo */}

 <div className=" ms-4 sm:ms-[32px] md:ms-[160px] h-[146px] ">
          <p>
            <svg
              className=" w-28 h-48  md:w-36 md:h-48 mt-[-55px] cursor-pointer "
              viewBox=".238 .034 919.406 248.488"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m870.46 118.314 49.184 130.208c-14.495-2.07-28.982-4.663-43.733-6.999l-27.707-71.945-28.468 66.006c-13.973-2.336-27.698-3.114-41.672-4.928l49.955-113.89-45.309-116.732h41.937l25.362 65.22 27.185-65.22h42.442zm-120.864-118.28h-38.052v225.71c12.425.779 25.362 1.292 38.052 2.841zm-70.927 223.118c-34.68-2.328-69.37-4.39-104.829-5.177v-217.94h38.823v181.188c22.264.514 44.52 2.32 66.006 3.355zm-146.252-134.847v38.822h-53.06v88.263h-38.3v-215.356h108.713v38.822h-70.405v49.45h53.06zm-156.597-49.449v178.605c-12.946 0-26.14 0-38.83.514v-179.119h-40.122v-38.822h119.322v38.822zm-120.88 90.334c-17.08 0-37.274 0-51.769.787v57.715c22.778-1.557 45.556-3.363 68.59-4.141v37.273l-107.412 8.548v-229.338h107.405v38.822h-68.584v52.29c15.017 0 38.052-.778 51.768-.778v38.83zm-215.109-21.743v135.633c-13.965 1.557-26.398 3.371-39.593 5.442v-248.488h37.017l50.469 141.076v-141.076h38.83v232.436c-13.717 2.336-27.698 3.114-42.45 5.177z"
                fill="#F50914"
              />
            </svg>
          </p>
 </div>
 
 {/* Sign In Page  */}
 <Login />

   </div>

  {/* This is horizental line  */}
  <hr className="md:hidden" />

  {/* This is footer */}

  <div
  className="bg-black text-center md:text-start  text-gray-400 flex  
         
       flex-col
      md:flex-row
      flex-wrap md:justify-evenly  h-[50%]   w-full"
      >
        <div
          className="
         mt-10
       md:mt-36  md:mb-10"
        >
          <p className="cursor-pointer hover:underline">
            Questions? Contact us.
          </p>
          <p className="underline cursor-pointer text-sm mt-6">FAQ</p>
          <p className="underline text-sm cursor-pointer mt-6">
            Cookie Prefrence
          </p>

          <select className="px-4 font-semibold py-[2px] text-white   rounded-sm text-md mt-6   bg-[rgba(51,45,45,0.671)] border border-gray-500">
            <option className="" value="English">
              English
            </option>
          </select>
        </div>

        <div className=" mt-12 md:mt-48 md:mb-10  text-sm ">
          <p className="underline cursor-pointer">Help Center</p>
          <p className="underline mt-6 cursor-pointer">
            {" "}
            Corporate Information
          </p>
        </div>

        <div className=" mt-6 md:mt-48 md:mb-10 text-sm">
          <p className="underline cursor-pointer">Term of Use</p>
        </div>

        <div className="mt-6 md:mt-48 md:mb-10 text-sm">
          <p className="underline  cursor-pointer">Privacy</p>
        </div>
      </div>
    </>
  );
};

export default HomePage;
