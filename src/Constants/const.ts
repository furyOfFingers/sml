import { IInitialRadioButton } from "Types/Types";

export const RadioButtons = [
  "Оклад за месяц",
  "МРОТ",
  "Оплата за день",
  "Оплата за час",
];

export const InitialRadioButton: IInitialRadioButton = {
  text: "",
  clicked: false,
};

export const TooltipNameMROT =
  "МРОТ - минимальный размер оплаты труда. Разный для разных регионов.";
