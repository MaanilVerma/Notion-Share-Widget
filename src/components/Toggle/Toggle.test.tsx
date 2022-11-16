import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Toggle } from "./Toggle";

const testData = {
  value: false,
  onClick: () => console.log("maanil"),
};

describe("Basic renders", () => {
  it("should mount the Toggle to the DOM", () => {
    render(<Toggle value={false} onClick={() => console.log("Maanil")} />);

    expect(screen.getByTestId("toggle")).toBeInTheDocument();
  });

  it("should mount the Input to the DOM", () => {
    render(<Toggle value={false} onClick={() => console.log("Maanil")} />);

    expect(screen.getByTestId("input")).toBeInTheDocument();
  });

  it("should mount the Slider to the DOM", () => {
    render(<Toggle value={false} onClick={() => console.log("Maanil")} />);

    expect(screen.getByTestId("slider")).toBeInTheDocument();
  });
});
