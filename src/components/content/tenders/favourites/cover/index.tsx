import React, { useEffect, useMemo, useState } from 'react';
import { BiError, BiLoader } from "react-icons/bi";
import { useGetFavouriteTendersQuery } from "../../../../store/tenders/api";
import { ITender } from "../../../../store/models/ITender";
import { TendersCard } from "../../card";
import { useTendersStoreSelector } from "../../../../store/hooks/redux";

export const FavouritesTendersCover: React.FC = () => {
  const {userToken} = useTendersStoreSelector(state => state["user/slice"]);

  const {
    data,
    isSuccess,
    isLoading,
    isError,
    refetch
  } = useGetFavouriteTendersQuery(userToken);

  const [tenders, setTenders] = useState<ITender[]>([]);

  useEffect(() => {
    if (isSuccess) {
      setTenders(data);
    }
  }, [data, isSuccess]);

  const tendersCards = useMemo(() => {
    return (
      <div className="flex flex-wrap content-start w-full h-full ml-[20px] mt-[20px]">
        {tenders.map(tender =>
          <TendersCard
            id={tender.id}
            name={tender.name}
            description={tender.description}
            expiration={tender.expiration}
            price={tender.price}
            favourite={tender.favourite}
            region={tender.region}
            refetch={refetch}
          />
        )}
      </div>
    );
  }, [refetch, tenders]);

  if (isLoading) {
    return (
      <div className="flex h-full w-full items-center justify-center text-white text-xl">
        <div className="flex bg-[rgba(255,255,255,0.2)] py-2 px-4 rounded-xl animate-appearance">
          <BiLoader className="mr-[10px] text-2xl animate-spin-slow"/>
          Загрузка избранных тендеров
        </div>
      </div>
    );
  }

  if (isSuccess && tenders) {
    return tendersCards;
  }

  if (isError) {
    return (
      <div className="flex h-full w-full items-center justify-center text-white text-xl">
        <div className="flex bg-[rgba(255,255,255,0.2)] py-2 px-4 rounded-xl animate-appearance">
          <BiError className="mr-[10px] text-2xl"/>
          Ошибка при загрузке избранных тендеров
        </div>
      </div>
    )
  }

  return (
    <div className="flex h-full w-full items-center justify-center text-white text-xl">
      <div className="flex bg-[rgba(255,255,255,0.2)] py-2 px-4 rounded-xl animate-appearance">
        <BiLoader className="mr-[10px] text-2xl"/>
        Тендеры не найдены
      </div>
    </div>
  )
};