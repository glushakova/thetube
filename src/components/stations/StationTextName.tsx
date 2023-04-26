import React, { memo, FC, ReactNode, useCallback } from "react";
import classNames from "classnames";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { selectActiveStationsSet, selectStation } from "../../store/map";
import { multiWordStationNames, Station } from "../../config";

export interface StationTextNameProps {
  transform?: string;
  station: Station;
  children?: ReactNode;
  tag?: "text" | "g";
}

const StationTextName: FC<StationTextNameProps> = memo(
  ({ transform, station, children, tag = "text" }) => {
    const activeStationsSet = useAppSelector(selectActiveStationsSet);
    const dispatch = useAppDispatch();

    const handleClick = useCallback(
      () => dispatch(selectStation({ station })),
      [dispatch, station]
    );

    return React.createElement(
      tag,
      {
        transform,
        className: classNames({
          disabled: !activeStationsSet.has(station),
        }),
        onClick: handleClick,
      },
      children || multiWordStationNames[station] || station
    );
  }
);

export default StationTextName;
