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

const CloudCableCar: FC = memo(() => {
  const isActive = useAppSelector(getIsLineActiveSelector(Line.CloudCableCar));
  const selectedStation = useAppSelector(selectSelectedStation);

  const dispatch = useAppDispatch();

  return (
    <g
      className={classNames("line", { disabled: !isActive })}
      onClick={() => dispatch(selectLine({ line: Line.CloudCableCar }))}
    >
      <path
        fill="none"
        stroke="#EE3124"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d="M892.2,480.8 c0,0-2,0-4.4,0c-1.8,0-4.2,1-5.4,2.3l-25.6,25.6c-1.2,1.2-3.7,2.3-5.4,2.3c-2.1,0-4.1,0-4.1,0"
      />
      <g className="white_line">
        <path
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="1.362"
          strokeMiterlimit="1"
          d="M892.2,480.8c0,0-2,0-4.4,0 c-1.8,0-4.2,1-5.4,2.3l-25.6,25.6c-1.2,1.2-3.7,2.3-5.4,2.3c-2.1,0-4.1,0-4.1,0"
        />
      </g>
      <path
        fill="none"
        stroke="#EE3124"
        strokeWidth="0.454"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d="M892.2,480.8 c0,0-2,0-4.4,0c-1.8,0-4.2,1-5.4,2.3l-25.6,25.6c-1.2,1.2-3.7,2.3-5.4,2.3c-2.1,0-4.1,0-4.1,0"
      />
      <StationIcon
        x={846.1}
        y={511}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={180}
        onClick={(event) => {
          dispatch(
            selectStation({ station: Station.IFSCloudGreenwichPeninsula })
          );
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.IFSCloudGreenwichPeninsula}
        isInterchange
      />
      <StationIcon
        x={893.6}
        y={480.9}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={90}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.IFSCloudRoyalDocks }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.IFSCloudRoyalDocks}
        isInterchange
      />
    </g>
  );
});

export default CloudCableCar;
