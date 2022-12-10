import React from 'react';
import { Link } from "react-router-dom";

export const navigationButtons: NavigationButtonProps[] = [
  {
    name: "Главная",
    link: "/main",
    className: "main",
    selectionColor: "#5484b1"
  },
  {
    name: "Закупки",
    link: "/tenders",
    className: "tenders",
    selectionColor: "#5484b1"
  },
  {
    name: "Избранное",
    link: "/favourites",
    className: "favourites",
    selectionColor: "#5484b1"
  },
  {
    name: "Контакты",
    link: "/contacts",
    className: "contacts",
    selectionColor: "#5484b1"
  },
  {
    name: "Галерея",
    link: "/gallery",
    className: "gallery",
    selectionColor: "#5484b1"
  },
  {
    name: "Обратная связь",
    link: "/feedback",
    className: "feedback",
    selectionColor: "#5484b1"
  },
];

export interface NavigationButtonProps {
  name: string;
  link: string;
  className: string;
  selectionColor: string;
  current?: boolean;
}

export const NavigationButton: React.FC<NavigationButtonProps> = ({
  name,
  link,
  className,
  selectionColor,
  current
}) => {
  return (
    <Link to={link}>
      <div
        className={`text-white ml-2 py-1.5 px-4 rounded-lg font-medium${current ? " bg-[rgba(255,255,255,0.2)]" : " hover:bg-[rgba(255,255,255,0.1)]"} transition-background`}
        onClick={() => {
          (document.getElementById("search-bar-input") as HTMLInputElement).value = "";

          document.documentElement.className = "";
          document.documentElement.classList.add(className);
          document.querySelector("meta[name='theme-color']")?.setAttribute("content", selectionColor);
        }}
      >
        {name}
      </div>
    </Link>
  );
};