import React from "react";
import { GiOilDrum } from "react-icons/gi";
import { Link } from "react-router-dom";

const mainImage = require("./images/main.png");

export const Main: React.FC = () => {
  return (
    <div className="flex w-full h-full">
      <div className="flex flex-col w-1/2 h-[calc(100%-40px)] ml-[20px] mt-[20px] rounded-2xl items-center justify-center animate-appearance">
        <div className="mt-[25vh] flex items-center text-8xl text-white font-extrabold">ТЕНДЕРЫ<GiOilDrum className="ml-[5px] mr-[5px]"/>РФ</div>
        <div className="flex w-full justify-end text-4xl text-white font-extrabold mr-[80px]">нефтегазовая отрасть</div>
        <Link to="/tenders" className="flex justify-center mt-auto w-full">
        <button
          className=" mb-[20px] ml-[20px] mt-[10px] bg-[rgba(5,46,93,0.3)] hover:bg-[rgba(5,46,93,0.5)] transition-background w-[calc(50%)] rounded-lg outline-none text-white p-1.5 z-1 pl-[15px] py-[10px]"
        >К закупкам</button>
        </Link>
      </div>
      <div className="flex flex-col w-1/2 h-[calc(100%-40px)] ml-[20px] mt-[20px] rounded-2xl items-center justify-center animate-appearance">
        <img alt="" src={mainImage}/>
      </div>
    </div>
  )
}