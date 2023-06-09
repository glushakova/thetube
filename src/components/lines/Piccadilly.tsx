import React, { FC, memo } from "react";
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

const Piccadilly: FC = memo(() => {
  const isActive = useAppSelector(getIsLineActiveSelector(Line.Piccadilly));
  const selectedStation = useAppSelector(selectSelectedStation);
  const dispatch = useAppDispatch();
  return (
    <g
      className={classNames("line", { disabled: !isActive })}
      onClick={() => dispatch(selectLine({ line: Line.Piccadilly }))}
      fill="#1C3F94"
    >
      <line
        id="piccadilly_940gzzluosy_940gzzlubos_00000128457183479018220690000005391031151591931797_"
        fill="none"
        stroke="#1C3F94"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="164.7"
        y1="529.4"
        x2="176.1"
        y2="518"
      />
      <line
        id="piccadilly_940gzzluhwe_940gzzluosy_00000071529332891867147640000012565578614273071288_"
        fill="none"
        stroke="#1C3F94"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="156.6"
        y1="537.5"
        x2="165.8"
        y2="528.3"
      />
      <line
        id="piccadilly_940gzzluhwc_940gzzluhwe_00000127042873533159468370000009434583982100434826_"
        fill="none"
        stroke="#1C3F94"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="146.9"
        y1="547.2"
        x2="156.7"
        y2="537.4"
      />
      <line
        id="piccadilly_940gzzluhwt_940gzzluhwc_00000034808003143007905430000003545870909486728842_"
        fill="none"
        stroke="#1C3F94"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="137.7"
        y1="556.4"
        x2="147.9"
        y2="546.2"
      />
      <line
        id="piccadilly_940gzzluhnx_940gzzluhwt_00000066489952768218027600000001386896290225080463_"
        fill="none"
        stroke="#1C3F94"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="124"
        y1="570.1"
        x2="137.8"
        y2="556.3"
      />
      <line
        id="piccadilly_940gzzluhrc_940gzzluhnx_00000152229805290269682140000016347440962863845523_"
        fill="none"
        stroke="#1C3F94"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="115"
        y1="579.1"
        x2="125.2"
        y2="568.9"
      />
      <path
        id="piccadilly_940gzzluhr5_940gzzluhrc_00000046314579407697318630000006483797277560302782_"
        fill="none"
        stroke="#1C3F94"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M115,579.1l-22.9,22.9c-1.5,1.5-2.5,3.9-2.5,6.1c0,2.5,0,15.3,0,15.3"
      />
      <line
        id="piccadilly_940gzzlucks_940gzzluoak"
        fill="none"
        stroke="#1C3F94"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="682.4"
        y1="175.8"
        x2="682.4"
        y2="163.1"
      />
      <line
        id="piccadilly_940gzzluoak_940gzzlusgt"
        fill="none"
        stroke="#1C3F94"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="682.4"
        y1="188.8"
        x2="682.4"
        y2="175.7"
      />
      <line
        id="piccadilly_940gzzlusgt_940gzzluasg"
        fill="none"
        stroke="#1C3F94"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="682.4"
        y1="201"
        x2="682.4"
        y2="187.3"
      />
      <line
        id="piccadilly_940gzzluasg_940gzzlubds"
        fill="none"
        stroke="#1C3F94"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="682.4"
        y1="213.3"
        x2="682.4"
        y2="199.5"
      />
      <line
        id="piccadilly_940gzzlubds_940gzzluwog"
        fill="none"
        stroke="#1C3F94"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="682.4"
        y1="225.6"
        x2="682.4"
        y2="211.8"
      />
      <line
        id="piccadilly_940gzzluwog_940gzzlutpn"
        fill="none"
        stroke="#1C3F94"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="682.4"
        y1="237.9"
        x2="682.4"
        y2="224.1"
      />
      <line
        id="piccadilly_940gzzlutpn_940gzzlumrh"
        fill="none"
        stroke="#1C3F94"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="682.4"
        y1="257"
        x2="682.4"
        y2="236.4"
      />
      <path
        id="piccadilly_940gzzlufpk_940gzzlumrh"
        fill="none"
        stroke="#1C3F94"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M675.5,276.8l4.7-4.7c1.2-1.2,2.3-3.7,2.3-5.4V257"
      />
      <line
        id="piccadilly_940gzzluasl_940gzzlufpk"
        fill="none"
        stroke="#1C3F94"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="658.1"
        y1="294.1"
        x2="675.5"
        y2="276.8"
      />
      <line
        id="piccadilly_940gzzluhwy_940gzzluasl"
        fill="none"
        stroke="#1C3F94"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="646"
        y1="306.3"
        x2="659.2"
        y2="293"
      />
      <line
        id="piccadilly_940gzzlucar_940gzzluhwy"
        fill="none"
        stroke="#1C3F94"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="633.8"
        y1="318.4"
        x2="646.9"
        y2="305.4"
      />
      <path
        id="piccadilly_940gzzluksx_940gzzlucar"
        fill="none"
        stroke="#1C3F94"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M587.2,374.1v-5.8c0-1.8,1-4.2,2.3-5.4l4.8-4.8l0.7-0.7l38.8-38.8"
      />
      <line
        id="piccadilly_940gzzlursq_940gzzluksx_00000050665239022884187690000015974142963244193412_"
        fill="none"
        stroke="#1C3F94"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="587.3"
        y1="393.9"
        x2="587.2"
        y2="374.5"
      />
      <path
        id="piccadilly_940gzzluhbn_940gzzlursq"
        fill="none"
        stroke="#1C3F94"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M561.4,432.7l23.6-23.6c1.2-1.2,2.3-3.7,2.3-5.4v-11.4"
      />
      <line
        id="piccadilly_940gzzlucgn_940gzzluhbn"
        fill="none"
        stroke="#1C3F94"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="547.9"
        y1="446.3"
        x2="561.4"
        y2="432.7"
      />
      <line
        id="piccadilly_940gzzlulsq_940gzzlucgn"
        fill="none"
        stroke="#1C3F94"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="536.8"
        y1="457.3"
        x2="548.9"
        y2="445.3"
      />
      <path
        id="piccadilly_940gzzlupcc_940gzzlulsq"
        fill="none"
        stroke="#1C3F94"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M515.6,464.8h10.6c1.8,0,4.2-1,5.4-2.3l5.2-5.2"
      />
      <line
        id="piccadilly_940gzzlugpk_940gzzlupcc"
        fill="none"
        stroke="#1C3F94"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="475.9"
        y1="464.8"
        x2="515.6"
        y2="464.8"
      />
      <path
        id="piccadilly_940gzzluhpc_940gzzlugpk"
        fill="none"
        stroke="#1C3F94"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M463.5,470.9l3.9-3.9c1.2-1.2,3.7-2.3,5.4-2.3h3.1"
      />
      <line
        id="piccadilly_940gzzluknb_940gzzluhpc"
        fill="none"
        stroke="#1C3F94"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="443.3"
        y1="491.1"
        x2="464.6"
        y2="469.8"
      />
      <path
        id="piccadilly_940gzzlusks_940gzzluknb"
        fill="none"
        stroke="#1C3F94"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M421.9,506.4l3,0c1.8,0,4.2-1,5.4-2.3l14.1-14.1"
      />
      <line
        id="piccadilly_940gzzlugtr_940gzzlusks"
        fill="none"
        stroke="#1C3F94"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="406.7"
        y1="506.4"
        x2="421.9"
        y2="506.4"
      />
      <line
        id="piccadilly_940gzzluect_940gzzlugtr"
        fill="none"
        stroke="#1C3F94"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="382.7"
        y1="506.4"
        x2="408.2"
        y2="506.4"
      />
      <line
        id="piccadilly_940gzzlubsc_940gzzluect"
        fill="none"
        stroke="#1C3F94"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="350.6"
        y1="506.4"
        x2="382.7"
        y2="506.4"
      />
      <line
        id="piccadilly_940gzzluhsd_940gzzlubsc"
        fill="none"
        stroke="#1C3F94"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="333.2"
        y1="506.4"
        x2="352.1"
        y2="506.4"
      />
      <line
        id="piccadilly_940gzzlutng_940gzzluhsd"
        fill="none"
        stroke="#1C3F94"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="270.1"
        y1="506.4"
        x2="333.2"
        y2="506.4"
      />
      <line
        id="piccadilly_940gzzlusea_940gzzluact"
        fill="none"
        stroke="#1C3F94"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="206.5"
        y1="506.4"
        x2="235.9"
        y2="506.4"
      />
      <line
        id="piccadilly_940gzzlunfd_940gzzlusea_00000168808556843782537500000003370491991118920123_"
        fill="none"
        stroke="#1C3F94"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="192"
        y1="506.4"
        x2="208"
        y2="506.4"
      />
      <path
        id="piccadilly_940gzzlubos_940gzzlunfd"
        fill="none"
        stroke="#1C3F94"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M175.4,518.7l8.1-8.1l0.8-0.8l1.1-1.1l0,0c1.2-1.2,3.7-2.3,5.4-2.3l2.6,0"
      />
      <path
        id="piccadilly_940gzzluuxb_940gzzluhgd"
        fill="none"
        stroke="#1C3F94"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M132.3,232.5c-11.5,0-20.3,0-20.3,0"
      />
      <line
        id="piccadilly_940gzzluhgd_940gzzluick"
        fill="none"
        stroke="#1C3F94"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="148.8"
        y1="232.5"
        x2="132.3"
        y2="232.5"
      />
      <g id="piccadilly_940gzzluick_940gzzlursp">
        <line
          id="piccadilly_940gzzluick_940gzzlursp"
          fill="none"
          stroke="#1C3F94"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="175.7"
          y1="232.5"
          x2="148.2"
          y2="232.5"
        />
      </g>
      <path
        id="piccadilly_940gzzlursp_940gzzlursm"
        fill="none"
        stroke="#1C3F94"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M193.2,237.3c-1.8-1.8-2.5-2.5-2.7-2.7c-1-1-3-2.1-4.6-2.1c-0.2,0-11.7,0-11.7,0"
      />
      <path
        id="piccadilly_940gzzlursm_940gzzlueae"
        fill="none"
        stroke="#1C3F94"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M204.7,248.8c0,0-9.7-9.7-12.8-12.8"
      />
      <line
        id="piccadilly_940gzzlueae_940gzzluryl"
        fill="none"
        stroke="#1C3F94"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="214.4"
        y1="258.5"
        x2="203.7"
        y2="247.8"
      />
      <path
        id="piccadilly_940gzzluryl_940gzzlushh"
        fill="none"
        stroke="#1C3F94"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M225,284l0-11.7c0-1.8-1-4.2-2.3-5.4c0,0-1.2-1.2-8.4-8.4"
      />
      <line
        id="piccadilly_940gzzlushh_940gzzlusuh"
        fill="none"
        stroke="#1C3F94"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="225"
        y1="305.3"
        x2="225"
        y2="282.5"
      />
      <line
        id="piccadilly_940gzzlusuh_940gzzlusut"
        fill="none"
        stroke="#1C3F94"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="225"
        y1="326.2"
        x2="225"
        y2="303.8"
      />
      <line
        id="piccadilly_940gzzlusut_940gzzlualp"
        fill="none"
        stroke="#1C3F94"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="225"
        y1="348.6"
        x2="225"
        y2="326.2"
      />
      <line
        id="piccadilly_940gzzlualp_940gzzlupkr"
        fill="none"
        stroke="#1C3F94"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="225"
        y1="428.5"
        x2="225"
        y2="347.1"
      />
      <line
        id="piccadilly_940gzzlupkr_940gzzlunen"
        fill="none"
        stroke="#1C3F94"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="225"
        y1="435.7"
        x2="225"
        y2="428.9"
      />
      <line
        id="piccadilly_940gzzlunen_940gzzluecm"
        fill="none"
        stroke="#1C3F94"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="225"
        y1="482"
        x2="225"
        y2="435.6"
      />
      <g id="piccadilly_940gzzluact_940gzzlutng">
        <line
          fill="none"
          stroke="#1C3F94"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="235.9"
          y1="506.4"
          x2="268.7"
          y2="506.4"
        />
        <path
          fill="none"
          stroke="#1C3F94"
          strokeWidth="2.2707"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d="M232.9,506.4 c2.7,0,38.1,0,38.1,0"
        />
      </g>
      <path
        id="piccadilly_940gzzluecm_940gzzluact"
        fill="none"
        stroke="#1C3F94"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M225.1,482l0,16.6c0,2.1,0.9,4.1,2.3,5.5c1.4,1.4,3.3,2.3,5.5,2.3c2,0,1.5,0,1.5,0"
      />
      <path
        id="piccadilly_940gzzluhr4_940gzzluhnx_00000111895201545840179110000015147989458995111330_"
        fill="none"
        stroke="#1C3F94"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d="M115.4,623.4c3-1.6,5.1-4.8,5.1-8.5v-37.8c0-2.2,0.8-4.4,2.8-6.1c1-1,1.5-1.5,1.5-1.5"
      />
      <path
        id="piccadilly_940gzzluhr4_940gzzluhrc_00000182502800174523004510000003663949030502928768_"
        fill="none"
        stroke="#1C3F94"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M115,579.1c0,0-13.4,13.4-14.2,14.2c-1.6,1.6-2.5,3.7-2.5,6.1l0,15.6c0,5.3,4.3,9.7,9.7,9.7h2.8c1.7,0,3.2-0.4,4.6-1.2"
      />
      <polyline
        fill="none"
        stroke="#F1F2F2"
        strokeWidth="0.9271"
        points="117.8,607 120.5,609.7 123.2,607 "
      />
      <polyline
        fill="none"
        stroke="#F1F2F2"
        strokeWidth="0.9271"
        points="101,610.8 98.4,608.2 95.7,610.8 "
      />
      <rect
        id="piccadilly_940gzzlushh"
        x="222.4"
        y="282.5"
        fill="#1C3F94"
        width="1.5"
        height="1.5"
        className="blue-fill"
      />
      <StationIcon
        x={225}
        y={283.25}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={270}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.SouthHarrow }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.SouthHarrow}
      />
      <StationIcon
        x={225}
        y={304.6}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={270}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.SudburyHill }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.SudburyHill}
      />
      <StationIcon
        x={225}
        y={326.3}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={270}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.SudburyTown }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.SudburyTown}
      />
      <StationIcon
        x={225}
        y={347.85}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={270}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.Alperton }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.Alperton}
      />
      <StationIcon
        x={225}
        y={428.4}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={270}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.ParkRoyal }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.ParkRoyal}
        isInterchange
      />
      <StationIcon
        x={225}
        y={436.45}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={270}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.NorthEaling }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.NorthEaling}
      />
      <StationIcon
        x={207.25}
        y={506.4}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={0}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.SouthEaling }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.SouthEaling}
      />
      <StationIcon
        x={192.7}
        y={506.4}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={180}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.Northfields }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.Northfields}
      />
      <StationIcon
        x={175.6}
        y={518.4}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={135}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.BostonManor }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.BostonManor}
      />
      <StationIcon
        x={163.95}
        y={530.1}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={135}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.Osterley }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.Osterley}
      />
      <StationIcon
        x={155.5}
        y={538.55}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={135}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.HounslowEast }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.HounslowEast}
      />
      <StationIcon
        x={147.4}
        y={546.7}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={135}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.HounslowCentral }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.HounslowCentral}
      />
      <StationIcon
        x={138.4}
        y={555.7}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={135}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.HounslowWest }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.HounslowWest}
      />
      <StationIcon
        x={124.55}
        y={569.5}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={135}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.HattonCross }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.HattonCross}
      />
      <StationIcon
        x={587.3}
        y={392.4}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={270}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.RussellSquare }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.RussellSquare}
      />
      <StationIcon
        x={548.05}
        y={446.1}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={135}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.CoventGarden }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.CoventGarden}
      />
      <StationIcon
        x={464.35}
        y={470}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={315}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.HydeParkCorner }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.HydeParkCorner}
      />
      <StationIcon
        x={443.8}
        y={490.6}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={315}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.Knightsbridge }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.Knightsbridge}
      />
      <StationIcon
        x={634.0}
        y={318.3}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={315}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.CaledonianRoad }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.CaledonianRoad}
        isInterchange
      />
      <StationIcon
        x={646.35}
        y={305.9}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={315}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.HollowayRoad }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.HollowayRoad}
      />
      <StationIcon
        x={658.6}
        y={293.6}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={315}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.Arsenal }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.Arsenal}
      />
      <StationIcon
        x={682.41}
        y={237.15}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={270}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.TurnpikeLane }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.TurnpikeLane}
      />
      <StationIcon
        x={682.41}
        y={224.85}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={270}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.WoodGreen }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.WoodGreen}
      />
      <StationIcon
        x={682.41}
        y={212.55}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={270}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.BoundsGreen }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.BoundsGreen}
      />
      <StationIcon
        x={682.41}
        y={200.25}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={270}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.ArnosGrove }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.ArnosGrove}
      />
      <StationIcon
        x={682.41}
        y={188.05}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={270}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.Southgate }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.Southgate}
      />
      <StationIcon
        x={682.41}
        y={175.7}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={270}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.Oakwood }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.Oakwood}
      />
      <StationIcon
        x={682.41}
        y={257}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={270}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.ManorHouse }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.ManorHouse}
        isInterchange
      />
      <StationIcon
        x={682.41}
        y={162.4}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={270}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.Cockfosters }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.Cockfosters}
        isEndingStation
      />
      <rect
        id="piccadilly_940gzzlugtr"
        x="406.7"
        y="503.8"
        fill="#1C3F94"
        width="1.5"
        height="1.5"
        className="blue-fill"
      />
      <rect
        id="piccadilly_940gzzlursp"
        x="174.2"
        y="229.9"
        fill="#1C3F94"
        width="1.5"
        height="1.5"
        className="blue-fill"
      />
      <rect
        id="piccadilly_940gzzlursm"
        x="193.1"
        y="234.5"
        transform="matrix(0.7071 -0.7071 0.7071 0.7071 -109.5915 205.9444)"
        fill="#1C3F94"
        width="1.5"
        height="1.5"
        className="blue-fill"
      />
      <rect
        id="piccadilly_940gzzlueae"
        x="204.8"
        y="246.2"
        transform="matrix(0.7071 -0.7071 0.7071 0.7071 -114.4371 217.672)"
        fill="#1C3F94"
        width="1.5"
        height="1.5"
        className="blue-fill"
      />
    </g>
  );
});

export default Piccadilly;
