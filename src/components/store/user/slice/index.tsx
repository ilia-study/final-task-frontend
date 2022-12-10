import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  userInfo: {}, // for user object
  userToken: localStorage.getItem("token") ?? "", // for storing the JWT
  error: null,
  success: false, // for monitoring the registration process.
}

export const userSlice = createSlice({
  name: 'user/slice',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.userToken = action.payload;
    },
    clearToken: (state) => {
      localStorage.removeItem("token");
      state.userToken = "";
    }
  },
})

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;