import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

import { LayoutGrid } from "./LayoutGrid";

const testData = {
  icon: "https://www.clker.com/cliparts/R/3/j/b/j/k/qb-svg-40x40.svg.med.png",
  title: "Maanil",
  description: "Stories",
  actionButton: "Invite",
  className: "stories",
};

describe("Basic renders", () => {
  it("should mount the Layout Grid to the DOM", () => {
    render(
      <LayoutGrid
        icon={testData.icon}
        title={testData.title}
        description={testData.description}
        actionButton={testData.actionButton}
        className={testData.className}
      />
    );

    expect(screen.getByTestId("layoutGrid")).toBeInTheDocument();
  });

  it("should mount the Icon to the DOM", () => {
    render(
      <LayoutGrid
        icon={testData.icon}
        title={testData.title}
        description={testData.description}
        actionButton={testData.actionButton}
        className={testData.className}
      />
    );

    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  it("should mount the Information Container to the DOM", () => {
    render(
      <LayoutGrid
        icon={testData.icon}
        title={testData.title}
        description={testData.description}
        actionButton={testData.actionButton}
        className={testData.className}
      />
    );

    expect(screen.getByTestId("infoContainer")).toBeInTheDocument();
  });

  it("should mount the Title to the DOM", () => {
    render(
      <LayoutGrid
        icon={testData.icon}
        title={testData.title}
        description={testData.description}
        actionButton={testData.actionButton}
        className={testData.className}
      />
    );

    expect(screen.getByTestId("title")).toBeInTheDocument();
  });

  it("should mount the Description to the DOM", () => {
    render(
      <LayoutGrid
        icon={testData.icon}
        title={testData.title}
        description={testData.description}
        actionButton={testData.actionButton}
        className={testData.className}
      />
    );

    expect(screen.getByTestId("description")).toBeInTheDocument();
  });
});
