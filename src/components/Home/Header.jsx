import React,{ useEffect, useState } from "react";
import "./Header.css"
import { FontAwesomeIcon, } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { motion,useScroll } from "framer-motion";



const Header = ({props}) => {
  const { scrollY } = useScroll(); 
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const unsubscribe = scrollY.onChange((y) => {
      setIsTop(y <= 10); 
    });

    return () => unsubscribe(); 
  }, [scrollY]);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, 
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };


  const handleClick = () => {
    props.setToggleMode((pre) => !pre);
  };

  return (
    <div className={`w-full fixed z-10 transition-all bg-transparent ${!isTop?"bg-[#2B5DCE]/10 rounded-xl  shadow-xl backdrop-blur-[12.7px]":""} `}>
      <nav className="flex justify-between items-center p-8 py-7 text-black dark:text-white">
        <div>
          <h2 className="text-4xl  text-blue-500 font-medium ">
            Triton
          </h2>
        </div>
        <div className="hidden md:block">
          <motion.ul variants={containerVariants} initial="hidden" animate="visible" className="flex justify-between items-center gap-20 *:cursor-pointer">
            <motion.li variants={itemVariants} ><a  href={"/#home"}> Home</a></motion.li>
            <motion.li variants={itemVariants} ><a  href={"/#services"} > Services</a></motion.li>
            <motion.li variants={itemVariants} ><a  href={"/#about"} >About</a> </motion.li>
          </motion.ul>
        </div>
        <div>
          <div>
            <input type="checkbox" checked={props.toggleMode} onChange={handleClick}  className="checkbox" id="checkbox" />
            <label htmlFor="checkbox" className="checkbox-label">
              <i className="fas fa-moon">
              <FontAwesomeIcon icon={faMoon} /></i>
              <i className="fas fa-sun">
              <FontAwesomeIcon icon={faSun} />
              </i>
              <span className="ball"></span>
            </label>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
