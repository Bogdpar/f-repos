import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  isAuth: true
}

const AuthSlice  = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    log: (state, actions: PayloadAction<boolean>) => {
      state.isAuth  = actions.payload
    }
  }
})

export const {log} = AuthSlice.actions;
export default AuthSlice.reducer