import React, { useEffect, useRef, useState } from "react";
import { useSaveFeedbackMutation } from "../../store/feedback/api";
import { IFeedbackRequest } from "../../store/models/IFeedbackRequest";
import { useTendersStoreSelector } from "../../store/hooks/redux";

export const Feedback: React.FC = () => {
  const [fetch, {isSuccess}] = useSaveFeedbackMutation();

  const nameRef = useRef<HTMLInputElement>({} as HTMLInputElement);
  const phoneRef = useRef<HTMLInputElement>({} as HTMLInputElement);
  const emailRef = useRef<HTMLInputElement>({} as HTMLInputElement);
  const infoRef = useRef<HTMLTextAreaElement>({} as HTMLTextAreaElement);

  const {userToken} = useTendersStoreSelector(state => state["user/slice"]);

  const [textButton, setTextButton] = useState("Отправить");

  useEffect(() => {
    if (isSuccess) {
      setTextButton("Успешно отправлено!")
    }
  }, [isSuccess]);

  return (
    <div className="flex w-full h-full">
      <div className="flex flex-col w-[calc(50%-40px)] h-[calc(100%-40px)] ml-[20px] mt-[20px] bg-[rgba(255,255,255,0.2)] rounded-2xl">
        <div className="text-white text-2xl font-bold ml-[20px] mt-[20px]">Контактная информация</div>
        <div className="text-white text-xl font-medium ml-[20px] mt-[20px]">В случае, если Вы хотите обсудить какие-либо вопросы, свяжитесь с нами:</div>
        <div className="text-white text-lg ml-[20px] mt-[20px] ">по телефону: +7 (917) 799-95-42</div>
        <div className="text-white text-lg ml-[20px] mt-[20px]">по e-mail: lnizamova01@mail.ru</div>
        <div className="text-white text-lg ml-[20px] mt-[20px]">заполнив форму обратной связи</div>

        <div className="text-white text-xl font-bold ml-[20px] mt-[20px]">Наши менеджеры свяжутся с Вами в ближайшее время</div>
      </div>

      <div className="flex flex-col w-[calc(50%-20px)] h-[calc(100%-40px)] ml-[20px] mt-[20px] bg-[rgba(255,255,255,0.2)] rounded-2xl">
        <div className="text-white text-2xl font-bold ml-[20px] mt-[20px]">Форма обратной связи</div>
        <div className="text-white text-xl font-medium ml-[20px] mt-[20px]">ФИО:</div>
        <input
          ref={nameRef}
          className="ml-[20px] mt-[10px] placeholder:text-[rgba(255,255,255,0.5)] bg-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.3)] transition-background w-[calc(100%-40px)] rounded-lg outline-none text-white p-1.5 z-1 pl-[15px] py-[10px]"
          placeholder="Введите ваше ФИО..."
        />
        <div className="text-white text-xl font-medium ml-[20px] mt-[20px]">Номер телефона:</div>
        <input
          ref={phoneRef}
          className="ml-[20px] mt-[10px] placeholder:text-[rgba(255,255,255,0.5)] bg-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.3)] transition-background w-[calc(100%-40px)] rounded-lg outline-none text-white p-1.5 z-1 pl-[15px] py-[10px]"
          placeholder="Введите ваш номер телефона..."
        />
        <div className="text-white text-xl font-medium ml-[20px] mt-[20px]">Адрес электронной почты:</div>
        <input
          ref={emailRef}
          className="ml-[20px] mt-[10px] placeholder:text-[rgba(255,255,255,0.5)] bg-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.3)] transition-background w-[calc(100%-40px)] rounded-lg outline-none text-white p-1.5 z-1 pl-[15px] py-[10px]"
          placeholder="Введите вашу электронную почту..."
        />
        <div className="text-white text-xl font-medium ml-[20px] mt-[20px]">Информация для менеджера:</div>
        <textarea
          ref={infoRef}
          className="ml-[20px] h-[200px] mt-[10px] placeholder:text-[rgba(255,255,255,0.5)] bg-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.3)] transition-background w-[calc(100%-40px)] rounded-lg outline-none text-white p-1.5 z-1 pl-[15px] py-[10px]"
          placeholder="Введите информацию для нашего менеджера..."
        />

        <button
          className="mt-auto mb-[20px] ml-[20px] mt-[10px] bg-[rgba(5,46,93,0.3)] hover:bg-[rgba(5,46,93,0.5)] transition-background w-[calc(100%-40px)] rounded-lg outline-none text-white p-1.5 z-1 pl-[15px] py-[10px]"
          onClick={() => {
            fetch({
              name: nameRef.current.value,
              email: emailRef.current.value,
              phone: emailRef.current.value,
              info: infoRef.current.value,
              token: userToken
            } as IFeedbackRequest);
          }}
        >{textButton}</button>
      </div>
    </div>
  )
}