import { PersonInterface } from "@/models/person.model";
import { favoritesSlice, peopleSlice } from "./states";
import { configureStore } from "@reduxjs/toolkit";

export interface AppStore{
  people: PersonInterface[];
  favorites: PersonInterface[];
}

export default configureStore<AppStore>({
  reducer:{
    people: peopleSlice.reducer,
    favorites: favoritesSlice.reducer,
  }
})
