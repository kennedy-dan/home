import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import Drawer from "./Drawer";
const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="flex justify-between mt-5">
      <p className="text-2xl ml-10 font-semibold text-white">Home</p>
      <div className="w-8 h-16">
        <AiOutlineMenu
          onClick={() => setIsOpen(true)}
          className="flex text-white md:hidden mr-5  h-8 w-6"
        />
      </div>
      <div className=" hidden md:flex w-1/2 justify-evenly">
        <NavLink
          to="/"
          className={({ isActive }) =>
          isActive ? "border-b-2 border-white h-10" : "link"
        }
        >
          <p className="text-white text-lg font-semibold">Home</p>
        </NavLink>
        <NavLink
          to="/shop"
          className={({ isActive }) =>
            isActive ? "border-b-2 border-white h-10" : "link"
          }
        >
          {" "}
          <p className="text-white text-lg font-semibold">Shop</p>
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
          isActive ? "border-b-2 border-white h-10" : "link"
        }
        >
          {" "}
          <p className="text-white text-lg font-semibold">Blog</p>
        </NavLink>
        <NavLink
          to="/portfolio"
          className={({ isActive }) =>
            isActive ? "border-b-2 border-white h-10" : "link"
          }
        >
          {" "}
          <p className="text-white text-lg font-semibold">Portfolio</p>
        </NavLink>
        <NavLink to='/portfolio' className={({ isActive }) => (isActive ? "border-b-2 border-white h-10" : "link")}> <p className='text-white text-lg font-semibold'>Element</p></NavLink>
      </div>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        {/* <div className="ml-5"> */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "border-b-2 border-black w-fit ml-5 h-10" : "ml-5 link"
          }
        >
        
          <p className="text-black text-lg font-semibold">Home</p>
        </NavLink>
        <NavLink
          to="/shop"
          className={({ isActive }) =>
            isActive ? "border-b-2 border-black w-fit ml-5 h-10" : " ml-5 link"
          }
        >
          {" "}
          <p className="text-black text-lg font-semibold">Shop</p>
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
          isActive ? "border-b-2 border-black w-fit ml-5 h-10" : "ml-5 link"
        }
        >
          {" "}
          <p className="text-black text-lg font-semibold">Blog</p>
        </NavLink>
        <NavLink
          to="/portfolio"
          className={({ isActive }) =>
            isActive ? "border-b-2 border-black w-fit ml-5 h-10" : "ml-5 link"
          }
          
        >
          {" "}
          <p className="text-black text-lg font-semibold">Portfolio</p>
        </NavLink>
        {/* </div> */}
      </Drawer>
    </div>
  );
};

export default Header;
