import React from "react";
import "./Header.css"
import { FontAwesomeIcon, } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";


const Header = ({props}) => {
  const handleClick = () => {
    props.setToggleMode((pre) => !pre);
  };

  return (
    <div className="w-full absolute z-10 ">
      <nav className="flex justify-between items-center p-8 text-black dark:text-white">
        <div>
          <h2 className="text-4xl  text-blue-500 font-medium ">
            Triton
          </h2>
        </div>
        <div className="hidden md:block">
          <ul className="flex justify-between items-center gap-20 *:cursor-pointer">
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
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
