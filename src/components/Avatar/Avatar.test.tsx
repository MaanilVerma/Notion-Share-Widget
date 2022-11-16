import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Avatar } from "./Avatar";

const testData = {
  type: "person",
  name: "Maanil",
  imageUrl:
    "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
};

describe("Basic renders", () => {
  it("should mount the Avatar to the DOM", () => {
    render(
      <Avatar
        type={testData.type}
        name={testData.name}
        imageUrl={testData.imageUrl}
      />
    );

    expect(screen.getByTestId("Avatar")).toBeInTheDocument();
  });

  it("should mount the Avatar Image to the DOM", () => {
    render(
      <Avatar
        type={testData.type}
        name={testData.name}
        imageUrl={testData.imageUrl}
      />
    );

    expect(screen.getByTestId("AvatarImage")).toBeInTheDocument();
  });
});
