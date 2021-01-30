import React from "react";
import s from "./style.styl";

interface IInputProps {
  /** Текст компонента Input. */
  value: string;
  /** placeholder компонента Input. */
  placeholder?: string;
  /** onChange колбэк компонента Input. */
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** onChange колбэк компонента Input. */
  text?: string;
}

const Input = ({
  value,
  onChange,
  placeholder,
  text,
}: IInputProps): JSX.Element => {
  return (
    <div className={s["container-input"]}>
      <input value={value} onChange={onChange} placeholder={placeholder} />
      <span>₽ {text}</span>
    </div>
  );
};

export default React.memo(Input);
