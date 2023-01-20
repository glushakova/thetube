import React, { FC, MouseEventHandler } from "react";

interface StationIconProps {
  strokeWidth: number;
  rotationAngle: number;
  isSelected: boolean;
  x: number;
  y: number;
  isEndingStation?: boolean;
  isInterchange?: boolean;
  onClick: MouseEventHandler;
}

export const StationIcon: FC<StationIconProps> = ({
  strokeWidth,
  rotationAngle,
  isSelected,
  onClick,
  x,
  y,
  isEndingStation = false,
  isInterchange = false,
}) => {
  return (
    <g
      transform={`translate(${x}, ${y})`}
      data-testid="station-icon"
      onClick={onClick}
    >
      <rect className="transparent-field" width="8" height="8" x="-4" y="-4" />
      {isSelected ? (
        <>
          <circle r="3.3" fill="black" />
          <circle r="2.3" fill="white" />
          <circle r="1" fill="black" />
        </>
      ) : (
        <>
          {isInterchange ? (
            <>
              <circle r="3.3" fill="black" className="interchange-circle" />
              <circle r="2.3" fill="white" />
            </>
          ) : (
            <rect
              x="-0.75"
              y={-(strokeWidth / 2 + 1.5)}
              transform={`rotate(${rotationAngle})`}
              width="1.5"
              height={isEndingStation ? "5.207" : strokeWidth / 2 + 1.5}
            />
          )}
        </>
      )}
    </g>
  );
};
