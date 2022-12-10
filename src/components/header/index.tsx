import React from 'react';
import { NavigationButton, NavigationButtonProps, navigationButtons } from "./navigation/button";
import { Button, buttons } from "./button";
import { SearchBar } from "./search-bar";
import { Route, Routes, useLocation } from "react-router-dom";
import { ReturnButton } from "./navigation/return-button";
import { SimpleButton } from "./navigation/simple-button";
import { GiOilDrum } from "react-icons/gi";

export const Header: React.FC = () => {
  const {pathname} = useLocation();

  const relevantNavigationButtons = (navigationButtons: NavigationButtonProps[]) => {
    return navigationButtons.map(navigationButton =>
      <NavigationButton
        name={navigationButton.name}
        link={navigationButton.link}
        className={navigationButton.className}
        selectionColor={navigationButton.selectionColor}
        current={navigationButton.link === pathname}
      />
    )
  }

  const returnTendersButton = (
    <ReturnButton name="Вернуться к закупкам"/>
  );

  const returnFavouriteTendersButton = (
    <ReturnButton name="Вернуться к избранным"/>
  );

  const returnSearchTendersButton = (
    <ReturnButton name="Вернуться к поиску"/>
  );

  const searchButton = <SimpleButton name="Поиск"/>;

  return (
    <div className="fixed flex h-[100px] w-screen">
      <div className="flex w-screen justify-between items-center">
        <div className="flex items-center ml-[40px] text-xl text-white font-extrabold">ТЕНДЕРЫ<GiOilDrum className="ml-[5px] mr-[5px]"/>РФ</div>
        <div className="flex justify-center items-center">
          <Routes>
            <Route
              path="/tenders/search"
              element={
                <>
                  {relevantNavigationButtons(navigationButtons)}
                  {searchButton}
                </>
              }
            />
            <Route
              path="/tenders/search/:id"
              element={
                <>
                  {returnSearchTendersButton}
                  {relevantNavigationButtons(navigationButtons)}
                </>
              }
            />
            <Route
              path="/tenders"
              element={relevantNavigationButtons(navigationButtons)}
            />
            <Route
              path="/tenders/:id"
              element={
                <>
                  {returnTendersButton}
                  {relevantNavigationButtons(navigationButtons.filter(navigationButton => navigationButton.name !== "Закупки"))}
                </>
              }
            />
            <Route
              path="/favourites"
              element={relevantNavigationButtons(navigationButtons)}
            />
            <Route
              path="/favourites/:id"
              element={
                <>
                  {returnFavouriteTendersButton}
                  {relevantNavigationButtons(navigationButtons.filter(navigationButton => navigationButton.name !== "Избранное"))}
                </>
              }
            />
            <Route
              path="/contacts"
              element={relevantNavigationButtons(navigationButtons)}
            />
            <Route
              path="*"
              element={relevantNavigationButtons(navigationButtons)}
            />
          </Routes>
        </div>
        <div className="flex">
          <SearchBar/>
          {buttons.map(button =>
            <Button icon={button.icon} type={button.type}/>
          )}
        </div>
      </div>
    </div>
  );
};