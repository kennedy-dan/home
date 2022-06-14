import React, { useState } from "react";
import product1 from "../../assets/product-imgg-4.png";
import product2 from "../../assets/product-img-5.png";
import product3 from "../../assets/product-img-6.png";
import vids from "../../assets/vids.mp4";
import h1 from '../../assets/h1-img-1.png'
import h2 from '../../assets/h1-img-2.png'
import "./NewProduts.css";
import { AiFillPlayCircle, AiOutlineClose } from "react-icons/ai";

const NewProducts = () => {
  const [isOpen, setIsOpen] = useState(false);
  const playVid = () => {
    setIsOpen(true);
  };

  const closeVid = () => {
    setIsOpen(false);
  };
  return (
    <div className="absolute top-[100%] h-full w-full mt-20">
      <p className="text-center text-3xl font-semibold tracking-wider">
        New Products
      </p>
      <div className="flex justify-center">
        <p className="text-center mt-5 text-gray-600 text-base w-1/2 md-w-full">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco ommodo
          consequat. Duis aute irure dolor in reprehenderit.
        </p>
      </div>
      <div className="w-full my-20">
        <div className="md:flex lg:mx-20 md:mx-0 mx-20 justify-around">
          <div>
            <div className=" bg-[#f7f5f6] w-180 md:w-[250px] lg:w-[300px] xl:w-[360px] cursor-pointer">
              <div>
                <p className="text-sm font-semibold pt-2 ml-3">NEW</p>
                <img
                  src={product1}
                  alt=""
                  className=" md:h-[300px] lg:h-[400px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-transparent duration-1000"
                />
              </div>
            </div>
            <p className="text-center mt-5 font-semibold">flash</p>
            <p className="text-center mb-20">£93.00</p>
          </div>
          <div>
            <div className=" bg-[#f7f5f6] w-100 md:w-[250px] lg:w-[300px] xl:w-[360px] cursor-pointer">
              <div>
                <p className="text-sm font-semibold pt-2 ml-3">NEW</p>
                <img
                  src={product2}
                  alt=""
                  className="md:h-[300px] lg:h-[400px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-transparent duration-1000"
                />
              </div>
            </div>
            <p className="text-center mt-5  font-semibold">flash</p>
            <p className="text-center mb-20">£93.00</p>
          </div>
          <div>
            <div className=" bg-[#f7f5f6] w-180 md:w-[250px] lg:w-[300px] xl:w-[360px] cursor-pointer">
              <div>
                <p className="text-sm font-semibold pt-2 ml-3">NEW</p>
                <img
                  src={product3}
                  alt=""
                  className="md:h-[300px] lg:h-[400px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-transparent duration-1000"
                />
              </div>
            </div>
            <p className="text-center mt-5 font-semibold">Wooden chair</p>
            <p className="text-center mb-20">£93.00</p>
          </div>
        </div>
      </div>
      <div
        className={`flex justify-center items-center bg-fixed bg-cover bg-no-repeat bg-center h-[400px] w-full bg-[url('./assets/h1-parallax-img-1.jpg')]`}
      >
        <div>
          <p className="font-bold text-white text-center text-4xl">
            Upcoming collection
          </p>
          <p className="text-white text-center text-lg mt-10">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco ommodo{" "}
            <br />
            consequat. Duis aute irure dolor in reprehenderit.
          </p>
          <div className="flex justify-center">
            <button className="py-3 px-4 border-white border-2 mt-8">
              <p className="text-white">View more</p>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`flex justify-center items-center bg-fixed bg-cover bg-no-repeat bg-center h-[400px] w-full bg-[url('./assets/h1-parallax-img-2.jpg')]`}
      >
        <div>
          {isOpen === false ? (
            <AiFillPlayCircle
              className="text-white w-16 opacity-50 h-16 cursor-pointer"
              onClick={playVid}
            />
          ) : (
            <AiOutlineClose
              className="text-white w-10 h-10 cursor-pointer"
              onClick={closeVid}
            />
          )}

          <video
            src={vids}
            autoPlay="false"
            controls="controls"
            className={`w-60 h-60 ${isOpen === true ? "block" : "hidden"}`}
          />
        </div>
      </div>

      <div className="flex mt-40 justify-around">
        <div>
          <p className="font-bold  text-center text-4xl">Stylish Chairs</p>
          <p className=" text-center text-lg mt-10 text-gray-500">
            Ut enim ad minim veniam, quis nostrud exercitation <br /> ullamco
            ommodo consequat. Duis aute irure.
          </p>
          <div className="flex justify-center">
            <button className="py-3 px-4 border-black border mt-8">
              <p className="text-gray">View more</p>
            </button>
          </div>
        </div>
        <div className="">
          <img src={h1} alt='chair'/>
          <img src={h2} alt='chair' className="-mt-20"/>
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
