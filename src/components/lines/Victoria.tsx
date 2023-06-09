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
import { STROKE_WIDTH } from "../../constant/main";
import { StationIcon } from "../StationIcon";

const Victoria: FC = memo(() => {
  const isActive = useAppSelector(getIsLineActiveSelector(Line.Victoria));
  const selectedStation = useAppSelector(selectSelectedStation);

  const dispatch = useAppDispatch();
  return (
    <g
      className={classNames("line", { disabled: !isActive })}
      onClick={() => dispatch(selectLine({ line: Line.Victoria }))}
      fill="#009DDC"
    >
      <line
        id="victoria_940gzzluwwl_940gzzlublr"
        fill="none"
        stroke="#009DDC"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="751.4"
        y1="261.5"
        x2="791.5"
        y2="261.5"
      />
      <path
        id="victoria_940gzzlublr_940gzzlutmh"
        fill="none"
        stroke="#009DDC"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M732.8,261.5c9.4,0,8.6,0,18.6,0"
      />
      <path
        id="victoria_940gzzlutmh_940gzzlusvs"
        fill="none"
        stroke="#009DDC"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M714.1,261.5c3.8,0,9.8,0,18.7,0"
      />
      <path
        id="victoria_940gzzlusvs_940gzzlufpk"
        fill="none"
        stroke="#009DDC"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M677.3,278.6l14.9-14.9c1.2-1.2,3.1-2.3,4.6-2.3c0.1,0,16,0,17.6,0"
      />
      <path
        id="victoria_940gzzlufpk_940gzzluhai"
        fill="none"
        stroke="#009DDC"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M661.8,323v-25.6c0-1.8,1-4.2,2.3-5.4l13.2-13.2"
      />
      <path
        id="victoria_940gzzlufpk_940gzzluhai_00000124870171148011720200000015146035746613452729_"
        fill="none"
        stroke="#009DDC"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M661.8,324v15.8c0,1.8-1,4.2-2.3,5.4l-7.3,7.3l-0.9,1l-15.6,15.6c-1.2,1.2-3.1,2.3-4.6,2.3c-0.1,0-39.9,0-41.5,0"
      />
      <line
        id="victoria_940gzzluksx_940gzzlueus_00000075162509242123426980000013255702527531728038_"
        fill="none"
        stroke="#009DDC"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="561.1"
        y1="371.3"
        x2="586.4"
        y2="371.3"
      />
      <path
        id="victoria_940gzzlueus_940gzzluwrr"
        fill="none"
        stroke="#009DDC"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M536.8,391.6l16.7-16.7l0.4-0.4l1-1c1.2-1.2,3.7-2.3,5.4-2.3h0.7"
      />
      <line
        id="victoria_940gzzluwrr_940gzzluoxc"
        fill="none"
        stroke="#009DDC"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="496"
        y1="432.4"
        x2="536.8"
        y2="391.6"
      />
      <path
        id="victoria_940gzzluoxc_940gzzlugpk"
        fill="none"
        stroke="#009DDC"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M475.9,464.8l0-9.2c0-1.7,0.8-4,2.1-5.2l18-18"
      />
      <line
        id="victoria_940gzzlugpk_940gzzluvic"
        fill="none"
        stroke="#009DDC"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="475.9"
        y1="506"
        x2="475.9"
        y2="464.8"
      />
      <line
        id="victoria_940gzzluvic_940gzzlupco"
        fill="none"
        stroke="#009DDC"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="475.8"
        y1="554.8"
        x2="475.9"
        y2="505.9"
      />
      <path
        id="victoria_940gzzlupco_940gzzluvxl"
        fill="none"
        stroke="#009DDC"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M481.4,611.7l-3.5-3.5c-1.2-1.2-2.1-3.5-2.1-5.3l0-49.5"
      />
      <line
        id="victoria_940gzzluvxl_940gzzluskw"
        fill="none"
        stroke="#009DDC"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="514.6"
        y1="644.9"
        x2="481.3"
        y2="611.6"
      />
      <line
        id="victoria_940gzzluskw_940gzzlubxn"
        fill="none"
        stroke="#009DDC"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="538.4"
        y1="668.7"
        x2="514.6"
        y2="644.9"
      />
      <StationIcon
        x={714.1}
        y={261.5}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={270}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.SevenSisters }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.SevenSisters}
        isInterchange
      />
      <StationIcon
        x={732.8}
        y={261.5}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={180}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.TottenhamHale }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.TottenhamHale}
        isInterchange
      />
      <StationIcon
        x={475.8}
        y={554.05}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={270}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.Pimlico }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.Pimlico}
      />
      <StationIcon
        x={485.3}
        y={615.4}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={225}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.Vauxhall }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.Vauxhall}
        isInterchange
      />
      <StationIcon
        x={538.3}
        y={668.7}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={135}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.Brixton }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.Brixton}
        isInterchange
      />
    </g>
  );
});

export default Victoria;
