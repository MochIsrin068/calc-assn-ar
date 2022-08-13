import React from "react";
import { render, screen } from "@testing-library/react";
import ActionSection from "../components/ActionSection";

const mockParams = {
  onCheckResult: jest.fn(),
};

describe("tests component ActionSection", () => {
  it("Perform snapshots test ActionSection", () => {
    const inputDefaultTree = render(<ActionSection {...mockParams} />);
    expect(inputDefaultTree).toMatchSnapshot();
  });

  it("test button action add exist and assertion title & value", () => {
    render(<ActionSection {...mockParams} />);
    const item = screen.queryByTestId("add-button");
    expect(item).toBeInTheDocument();
    expect(item?.title).toBe("Tambah");
    expect(item?.innerHTML).toBe("<span>+</span>");
  });

  it("test button action substract exist and assertion title & value", () => {
    render(<ActionSection {...mockParams} />);
    const item = screen.queryByTestId("substract-button");
    expect(item).toBeInTheDocument();
    expect(item?.title).toBe("Kurang");
    expect(item?.innerHTML).toBe("<span>-</span>");
  });

  it("test button action multiply exist and assertion title & value", () => {
    render(<ActionSection {...mockParams} />);
    const item = screen.queryByTestId("multiply-button");
    expect(item).toBeInTheDocument();
    expect(item?.title).toBe("Kali");
    expect(item?.innerHTML).toBe("<span>X</span>");
  });

  it("test button action divide exist and assertion title & value", () => {
    render(<ActionSection {...mockParams} />);
    const item = screen.queryByTestId("divide-button");
    expect(item).toBeInTheDocument();
    expect(item?.title).toBe("Bagi");
    expect(item?.innerHTML).toBe("<span>/</span>");
  });

  it("test button action reset exist and assertion title & value", () => {
    render(<ActionSection {...mockParams} />);
    const item = screen.queryByTestId("reset-button");
    expect(item).toBeInTheDocument();
    expect(item?.title).toBe("Reset");
    expect(item?.innerHTML).toBe("<span>C</span>");
  });
});
