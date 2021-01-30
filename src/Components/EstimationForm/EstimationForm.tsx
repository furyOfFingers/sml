import React from "react";
import s from "./style.styl";

interface IEstimationFormProps {
  /** Данные по оплате сотруднику. */
  paymentData: Array<string>;
}

const EstimationForm = ({ paymentData }: IEstimationFormProps): JSX.Element => {
  return (
    <div className={s["container-estimation-form"]}>
      <p>{paymentData?.[0]} ₽ сотрудник будет получать на руки</p>
      <p>{paymentData?.[1]} ₽ НДФЛ, 13% от оклада</p>
      <p>{paymentData?.[2]} ₽ за сотруднкиа в месяц</p>
    </div>
  );
};

export default React.memo(EstimationForm);
