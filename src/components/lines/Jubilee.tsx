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

const STROKE_WIDTH = 2.27;

const Jubilee: FC = memo(() => {
  const isActive = useAppSelector(getIsLineActiveSelector(Line.Jubilee));
  const selectedStation = useAppSelector(selectSelectedStation);

  const dispatch = useAppDispatch();
  return (
    <g
      className={classNames("line", { disabled: !isActive })}
      onClick={() => dispatch(selectLine({ line: Line.Jubilee }))}
      fill="#949CA1"
    >
      <path
        id="jubilee_940gzzluwhm_940gzzlustd"
        fill="none"
        stroke="#949CA1"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M846.4,389.5l0-36.8c0-2.3,1-3.8,2.3-5.1c1.5-1.5,7.2-7.2,7.2-7.2"
      />
      <line
        id="jubilee_940gzzlucgt_940gzzluwhm"
        fill="none"
        stroke="#949CA1"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="846.4"
        y1="467.4"
        x2="846.4"
        y2="389.5"
      />
      <path
        id="jubilee_940gzzlungw_940gzzlucgt"
        fill="none"
        stroke="#949CA1"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M834.5,508.3l9.7-9.7c1.2-1.2,2.3-2.8,2.3-5.1l0-26.2"
      />
      <path
        id="jubilee_940gzzlucyf_940gzzlungw"
        fill="none"
        stroke="#949CA1"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M786.1,513.4c0,0,39.6,0,40.1,0c1.8,0,4.2-1,5.4-2.3l2.8-2.8"
      />
      <path
        id="jubilee_940gzzlucwr_940gzzlucyf_00000138543720657951518640000004814746599928254392_"
        fill="none"
        stroke="#949CA1"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M786.1,513.4"
      />
      <path
        id="jubilee_940gzzlucwr_940gzzlucyf_00000134213178718278959110000006530221202823387546_"
        fill="none"
        stroke="#949CA1"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M723.1,536.6"
      />
      <path
        id="jubilee_940gzzluswk_940gzzlulnb"
        fill="none"
        stroke="#949CA1"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M565.8,556.5h16.4c1.8,0,4.2-1,5.4-2.3l38.6-38.6c1.2-1.2,3.7-2.3,5.4-2.3h5"
      />
      <path
        id="jubilee_940gzzlulnb_940gzzlubmy_00000012454791683629835940000001220941633427852466_"
        fill="none"
        stroke="#949CA1"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d="M636.7,513.4h16.4c1.8,0,4.2,1,6.5,3.4l15.3,15.3"
      />
      <path
        id="jubilee_940gzzlubmy_940gzzlucwr_00000114036259827503229430000017952540963520762008_"
        fill="none"
        stroke="#949CA1"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M674.3,531.5l3,3c1.2,1.2,3.7,2.3,5.4,2.3h5h1.3h34.1"
      />
      <path
        id="jubilee_940gzzlucwr_940gzzlucyf_00000179612364775976252330000013286114424647746742_"
        fill="none"
        stroke="#949CA1"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M785.1,513.4h-16.4c-1.8,0-4.2,1-5.4,2.3l-18.8,18.8c-1.2,1.2-3.7,2.3-5.4,2.3h-16.3"
      />
      <path
        id="jubilee_940gzzluwlo_940gzzluswk"
        fill="none"
        stroke="#949CA1"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M529.6,535.8l0,13.1c0,4.2,3.4,7.6,8.6,7.6h28.6"
      />
      <path
        id="jubilee_940gzzluwsm_940gzzluwlo"
        fill="none"
        stroke="#949CA1"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M516.3,505.1l11.1,11c1.2,1.2,2.3,3.7,2.3,5.4l0,14.3"
      />
      <line
        id="jubilee_940gzzlugpk_940gzzluwsm"
        fill="none"
        stroke="#949CA1"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="475.8"
        y1="464.8"
        x2="516.3"
        y2="505.1"
      />
      <path
        id="jubilee_940gzzlubnd_940gzzlugpk"
        fill="none"
        stroke="#949CA1"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M463.6,426.3v23.1c0,1.8,1,4.2,2.3,5.4l10,10"
      />
      <line
        id="jubilee_940gzzlubst_940gzzlubnd"
        fill="none"
        stroke="#949CA1"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="463.6"
        y1="390.5"
        x2="463.6"
        y2="426.4"
      />
      <line
        id="jubilee_940gzzlusjw_940gzzlubst"
        fill="none"
        stroke="#949CA1"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="463.6"
        y1="367.9"
        x2="463.6"
        y2="390.5"
      />
      <line
        id="jubilee_940gzzlukbn_940gzzluwhp"
        fill="none"
        stroke="#949CA1"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="407.7"
        y1="296.4"
        x2="428.5"
        y2="317.2"
      />
      <line
        id="jubilee_940gzzluwig_940gzzlukbn"
        fill="none"
        stroke="#949CA1"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="397.8"
        y1="286.5"
        x2="407.8"
        y2="296.5"
      />
      <line
        id="jubilee_940gzzludoh_940gzzluwig"
        fill="none"
        stroke="#949CA1"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="388.9"
        y1="277.6"
        x2="398.8"
        y2="287.5"
      />
      <line
        id="jubilee_940gzzlundn_940gzzludoh"
        fill="none"
        stroke="#949CA1"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="380"
        y1="268.7"
        x2="390"
        y2="278.7"
      />
      <line
        id="jubilee_940gzzluwyp_940gzzlundn"
        fill="none"
        stroke="#949CA1"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="375"
        y1="263.7"
        x2="381"
        y2="269.7"
      />
      <path
        id="jubilee_940gzzlukby_940gzzluwyp"
        fill="none"
        stroke="#949CA1"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M370,247.5v8c0,1.8,1,4.2,2.3,5.4l2.8,2.8"
      />
      <line
        id="jubilee_940gzzluqby_940gzzlukby"
        fill="none"
        stroke="#949CA1"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="370"
        y1="235.5"
        x2="370"
        y2="247.5"
      />
      <line
        id="jubilee_940gzzlucpk_940gzzluqby"
        fill="none"
        stroke="#949CA1"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="370"
        y1="224.1"
        x2="370"
        y2="237"
      />
      <line
        id="jubilee_940gzzlustm_940gzzlucpk"
        fill="none"
        stroke="#949CA1"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="370"
        y1="214.4"
        x2="370"
        y2="225.6"
      />
      <line
        id="jubilee_940gzzluswc_940gzzlusjw"
        fill="none"
        stroke="#949CA1"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="463.6"
        y1="359.5"
        x2="463.6"
        y2="369.2"
      />
      <path
        id="jubilee_940gzzlufyr_940gzzluswc"
        fill="none"
        stroke="#949CA1"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M438.6,327.2l20.3,20.3l-1.3-1.3l3.7,3.7c1.2,1.2,2.3,3.7,2.3,5.4v4.1"
      />
      <line
        id="jubilee_940gzzluwhp_940gzzlufyr"
        fill="none"
        stroke="#949CA1"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="428.5"
        y1="317.2"
        x2="438.6"
        y2="327.2"
      />
      <StationIcon
        x={370.1}
        y={224.85}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={90}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.CanonsPark }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.CanonsPark}
      />
      <StationIcon
        x={370.1}
        y={236.25}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={90}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.Queensbury }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.Queensbury}
      />
      <StationIcon
        x={370.1}
        y={247.95}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={90}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.Kingsbury }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.Kingsbury}
      />
      <StationIcon
        x={380.6}
        y={269.3}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={45}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.Neasden }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.Neasden}
      />
      <StationIcon
        x={389.5}
        y={278.1}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={45}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.DollisHill }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.DollisHill}
      />
      <StationIcon
        x={397.7}
        y={286.4}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={45}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.WillesdenGreen }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.WillesdenGreen}
      />
      <StationIcon
        x={407.2}
        y={295.8}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={45}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.Kilburn }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.Kilburn}
      />
      <rect
        id="jubilee_940gzzlusjw"
        x="464.7"
        y="367.8"
        fill="#949CA1"
        width="1.5"
        height="1.5"
      />
      <StationIcon
        x={673.4}
        y={530.6}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={45}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.Bermondsey }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.Bermondsey}
      />
    </g>
  );
});

export default Jubilee;
