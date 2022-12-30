import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Station, Line, LinesByStation } from "../config";
import type { RootState } from "./index";

interface MapState {
  selectedLine: Line | undefined;
  selectedStation: Station | undefined;
}

const initialState: MapState = {
  selectedLine: undefined,
  selectedStation: undefined,
};

export const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {
    selectLine(state, action: PayloadAction<{ line: Line }>) {
      if (state.selectedLine === action.payload.line) {
        state.selectedLine = undefined;
        state.selectedStation = undefined;
      } else {
        state.selectedLine = action.payload.line;
        state.selectedStation = undefined;
      }
    },
    selectStation(state, action: PayloadAction<{ station: Station }>) {
      if (state.selectedStation === action.payload.station) {
        state.selectedLine = undefined;
        state.selectedStation = undefined;
      } else {
        state.selectedLine = undefined;
        state.selectedStation = action.payload.station;
      }
    },
    unselect(state) {
      state.selectedLine = undefined;
      state.selectedStation = undefined;
    },
  },
});

export const { selectLine, selectStation, unselect } = mapSlice.actions;

export const selectSelectedLine = (state: RootState) => state.map.selectedLine;

export const getIsLineActiveSelector = (line: Line) => (state: RootState) => {
  const selectedLine = selectSelectedLine(state);
  const selectedStation = selectSelectedStation(state);
  console.log(selectedLine, selectedStation);
  return (
    (!selectedLine && !selectedStation) ||
    selectedLine === line ||
    (selectedStation && LinesByStation[selectedStation].has(line))
  );
};

export const selectSelectedStation = (state: RootState) =>
  state.map.selectedStation;
