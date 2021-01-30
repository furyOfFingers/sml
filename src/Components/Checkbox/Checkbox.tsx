import React from "react";
import s from "./style.styl";
import c from "classnames";

interface ICheckboxProps {
  /** Флаг компонента Checkbox. */
  checked: boolean;
  /** onClick колбэк компонента Checkbox. */
  onClick: () => void;
}

const Checkbox = ({ checked, onClick }: ICheckboxProps): JSX.Element => {
  const cnCheckbox = c(s["checkbox"], { [s["checkbox-checked"]]: checked });

  const cnCheckboxMarker = c(s["checkbox-marker"], {
    [s["checkbox-marker-checked"]]: checked,
  });

  const cnWithoutNDFL = c(s["without-ndfl"], {
    [s["ndfl-checked"]]: checked,
  });

  const cnWithNDFL = c(s["with-ndfl"], { [s["ndfl-checked"]]: !checked });

  return (
    <div className={s["container-checkbox"]}>
      <span className={cnWithoutNDFL}>Указать с НДФЛ</span>
      <div onClick={onClick} className={cnCheckbox}>
        <div className={cnCheckboxMarker} />
      </div>
      <span className={cnWithNDFL}>Без НДФЛ</span>
    </div>
  );
};

export default React.memo(Checkbox);
