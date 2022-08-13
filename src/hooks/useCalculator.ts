import { useState } from "react";
import { message } from "antd";

import { ACTION_TYPE } from "../static";

type TValueInput = {
  value: number;
  checked: boolean;
};

export default function useCalculator() {
  const initValueInputValues = [
    { value: 0, checked: false },
    { value: 0, checked: false },
    { value: 0, checked: false },
  ];

  const [inputValues, setInputValues] =
    useState<Array<TValueInput>>(initValueInputValues);

  const [result, setResult] = useState(0);

  const onChangeInputValue = (newValue: number, index: number) => {
    const newInputValues = [...inputValues];
    newInputValues[index].value = newValue;
    setInputValues(newInputValues);
  };
  const onChangeInputChecked = (newValue: boolean, index: number) => {
    const newInputValues = [...inputValues];
    newInputValues[index].checked = newValue;
    setInputValues(newInputValues);
  };

  const onCheckResult = (actionType: string) => {
    setResult(0);
    const checkedValues = inputValues.filter(
      (item: TValueInput) => item.checked
    );

    if (checkedValues.length > 1) {
      switch (actionType) {
        case ACTION_TYPE.ADD:
          const sum = checkedValues.reduce(
            (acc: number, item: TValueInput) => acc + item.value,
            0
          );
          setResult(sum);
          break;
        case ACTION_TYPE.SUBSTRACT:
          let substractResult = 0;
          checkedValues.forEach((item: TValueInput, index) => {
            if (index === 0) {
              substractResult = item.value;
            } else {
              substractResult -= item.value;
            }
          });

          setResult(substractResult);
          break;
        case ACTION_TYPE.MULTIPLY:
          const multiply = checkedValues.reduce(
            (acc: number, item: TValueInput) => acc * item.value,
            1
          );
          setResult(multiply);
          break;
        case ACTION_TYPE.DIVIDE:
          let divide = 0;
          checkedValues.forEach((item: TValueInput, index) => {
            if (index === 0) {
              divide = item.value;
            } else {
              divide /= item.value;
            }
          });

          setResult(divide);
          break;
        default:
          setInputValues(initValueInputValues);
          setResult(0);
          message.success("Reset success");
          break;
      }
    } else {
      if (actionType !== ACTION_TYPE.RESET) {
        message.error("Please select more than one value");
      } else {
        setInputValues(initValueInputValues);
        setResult(0);
        message.success("Reset success");
      }
    }
  };

  return {
    result,
    setResult,
    inputValues,
    setInputValues,
    onCheckResult,
    onChangeInputChecked,
    onChangeInputValue,
  };
}
