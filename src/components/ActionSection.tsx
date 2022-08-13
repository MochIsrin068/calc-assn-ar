import React from "react";
import { Button } from "antd";

type TPropsActionSection = {
  onCheckResult: (actionType: string) => void;
};

export default function ActionSection({ onCheckResult }: TPropsActionSection) {
  return (
    <div className="my-4 flex items-center md:justify-center justify-between lg:justify-center pb-4 border-b-2">
      <Button
        type="primary"
        className="mr-3 bg-blue-400 md:px-6 lg:px-6 px-5 py-4 text-xl flex items-center justify-center"
        size="large"
        onClick={() => onCheckResult("add")}
        title="Tambah"
        data-testid="add-button"
      >
        +
      </Button>
      <Button
        type="primary"
        className="mr-3 bg-blue-400 md:px-6 lg:px-6 px-5 py-4 text-xl flex items-center justify-center"
        size="large"
        onClick={() => onCheckResult("substract")}
        title="Kurang"
        data-testid="substract-button"
      >
        -
      </Button>
      <Button
        type="primary"
        className="mr-3 bg-blue-400 md:px-6 lg:px-6 px-5 py-4 text-xl flex items-center justify-center"
        size="large"
        onClick={() => onCheckResult("multiply")}
        title="Kali"
        data-testid="multiply-button"
      >
        X
      </Button>
      <Button
        type="primary"
        className="mr-3 bg-blue-400 md:px-6 lg:px-6 px-5 py-4 text-xl flex items-center justify-center"
        size="large"
        onClick={() => onCheckResult("divide")}
        title="Bagi"
        data-testid="divide-button"
      >
        /
      </Button>
      <Button
        type="primary"
        className="bg-blue-400 md:px-6 lg:px-6 px-5 py-4 text-xl flex items-center justify-center"
        size="large"
        onClick={() => onCheckResult("reset")}
        title="Reset"
        data-testid="reset-button"
      >
        C
      </Button>
    </div>
  );
}
