import React from 'react';
import { ContactsCard } from "../card";

export const ContactsCover: React.FC = () => {
  return (
    <div className="flex flex-wrap content-start w-full h-full ml-[20px] mt-[20px]">
      <ContactsCard/>
    </div>
  )
};