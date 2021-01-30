import React, { useState } from "react";
import s from "./style.styl";
import { RadioButtons } from "Constants/const";
import RadioButton from "Components/RadioButton/RadioButton";
import Checkbox from "Components/Checkbox/Checkbox";
import Input from "Components/Input/Input";
import EstimationForm from "Components/EstimationForm/EstimationForm";
import { InitialDataRadioButtons } from "Modules/InitialData";

const CalculationForm = (): JSX.Element => {
  const [amount, setAmount] = useState("");
  const [deductionType, setDeductionType] = useState(InitialDataRadioButtons);
  const [NDFL, setNDFL] = useState(true);

  const onClickRadioButton = (text: string) => {
    const newRadioButtons = { ...deductionType };

    Object.keys(newRadioButtons).forEach((el: any, i: number) => {
      if (text === newRadioButtons[el].text) {
        newRadioButtons[i].clicked = true;
      } else {
        newRadioButtons[i].clicked = false;
      }
    });

    setDeductionType(newRadioButtons);
  };

  const onChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value.replace(/[^0-9.]/g, ""));
  };

  const returnInputText = () => {
    if (deductionType[2].clicked) {
      return "в день";
    } else if (deductionType[3].clicked) {
      return "в час";
    }
  };

  const renderRadioButton = () => {
    const arr: JSX.Element[] = [];

    RadioButtons.forEach((el: string, i: number) => {
      arr.push(
        <RadioButton
          key={i}
          checked={deductionType[i].clicked}
          text={deductionType[i].text}
          onClick={() => onClickRadioButton(el)}
          iconName={el === "МРОТ" ? "info" : ""}
          tooltipName={el === "МРОТ" ? "МРОТ" : ""}
        />
      );
    });

    return arr;
  };

  const calculationOfPayment = () => {
    const arr: Array<string> = [];
    const sum = parseInt(amount);
    const sumWithNDFL = (sum / 100) * 13;

    if (NDFL) {
      arr.push(amount);
      arr.push(sumWithNDFL.toString());
      arr.push((sum + sumWithNDFL).toString());
    } else {
      arr.push((sum - sumWithNDFL).toString());
      arr.push(sumWithNDFL.toString());
      arr.push(amount.toString());
    }

    return arr;
  };

  const renderEstimationForm = () => {
    if (deductionType[0].clicked) {
      if (amount) {
        return <EstimationForm paymentData={calculationOfPayment()} />;
      } else {
        return <p>Введите значение</p>;
      }
    }
  };

  return (
    <div className={s["container-calculation-form"]}>
      <span className={s["sum"]}> сумма </span>
      <div>{renderRadioButton()}</div>
      <Checkbox checked={NDFL} onClick={() => setNDFL(!NDFL)} />
      <Input text={returnInputText()} value={amount} onChange={onChangeValue} />
      {renderEstimationForm()}
    </div>
  );
};

export default React.memo(CalculationForm);
