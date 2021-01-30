import React from "react";
import s from "./style.styl";
import c from "classnames";
import Icon from "Components/Icon/Icon";

interface IRadioButtonProps {
  /** Флаг компонента RadioButton. */
  checked: boolean;
  /** Текст компонента RadioButton. */
  text: string;
  /** onClick колбэк компонента RadioButton. */
  onClick: () => void;
  /** Наименование иконки компонента RadioButton. */
  iconName?: string;
  /** Наименование текста для тултипа компонента RadioButton. */
  tooltipName?: string;
}

const RadioButton = ({
  checked,
  text,
  onClick,
  iconName,
  tooltipName,
}: IRadioButtonProps) => {
  const style = c(s["check-mark"], { [s["checked"]]: checked });

  return (
    <div className={s["container-radio-button"]}>
      <div className={s["wrapper-check-mark"]} onClick={onClick}>
        <div className={style} />
      </div>
      <span>{text}</span>
      {iconName && <Icon tooltipName={tooltipName} name={iconName} />}
    </div>
  );
};

export default React.memo(RadioButton);
