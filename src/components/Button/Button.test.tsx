import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Button } from "./Button";

const testData = {
  type: "Primary",
};

describe("Basic renders", () => {
  it("should mount the Button to the DOM", () => {
    render(<Button type={testData.type} children={<p>Maanil</p>} />);

    expect(screen.getByTestId("button")).toBeInTheDocument();
  });
});
