import React, { useCallback, useMemo, useRef, useState } from "react";
import { IUser } from "../../store/models/IUser";
import "./index.css";
import { useActions } from "../../store/hooks/actions";
import { TENDERS_SERVER_URL } from "../../../constants/url";
import { CgClose } from "react-icons/cg";
import { AiOutlineLock } from "react-icons/ai";
import { BsCheck } from "react-icons/bs";

export const Register: React.FC = () => {
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
      wow
    </div>
  );
}