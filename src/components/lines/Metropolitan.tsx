import React, { memo, FC } from "react";
import classNames from "classnames";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  getIsLineActiveSelector,
  selectLine,
  selectSelectedStation,
  selectStation,
} from "../../store/map";
import { Line, Station } from "../../config";
import { StationIcon } from "../StationIcon";
import { STROKE_WIDTH } from "../../constant/main";

const Metropolitan: FC = memo(() => {
  const isActive = useAppSelector(getIsLineActiveSelector(Line.Metropolitan));
  const selectedStation = useAppSelector(selectSelectedStation);
  const dispatch = useAppDispatch();

  return (
    <g
      className={classNames("line", { disabled: !isActive })}
      onClick={() => dispatch(selectLine({ line: Line.Metropolitan }))}
      fill="#97005E"
    >
      <path
        id="metropolitan_940gzzlucsm_940gzzlucal"
        fill="none"
        stroke="#97005E"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M107.4,147l11.5,11.5c1.2,1.2,3.7,2.3,5.4,2.3c1.7,0,17.9,0,17.9,0"
      />
      <line
        id="metropolitan_940gzzluwhw_940gzzluhoh"
        fill="none"
        stroke="#97005E"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="250.3"
        y1="261.2"
        x2="278.5"
        y2="261.2"
      />
      <path
        id="metropolitan_940gzzluryl_940gzzluwhw"
        fill="none"
        stroke="#97005E"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M216.7,256.2l2.7,2.7c1.2,1.2,3.7,2.3,5.4,2.3h27"
      />
      <line
        id="metropolitan_940gzzlueae_940gzzluryl"
        fill="none"
        stroke="#97005E"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="205.9"
        y1="245.5"
        x2="216.7"
        y2="256.2"
      />
      <line
        id="metropolitan_940gzzlursm_940gzzlueae"
        fill="none"
        stroke="#97005E"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="194.2"
        y1="233.8"
        x2="207"
        y2="246.6"
      />
      <path
        id="metropolitan_940gzzlursp_940gzzlursm"
        fill="none"
        stroke="#97005E"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M174.2,229.4h12.1c2.1,0,4.8,1.2,6.3,2.8l2.7,2.7"
      />
      <g id="metropolitan_940gzzluick_940gzzlursp">
        <line
          id="metropolitan_940gzzluick_940gzzlursp"
          fill="none"
          stroke="#97005E"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="148.8"
          y1="229.4"
          x2="175.7"
          y2="229.4"
        />
      </g>
      <line
        id="metropolitan_940gzzluhgd_940gzzluick"
        fill="none"
        stroke="#97005E"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="132.2"
        y1="229.4"
        x2="148.8"
        y2="229.4"
      />
      <line
        id="metropolitan_940gzzluuxb_940gzzluhgd"
        fill="none"
        stroke="#97005E"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="112"
        y1="229.4"
        x2="132.2"
        y2="229.4"
      />
      <line
        id="metropolitan_940gzzluams_940gzzlucal"
        fill="none"
        stroke="#97005E"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="144.3"
        y1="160.7"
        x2="90.5"
        y2="160.9"
      />
      <path
        id="metropolitan_940gzzlulvt_940gzzluald"
        fill="none"
        stroke="#97005E"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M645.7,425.2h40.7c1.5,0,2.9,0.6,3.9,1.6c1,1,1.6,2.4,1.6,3.9v15.7"
      />
      <line
        id="metropolitan_940gzzlubbn_940gzzlumgt_00000167392832050413192100000011799457991165312406_"
        fill="none"
        stroke="#97005E"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="611.4"
        y1="408"
        x2="625"
        y2="421.6"
      />
      <path
        id="metropolitan_940gzzlulvt_940gzzlumgt"
        fill="none"
        stroke="#97005E"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M624.9,421.5l0.7,0.8c1.9,1.9,4.4,2.9,7.1,2.9h3.9h0.4h8.8"
      />
      <line
        id="metropolitan_940gzzlufcn_940gzzlubbn"
        fill="none"
        stroke="#97005E"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="598.5"
        y1="395.1"
        x2="611.7"
        y2="408.3"
      />
      <path
        id="metropolitan_940gzzluksx_940gzzlufcn"
        fill="none"
        stroke="#97005E"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M578,383.6l6.7,0c1.5,0,2.9,0.6,3.9,1.6l9.9,9.9"
      />
      <line
        id="metropolitan_940gzzluesq_940gzzluksx"
        fill="none"
        stroke="#97005E"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="524.8"
        y1="383.6"
        x2="578"
        y2="383.6"
      />
      <line
        id="metropolitan_940gzzlugps_940gzzluesq"
        fill="none"
        stroke="#97005E"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="491.7"
        y1="383.6"
        x2="526.3"
        y2="383.6"
      />
      <path
        id="metropolitan_940gzzlubst_940gzzlugps"
        fill="none"
        stroke="#97005E"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M472.8,380.6l0.7,0.7c1.2,1.2,3.8,2.1,5.4,2.3l14.2,0"
      />
      <line
        id="metropolitan_940gzzlufyr_940gzzlubst"
        fill="none"
        stroke="#97005E"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="429.2"
        y1="336.9"
        x2="472.8"
        y2="380.6"
      />
      <line
        id="metropolitan_940gzzluwyp_940gzzlufyr"
        fill="none"
        stroke="#97005E"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="366.6"
        y1="274.4"
        x2="429.2"
        y2="336.9"
      />
      <path
        id="metropolitan_940gzzluprd_940gzzluwyp"
        fill="none"
        stroke="#97005E"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M339.8,261.2l10.4,0c1.8,0,4.2,1,5.4,2.2l10.9,10.9"
      />
      <line
        id="metropolitan_940gzzlunkp_940gzzluprd"
        fill="none"
        stroke="#97005E"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="305"
        y1="261.2"
        x2="341.3"
        y2="261.2"
      />
      <line
        id="metropolitan_940gzzluhoh_940gzzlunkp"
        fill="none"
        stroke="#97005E"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="278.4"
        y1="261.2"
        x2="305"
        y2="261.2"
      />
      <path
        id="metropolitan_940gzzlunha_940gzzluhoh"
        fill="none"
        stroke="#97005E"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M248.9,242.8L265,259c1.2,1.2,3.7,2.2,5.4,2.1l8,0"
      />
      <line
        id="metropolitan_940gzzlupnr_940gzzlunha"
        fill="none"
        stroke="#97005E"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="239.9"
        y1="233.9"
        x2="250"
        y2="243.9"
      />
      <line
        id="metropolitan_940gzzlunwh_940gzzlupnr"
        fill="none"
        stroke="#97005E"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="227.8"
        y1="221.7"
        x2="240"
        y2="234"
      />
      <line
        id="metropolitan_940gzzlunow_940gzzlunwh"
        fill="none"
        stroke="#97005E"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="217"
        y1="210.9"
        x2="228.8"
        y2="222.7"
      />
      <line
        id="metropolitan_940gzzlumpk_940gzzlunow"
        fill="none"
        stroke="#97005E"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="206.2"
        y1="200.1"
        x2="218"
        y2="211.9"
      />
      <line
        id="metropolitan_940gzzlurkw_940gzzlumpk"
        fill="none"
        stroke="#97005E"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="190.7"
        y1="184.6"
        x2="207.2"
        y2="201.1"
      />
      <line
        id="metropolitan_940gzzlucyd_940gzzlurkw"
        fill="none"
        stroke="#97005E"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="177.1"
        y1="171"
        x2="191.8"
        y2="185.7"
      />
      <path
        id="metropolitan_940gzzlucal_940gzzlucyd"
        fill="none"
        stroke="#97005E"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M144.3,160.7h19.4c1.8,0,4.2,1,5.4,2.3l8.1,8.1"
      />
      <path
        id="metropolitan_940gzzlucxy_940gzzlumpk"
        fill="none"
        stroke="#97005E"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d="M200.7,178.4l0,8.7l0,4.4c0,1.8,1,4.2,2.3,5.4c1,1,4.3,4.3,4.3,4.3"
      />
      <line
        id="metropolitan_940gzzluwaf_940gzzlucxy"
        fill="none"
        stroke="#97005E"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="200.7"
        y1="163.8"
        x2="200.7"
        y2="179.9"
      />
      <rect
        id="metropolitan_940gzzlursp"
        x="174.2"
        y="226.8"
        fill="#97005E"
        width="1.5"
        height="1.5"
      />
      <rect
        id="metropolitan_940gzzlursm"
        x="195.3"
        y="232.2"
        transform="matrix(0.707 -0.7072 0.7072 0.707 -107.3249 206.9091)"
        fill="#97005E"
        width="1.5"
        height="1.5"
      />
      <rect
        id="metropolitan_940gzzlueae"
        x="207"
        y="244"
        transform="matrix(0.7071 -0.7071 0.7071 0.7071 -112.1917 218.6145)"
        fill="#97005E"
        width="1.5"
        height="1.5"
      />
      <g id="circle_hammersmith-city_metropolitan_940gzzlugps">
        <rect
          id="hammersmith-city_940gzzlugps"
          x="491.7"
          y="380.2"
          fill="#F386A1"
          width="1.5"
          height="1.5"
        />
        <rect
          id="circle_940gzzlugps"
          x="491.7"
          y="382.4"
          fill="#FFD200"
          width="1.5"
          height="1.5"
        />
        <rect
          id="metropolitan_940gzzlugps"
          x="491.7"
          y="384.7"
          fill="#97005E"
          width="1.5"
          height="1.5"
        />
      </g>
      <g id="circle_metropolitan_940gzzluald">
        <rect
          id="metropolitan_940gzzluald"
          x="689.4"
          y="445"
          fill="#97005E"
          width="1.5"
          height="1.5"
        />
        <rect
          id="circle_940gzzluald"
          x="691.7"
          y="445"
          fill="#FFD200"
          width="1.5"
          height="1.5"
        />
      </g>
      <StationIcon
        x={340.55}
        y={261.15}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={0}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.PrestonRoad }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.PrestonRoad}
      />
      <StationIcon
        x={251.05}
        y={261.2}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={180}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.WestHarrow }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.WestHarrow}
      />
      <StationIcon
        x={249.45}
        y={243.4}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={45}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.NorthHarrow }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.NorthHarrow}
      />
      <StationIcon
        x={239.1}
        y={233.15}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={45}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.Pinner }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.Pinner}
      />
      <StationIcon
        x={228.35}
        y={222.3}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={45}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.NorthwoodHills }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.NorthwoodHills}
      />
      <StationIcon
        x={217.4}
        y={211.3}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={45}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.Northwood }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.Northwood}
      />
      <StationIcon
        x={206.55}
        y={200.5}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={45}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.MoorPark }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.MoorPark}
      />
      <StationIcon
        x={200.7}
        y={179.1}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={90}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.Croxley }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.Croxley}
      />
      <StationIcon
        x={191.2}
        y={185.1}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={225}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.Rickmansworth }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.Rickmansworth}
      />
      <StationIcon
        x={177.2}
        y={171.1}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={225}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.Chorleywood }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.Chorleywood}
      />
      <StationIcon
        x={200.75}
        y={164.5}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={90}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.Watford }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.Watford}
        isEndingStation={true}
      />
      <StationIcon
        x={107.95}
        y={147.45}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={225}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.Chesham }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.Chesham}
        isEndingStation={true}
      />
    </g>
  );
});

export default Metropolitan;
