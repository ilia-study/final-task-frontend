import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITender } from "../../models/ITender";
import { IChangeFavouriteTender } from "../../models/IChangeFavouriteTender";

interface TendersState {
  tenders: ITender[]
}
const initialState: TendersState = {
  tenders: []
}

export const tendersSlice = createSlice({
  name: "tenders/slice",
  initialState,
  reducers: {
    changeFavouriteTender: (state, action: PayloadAction<IChangeFavouriteTender>) => {
      state.tenders = state.tenders.map(tender => {
        if (tender.id === action.payload.id) {
          tender.favourite = action.payload.favourite;
        }
        return tender;
      });
    },
    setTenders: (state, action: PayloadAction<ITender[]>) => {
      state.tenders = action.payload;
    }
  }
});

export const tendersActions = tendersSlice.actions;
export const tendersReducer = tendersSlice.reducer;
