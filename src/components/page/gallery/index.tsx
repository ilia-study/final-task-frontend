import React from "react";

const imageSrcs = [
  require("./images/image_1.jpg"),
  require("./images/image_2.jpg"),
  require("./images/image_3.jpg"),
  require("./images/image_4.jpg"),
  require("./images/image_5.jpg"),
  require("./images/image_6.jpg"),
  require("./images/image_7.jpg"),
  require("./images/image_8.jpg"),
  require("./images/image_9.jpg"),
]

export const Gallery: React.FC = () => {
  return (
    <div className="flex flex-wrap content-start w-full h-full ml-[20px] mt-[20px]">
      {imageSrcs.map(imageSrc => (
        <div className="flex h-[calc(50%-(10px))] w-[calc(33.333333%)] animate-appearance">
          <img
            alt=""
            src={imageSrc}
            className="flex hover:brightness-110 flex-col w-[calc(100%-20px)] h-[calc(100%-20px)] bg-[rgba(255,255,255,0.25)] rounded-2xl border-[rgba(255,255,255,0.3)] border-[1px] transition-background transition-filter overflow-hidden"
          >
          </img>
        </div>
      ))}
    </div>
  )
}