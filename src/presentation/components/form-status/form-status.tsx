import React, { useContext } from "react";

import Context from "@/presentation/contexts/form/form-context";
import Spinner from "../spinner/spinner";

import Styles from "./form-styles.scss";

const FormStatus = () => {
  const { isLoading, errorMessage } = useContext(Context);

  return (
    <div data-testid="error-wrap" className={Styles.errorWrapper}>
      {isLoading && <Spinner className={Styles.spinner} />}
      {errorMessage && <span className={Styles.error}>Erro</span>}
    </div>
  );
};

export default FormStatus;
