import { PersonInterface, LocalStorageType } from "@/models";
import { getLocalStorage, setLocalStorage } from "@/utilities";
import { createSlice, current } from "@reduxjs/toolkit";

const initialState: PersonInterface[] = [];

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: getLocalStorage(LocalStorageType.FAVORITES) ? JSON.parse(getLocalStorage(LocalStorageType.FAVORITES) as string) : initialState,
  reducers: {
    addFavorite: (state, action) => {
      console.log('state:', JSON.stringify(state));
      //setLocalStorage(LocalStorageType.FAVORITES, JSON.stringify(state))
      setLocalStorage(LocalStorageType.FAVORITES, action.payload)
      return action.payload;
    },
    removeFavorite: (state, action) => {
      const filteredState = current(state).filter((p: PersonInterface) => p.id !== action.payload.id);
      setLocalStorage(LocalStorageType.FAVORITES, filteredState);
      return filteredState;
    },
  },

});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
