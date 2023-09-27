import React from "react";
import { render, screen } from "../../test-utils";
import "@testing-library/jest-dom";
import Card from "./";

describe("Components > Card", () => {
  test("should display default properties", async () => {
    const onFavorite = jest.fn();
    // ARRANGE
    render(
      <Card
        images={
          "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/1-a-bomb.jpg"
        }
        name={"A-Bomb"}
        isFavorite
        onFavorite={onFavorite}
      />
    );

    // ASSERT
    expect(screen.getByRole("heading")).toHaveTextContent("A-Bomb");
  });
});
