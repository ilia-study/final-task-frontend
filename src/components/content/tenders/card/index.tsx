import React, { useEffect } from 'react';
import { IoMdAdd } from "react-icons/io";
import { ITender } from "../../../store/models/ITender";
import { AiOutlineCheck } from "react-icons/ai";
import { usePatchFavouriteTenderMutation } from "../../../store/tenders/api";
import { Link } from "react-router-dom";
import { useTendersStoreSelector } from "../../../store/hooks/redux";

interface TendersCardProps extends ITender {
  refetch?: () => void;
}

export const TendersCard: React.FC<TendersCardProps> = ({
  id,
  name,
  description,
  expiration,
  price,
  favourite,
  refetch
}) => {
  const [fetchChangeFavouriteTender, {isSuccess}] = usePatchFavouriteTenderMutation();

  const {userToken} = useTendersStoreSelector(state => state["user/slice"]);

  useEffect(() => {
    if (isSuccess && refetch) {
      refetch();
    }
  }, [isSuccess, refetch]);

  return (
    <div className="flex h-[calc(33.333333%-(20px/3))] w-[calc(33.333333%)] animate-appearance">
      <Link to={`${id}`} rel="noopener noreferrer" className="h-full w-full">
        <div
          className="flex flex-col w-[calc(100%-20px)] h-[calc(100%-20px)] bg-[rgba(255,255,255,0.25)] rounded-2xl hover:bg-[rgba(255,255,255,0.35)] cursor-pointer transition-background overflow-hidden"
        >
          <div className="flex justify-center w-full">
            <div className="flex justify-around h-[80px] w-[calc(100%-10px)]">
              <div className="flex flex-col w-[calc(30%)] h-full items-center justify-center text-sm">
                <span className="flex bg-[rgba(255,255,255,0.4)] w-[calc(100%)] mt-[15px] h-1/2 rounded-t-lg text-white font-medium justify-center items-center">Тендер</span>
                <span className="flex bg-[rgba(255,255,255,0.2)] w-[calc(100%)] h-1/2 rounded-b-lg items-center justify-center font-medium text-white whitespace-nowrap">{description}</span>
              </div>
              <div className="flex flex-col w-[calc(30%)] h-full items-center justify-center text-sm">
                <span className="flex bg-[rgba(255,255,255,0.4)] w-[calc(100%)] mt-[15px] h-1/2 rounded-t-lg text-white font-medium justify-center items-center">Срок</span>
                <div className="flex bg-[rgba(255,255,255,0.2)] w-[calc(100%)] h-1/2 rounded-b-lg items-center justify-center font-medium text-white whitespace-nowrap">{expiration}</div>
              </div>
              <div className="flex flex-col w-[calc(30%)] h-full items-center justify-center text-sm">
                <div className="flex bg-[rgba(255,255,255,0.4)] w-[calc(100%)] mt-[15px] h-1/2 rounded-t-lg text-white font-medium justify-center items-center">Цена</div>
                <div className="flex bg-[rgba(255,255,255,0.2)] w-[calc(100%)] h-1/2 rounded-b-lg items-center justify-center font-medium text-white whitespace-nowrap">{price + " ₽"}</div>
              </div>
            </div>
          </div>
          <div className="font-medium text-white ml-[15px] mt-[15px] max-w-[calc(100%-35px)]">{name}</div>

          <div className="flex mt-auto">
            <div
              className="flex w-full h-[50px] bg-[rgba(255,255,255,0.15)] justify-center items-center text-white hover:bg-[rgba(255,255,255,0.3)] transition-background"
              onClick={event => {
                event.preventDefault();
                fetchChangeFavouriteTender({id, favourite: !favourite, token: userToken});
              }}
            >
              {favourite ? (
                <>
                  <AiOutlineCheck className="mr-1.5"/>
                  В избранном
                </>
              ) : (
                <>
                  <IoMdAdd className="mr-1.5"/>
                  В избранное
                </>
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};