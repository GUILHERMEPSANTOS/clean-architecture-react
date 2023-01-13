import React, { ReactElement } from "react";
import Styles from "./spinner-styles.scss";

type SpinnerProps = React.HTMLAttributes<HTMLElement>;

const Spinner = (props: SpinnerProps) => {
  return (
    <div {...props} className={[Styles.spinner, props.className].join(' ')}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Spinner;
