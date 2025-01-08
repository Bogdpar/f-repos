import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAxiosQuery } from "../../types/types";

interface BookmarkState {
  items: IAxiosQuery[]
}

const initialState: BookmarkState = {
  items: [],
};

const BookmarkSlice = createSlice({
  name: 'bookmark',
  initialState,
  reducers: {
    addBookmark: (state, actions: PayloadAction<IAxiosQuery>) => {
      state.items.push(actions.payload)
    },
    removeBookmark: (state, actions: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== actions.payload)
    }
  }
})

export const {addBookmark, removeBookmark} = BookmarkSlice.actions
export default BookmarkSlice.reducer