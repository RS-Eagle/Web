import React from "react";
import about from "../../assets/img/about.png";

const About = () => {
  return (
    <div className=" bg-white dark:bg-gray-800">
      <div className="2xl:px-48  lg:px-14 md:px-8 p-8 top-0 w-full bg-white pt-28 pb-24 dark:bg-gray-800">
        <div className="2xl:h-[28rem] lg:h-96  bg-gradient-to-bl from-blue-500 to-blue-800 rounded-xl flex justify-between items-center flex-col-reverse lg:flex-row pt-10 lg:pt-0">
          <div className="lg:w-[50%] p-10 lg:p-14 lg:px-16 text-white">
            <h2 className="text-5xl font-medium text-center lg:text-left">
              About Us
            </h2>
            <p className="mt-3 text-white text-opacity-70 text-center lg:text-left">
              As a boutique digital agency, we are dedicated to crafting unique
              and impactful digital experiences for our clients. We work closely
              with you to drive your business forward in a way that is
              sustainable, achievable and tailored to you – and with a level of
              personal attention that you’ll only find in a boutique marketing
              agency. We really do care about you and your business
            </p>
            <div className="flex justify-center lg:justify-start">
              <button className=" mt-5 w-44 p-3  border-2 border-white bg-white  text-blue-800 rounded-full text-lg transition-all hover:bg-transparent hover:text-white">
                Get Started
              </button>
            </div>
          </div>
          <div className="flex items-start justify-start lg:mb-56 relative">
            <img src={about} className="w-[32rem] ml-2" alt="" />
            <div className="absolute bottom-0 left-1/2  -translate-x-1/2 w-3/4 h-10 bg-black opacity-30 blur-lg rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
