import { createSlice, configureStore } from "@reduxjs/toolkit";
import data from "../source/planetsData";

const planetSlice = createSlice({
  name: "plane",
  initialState: {
    planetNumber: 0,
    content: data[0].overview,
    showPlanetList: true,
    image: data[0].images.planet,
    showGeology: false,
    contentTitle: "overview"
  },
  reducers: {
    planetListHandler(state) {
      state.showPlanetList = !state.showPlanetList;
      state.showGeology = false;
    },
    planetChanger(state, action) {
      state.planetNumber = action.payload;
      state.content = data[action.payload].overview;
      state.image = data[action.payload].images.planet;
      state.contentTitle = "overview";
    },
    contentOverview(state) {
      state.content = data[state.planetNumber].overview;
      state.image = data[state.planetNumber].images.planet;
      state.showGeology = false;
      state.contentTitle = "overview";
    },
    contentStrucute(state) {
      state.content = data[state.planetNumber].structure;
      state.image = data[state.planetNumber].images.internal;
      state.showGeology = false;
      state.contentTitle = "structure";
    },
    contentSurface(state) {
      state.content = data[state.planetNumber].geology;
      state.showGeology = true;
      state.contentTitle = "geology";
    },
  },
});

const store = configureStore({
  reducer: planetSlice.reducer,
});

export const planetActions = planetSlice.actions;

export default store;
