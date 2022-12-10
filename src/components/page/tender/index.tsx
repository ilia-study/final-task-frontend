import React from "react";
import { useParams } from "react-router-dom";
import { isFetchBaseQueryError, useGetExactTenderQuery } from "../../store/tenders/api";
import { BiError, BiLoader } from "react-icons/bi";
import { useTendersStoreSelector } from "../../store/hooks/redux";

interface TenderPropertyProps {
  title: string;
  value: string;
}
const TenderProperty: React.FC<TenderPropertyProps> = ({
  title,
  value
}) => {
  return (
    <div className="flex flex-col w-[calc(33.3333%-40px)] h-[150px] items-center justify-center text-xl ml-[30px] mt-[30px]">
      <span className="flex bg-[rgba(255,255,255,0.4)] w-[calc(100%)] h-[calc(40%)] rounded-t-xl text-white font-medium justify-center items-center">{title}</span>
      <span className="flex bg-[rgba(255,255,255,0.2)] w-[calc(100%)] h-[calc(60%)] rounded-b-xl items-center justify-center font-medium text-white whitespace-nowrap">{value}</span>
    </div>
  );
}

export const Tender: React.FC = () => {
  const {userToken} = useTendersStoreSelector(state => state["user/slice"]);

  const {id} = useParams();

  const {data, isSuccess, isError, isLoading, error} = useGetExactTenderQuery({id: id ?? "", token: userToken});

  if (isLoading) {
    return (
      <div className="flex h-full w-full items-center justify-center text-white text-xl">
        <div className="flex bg-[rgba(255,255,255,0.2)] py-2 px-4 rounded-xl animate-appearance items-center">
          <BiLoader className="mr-[10px] text-2xl animate-spin-slow"/>
          Загрузка тендера
        </div>
      </div>
    );
  }

  if (isSuccess) {
    return (
      <div className="flex flex-col w-full h-full animate-appearance">
        <div className="text-white text-2xl font-medium w-[calc(100%-80px)] ml-[30px] mt-[30px]">{data.name}</div>
        <div className="flex flex-wrap">
          <TenderProperty title="Начальная цена" value={data.price + " ₽"}/>
          <TenderProperty title="Номер тендера" value={data.description}/>
          <TenderProperty title="Срок завершения" value={data.expiration}/>
          <TenderProperty title="Регион тендера" value={data.region}/>
        </div>
      </div>
    );
  }

  if (isError && error && isFetchBaseQueryError(error) && error.status) {
    return (
      <div className="flex h-full w-full items-center justify-center text-white text-xl">
        <div className="flex bg-[rgba(255,255,255,0.2)] py-2 px-4 rounded-xl animate-appearance">
          <BiError className="mr-[10px] text-2xl"/>
          Ошибка при загрузке тендера
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full w-full items-center justify-center text-white text-xl">
      <div className="flex bg-[rgba(255,255,255,0.2)] py-2 px-4 rounded-xl animate-appearance">
        <BiLoader className="mr-[10px] text-2xl"/>
        Тендеры не найден
      </div>
    </div>
  );
}