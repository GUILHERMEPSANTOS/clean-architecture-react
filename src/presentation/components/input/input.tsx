import React, { useContext } from "react";

import Context from "@/presentation/contexts/form/form-context";

import Styles from "./input-styles.scss";

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const Input = (props: InputProps) => {
  const { errors } = useContext(Context);

  const enableInput = (event: React.FocusEvent<HTMLInputElement, Element>) => {
    event.target.readOnly = false;
  };

  return (
    <div className={Styles.inputWrap}>
      <input {...props} readOnly onFocus={enableInput} />
      <span
        data-testid={`${props.name}-status`}
        title={errors[props.name ?? ""]}
        className={Styles.status}
      >
        🔴
      </span>
    </div>
  );
};

export default Input;
