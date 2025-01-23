import React, { useEffect, useRef, useState } from "react";
import webdesign from "../../assets/img/webdesign.png"
import mobileApp from "../../assets/img/mobileApp.png"
import performance from "../../assets/img/performance.png"
import photo from "../../assets/img/photo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCheck } from "@fortawesome/free-solid-svg-icons";
import { inView, useInView } from "framer-motion";
import { motion } from "framer-motion";

const Services = () => {
  const elementRef = useRef(null);

  const isInView = useInView(elementRef, {
    margin: "400px 0px -10% 0px",  
  });
  const elementRef1 = useRef(null);

  const isInView1 = useInView(elementRef1, {
    margin: "-20% 0px -30% 0px",  
  });
  const elementRef2 = useRef(null);

  const isInView2 = useInView(elementRef2, {
    margin: "-20% 0px -30% 0px", 
  });
  const elementRef3 = useRef(null);

  const isInView3 = useInView(elementRef3, {
    margin: "-20% 0px -30% 0px",  
  });
  const elementRef4 = useRef(null);

  const isInView4 = useInView(elementRef4, {
    margin: "-20% 0px -30% 0px",  
  });

  const servicesArr = [{
    title:"Web Design",
    des:"We are a creative digital agency dedicated to transforming brands with innovative web solutions. Our team specializes in crafting visually stunning, user-friendly websites that drive engagement and business growth.",
    keypoints:["Creative Design Solutions","User-Centered Approach","Growth-Driven Strategies"],
    image:webdesign,
    elRef:elementRef1,
    customInview:isInView1
  },
  {
    title:"Mobile App",
    des:"We build innovative mobile apps for iOS, Android, and cross-platform needs. Our solutions offer intuitive design, seamless performance, and scalability to enhance user experience and drive business success.",
    keypoints:["Custom Mobile Solutions","User-Centric Design","Scalable & High-Performance"],
    image:mobileApp,
    elRef:elementRef2,
    customInview:isInView2
  },
  {
    title:"Performance Marketing",
    des:"We deliver data-driven performance marketing solutions across SEO, PPC, and social media to maximize ROI. Our strategic approach ensures targeted reach, measurable results, and continuous growth for your business.",
    keypoints:["Results-Driven Strategies","Multi-Channel Approach","Measurable Growth"],
    image:performance,
    elRef:elementRef3,
    customInview:isInView3
  },
  {
    title:"Video & Photography",
    des:"We provide professional video and photography services to showcase your brand’s story. Our creative visuals enhance engagement, build brand identity, and deliver high-quality content tailored to your business goals.",
    keypoints:["Creative Visual Storytelling","High-Quality Production","Tailored Content"],
    image:photo,
    elRef:elementRef4,
    customInview:isInView4
  },
  

]

const itemsVariants = {
  hidden:{ opacity:0,y:20 },
  visible :{
    opacity:1,
    y:0,
    transition:{
      duration:0.5
    }
  }    
}



  return (
    <div id="services" className=" bg-white dark:bg-gray-800 ">
      <div className="2xl:px-48  lg:px-14 p-8 top-0 w-full bg-white pt-24  dark:bg-gray-800">
        <motion.h3 ref={elementRef} variants={itemsVariants} initial="hidden" animate={`${isInView?"visible":""}`}  className="text-center text-5xl text-black dark:text-white ">
          Our Services
        </motion.h3>
        <div className="pt-20 md:mx-14">

        {servicesArr.map((e,i)=>{
          return(
            <div key={e.title}  className={`w-full flex justify-between items-center mb-10  ${i%2==0?"flex-col-reverse md:flex-row":"md:flex-row-reverse flex-col-reverse"}`}>
            <div className="md:w-[50%] w-full ">
              <h2 ref={e.elRef}   className={`${e.customInview?"dark:text-blue-500":"dark:text-white"} text-4xl text-blue-500 transition-all duration-300 font-medium `}>{e.title}</h2>
              <p className="text-lg mt-2 text-black font-medium dark:text-white text-opacity-60 dark:text-opacity-60">{e.des}</p>
              <div className="mt-6 flex  flex-col gap-2">
                <div className="flex items-center">
                    <FontAwesomeIcon icon={faCheck} className="text-white bg-blue-500 p-2 rounded-full bg-opacity-80" />
                    <p className="ml-3 text-black dark:text-white">{e.keypoints[0]}</p>
                </div>
                <div className="flex items-center">
                    <FontAwesomeIcon icon={faCheck} className="text-white bg-blue-500 p-2 rounded-full bg-opacity-80" />
                    <p className="ml-3 text-black dark:text-white">{e.keypoints[1]}</p>
                </div>
                <div className="flex items-center">
                    <FontAwesomeIcon icon={faCheck} className="text-white bg-blue-500 p-2 rounded-full bg-opacity-80" />
                    <p className="ml-3 text-black dark:text-white">{e.keypoints[2]}</p>
                </div>
              </div>
              <div className="mt-5">
                <button className="border-[1px] p-4 rounded-full text-blue-500 dark:text-white  flex justify-center items-center  shadow-[0_15px_60px_-15px_rgba(50,110,244,0.8)]  hover:border-blue-500 hover:bg-blue-500 hover:text-white transition-all ">Contact Us <FontAwesomeIcon  icon={faArrowRight} className="ml-3 -rotate-45"/></button>
              </div>
            </div>
            <div className="md:w-[50%] w-full flex justify-center ">
                <img src={e.image} className="w-[30rem]" alt="" />
            </div>
          </div>
          )
        })}

          {/* <div className="w-full flex justify-between items-center">
            <div className="w-[50%] ">
              <h2 className="text-4xl text-blue-500 font-medium dark:text-white">Web Design</h2>
              <p className="text-lg mt-2 text-black font-medium dark:text-white text-opacity-60 dark:text-opacity-60">We are a creative digital agency dedicated to transforming brands with innovative web solutions. Our team specializes in crafting visually stunning, user-friendly websites that drive engagement and business growth.</p>
              <div className="mt-6 flex  flex-col gap-2">
                <div className="flex items-center">
                    <FontAwesomeIcon icon={faCheck} className="text-white bg-blue-500 p-2 rounded-full bg-opacity-80" />
                    <p className="ml-3 text-black dark:text-white">Creative Design Solutions</p>
                </div>
                <div className="flex items-center">
                    <FontAwesomeIcon icon={faCheck} className="text-white bg-blue-500 p-2 rounded-full bg-opacity-80" />
                    <p className="ml-3 text-black dark:text-white">User-Centered Approach</p>
                </div>
                <div className="flex items-center">
                    <FontAwesomeIcon icon={faCheck} className="text-white bg-blue-500 p-2 rounded-full bg-opacity-80" />
                    <p className="ml-3 text-black dark:text-white">Growth-Driven Strategies</p>
                </div>
              </div>
              <div className="mt-5">
                <button className="border-[1px] p-4 rounded-full text-blue-500 dark:text-white  flex justify-center items-center  shadow-[0_15px_60px_-15px_rgba(50,110,244,0.8)]  hover:border-blue-500 hover:bg-blue-500 hover:text-white transition-all ">Contact Us <FontAwesomeIcon  icon={faArrowRight} className="ml-3 -rotate-45"/></button>
              </div>
            </div>
            <div className="w-[50%] flex justify-center ">
                <img src={webdesign} className="w-[30rem]" alt="" />
            </div>
          </div> */}

        </div>
      </div>
    </div>
  );
};

export default Services;
