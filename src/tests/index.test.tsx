import React from "react";
import { render, screen } from "@testing-library/react";
import Calculator from "../pages/calculator";

const mockParams = {
  inputValues: [
    { value: 0, checked: false },
    { value: 0, checked: false },
    { value: 0, checked: false },
  ],
  onCheckResult: jest.fn(),
  result: 0,
  onChangeInputChecked: jest.fn(),
  onChangeInputValue: jest.fn(),
};

describe("tests entry pages calculator", () => {
  it("Perform snapshots test Calculator", () => {
    const inputDefaultTree = render(<Calculator {...mockParams} />);
    expect(inputDefaultTree).toMatchSnapshot();
  });

  it("test title showed", () => {
    render(<Calculator {...mockParams} />);
    const title = screen.getByText(/Calculator App/i);
    expect(title).toBeInTheDocument();
  });

  it("test label result exist", () => {
    render(<Calculator {...mockParams} />);
    const title = screen.getByText(/Hasil :/i);
    expect(title).toBeInTheDocument();
  });

  it("test default result", () => {
    render(<Calculator {...mockParams} />);
    const title = screen.getByText(/0/i);
    expect(title).toBeInTheDocument();
  });

  it("test result clearly", () => {
    render(<Calculator {...mockParams} result={122} />);
    const title = screen.getByText(/122/i);
    expect(title).toBeInTheDocument();
  });
});
