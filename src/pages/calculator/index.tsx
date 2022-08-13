import React from "react";
import { Card } from "antd";

import ActionSection from "../../components/ActionSection";
import InputSection from "../../components/InputSection";

type TPropsCalculator = {
  inputValues: Array<{ value: number; checked: boolean }>;
  onCheckResult: (actionType: string) => void;
  result: number;
  onChangeInputChecked: (newValue: boolean, index: number) => void;
  onChangeInputValue: (newValue: number, index: number) => void;
};

export default function Calculator({
  inputValues,
  onCheckResult,
  result,
  onChangeInputChecked,
  onChangeInputValue,
}: TPropsCalculator) {
  return (
    <div className="bg-blue-200 flex flex-col items-center justify-center h-screen px-4 md:px-0 lg:px-0">
      <div className="w-full lg:w-1/2 rounded-t-md shadow mb-4 bg-white p-4">
        <h1 className="text-center font-bold text-2xl block">Calculator App</h1>
      </div>
      <Card className="w-full lg:w-1/2 rounded-b-md shadow">
        {inputValues.map((inputValue, index) => (
          <div key={index}>
            <InputSection
              inputValue={inputValue}
              onChangeInputChecked={onChangeInputChecked}
              onChangeInputValue={onChangeInputValue}
              index={index}
            />
          </div>
        ))}
        <ActionSection onCheckResult={onCheckResult} />
        <div className="flex items-center justify-between rounded-md">
          <span className="font-bold text-xl">Hasil : </span>
          <span className="font-bold text-xl text-green-600">{result}</span>
        </div>
      </Card>
    </div>
  );
}
