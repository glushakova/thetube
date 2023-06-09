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

const Bakerloo: FC = memo(() => {
  const isActive = useAppSelector(getIsLineActiveSelector(Line.Bakerloo));
  const selectedStation = useAppSelector(selectSelectedStation);
  const dispatch = useAppDispatch();

  return (
    <g
      className={classNames("line", { disabled: !isActive })}
      onClick={() => dispatch(selectLine({ line: Line.Bakerloo }))}
      fill="#B06010"
    >
      <line
        id="bakerloo_940gzzluhaw_940gzzluken"
        fill="none"
        stroke="#B06010"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="319.4"
        y1="245.8"
        x2="319.4"
        y2="224.5"
        className="disrupted"
      />
      <line
        id="bakerloo_940gzzluken_940gzzluskt"
        fill="none"
        stroke="#B06010"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="319.4"
        y1="277.7"
        x2="319.4"
        y2="245.8"
        className="disrupted"
      />
      <line
        id="bakerloo_940gzzluskt_940gzzlunwy"
        fill="none"
        stroke="#B06010"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="319.4"
        y1="288.7"
        x2="319.4"
        y2="277.7"
        className="disrupted"
      />
      <line
        id="bakerloo_940gzzlunwy_940gzzluwyc"
        fill="none"
        stroke="#B06010"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="319.4"
        y1="296.9"
        x2="319.4"
        y2="287.2"
        className="disrupted"
      />
      <line
        id="bakerloo_940gzzluwyc_940gzzlusgp"
        fill="none"
        stroke="#B06010"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="319.4"
        y1="307"
        x2="319.4"
        y2="296.9"
        className="disrupted"
      />
      <line
        id="bakerloo_940gzzlusgp_940gzzluhsn"
        fill="none"
        stroke="#B06010"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="319.4"
        y1="316.1"
        x2="319.4"
        y2="305.5"
        className="disrupted"
      />
      <line
        id="bakerloo_940gzzluhsn_940gzzluwjn"
        fill="none"
        stroke="#B06010"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="319.4"
        y1="324"
        x2="319.4"
        y2="314.6"
        className="disrupted"
      />
      <line
        id="bakerloo_940gzzluwjn_940gzzluksl"
        fill="none"
        stroke="#B06010"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="319.4"
        y1="334"
        x2="319.4"
        y2="324"
        className="disrupted"
      />
      <line
        id="bakerloo_940gzzluksl_940gzzluqps"
        fill="none"
        stroke="#B06010"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="319.4"
        y1="341.7"
        x2="319.4"
        y2="332.7"
        className="disrupted"
      />
      <path
        id="bakerloo_940gzzluqps_940gzzlukpk"
        fill="none"
        stroke="#B06010"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M322.9,363.2l-1.4-1.4c-1.4-1.4-2.1-3.3-2.1-5.3v-14.8"
      />
      <line
        id="bakerloo_940gzzlukpk_940gzzlumvl"
        fill="none"
        stroke="#B06010"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="331.2"
        y1="371.4"
        x2="321.9"
        y2="362.2"
      />
      <path
        id="bakerloo_940gzzlumvl_940gzzluwka"
        fill="none"
        stroke="#B06010"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M343.2,373.8c0,0-6.5,0-6.5,0c-1.8,0-4.2-1-5.4-2.3l-1.2-1.2"
      />
      <path
        id="bakerloo_940gzzluwka_940gzzlupac"
        fill="none"
        stroke="#B06010"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M377.1,373.8c-19.4,0-35.5,0-35.5,0"
      />
      <line
        id="bakerloo_940gzzlupac_940gzzluerb"
        fill="none"
        stroke="#B06010"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="401.3"
        y1="373.8"
        x2="377.1"
        y2="373.8"
      />
      <path
        id="bakerloo_940gzzluerb_940gzzlumyb"
        fill="none"
        stroke="#B06010"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M434,373.8c-8.5,0-34.2,0-34.2,0"
      ></path>
      <path
        id="bakerloo_940gzzlumyb_940gzzlubst"
        fill="none"
        stroke="#B06010"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M463.5,390.5L449.1,376c-1.2-1.2-3.7-2.3-5.4-2.3c-0.3,0-9.6,0-9.6,0"
      />
      <line
        id="bakerloo_940gzzlubst_940gzzlurgp"
        fill="none"
        stroke="#B06010"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="483"
        y1="410.1"
        x2="463.5"
        y2="390.5"
      />
      <path
        id="bakerloo_940gzzlurgp_940gzzluoxc"
        fill="none"
        stroke="#B06010"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M496,432.3v-6.1c0-2.1-0.8-4.3-2.3-5.4l-11.7-11.7"
      />
      <path
        id="bakerloo_940gzzluoxc_940gzzlupcc"
        fill="none"
        stroke="#B06010"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M515.6,464.8l-17.3-17.3c-1.2-1.2-2.3-3.7-2.3-5.4v-9.7"
      />
      <line
        id="bakerloo_940gzzlupcc_940gzzluchx"
        fill="none"
        stroke="#B06010"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="536.8"
        y1="486"
        x2="515.6"
        y2="464.8"
      />
      <path
        id="bakerloo_940gzzluchx_940gzzluemb"
        fill="none"
        stroke="#B06010"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M543.8,512.2l0-16c0-1.8-1-4.2-2.3-5.4l-4.8-4.8"
      />
      <line
        id="bakerloo_940gzzluemb_940gzzluwlo"
        fill="none"
        stroke="#B06010"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="543.8"
        y1="535.7"
        x2="543.8"
        y2="512.2"
      />
      <line
        id="bakerloo_940gzzluwlo_940gzzlulbn"
        fill="none"
        stroke="#B06010"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="543.8"
        y1="572.3"
        x2="543.8"
        y2="535.7"
      />
      <path
        id="bakerloo_940gzzlulbn_940gzzlueac"
        fill="none"
        stroke="#B06010"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M552.4,613.6l-6.3-6.3c-1.2-1.2-2.3-3.7-2.3-5.4l0-31.1"
      />
      <line
        fill="none"
        stroke="#F1F2F2"
        strokeWidth="2.9476"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="314.8"
        y1="261.2"
        x2="327.6"
        y2="261.2"
      />
      <rect
        id="bakerloo_940gzzluskt"
        x="316.8"
        y="277.8"
        width="1.5"
        height="1.5"
        className="disrupted"
      />
      <rect
        id="bakerloo_940gzzlunwy"
        x="316.8"
        y="287.2"
        width="1.5"
        height="1.5"
        className="disrupted"
      />
      <rect
        id="bakerloo_940gzzlusgp"
        x="316.8"
        y="305.5"
        width="1.5"
        height="1.5"
        className="disrupted"
      />
      <rect
        id="bakerloo_940gzzluhsn"
        x="316.8"
        y="314.6"
        width="1.5"
        height="1.5"
        className="disrupted"
      />
      <rect
        id="lul-bakerloo_940gzzluksl"
        x="320.5"
        y="332.5"
        width="1.5"
        height="1.5"
      />

      <StationIcon
        x={322.35}
        y={362.6}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={225}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.KilburnPark }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.KilburnPark}
      />
      <StationIcon
        x={330.55}
        y={370.7}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={225}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.MaidaVale }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.MaidaVale}
      />
      <StationIcon
        x={342.45}
        y={373.9}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={180}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.WarwickAvenue }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.WarwickAvenue}
      />
      <StationIcon
        x={434.1}
        y={373.8}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={0}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.Marylebone }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.Marylebone}
        isInterchange
      />
      <StationIcon
        x={400.55}
        y={373.8}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={0}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.EdgwareRoadBakerloo }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.EdgwareRoadBakerloo}
      />
      <StationIcon
        x={482.4}
        y={409.5}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={45}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.RegentsPark }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.RegentsPark}
      />
      <StationIcon
        x={543.75}
        y={571.55}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={90}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.LambethNorth }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.LambethNorth}
      />
    </g>
  );
});

export default Bakerloo;
