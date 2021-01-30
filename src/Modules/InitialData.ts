import { IInitialRadioButton } from "Types/Types";
import { RadioButtons, InitialRadioButton } from "Constants/const";

export const InitialDataRadioButtons = (): IInitialRadioButton[] => {
  const newRadioButtons = {} as IInitialRadioButton[];

  RadioButtons.forEach((el: string, i: number) => {
    newRadioButtons[i] = { ...InitialRadioButton };
    newRadioButtons[i].text = el;
    newRadioButtons[i].clicked = i === 0 ? true : newRadioButtons[i].clicked;
  });

  return newRadioButtons;
};
