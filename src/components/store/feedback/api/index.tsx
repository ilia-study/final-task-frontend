import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ITender } from "../../models/ITender";
import { TENDERS_SERVER_URL } from "../../../../constants/url";
import { IFeedbackRequest } from "../../models/IFeedbackRequest";

export const feedbackApi = createApi({
  reducerPath: "feedback/api",
  baseQuery: fetchBaseQuery({
    baseUrl: TENDERS_SERVER_URL
  }),
  endpoints: build => ({
    saveFeedback: build.mutation<ITender[], IFeedbackRequest>({
      query: feedbackRequest => ({
        method: "POST",
        url: "/feedback",
        headers: {
          "Authorization": `Bearer ${feedbackRequest.token}`
        },
        body: {
          name: feedbackRequest.name,
          phone: feedbackRequest.phone,
          info: feedbackRequest.info,
          email: feedbackRequest.email
        }
      })
    })
  })
});


export const {useSaveFeedbackMutation} = feedbackApi;
