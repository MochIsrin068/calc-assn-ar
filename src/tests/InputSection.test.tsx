import React from "react";
import { render, screen } from "@testing-library/react";
import InputSection from "../components/InputSection";

const mockParams = {
  inputValue: { value: 10, checked: false },
  onChangeInputChecked: jest.fn(),
  onChangeInputValue: jest.fn(),
  index: 0,
};

describe("tests component InputSection", () => {
  it("Perform snapshots test InputSection", () => {
    const inputDefaultTree = render(<InputSection {...mockParams} />);
    expect(inputDefaultTree).toMatchSnapshot();
  });

  it("test input number placeholder and assertion value & type", () => {
    render(<InputSection {...mockParams} />);
    const item = screen.queryByTestId("number-input");
    expect(item).toBeInTheDocument();
    expect(item).toHaveAttribute("placeholder", "Masukkan angka");
    expect(item).toHaveAttribute("type", "number");
    expect(item).toHaveAttribute("value", "10");
  });

  it("test input checkbox is exist and assertion type", () => {
    render(<InputSection {...mockParams} />);
    const item = screen.queryByTestId("checkbox-input");
    expect(item).toBeInTheDocument();
    expect(item).toHaveAttribute("type", "checkbox");
  });
});
