import React from 'react';
import { IoPersonCircle } from "react-icons/io5";

export const ContactsCard: React.FC = () => {
  return (
    <div className="flex h-[calc(16.66666%-(20px/3))] w-[calc(20%)] animate-appearance bg-[rgba(255,255,255,0.25)] hover:bg-[rgba(255,255,255,0.35)] cursor-pointer rounded-2xl justify-center">
      <div className="flex justify-around items-center h-full w-full">
        <div className="flex flex-col">
          <div className="font-medium text-white text-xl">Лия Низамова</div>
        </div>
        <IoPersonCircle className="text-white text-5xl"/>
      </div>
    </div>
  );
};