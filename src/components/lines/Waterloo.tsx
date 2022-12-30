import React, { memo, FC } from "react";
import classNames from "classnames";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getIsLineActiveSelector, selectLine } from "../../store/map";
import { Line } from "../../config";

const Waterloo: FC = memo(() => {
  const isActive = useAppSelector(getIsLineActiveSelector(Line.Waterloo));
  const dispatch = useAppDispatch();
  return (
    <g
      className={classNames("line", { disabled: !isActive })}
      onClick={() => dispatch(selectLine({ line: Line.Waterloo }))}
    >
      <path
        fill="none"
        stroke="#86CEBC"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M626,446.4l-3.5,3.5c-1.2,1.2-2.3,3.7-2.3,5.4v16.2l0,0.5v34c0,1.8-1,4.2-2.3,5.4l-30.5,30.5c-1.2,1.2-3.7,2.3-5.4,2.3l-38.4,0"
        className="disrupted"
      />
    </g>
  );
});

export default Waterloo;
