import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import App from "../components/App";
import userEvent from "@testing-library/user-event";

describe("App Component", () => {
  // Define a variable to store the rendered component accessible to all tests
  let container;

  // beforeEach is a function that runs before each test case ('it()')
  beforeEach(() => {
    // Render the App component and store the container
    container = render(<App />).container;
  });

  it("renders the Home component", () => {
    // Check that the Home component is rendered by looking for the h3 element with the text "Journal Entries"
    expect(container.querySelector("h3")).toHaveTextContent("Journal Entries");
  });

  it("renders the NavBar component", () => {
    // Check that the NavBar component is rendered by looking for the h3 element with the text "Journal Entries"
    expect(container.querySelector("h1")).toHaveTextContent("Journal");
  });

  it("render CategorySelection component when Create Entry navbar menu item is clicked", async () => {
    await userEvent.click(screen.getByText("Create New Entry"));

    expect(container.querySelector("h3")).not.toBeNull();
    expect(container.querySelector("h3")).toHaveTextContent(
      "Please select a category:"
    );
  });
});
