import React from "react";

import illus from "../../assets/img/blue-3d.png";
import "./Hero.css";

const Hero = ({toggleMode}) => {
  
  return (
    <div className="lg:pt-28 pt-7 mb-0 min-h-[90vh]  overflow-hidden bg-white dark:bg-gray-800 flex justify-center items-center flex-col">
          <div className={`${!toggleMode?"hidden":"lg:block hidden"} absolute    top-2/4 -left-14   w-20 shadow-[0px_0px_150px_150px_rgba(52,113,228,1)]  rounded-full h-20 bg-[rgba(52,113,228,1)] opacity-40 blur-3xl `}></div>
          <div className={`${!toggleMode?"hidden":"lg:block hidden"}  absolute top-1/4 -right-16 w-20 shadow-[0px_0px_150px_150px_#4e8cff] rounded-full h-20 bg-[#4e8cff] opacity-50 blur-3xl`}></div>
      <div className="lg:mt-5 mt-2">
        <h2 className="2xl:text-[9rem] lg:text-[7rem] text-7xl font-extrabold leading-none text-center text-black dark:text-white">
          Triton <br />{" "}
          <span className=" font-extrabold bg-gradient-to-bl from-blue-500 to-blue-800 bg-clip-text text-transparent  ">
            Solutions
          </span>
        </h2>
      </div>

      <div className="w-full  lg:px-28 px-10 flex justify-between 2xl:justify-evenly xl:justify-between">
        <div className="pl-10 relative w-60 lg:block hidden">
          <div className=" w-36 h-24 dark:bg-white bg-black bg-opacity-5 dark:bg-opacity-5 dark:text-white text-black p-5 rounded-2xl border-[0.1px]">
            <p className="text-3xl text-blue-500 dark:text-white font-semibold">100+</p>
            <span className="text-sm  opacity-40 mt-2">Project</span>
          </div>
          <div className=" w-36 mt-5 h-24 dark:bg-white bg-black bg-opacity-5 dark:bg-opacity-5 dark:text-white text-black p-5 rounded-2xl border-[0.1px]">
            <p className="text-3xl text-blue-500 dark:text-white font-semibold">99%</p>
            <span className="text-sm  opacity-40 mt-2">Job Success</span>
          </div>
        </div>
        <div className="lg:block hidden ">
          <img src={illus} className="xl:w-[28rem] w-[25rem] 2xl:w-[40rem]  moving_image " alt="" />
        </div>
        <div className="lg:pr-10 pr-0 lg:w-60 w-full text-black dark:text-white mt-14">
          <p className="lg:text-left text-center">
            Empowering Businesses with Creative Web Solutions, Branding, and
            Marketing Strategies for Unmatched Digital Growth and Success
          </p>
          <p className="lg:hidden block mt-10 text-center text-xl">Build - Optimize - Launch</p>
          <button className="w-full lg:mt-5 mt-20 bg-blue-500 p-3 border-blue-500 border-2 dark:border-white dark:bg-white text-white dark:text-blue-800 rounded-full text-lg hover:bg-transparent hover:text-blue-500 transition-all hover:dark:bg-transparent hover:dark:border-blue-500 hover:dark:text-white">
            Get Started
          </button>
        </div>
      </div>

    
    </div>
  );
};

export default Hero;
