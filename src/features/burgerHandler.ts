import { createSlice } from '@reduxjs/toolkit';

export interface IburgerHandlerSlice {
  isBurgerOpen: boolean;
}

const initialState: IburgerHandlerSlice = {
  isBurgerOpen: false,
};

export const burgerHandlerSlice = createSlice({
  name: 'burgerHandler',
  initialState,
  reducers: {
    openBurger: (state) => {
      state.isBurgerOpen = true;
    },
    closeBurger: (state) => {
      state.isBurgerOpen = false;
    },
    toggleBurger: (state) => {
      state.isBurgerOpen = !state.isBurgerOpen;
    },
  },
});

export const { openBurger, closeBurger, toggleBurger } = burgerHandlerSlice.actions;
export default burgerHandlerSlice.reducer;
