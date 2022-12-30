import React, {memo, FC} from 'react';
import classNames from "classnames";
import {LineProps} from "../../interface/line";

const Waterloo: FC<LineProps> = memo(({ line, isSelected, onStationClick, onLineClick }) => {
    return (
        <g className={classNames("line", {"disabled": !isSelected})} onClick={() => onLineClick(line)}>
            <path id="waterloo-city_940gzzluwlo_940gzzlubnk_00000147205344099926852660000000184576883436414141_"
                  fill="none" stroke="#86CEBC" strokeWidth="2.2707" strokeLinejoin="round" strokeMiterlimit="3.9938"
                  d=" M626,446.4l-3.5,3.5c-1.2,1.2-2.3,3.7-2.3,5.4v16.2l0,0.5v34c0,1.8-1,4.2-2.3,5.4l-30.5,30.5c-1.2,1.2-3.7,2.3-5.4,2.3l-38.4,0"
                  className="disrupted"/>
        </g>
    )
}
);

export default Waterloo;
