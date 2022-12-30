import React, { memo, FC } from "react";
import classNames from "classnames";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getIsLineActiveSelector, selectLine } from "../../store/map";
import { Line } from "../../config";

const CloudCableCar: FC = memo(() => {
  const isActive = useAppSelector(getIsLineActiveSelector(Line.CloudCableCar));
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
    </g>
  );
});

export default CloudCableCar;
