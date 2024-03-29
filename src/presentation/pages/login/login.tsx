import React, { useState } from "react";

import {
  Footer,
  FormStatus,
  LoginHeader,
  Input,
} from "@/presentation/components";

import Context, { StateType } from "@/presentation/contexts/form/form-context";

import Styles from "./login-styles.scss";

type LoginFormType = {
  email: string;
  password: string;
};

const Login = () => {
  const [state] = useState<StateType<LoginFormType>>({
    isLoading: false,
    values: {
      email: "",
      password: "",
    },
    errors: {
      password: "Campo obrigatório",
      email: "Campo obrigatório",
    },
    errorMain: "",
  });

  return (
    <div className={Styles.login}>
      <LoginHeader />
      <Context.Provider value={state}>
        <form className={Styles.form}>
          <h2>Login</h2>
          <Input type="email" name="email" placeholder="Digite seu e-mail" />
          <Input
            type="password"
            name="password"
            placeholder="Digite sua senha"
          />
          <button
            data-testid="submit"
            disabled
            className={Styles.submit}
            type="submit"
          >
            Entrar
          </button>
          <span className={Styles.link}>criar conta</span>
          <FormStatus />
        </form>
      </Context.Provider>
      <Footer />
    </div>
  );
};

export default Login;
