import Calculator from "./pages/calculator";
import useCalculator from "./hooks/useCalculator";
import "./styles/global.scss";

export default function App() {
  const {
    inputValues,
    onCheckResult,
    result,
    onChangeInputChecked,
    onChangeInputValue,
  } = useCalculator();

  return (
    <main>
      <Calculator
        inputValues={inputValues}
        onCheckResult={onCheckResult}
        result={result}
        onChangeInputChecked={onChangeInputChecked}
        onChangeInputValue={onChangeInputValue}
      />
    </main>
  );
}
