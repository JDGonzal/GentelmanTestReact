import { PersonInterface, LocalStorageType } from "@/models";
import { getLocalStorage, setLocalStorage } from "@/utilities";
import { createSlice } from "@reduxjs/toolkit";

const initialState: PersonInterface[] = [];

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: getLocalStorage(LocalStorageType.FAVORITES) ? JSON.parse(getLocalStorage(LocalStorageType.FAVORITES) as string) : initialState,
  reducers: {
    addFavorite: (state, action) => {
      console.log('state:', state, JSON.stringify(state));
      //setLocalStorage(LocalStorageType.FAVORITES, JSON.stringify(state))
      setLocalStorage(LocalStorageType.FAVORITES, state)
      return action.payload;
    }
  }
});

export const { addFavorite } = favoritesSlice.actions;
