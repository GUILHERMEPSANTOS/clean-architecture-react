import React, { useContext } from "react";

import Context from "@/presentation/contexts/form/form-context";
import Spinner from "../spinner/spinner";

import Styles from "./form-styles.scss";

const FormStatus = () => {
  const { isLoading, errorMain } = useContext(Context);

  return (
    <div data-testid="error-wrap" className={Styles.errorWrapper}>
      {isLoading && <Spinner className={Styles.spinner} />}
      {errorMain && <span className={Styles.error}>{errorMain}</span>}
    </div>
  );
};

export default FormStatus;
