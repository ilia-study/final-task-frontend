import { useNavigate } from "react-router-dom";
import React from "react";
import { HiArrowLeft } from "react-icons/hi";

interface ReturnButtonProps {
  name: string;
}

export const ReturnButton: React.FC<ReturnButtonProps> = ({
  name
}) => {
  const navigate = useNavigate();

  return (
    <div
      className={`flex text-white ml-2 py-1.5 px-4 rounded-lg font-medium bg-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.3)] transition-background cursor-pointer items-center`}
      onClick={() => navigate(-1)}
    >
      <HiArrowLeft className="mr-[5px]"/>
      {name}
    </div>
  )
}