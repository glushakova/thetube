import React, { useCallback, useState, useMemo } from "react";
import {
  Bakerloo,
  Central,
  Circle,
  District,
  DLR,
  Elizabeth,
  HammersmithCity,
  Jubilee,
  Metropolitan,
  Northern,
  Overground,
  Piccadilly,
  Victoria,
  Waterloo,
  CloudCableCar,
  Tram,
} from "./lines";

import { Line, Station } from "../config";
import InterchangeCircles from "./symbol/InterchangeCircles";
import StationNames from "./symbol/StationNames";
import River from "./details/River";
import Pathway from "./Pathway";
import KeyToLines from "./KeyToLines";

import "./Map.css";
import CableCar from "./details/CableCar";

interface SelectedItem {
  name: Line | Station;
  type: "line" | "station";
}

function Map() {
  return (
    <div className="Map">
      <svg
        id="status-map"
        version="1.1"
        x="0px"
        y="0px"
        width="1247.244px"
        height="907.087px"
        viewBox="64.094 122.25 985.889 657.072"
        enableBackground="new 0 0 1247.244 907.087"
        className="grey-disruptions"
        data-margin-width="7.5"
        data-margin-height="44.99946842628523"
      >
        <River />
        <Tram />
        <Overground />
        <DLR />
        <Elizabeth />
        <Waterloo />
        <Bakerloo />
        <Jubilee />
        <Victoria />
        <Northern />
        <Piccadilly />
        <Central />
        <HammersmithCity />
        <Circle />
        <District />
        <Metropolitan />
        <StationNames />
        <CloudCableCar />
        <CableCar />
        <InterchangeCircles />
        <Pathway />
        <KeyToLines />
      </svg>
    </div>
  );
}

export default Map;
