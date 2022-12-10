import React, { useCallback, useMemo, useRef, useState } from "react";
import { IUser } from "../../store/models/IUser";
import "./index.css";
import { useActions } from "../../store/hooks/actions";
import { TENDERS_SERVER_URL } from "../../../constants/url";
import { CgClose } from "react-icons/cg";
import { AiOutlineLock } from "react-icons/ai";
import { BsCheck } from "react-icons/bs";

export const Login: React.FC = () => {
  const {setToken} = useActions();

  const loginInput = useRef<HTMLInputElement>({} as HTMLInputElement);
  const passwordInput = useRef<HTMLInputElement>({} as HTMLInputElement);
  const button = useRef<HTMLButtonElement>({} as HTMLButtonElement);

  const defaultLoginButton = useMemo(() => <div className="flex w-full h-full items-center justify-center text-white"><AiOutlineLock className="mr-[5px]"/>Войти</div>, []);
  const [buttonText, setButtonText] = useState<JSX.Element>(defaultLoginButton);

  const getToken = useCallback((login: string, password: string) => {
    fetch(
      `${TENDERS_SERVER_URL}users/login`, {
        method: "post",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({login, password} as IUser)
      })
      .then((response) => {
        if (response.status !== 200) {
          throw Error("Token request error");
        }
        response.text().then(token => {
          setButtonText(<div className="flex w-full h-full items-center justify-center text-white"><BsCheck className="mr-[5px]"/>Успешно</div>);

          setTimeout(() => {
            localStorage.setItem("token", token);
            setToken(token);
          }, 1000);
        });
      })
      .catch(err => {
        setButtonText(<div className="flex w-full h-full items-center justify-center text-white"><CgClose className="mr-[5px] text-white"/>Ошибка</div>);

        setTimeout(() => {
          setButtonText(defaultLoginButton);
        }, 1000);
      });
  }, [defaultLoginButton, setToken]);

  return (
    <div className="flex items-center justify-center h-full w-full animate-appearance">
      <div className="flex w-[350px] h-[350px] bg-[rgba(255,255,255,0.2)] rounded-xl">
        <div className="flex flex-col w-full h-full ml-[30px]">
          <div className="flex justify-center font-bold w-[calc(100%-10px)] text-white text-xl mt-[25px]">ТЕНДЕРЫ</div>
          <div className="mt-[10px] text-white font-medium">Логин</div>
          <input
            ref={loginInput}
            className="mt-[10px] placeholder:text-[rgba(255,255,255,0.5)] bg-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.3)] transition-background w-[calc(100%-30px)] rounded-lg outline-none text-white p-1.5 z-1 pl-[15px] py-[10px]"
            placeholder="Введите логин..."
          />
          <div className="mt-[10px] text-white font-medium">Пароль</div>
          <input
            ref={passwordInput}
            type="password"
            className="mt-[10px] placeholder:text-[rgba(255,255,255,0.5)] bg-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.3)] transition-background w-[calc(100%-30px)] rounded-lg outline-none text-white p-1.5 z-1 pl-[15px] py-[10px]"
            placeholder="Введите пароль..."
          />

          <div className="flex justify-end mt-auto text-white text-xs mb-[-5px] font-bold mr-[30px]">Зарегистрироваться?</div>
          <button
            ref={button}
            onClick={() => {
              const login = loginInput.current.value;
              const password = passwordInput.current.value;
              getToken(login, password);
            }}
            className="mt-auto mb-[25px] bg-[rgba(5,46,93,0.3)] hover:bg-[rgba(5,46,93,0.5)] transition-background w-[calc(100%-30px)] rounded-lg outline-none text-white p-1.5 z-1 pl-[15px] py-[10px]"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}