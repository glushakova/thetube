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

const Northern: FC = memo(() => {
  const isActive = useAppSelector(getIsLineActiveSelector(Line.Northern));
  const selectedStation = useAppSelector(selectSelectedStation);
  const dispatch = useAppDispatch();

  return (
    <g
      className={classNames("line", { disabled: !isActive })}
      onClick={() => dispatch(selectLine({ line: Line.Northern }))}
    >
      <line
        id="northern_940gzzluegw_940gzzlubtk"
        fill="none"
        stroke="#000000"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="449.1"
        y1="220.7"
        x2="433.4"
        y2="204.9"
      />
      <line
        id="northern_940gzzlubtk_940gzzlucnd"
        fill="none"
        stroke="#000000"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="460.7"
        y1="232.3"
        x2="448.1"
        y2="219.7"
      />
      <line
        id="northern_940gzzlucnd_940gzzluhcl"
        fill="none"
        stroke="#000000"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="471.1"
        y1="242.7"
        x2="459.7"
        y2="231.3"
      />
      <line
        id="northern_940gzzluhcl_940gzzlubtx"
        fill="none"
        stroke="#000000"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="484.6"
        y1="256.2"
        x2="471"
        y2="242.6"
      />
      <line
        id="northern_940gzzlubtx_940gzzluggn"
        fill="none"
        stroke="#000000"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="495.8"
        y1="267.4"
        x2="483.6"
        y2="255.2"
      />
      <line
        id="northern_940gzzluggn_940gzzluhtd"
        fill="none"
        stroke="#000000"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="508.6"
        y1="280.1"
        x2="495.7"
        y2="267.3"
      />
      <line
        id="northern_940gzzluhtd_940gzzlubzp"
        fill="none"
        stroke="#000000"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="539.7"
        y1="311.3"
        x2="507.5"
        y2="279"
      />
      <line
        id="northern_940gzzlubzp_940gzzlucfm"
        fill="none"
        stroke="#000000"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="550.1"
        y1="321.6"
        x2="538.6"
        y2="310.2"
      />
      <path
        id="northern_940gzzlumhl_940gzzlufyc"
        fill="none"
        stroke="#000000"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M568.7,198.1c13.1,13.1,13.2,13.2,14.1,14.1c1.2,1.2,2.3,3.7,2.3,5.4c0,1.4,0,5.7,0,5.7"
      />
      <line
        id="northern_940gzzluhbt_940gzzlutaw"
        fill="none"
        stroke="#000000"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="585"
        y1="180.2"
        x2="585"
        y2="167.6"
      />
      <line
        id="northern_940gzzlutaw_940gzzluwop"
        fill="none"
        stroke="#000000"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="585"
        y1="191.3"
        x2="585"
        y2="178.7"
      />
      <line
        id="northern_940gzzluwop_940gzzluwfn"
        fill="none"
        stroke="#000000"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="585"
        y1="203"
        x2="585"
        y2="191.3"
      />
      <line
        id="northern_940gzzluwfn_940gzzlufyc"
        fill="none"
        stroke="#000000"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="585.1"
        y1="222.4"
        x2="585"
        y2="202.9"
      />
      <path
        id="northern_940gzzluctn_940gzzlueus"
        fill="none"
        stroke="#000000"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M553.3,333.4v1.2c0,1.8,1,4.2,2.3,5.4l0.3,0.3c1.2,1.2,2.3,3.7,2.3,5.4l0,13.5"
      />
      <path
        id="northern_940gzzluksh_940gzzluctn"
        fill="none"
        stroke="#000000"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M580,298.3l-24.4,24.4c-1.2,1.2-2.3,3.7-2.3,5.4v4.4"
      />
      <path
        id="northern_940gzzlucfm_940gzzluctn"
        fill="none"
        stroke="#000000"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M550,321.5l1.1,1.1c1.2,1.2,2.3,3.7,2.3,5.4v4.4"
      />
      <path
        id="northern_940gzzlutfp_940gzzluksh"
        fill="none"
        stroke="#000000"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M585,288.4v1.6c0,1.8-1.3,4.5-2.5,5.7l-2.5,2.5"
      />
      <line
        id="northern_940gzzluacy_940gzzlutfp"
        fill="none"
        stroke="#000000"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="585"
        y1="264"
        x2="585"
        y2="289.9"
      />
      <line
        id="northern_940gzzluhgt_940gzzluacy"
        fill="none"
        stroke="#000000"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="585"
        y1="246"
        x2="585"
        y2="264"
      />
      <line
        id="northern_940gzzluefy_940gzzluhgt"
        fill="none"
        stroke="#000000"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="585"
        y1="233.9"
        x2="585"
        y2="247.5"
      />
      <line
        id="northern_940gzzlufyc_940gzzluefy"
        fill="none"
        stroke="#000000"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="585.1"
        y1="222.4"
        x2="585"
        y2="235.4"
      />
      <path
        id="northern_940gzzluctn_940gzzlumtc"
        fill="none"
        stroke="#000000"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M548.6,350.1l0-4.3c0-1.8,1-4.2,2.3-5.4l0.3-0.3c1.2-1.2,2.3-3.7,2.3-5.4v-1.2"
      />
      <line
        id="northern_940gzzlumtc_940gzzlueus"
        fill="none"
        stroke="#000000"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="548.6"
        y1="359.2"
        x2="548.6"
        y2="348.6"
      />
      <path
        id="northern_940gzzlueus_940gzzluwrr_00000026865478284448890820000000036575977771534243_"
        fill="none"
        stroke="#000000"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M536.7,391.6v-3.3c0-1.8,1-4.2,2.3-5.4l7.3-7.3c1.2-1.2,2.3-3.6,2.3-5.3v-0.6l0-11.7"
      />
      <path
        id="northern_940gzzlukng_940gzzluovl_00000076575038183711717960000005083318137552748475_"
        fill="none"
        stroke="#000000"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M523.2,635.9l0.9-0.9c1.2-1.2,2.3-3.7,2.3-5.4v-0.4c0-1.8,1-4.2,2.3-5.4l5.5-5.5"
      />
      <path
        id="northern_940gzzlukng_940gzzluovl_00000126283776768652596900000017666989161671549603_"
        fill="none"
        stroke="#000000"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M544.1,621.8l-4.3,4.3l-1.1,1.1l-3,3c-1.2,1.2-3.7,2.3-5.4,2.3l-0.4,0c-1.8,0-4.2,1-5.4,2.3l-0.9,0.9"
      />
      <path
        id="northern_940gzzlueus_940gzzluksx_00000112614294657915762640000008476395738356244911_"
        fill="none"
        stroke="#000000"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M587.4,371.8l-4.1-4.1c-1.2-1.2-3.6-2.3-5.3-2.3l-12,0l-0.6,0c-3.4,0-6.3-2.3-7.3-5.4"
      />
      <path
        id="northern_940gzzluksx_940gzzluagl"
        fill="none"
        stroke="#000000"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M611.9,376.9h-12.5l-0.4,0h-3.3c-1.8,0-4.2-1-5.4-2.3l-2.8-2.8"
      />
      <path
        id="northern_940gzzluagl_940gzzluods"
        fill="none"
        stroke="#000000"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M636.7,386.8l0-2.1c0-2.1-0.9-4.1-2.3-5.5c-1.4-1.4-3.3-2.3-5.5-2.3h-18.5"
      />
      <line
        id="northern_940gzzluods_940gzzlumgt"
        fill="none"
        stroke="#000000"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="636.7"
        y1="423"
        x2="636.7"
        y2="386.8"
      />
      <line
        id="northern_940gzzlumgt_940gzzlubnk"
        fill="none"
        stroke="#000000"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="636.7"
        y1="458.5"
        x2="636.7"
        y2="423"
      />
      <line
        id="northern_940gzzlubnk_940gzzlulnb"
        fill="none"
        stroke="#000000"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="636.7"
        y1="513.4"
        x2="636.7"
        y2="458.5"
      />
      <path
        id="northern_940gzzlulnb_940gzzlubor"
        fill="none"
        stroke="#000000"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M601.2,564.9l33.3-33.3c1.2-1.2,2.3-3.7,2.3-5.4l0-12.8"
      />
      <line
        id="northern_940gzzlubor_940gzzlueac"
        fill="none"
        stroke="#000000"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="552.5"
        y1="613.6"
        x2="601.6"
        y2="564.5"
      />
      <line
        id="northern_940gzzlueac_940gzzlukng"
        fill="none"
        stroke="#000000"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="544.2"
        y1="621.9"
        x2="552.6"
        y2="613.5"
      />
      <line
        id="northern_940gzzluovl_940gzzluskw"
        fill="none"
        stroke="#000000"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="514.4"
        y1="644.9"
        x2="524.2"
        y2="635.1"
      />
      <line
        id="northern_940gzzluskw_940gzzlucpn"
        fill="none"
        stroke="#000000"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="500.4"
        y1="658.9"
        x2="514.5"
        y2="644.9"
      />
      <line
        id="northern_940gzzlucpn_940gzzlucpc"
        fill="none"
        stroke="#000000"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="488.2"
        y1="671.1"
        x2="500.4"
        y2="658.9"
      />
      <line
        id="northern_940gzzlucpc_940gzzlucps"
        fill="none"
        stroke="#000000"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="479.6"
        y1="679.7"
        x2="489.3"
        y2="670"
      />
      <line
        id="northern_940gzzlucps_940gzzlublm"
        fill="none"
        stroke="#000000"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="470.4"
        y1="689"
        x2="480.7"
        y2="678.6"
      />
      <line
        id="northern_940gzzlublm_940gzzlutbc"
        fill="none"
        stroke="#000000"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="463.5"
        y1="695.9"
        x2="470.3"
        y2="689.1"
      />
      <line
        id="northern_940gzzlutbc_940gzzlutby"
        fill="none"
        stroke="#000000"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="454.8"
        y1="704.6"
        x2="464.6"
        y2="694.8"
      />
      <line
        id="northern_940gzzlutby_940gzzlucsd"
        fill="none"
        stroke="#000000"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="445.8"
        y1="713.6"
        x2="455.8"
        y2="703.6"
      />
      <line
        id="northern_940gzzlucsd_940gzzluswn"
        fill="none"
        stroke="#000000"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="434.3"
        y1="725.1"
        x2="446.9"
        y2="712.5"
      />
      <line
        id="northern_940gzzluswn_940gzzlumdn"
        fill="none"
        stroke="#000000"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="403.2"
        y1="756.2"
        x2="434.3"
        y2="725.1"
      />
      <line
        id="northern_940gzzluwrr_940gzzlugdg"
        fill="none"
        stroke="#000000"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="536.7"
        y1="413.8"
        x2="536.7"
        y2="391.6"
      />
      <line
        id="northern_940gzzlugdg_940gzzlutcr"
        fill="none"
        stroke="#000000"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="536.7"
        y1="426.7"
        x2="536.7"
        y2="412.3"
      />
      <line
        id="northern_940gzzlutcr_940gzzlulsq"
        fill="none"
        stroke="#000000"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="536.7"
        y1="457.4"
        x2="536.7"
        y2="426.7"
      />
      <line
        id="northern_940gzzlulsq_940gzzluchx"
        fill="none"
        stroke="#000000"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="536.7"
        y1="486"
        x2="536.7"
        y2="457.4"
      />
      <line
        id="northern_940gzzluchx_940gzzluemb"
        fill="none"
        stroke="#000000"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="536.7"
        y1="505.1"
        x2="536.7"
        y2="486"
      />
      <line
        id="northern_940gzzluemb_940gzzluwlo"
        fill="none"
        stroke="#000000"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="536.7"
        y1="544.1"
        x2="536.7"
        y2="505.1"
      />
      <polyline
        id="northern_940gzzluwlo_940gzzlukng_00000129174250633689794610000016137394338102995893_"
        fill="none"
        stroke="#000000"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        points=" 536.8,613.7 536.8,606.9 536.8,588.5 536.7,544.1 "
      />
      <path
        id="northern_940gzzlukng_940gzzneugst"
        fill="none"
        stroke="#000000"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M464,604.2l23.1,0l0.6,0h1.2c1.8,0,4.2,1,5.4,2.3l11.6,11.6c1.2,1.2,3.7,2.3,5.4,2.3l4.3,0h1.5l6.1,0l0.8,0l4.9,0 c2.1,0,4.1-0.9,5.5-2.3c1.4-1.4,2.3-3.3,2.3-5.5"
      />
      <line
        id="northern_940gzzneugst_940gzzbpsust_00000034805371516734183900000012010113958000597667_"
        fill="none"
        stroke="#000000"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="464"
        y1="604.2"
        x2="445.8"
        y2="604.2"
      />
      <StationIcon
        x={585}
        y={179.6}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={90}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.TotteridgeWhetstone }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.TotteridgeWhetstone}
      />
      <StationIcon
        x={585}
        y={191.5}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={90}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.WoodsidePark }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.WoodsidePark}
      />
      <StationIcon
        x={585}
        y={203.4}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={90}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.WestFinchley }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.WestFinchley}
      />
      <StationIcon
        x={585}
        y={222.5}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={90}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.FinchleyCentral }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.FinchleyCentral}
      />
      <StationIcon
        x={585}
        y={234.65}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={90}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.EastFinchley }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.EastFinchley}
      />
      <StationIcon
        x={585}
        y={246.75}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={90}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.Highgate }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.Highgate}
      />
      <StationIcon
        x={585}
        y={289.15}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={90}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.TufnellPark }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.TufnellPark}
      />
      <StationIcon
        x={448.7}
        y={220.35}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={225}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.BurntOak }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.BurntOak}
      />
      <StationIcon
        x={460.3}
        y={231.9}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={225}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.Colindale }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.Colindale}
      />
      <StationIcon
        x={472.2}
        y={243.9}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={225}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.HendonCentral }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.HendonCentral}
      />
      <StationIcon
        x={484.2}
        y={255.9}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={225}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.BrentCross }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.BrentCross}
      />
      <StationIcon
        x={496.25}
        y={267.9}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={225}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.GoldersGreen }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.GoldersGreen}
      />
      <StationIcon
        x={508.2}
        y={279.8}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={225}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.Hampstead }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.Hampstead}
      />
      <StationIcon
        x={542.25}
        y={313.9}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={225}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.BelsizePark }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.BelsizePark}
      />
      <StationIcon
        x={549.9}
        y={321.4}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={225}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.ChalkFarm }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.ChalkFarm}
      />
      <StationIcon
        x={548.5}
        y={349.15}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={270}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.MorningtonCrescent }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.MorningtonCrescent}
      />
      <StationIcon
        x={536.7}
        y={417.55}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={270}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.GoodgeStreet }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.GoodgeStreet}
      />

      <StationIcon
        x={611.15}
        y={376.85}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={180}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.Angel }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.Angel}
      />
      <StationIcon
        x={601.2}
        y={564.8}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={135}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.Borough }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.Borough}
      />
      <StationIcon
        x={523.7}
        y={635.6}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={315}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.Oval }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.Oval}
      />
      <StationIcon
        x={464}
        y={604.2}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={180}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.NineElms }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.NineElms}
      />
      <StationIcon
        x={488.7}
        y={670.5}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={315}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.ClaphamCommon }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.ClaphamCommon}
      />
      <StationIcon
        x={480.1}
        y={679.1}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={315}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.ClaphamSouth }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.ClaphamSouth}
      />
      <StationIcon
        x={464}
        y={695.3}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={135}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.TootingBec }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.TootingBec}
      />
      <StationIcon
        x={455.3}
        y={704.0}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={135}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.TootingBroadway }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.TootingBroadway}
      />
      <StationIcon
        x={446.45}
        y={712.9}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={135}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.ColliersWood }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.ColliersWood}
      />
    </g>
  );
});

export default Northern;
