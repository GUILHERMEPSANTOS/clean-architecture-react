import React, { useState } from "react";

import {
  Footer,
  FormStatus,
  LoginHeader,
  Input,
} from "@/presentation/components";

import Context, { StateType } from "@/presentation/contexts/form/form-context";

import Styles from "./login-styles.scss";

const Login = () => {
  const [state] = useState<StateType>({
    isLoading: false,
    errorMessage: "",
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
          <button className={Styles.submit} type="submit">
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
