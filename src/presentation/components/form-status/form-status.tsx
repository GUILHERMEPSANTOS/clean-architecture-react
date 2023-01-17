import React from "react";

import Spinner from "../spinner/spinner";

import Styles from './form-styles.scss';

const FormStatus = () => {
  return (
    <div className={Styles.errorWrapper}>
      <Spinner className={Styles.spinner} />
      <span className={Styles.error}>Erro</span>
    </div>
  );
};

export default FormStatus;
