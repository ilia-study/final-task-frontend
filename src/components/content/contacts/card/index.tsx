import React from 'react';
import { IoPersonCircle } from "react-icons/io5";

const lia = require("../images/lia.jpg");
const stas = require("../images/stas.jpg");

export const ContactsCard: React.FC = () => {
  return (
    <div className="flex h-[calc(100%-(40px))] w-[calc(50%)] animate-appearance bg-[rgba(255,255,255,0.25)] hover:bg-[rgba(255,255,255,0.35)] cursor-pointer rounded-2xl justify-center">
      <div className="flex justify-around items-center h-full w-full">
        <div className="flex flex-col">
          <div className="font-medium text-white text-xl">Лия Низамова</div>
        </div>
        <img src={lia} className="w-1/2 rounded-2xl"/>
      </div>
    </div>
  );
};