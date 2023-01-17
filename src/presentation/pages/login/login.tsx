import React from "react";

import Footer from "@/presentation/components/footer/footer";
import Header from "@/presentation/components/login-header/login-header";
import Input from "@/presentation/components/input/input";
import Spinner from "@/presentation/components/spinner/spinner";

import Styles from "./login-styles.scss";

const Login = () => {
  return (
    <div className={Styles.login}>
      <Header />
      <form className={Styles.form}>
        <h2>Login</h2>
        <Input type="email" name="email" placeholder="Digite seu e-mail" />
        <Input type="password" name="password" placeholder="Digite sua senha" />
        <button className={Styles.submit} type="submit">
          Entrar
        </button>
        <span className={Styles.link}>criar conta</span>
        <div className={Styles.errorWrapper}>
          <Spinner className={Styles.spinner} />
          <span className={Styles.error}>Erro</span>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default Login;
