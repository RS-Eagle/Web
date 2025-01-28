import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import user from "../../assets/img/user2.png";
import star from "../../assets/img/star.png";
import "./Testimonial.css";
import Marquee from "react-fast-marquee";

const Reviews = () => {
    const elementRef = useRef(null);

    const isInView = useInView(elementRef, {
      margin: "400px 0px -10% 0px",
    });
  
    const itemsVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
        },
      },
    };
  
    const testArr = [
      {
        username: "John",
        starCount: 4,
        content:
          "I was hesitant to try Triton Solution at first, but I'm so glad I did - it's exceeded all of my expectations.",
        userImage: user,
      },
      {
        username: "Emily",
        starCount: 5,
        content:
          "Triton Solution has completely transformed the way I manage my projects. I can't recommend it enough!",
        userImage: user,
      },
      {
        username: "Michael",
        starCount: 4,
        content:
          "Great experience overall. Triton Solution made it so easy to stay organized and productive.",
        userImage: user,
      },
      {
        username: "Sophia",
        starCount: 5,
        content:
          "Using Triton Solution was the best decision for our team. It's user-friendly and incredibly effective.",
        userImage: user,
      },
      {
        username: "David",
        starCount: 3,
        content:
          "Triton Solution is good, but I feel there's room for improvement in terms of features and customization.",
        userImage: user,
      },
    ];
  return (
    <div className="mt-10">
      <motion.h3
        ref={elementRef}
        variants={itemsVariants}
        initial="hidden"
        animate={`${isInView ? "visible" : ""}`}
        className="text-center text-5xl text-black dark:text-white "
      >
        Testimonials
      </motion.h3>
      <p className="text-center mt-5 text-sm dark:text-opacity-70 text-black dark:text-white ">
        ~ See What Our Clients Say About Us
      </p>
      <div className="min-h-96 mt-28">
        <Marquee autoFill={true} speed={60} className="h-full  ">
          {testArr.map((e) => (
            <div className="mx-10 md:min-w-96  min-h-72 p-7 md:max-w-[30rem] min-w-40 max-w-[22rem] testimonial">
              <div className="flex justify-start items-center ">
                <div className="w-16 rounded-full ">
                  <img src={e.userImage} alt="user" />
                </div>
                <p className=" text-xl text-black dark:text-white">
                  {e.username}
                </p>
              </div>
              <div className="pl-3 mt-3 flex gap-3">
                {Array.from({ length: e.starCount }).map((_) => (
                  <img src={star} width={25} alt="" />
                ))}
              </div>
              <div className="pl-3 mt-5 min-h-20 ">
                <p className="h-full line-clamp-4 dark:text-opacity-90 text-black dark:text-white">
                 {e.content}
                </p>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  )
}

export default Reviews
