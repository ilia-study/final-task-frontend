import { createApi, fetchBaseQuery, FetchBaseQueryError } from "@reduxjs/toolkit/query/react";
import { ITender } from "../../models/ITender";
import { IChangeFavouriteTender } from "../../models/IChangeFavouriteTender";
import { TENDERS_SERVER_URL } from "../../../../constants/url";
import { IUser } from "../../models/IUser";
import { ITenderIdRequest } from "../../models/ITenderIdRequest";
import { ITenderNameRequest } from "../../models/ITenderNameRequest";

export const isFetchBaseQueryError = (error: any): error is FetchBaseQueryError => 'status' in error;

export const tendersApi = createApi({
  reducerPath: "tenders/api",
  baseQuery: fetchBaseQuery({
    baseUrl: TENDERS_SERVER_URL
  }),
  refetchOnMountOrArgChange: true,
  endpoints: build => ({
    getTenders: build.query<ITender[], string>({
      query: userToken => ({
        method: "GET",
        url: "/tenders",
        headers: {
          "Authorization": `Bearer ${userToken}`
        }
      })
    }),
    getFavouriteTenders: build.query<ITender[], string>({
      query: userToken => ({
        method: "GET",
        url: "/tenders/favourite",
        headers: {
          "Authorization": `Bearer ${userToken}`
        }
      })
    }),
    patchFavouriteTender: build.mutation<ITender, IChangeFavouriteTender>({
      query: changeFavouriteTender => ({
        method: "PATCH",
        url: `/tenders/favourite`,
        body: {
          id: changeFavouriteTender.id,
          favourite: changeFavouriteTender.favourite
        },
        headers: {
          "Authorization": `Bearer ${changeFavouriteTender.token}`
        }
      })
    }),
    getExactTender: build.query<ITender, ITenderIdRequest>({
      query: tenderIdRequest => ({
        method: "GET",
        url: `/tenders/${tenderIdRequest.id}`,
        headers: {
          "Authorization": `Bearer ${tenderIdRequest.token}`
        }
      })
    }),
    searchTenders: build.query<ITender[], ITenderNameRequest>({
      query: tenderNameRequest => ({
        method: "GET",
        url: `/tenders/search`,
        params: {
          name: tenderNameRequest.name
        },
        headers: {
          "Authorization": `Bearer ${tenderNameRequest.token}`
        }
      })
    }),
    login: build.mutation<string, IUser>({
      query: user => ({
        method: "POST",
        url: "/users/login",
        body: user
      })
    })
  })
});


export const {useGetTendersQuery, useGetExactTenderQuery, useSearchTendersQuery,  useGetFavouriteTendersQuery, usePatchFavouriteTenderMutation, useLoginMutation} = tendersApi;
