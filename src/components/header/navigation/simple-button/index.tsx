import React from "react";

interface ReturnButtonProps {
  name: string;
}

export const SimpleButton: React.FC<ReturnButtonProps> = ({
  name
}) => {
  return (
    <div className={`flex text-white ml-2 py-1.5 px-4 rounded-lg font-medium bg-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.3)] transition-background cursor-pointer items-center`}>
      {name}
    </div>
  );
}