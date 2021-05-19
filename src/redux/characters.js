import { createSlice } from "@reduxjs/toolkit";

export const characterSlice = createSlice({
  //YOUR STATE
  name: "characters",
  initialState: {
    characters: null,
    pageOptions: null,
    currentPage: 1,
  },

  //YOUR REDUCER
  reducers: {
    //YOUR ACTIONS
    nextCurrentPage: (state) => {
      state.currentPage += 1;
    },
    prevCurrentPage: (state) => {
      state.currentPage != 1 && (state.currentPage -= 1);
    },
    setCharacters: (state, action) => {
      state.characters = action.payload;
    },
    setPageOptions: (state, action) => {
      state.pageOptions = action.payload;
    },
  },
});

export const {
  nextCurrentPage,
  prevCurrentPage,
  setCharacters,
  setPageOptions,
} = characterSlice.actions;

export default characterSlice.reducer;
