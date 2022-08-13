import { Checkbox, InputNumber } from "antd";

type TPropsInputSection = {
  inputValue: { value: number; checked: boolean };
  onChangeInputChecked: (newValue: boolean, index: number) => void;
  onChangeInputValue: (newValue: number, index: number) => void;
  index: number;
};

export default function InputSection({
  inputValue,
  onChangeInputChecked,
  onChangeInputValue,
  index,
}: TPropsInputSection) {
  return (
    <>
      <div className="flex justify-between bg-gray-400 p-3 mb-3 rounded-sm">
        <InputNumber
          value={inputValue.value}
          className="w-full mr-4 rounded-sm"
          type={"number"}
          placeholder="Masukkan angka"
          onChange={(value) => onChangeInputValue(value, index)}
          data-testid="number-input"
        />
        <Checkbox
          className="h-full"
          checked={inputValue.checked}
          onChange={(e) => onChangeInputChecked(e.target.checked, index)}
          data-testid="checkbox-input"
        />
      </div>
    </>
  );
}
