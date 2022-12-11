import React from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import { TendersCover } from "./tenders/cover";
import { FavouritesTendersCover } from "./tenders/favourites/cover";
import { ContactsCover } from "./contacts/cover";
import { Tender } from "../page/tender";
import { TendersSearchCover } from "./tenders/search/cover";
import { GiOilDrum } from "react-icons/gi";
import { FaUniversity } from "react-icons/fa";
import { Gallery } from "../page/gallery";
import { Feedback } from "../page/feedback";
import { Main } from "../page/main";

export const Content: React.FC = () => {
  return (
    <>
      <div className="flex w-[calc(100%-60px)] h-[calc(100%)] mb-[35px] bg-[rgba(255,255,255,0.2)] rounded-2xl mt-[100px] shadow-md overflow-scroll">
        <Routes>
          <Route
            path="/main"
            element={<Main/>}
          />
          <Route
            path="/tenders/search"
            element={<TendersSearchCover/>}
          />
          <Route
            path="/tenders/search/:id"
            element={<Tender/>}
          />
          <Route
            path="/tenders"
            element={<TendersCover/>}
          />
          <Route
            path="/tenders/:id"
            element={<Tender/>}
          />
          <Route
            path="/favourites"
            element={<FavouritesTendersCover/>}
          />
          <Route
            path="/favourites/:id"
            element={<Tender/>}
          />
          <Route
            path="/contacts"
            element={<ContactsCover/>}
          />
          <Route
            path="/gallery"
            element={<Gallery/>}
          />
          <Route
            path="/feedback"
            element={<Feedback/>}
          />
          <Route
            path="*"
            element={<Navigate to="/tenders" replace/>}
          />
        </Routes>
      </div>
      <div className="flex w-[calc(100%-60px)] h-[calc(90px)] mb-[30px] bg-[rgba(255,255,255,0.2)] rounded-2xl shadow-md overflow-scroll justify-between">
        <div className="flex items-center font-bold text-white ml-[20px]">ТЕНДЕРЫ<GiOilDrum className="ml-[5px] mr-[5px]"/>РФ © 2022</div>
        <div className="flex items-center font-bold text-white mr-[20px]">ИНН УГНТУ <FaUniversity className="ml-[5px] mr-[5px]"/> Лия Низамова</div>
      </div>
    </>
  );
};