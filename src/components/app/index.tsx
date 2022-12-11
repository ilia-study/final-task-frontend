import React, { useEffect } from 'react';
import { Header } from "../header";
import { Content } from "../content";
import { useLocation } from "react-router-dom";
import { navigationButtons } from "../header/navigation/button";
import { useTendersStoreSelector } from "../store/hooks/redux";
import { Login } from "../page/login";

export const App: React.FC = () => {
  const {pathname} = useLocation();

  useEffect(() => {
    if (pathname) {
      const navigationButtonInfo = navigationButtons.find(navigationButton => pathname.startsWith(navigationButton.link));

      document.documentElement.className = "";
      document.documentElement.classList.add(navigationButtonInfo?.className ?? "");

      document.querySelector("meta[name='theme-color']")?.setAttribute("content", navigationButtonInfo?.selectionColor ?? "");
    }
  }, [pathname]);

  const {userToken} = useTendersStoreSelector(state => state["user/slice"]);

  return (
    <div className="flex flex-col h-screen w-screen items-center">
      {userToken ? (
        <>
          <Header/>
          <Content/>
        </>
      ) : <Login/>}
    </div>
  );
};