import React, { useState } from 'react';
import { CgSearch } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

export const SearchBar: React.FC = () => {
  const [searchName, setSearchName] = useState("");

  const navigate = useNavigate();

  return (
    <div className="flex mr-4 items-center">
      <CgSearch className="fixed mr-[-10px] z-2 ml-[10px] text-white"/>
      <input
        id="search-bar-input"
        className="placeholder:text-white bg-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.3)] transition-background w-[200px] rounded-lg outline-none text-white p-1.5 z-1 pl-[35px]"
        placeholder="Поиск..."
        onChange={event => {
          setSearchName(event.target.value);
        }}
        onKeyUp={event => {
          if (event.key === 'Enter' || event.keyCode === 13) {
            if (searchName === "") {
              navigate(`/tenders`);
            } else {
              navigate(`/tenders/search?name=${searchName}`);
            }
          }
        }}
      />
    </div>
  );
};