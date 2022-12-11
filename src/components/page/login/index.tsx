import React, { useCallback, useMemo, useRef, useState } from "react";
import { IUser } from "../../store/models/IUser";
import "./index.css";
import { useActions } from "../../store/hooks/actions";
import { TENDERS_SERVER_URL } from "../../../constants/url";
import { CgClose } from "react-icons/cg";
import { AiOutlineLock } from "react-icons/ai";
import { BsCheck, BsFillPersonCheckFill } from "react-icons/bs";
import { GiOilDrum } from "react-icons/gi";

export const Login: React.FC = () => {
  const {setToken} = useActions();

  const [register, setRegister] = useState(false);

  const nameInput = useRef<HTMLInputElement>({} as HTMLInputElement);
  const loginInput = useRef<HTMLInputElement>({} as HTMLInputElement);
  const passwordInput = useRef<HTMLInputElement>({} as HTMLInputElement);
  const button = useRef<HTMLButtonElement>({} as HTMLButtonElement);

  const defaultLoginButton = useMemo(() => <div className="flex w-full h-full items-center justify-center text-white"><AiOutlineLock className="mr-[5px]"/>Войти</div>, []);
  const defaultRegisterLoginButton = useMemo(() => <div className="flex w-full h-full items-center justify-center text-white"><BsFillPersonCheckFill className="mr-[5px]"/>Зарегистрироваться</div>, []);
  const [buttonText, setButtonText] = useState<JSX.Element>(defaultLoginButton);
  const [buttonRegisterText, setButtonRegisterText] = useState<JSX.Element>(defaultRegisterLoginButton);

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

  const getRegisterToken = useCallback((name: string, login: string, password: string) => {
    fetch(
      `${TENDERS_SERVER_URL}users/register`, {
        method: "post",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, login, password} as IUser)
      })
      .then((response) => {
        if (response.status !== 200) {
          throw Error("Token request error");
        }
        response.text().then(token => {
          setButtonRegisterText(<div className="flex w-full h-full items-center justify-center text-white"><BsCheck className="mr-[5px]"/>Успешно</div>);

          setTimeout(() => {
            localStorage.setItem("token", token);
            setToken(token);
          }, 1000);
        });
      })
      .catch(err => {
        setButtonRegisterText(<div className="flex w-full h-full items-center justify-center text-white"><CgClose className="mr-[5px] text-white"/>Ошибка</div>);

        setTimeout(() => {
          setButtonRegisterText(defaultRegisterLoginButton);
        }, 1000);
      });
  }, [defaultLoginButton, setToken]);

  const Login = useMemo(() => (
    <div className="flex flex-col w-full h-full ml-[30px]">
      <div className="flex justify-center items-center font-bold w-[calc(100%-10px)] text-white text-xl mt-[25px] ml-[-15px]">ТЕНДЕРЫ<GiOilDrum className="ml-[5px] mr-[5px]"/>РФ</div>
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

      <div
        className="flex justify-end mt-auto text-white text-xs mb-[-5px] font-bold mr-[30px] cursor-pointer"
        onClick={() => setRegister(true)}
      >
        Зарегистрироваться?
      </div>

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
  ), [getToken, buttonText]);

  const Register = useMemo(() => (
    <div className="flex flex-col w-full h-full ml-[30px]">
      <div className="flex justify-center items-center font-bold w-[calc(100%-10px)] text-white text-xl mt-[25px] ml-[-15px]">ТЕНДЕРЫ<GiOilDrum className="ml-[5px] mr-[5px]"/>РФ</div>
      <div className="mt-[10px] text-white font-medium">Имя</div>
      <input
        ref={nameInput}
        className="mt-[10px] placeholder:text-[rgba(255,255,255,0.5)] bg-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.3)] transition-background w-[calc(100%-30px)] rounded-lg outline-none text-white p-1.5 z-1 pl-[15px] py-[10px]"
        placeholder="Введите имя..."
      />
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

      <button
        ref={button}
        onClick={() => {
          const login = loginInput.current.value;
          const password = passwordInput.current.value;
          const name = nameInput.current.value;
          getRegisterToken(name, login, password);
        }}
        className="mt-auto mb-[25px] bg-[rgba(5,46,93,0.3)] hover:bg-[rgba(5,46,93,0.5)] transition-background w-[calc(100%-30px)] rounded-lg outline-none text-white p-1.5 z-1 pl-[15px] py-[10px] flex items-center justify-center"
      >
        {buttonRegisterText}
      </button>
    </div>
  ), [getRegisterToken, buttonRegisterText]);

  return (
    <div className="flex items-center justify-center h-full w-full animate-appearance">
      <div className={`flex w-[350px] ${register ? "h-[420px]" : "h-[350px]"} bg-[rgba(255,255,255,0.2)] rounded-xl transition-height`}>
        {!register && Login}
        {register && Register}
      </div>
    </div>
  );
}