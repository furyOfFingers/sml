import React, { useState } from "react";
import c from "classnames";
import s from "./style.styl";
import { TooltipNameMROT } from "Constants/const";

import * as icons from "./Icons";

interface IIconProps {
  /** name иконки компонента Icon. */
  name: string;
  /** Наименование текста для тултипа компонента Icon. */
  tooltipName?: string;
}

const Icon = ({ name, tooltipName }: IIconProps): JSX.Element => {
  const [showTooltip, setShowTooltip] = useState(false);
  const cnIcon = c(s["icon"], s[`name__${name}`]);
  const cnTooltip = c(s["tooltip"], { [s["tooltip-show"]]: showTooltip });

  const renderIcon = () => {
    switch (name) {
      case "info":
        return (
          <img
            className={cnIcon}
            alt={name}
            src={showTooltip ? icons["cross"] : icons["info"]}
          />
        );
      default:
        return <></>;
    }
  };

  const onClickTooltip = () => {
    setShowTooltip(!showTooltip);
  };

  const reternTooltipText = () => {
    switch (tooltipName) {
      case "МРОТ":
        return TooltipNameMROT;
      default:
        return <></>;
    }
  };

  return (
    <div onClick={onClickTooltip} className={s["container-icon"]}>
      {renderIcon()}
      {tooltipName && <div className={cnTooltip}>{reternTooltipText()}</div>}
    </div>
  );
};

export default React.memo(Icon);
