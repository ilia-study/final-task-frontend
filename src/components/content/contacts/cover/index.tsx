import React from 'react';

const lia = require("../images/lia.jpg");
const stas = require("../images/stas.jpg");

export const ContactsCover: React.FC = () => {
  return (
    <div className="flex flex-wrap content-start w-full h-full ml-[20px] mt-[20px]">
      <div className="flex h-[calc(100%-(40px))] w-[calc(50%-40px)] animate-appearance bg-[rgba(255,255,255,0.25)] hover:bg-[rgba(255,255,255,0.35)] cursor-pointer rounded-2xl justify-center mr-[20px]">
        <div className="flex justify-around items-center h-full w-full">
          <div className="flex flex-col">
            <div className="font-medium text-white text-xl mb-[10px]">Гаврилов Станислав Витальевич</div>
            <div className="font-medium text-white">ассистент кафедры</div>
            <div className="font-medium text-white">"Информационных технологий"</div>
          </div>
          <img alt="" src={stas} className="w-1/2 rounded-2xl border-[rgba(255,255,255,0.3)] border-[1px]"/>
        </div>
      </div>

      <div className="flex h-[calc(100%-(40px))] w-[calc(50%)] animate-appearance bg-[rgba(255,255,255,0.25)] hover:bg-[rgba(255,255,255,0.35)] cursor-pointer rounded-2xl justify-center">
        <div className="flex justify-around items-center h-full w-full">
          <div className="flex flex-col">
            <div className="font-medium text-white text-xl mb-[10px]">Лия Низамова</div>
            <div className="font-medium text-white">студент 4 курса</div>
            <div className="font-medium text-white">по направлению</div>
            <div className="font-medium text-white">"Автоматизированное управление</div>
            <div className="font-medium text-white">бизнес-процессами и финансами"</div>
          </div>
          <img alt="" src={lia} className="w-1/2 rounded-2xl border-[rgba(255,255,255,0.3)] border-[1px]"/>
        </div>
      </div>
    </div>
  )
};