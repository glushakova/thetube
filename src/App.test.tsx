import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { App } from "./App";

describe("App", () => {
  it("should highlight selected line and grey out others", async () => {
    render(<App />);
    const station = screen.getByText("Camden Town");
    await userEvent.click(station);
    expect(screen.getByTestId("northern-line-path")).not.toHaveClass(
      "disabled"
    );
    expect(screen.getByTestId("elizabeth-line-path")).toHaveClass("disabled");
  });
});
