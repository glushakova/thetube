import React from "react";
import { render, screen } from "@testing-library/react";
import { StationIcon } from "./StationIcon";

const propsStationIcon = {
  x: 585,
  y: 289.15,
  rotationAngle: 90,
  strokeWidth: 2.27,
  onClick: () => console.log(),
};

describe("StationIcon", () => {
  it("should select StationIcon", () => {
    render(
      <svg>
        <StationIcon {...propsStationIcon} isSelected={true} />
      </svg>
    );

    expect(screen.getByTestId("station-icon")).toContainHTML("</circle>");
  });

  it("should not select StationIcon", () => {
    render(
      <svg>
        <StationIcon {...propsStationIcon} isSelected={false} />
      </svg>
    );

    expect(screen.getByTestId("station-icon")).not.toContainHTML("<circle/>");
  });
});
