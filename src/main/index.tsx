import React from "react";
import ReactDOM from "react-dom/client";
import { Login } from "../presentation/pages";

const container = document.getElementById("main");

ReactDOM.createRoot(container as HTMLElement).render(<Login />);
