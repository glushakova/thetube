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

const DLR: FC = memo(() => {
  const isActive = useAppSelector(getIsLineActiveSelector(Line.DLR));
  const selectedStation = useAppSelector(selectSelectedStation);
  const dispatch = useAppDispatch();

  return (
    <g
      className={classNames("line", { disabled: !isActive })}
      onClick={() => dispatch(selectLine({ line: Line.DLR }))}
      fill="#00B1B0"
    >
      <path
        id="dlr_940gzzdlwfe_940gzzdlwiq"
        fill="none"
        stroke="#00B1B0"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d="M795.5,489.9c0,0,0-8.5,0-10.2c0-1.8-1-4.2-2.3-5.4l-4.6-4.6c-1.2-1.2-3.5-2.3-5.1-2.3c-1.7,0-10.9,0-10.9,0"
      />
      <line
        id="dlr_940gzzdlgal_940gzzdlbec"
        fill="none"
        stroke="#00B1B0"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="954.4"
        y1="544.1"
        x2="954.4"
        y2="555.5"
      />
      <line
        id="dlr_940gzzdlbpk_940gzzdlcyp_00000182492200122161283560000000972431793304916123_"
        fill="none"
        stroke="#00B1B0"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="954.4"
        y1="522.7"
        x2="954.4"
        y2="533.1"
      />
      <line
        id="dlr_940gzzdlcyp_940gzzdlgal"
        fill="none"
        stroke="#00B1B0"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="954.4"
        y1="532.6"
        x2="954.4"
        y2="544.1"
      />
      <line
        id="dlr_940gzzdlral_940gzzdlbpk"
        fill="none"
        stroke="#00B1B0"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="954.4"
        y1="512.2"
        x2="954.4"
        y2="522.7"
      />
      <line
        id="dlr_940gzzdlcus_940gzzdlpre"
        fill="none"
        stroke="#00B1B0"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="937.4"
        y1="486.7"
        x2="947.1"
        y2="496.4"
      />
      <path
        id="dlr_940gzzdlrvc_940gzzdlcus"
        fill="none"
        stroke="#00B1B0"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M893.7,467.4h21.2c1.8,0,4.2,1,5.4,2.3l17.4,17.4"
      />
      <path
        id="dlr_940gzzdlpre_940gzzdlral"
        fill="none"
        stroke="#00B1B0"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M946,495.3l6.1,6.1c1.2,1.2,2.3,3.7,2.3,5.4l0,6"
      />
      <line
        id="dlr_940gzzdlstl_940gzzdlcgt"
        fill="none"
        stroke="#00B1B0"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="845.2"
        y1="467.4"
        x2="895.3"
        y2="467.4"
      />
      <line
        id="dlr_940gzzdlein_940gzzdlcgt"
        fill="none"
        stroke="#00B1B0"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="830.4"
        y1="467.4"
        x2="846.4"
        y2="467.4"
      />
      <line
        id="dlr_940gzzdlbla_940gzzdlein"
        fill="none"
        stroke="#00B1B0"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="810.2"
        y1="467.4"
        x2="830.4"
        y2="467.4"
      />
      <line
        id="dlr_940gzzdlpop_940gzzdlbla"
        fill="none"
        stroke="#00B1B0"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="795.5"
        y1="467.4"
        x2="810.2"
        y2="467.4"
      />
      <line
        id="dlr_940gzzdlwfe_940gzzdlpop"
        fill="none"
        stroke="#00B1B0"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="764.7"
        y1="467.4"
        x2="795.5"
        y2="467.4"
      />
      <line
        id="dlr_940gzzdllim_940gzzdlwfe"
        fill="none"
        stroke="#00B1B0"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="748.9"
        y1="467.4"
        x2="764.2"
        y2="467.4"
      />
      <line
        id="dlr_940gzzdlsha_940gzzdllim"
        fill="none"
        stroke="#00B1B0"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="731.5"
        y1="467.4"
        x2="748.9"
        y2="467.4"
      />
      <path
        id="dlr_940gzzdlbnk_940gzzdlsha"
        fill="none"
        stroke="#00B1B0"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M635.7,458.6h58.1c1.8,0,4.2,1,5.4,2.3l4.3,4.3c1.2,1.2,3.7,2.3,5.4,2.3h22.5"
      />
      <path
        id="dlr_940gzzdltwg_940gzzdlsha"
        fill="none"
        stroke="#00B1B0"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M692.4,480.9c0,0,9.5-9.5,11.2-11.2c1.2-1.2,3.7-2.3,5.4-2.3c1.5,0,27.4,0,27.4,0"
      />
      <line
        id="dlr_940gzzdlelv_940gzzdllew"
        fill="none"
        stroke="#00B1B0"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="795.5"
        y1="626.4"
        x2="795.5"
        y2="638"
      />
      <line
        id="dlr_940gzzdldep_940gzzdlelv"
        fill="none"
        stroke="#00B1B0"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="795.5"
        y1="614.9"
        x2="795.5"
        y2="626.4"
      />
      <line
        id="dlr_940gzzdlgre_940gzzdldep"
        fill="none"
        stroke="#00B1B0"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="795.5"
        y1="603.3"
        x2="795.5"
        y2="614.9"
      />
      <line
        id="dlr_940gzzdlcut_940gzzdlgre"
        fill="none"
        stroke="#00B1B0"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="795.5"
        y1="590.7"
        x2="795.5"
        y2="603.3"
      />
      <line
        id="dlr_940gzzdlisl_940gzzdlcut"
        fill="none"
        stroke="#00B1B0"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="795.5"
        y1="570.6"
        x2="795.5"
        y2="590.7"
      />
      <line
        id="dlr_940gzzdlmud_940gzzdlisl"
        fill="none"
        stroke="#00B1B0"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="795.5"
        y1="558.8"
        x2="795.5"
        y2="570.6"
      />
      <line
        id="dlr_940gzzdlcla_940gzzdlmud"
        fill="none"
        stroke="#00B1B0"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="795.5"
        y1="547.1"
        x2="795.5"
        y2="558.8"
      />
      <line
        id="dlr_940gzzdlsoq_940gzzdlcla"
        fill="none"
        stroke="#00B1B0"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="795.5"
        y1="535.3"
        x2="795.5"
        y2="547.1"
      />
      <line
        id="dlr_940gzzdlheq_940gzzdlsoq"
        fill="none"
        stroke="#00B1B0"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="795.5"
        y1="523.4"
        x2="795.5"
        y2="535.3"
      />
      <line
        id="dlr_940gzzdlcan_940gzzdlheq"
        fill="none"
        stroke="#00B1B0"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="795.5"
        y1="504"
        x2="795.5"
        y2="523.4"
      />
      <line
        id="dlr_940gzzdlcan_940gzzdlheq"
        fill="none"
        stroke="#00B1B0"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="795.5"
        y1="513.5"
        x2="795.5"
        y2="514"
      />
      <line
        id="dlr_940gzzdlwiq_940gzzdlcan"
        fill="none"
        stroke="#00B1B0"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="795.5"
        y1="489.9"
        x2="795.5"
        y2="504.8"
      />
      <line
        id="dlr_940gzzdlpop_940gzzdlwiq"
        fill="none"
        stroke="#00B1B0"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="795.5"
        y1="467.3"
        x2="795.5"
        y2="489.9"
      />
      <line
        id="dlr_940gzzdlall_940gzzdlpop"
        fill="none"
        stroke="#00B1B0"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="795.5"
        y1="450.1"
        x2="795.5"
        y2="467.3"
      />
      <line
        id="dlr_940gzzdlldp_940gzzdlall"
        fill="none"
        stroke="#00B1B0"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="795.5"
        y1="438.3"
        x2="795.5"
        y2="450.1"
      />
      <line
        id="dlr_940gzzdldev_940gzzdlldp"
        fill="none"
        stroke="#00B1B0"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="795.5"
        y1="426.6"
        x2="795.5"
        y2="438.3"
      />
      <line
        id="dlr_940gzzdlbow_940gzzdldev"
        fill="none"
        stroke="#00B1B0"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="795.5"
        y1="407"
        x2="795.5"
        y2="426.6"
      />
      <path
        id="dlr_940gzzdlpud_940gzzdlbow"
        fill="none"
        stroke="#00B1B0"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M825.6,367.5l-27.9,27.9c-1.2,1.2-2.3,3.1-2.3,4.9v6.8"
      />
      <line
        id="dlr_940gzzdlstd_940gzzdlpud"
        fill="none"
        stroke="#00B1B0"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="853.6"
        y1="339.5"
        x2="825.6"
        y2="367.5"
      />
      <path
        id="dlr_940gzzdlsit_940gzzdlstd"
        fill="none"
        stroke="#00B1B0"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M854.8,339.9v-4.5c0-1.8-1-4.2-2.3-5.4c-1.7-1.7-12-12.1-12-12.1c-1.2-1.2-3.7-2.3-5.4-2.3c-2.3,0-16.3,0-16.3,0"
      />
      <line
        id="dlr_940gzzdlstd_940gzzdlshs"
        fill="none"
        stroke="#00B1B0"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="854.8"
        y1="359.8"
        x2="854.8"
        y2="339.9"
      />
      <line
        id="dlr_940gzzdlshs_940gzzdlabr"
        fill="none"
        stroke="#00B1B0"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="854.8"
        y1="377.9"
        x2="854.8"
        y2="359.8"
      />
      <line
        id="dlr_940gzzdlabr_940gzzdlwhm"
        fill="none"
        stroke="#00B1B0"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="854.8"
        y1="402.6"
        x2="854.8"
        y2="377.9"
      />
      <line
        id="dlr_940gzzdlwhm_940gzzdlstl"
        fill="none"
        stroke="#00B1B0"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="854.8"
        y1="429.7"
        x2="854.8"
        y2="402.6"
      />
      <line
        id="dlr_940gzzdlstl_940gzzdlcgt"
        fill="none"
        stroke="#00B1B0"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="854.8"
        y1="458.5"
        x2="854.8"
        y2="429.7"
      />
      <path
        id="dlr_940gzzdlkgv_940gzzdlwla_00000135688215652893503890000006690243506149081769_"
        fill="none"
        stroke="#00B1B0"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M908.4,554.9c0,2.1,0,30.8,0,30.8"
      />
      <path
        id="dlr_940gzzdlwsv_940gzzdlpdk"
        fill="none"
        stroke="#00B1B0"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M902.8,504.8l3.3,3.3c1.2,1.2,2.3,3.7,2.3,5.4c0,2.1,0,12.4,0,12.4"
      />
      <line
        id="dlr_940gzzdllca_940gzzdlkgv"
        fill="none"
        stroke="#00B1B0"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="908.4"
        y1="542.2"
        x2="908.4"
        y2="554.9"
      />
      <line
        id="dlr_940gzzdlpdk_940gzzdllca"
        fill="none"
        stroke="#00B1B0"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="908.4"
        y1="525"
        x2="908.4"
        y2="542.6"
      />
      <path
        id="dlr_940gzzdlcgt_940gzzdlwsv"
        fill="none"
        stroke="#00B1B0"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M905.2,507.2l-37.6-37.6c-1.2-1.2-3.7-2.3-5.4-2.3c-1.8,0-3.7-1-4.9-2.3l-0.1-0.1c-1.2-1.2-2.3-3.7-2.3-5.4v-1.8"
      />
      <path
        id="dlr_940gzzdlrvc_940gzzdlcgt"
        fill="none"
        stroke="#00B1B0"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M854.8,459.5c0,1.8,1,4.2,2.3,5.4l0.1,0.1c1.2,1.2,2.9,2.3,4.6,2.3c2.2,0,31.6,0,31.6,0"
      />
      <path
        id="dlr_940gzzdlcgt_940gzzdlwsv"
        fill="none"
        stroke="#00B1B0"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M905.2,507.2l-37.6-37.6c-1.2-1.2-3.7-2.3-5.4-2.3c-2,0-15.2,0-15.2,0"
      />
      <g className="white_line">
        <path
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="0.7795"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d="M795.5,479.7c0-1.8-1-4.2-2.3-5.4l-4.6-4.6c-1.2-1.2-3.5-2.3-5.1-2.3"
        />
        <path
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="0.7795"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d="M692.4,480.9c0,0,9.5-9.5,11.2-11.2c1.2-1.2,3.7-2.3,5.4-2.31"
        />
        <path
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="0.7795"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M853.6,339.5l-55.8,55.9c-1.2,1.2-2.3,3.1-2.3,4.9V638"
        />
        <path
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="0.7795"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M908.4,585.7c0,0,0-69.9,0-72.1c0-1.8-1-4.2-2.3-5.4l-3.3-3.3l-35.2-35.2c-1.2-1.2-4.1-2.3-5.8-2.3c-1.8,0-3.3-1-4.6-2.3 l-0.1-0.1c-0.7-0.7-2.3-2.5-2.3-6.5l0-123.1c0-1.8-1-4.2-2.3-5.4c-1.7-1.7-12-12.1-12-12.1c-1.2-1.2-3.7-2.3-5.4-2.3 c-2.3,0-16.3,0-16.3,0"
        />
        <path
          id="dlr_white_line_00000168824439078475829440000016273574727890987694_"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="0.7795"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M954.4,555.5c0-2.5,0-48.5,0-48.5v-0.1c0-1.8-1-4.2-2.2-5.4c-1.7-1.7-5.1-5.1-5.1-5.1l-0.4-0.4l-26.3-26.3 c-1.2-1.2-3.8-2.3-5.2-2.3H709.6c-2.4,0-4.8-1-6-2.3l-4.3-4.3c-1.2-1.2-3.7-2.3-5.4-2.3h-58.1"
        />
      </g>
      <StationIcon
        x={818.3}
        y={315.6}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={180}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.StratfordInternational }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.StratfordInternational}
        isInterchange
      />
      <StationIcon
        x={692.5}
        y={481}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={135}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.TowerGateway }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.TowerGateway}
        isInterchange
      />
      <StationIcon
        x={732.4}
        y={467.4}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={180}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.Shadwell }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.Shadwell}
        isInterchange
      />
      <StationIcon
        x={748.4}
        y={467.4}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={0}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.Limehouse }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.Limehouse}
        isInterchange
      />
      <StationIcon
        x={764.1}
        y={467.4}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={0}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.Westferry }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.Westferry}
        isInterchange
      />
      <StationIcon
        x={795.5}
        y={467.4}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={310}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.Poplar }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.Poplar}
        isInterchange
      />
      <StationIcon
        x={795.5}
        y={485.2}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={310}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.WestIndiaQuay }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.WestIndiaQuay}
        isInterchange
      />
      <StationIcon
        x={795.5}
        y={590.8}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={90}
        onClick={(event) => {
          dispatch(
            selectStation({ station: Station.CuttySarkForMaritimeGreenwich })
          );
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.CuttySarkForMaritimeGreenwich}
        isInterchange
      />
      <StationIcon
        x={795.5}
        y={603.5}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={90}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.Greenwich }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.Greenwich}
        isInterchange
      />
      <StationIcon
        x={795.5}
        y={637.8}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={90}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.Lewisham }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.Lewisham}
        isInterchange
      />
      <StationIcon
        x={908.4}
        y={542.5}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={270}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.LondonCityAirport }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.LondonCityAirport}
        isInterchange
      />
      <StationIcon
        x={893.6}
        y={467.5}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={180}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.RoyalVictoria }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.RoyalVictoria}
        isInterchange
      />
      <StationIcon
        x={908.4}
        y={585.1}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={90}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.WoolwichArsenal }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.WoolwichArsenal}
        isInterchange
      />
      <StationIcon
        x={954.3}
        y={555.5}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={90}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.Beckton }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.Beckton}
        isEndingStation
      />
    </g>
  );
});

export default DLR;
