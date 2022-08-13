import { renderHook, act } from "@testing-library/react-hooks";
import useCalculator from "../hooks/useCalculator";

const mockData = {
  inputValues: [
    { value: 20, checked: true },
    { value: 1, checked: true },
    { value: 0, checked: false },
  ],
};

describe("tests hooks useCalculator", () => {
  beforeEach(() => {
    global.console.error = (...args) => {
      const propTypeFailures = [/Warning: ReactDOM/];
      if (propTypeFailures.some((prop) => prop.test(args[0]))) {
      }
    };
  });

  it("test state result behavior", () => {
    const { result } = renderHook(() => useCalculator());
    act(() => {
      result.current.setResult(10);
    });
    expect(result.current.result).toBe(10);
  });

  it("test state inputValues behavior", () => {
    const { result } = renderHook(() => useCalculator());
    act(() => {
      result.current.setInputValues(mockData.inputValues);
    });
    expect(result.current.inputValues).toHaveLength(3);
    expect(result.current.inputValues).toMatchObject(mockData.inputValues);
  });

  it("test function onCheckResult with add behavior", () => {
    const { result } = renderHook(() => useCalculator());
    act(() => {
      result.current.onCheckResult("add");
    });
    expect(result.current.result).toBe(0);
  });

  it("test function onCheckResult with divide behavior", () => {
    const { result } = renderHook(() => useCalculator());
    act(() => {
      result.current.onCheckResult("divide");
    });
    expect(result.current.result).toBe(0);
  });

  it("test function onCheckResult with multiply behavior", () => {
    const { result } = renderHook(() => useCalculator());
    act(() => {
      result.current.onCheckResult("multiply");
    });
    expect(result.current.result).toBe(0);
  });

  it("test function onCheckResult with substract behavior", () => {
    const { result } = renderHook(() => useCalculator());
    act(() => {
      result.current.onCheckResult("substract");
    });
    expect(result.current.result).toBe(0);
  });

  it("test function onCheckResult with reset behavior", () => {
    const { result } = renderHook(() => useCalculator());
    act(() => {
      result.current.onCheckResult("reset");
    });
    expect(result.current.inputValues).toMatchObject([
      { value: 0, checked: false },
      { value: 0, checked: false },
      { value: 0, checked: false },
    ]);
    expect(result.current.result).toBe(0);
  });
});
