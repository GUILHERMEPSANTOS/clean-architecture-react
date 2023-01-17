import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "../presentation/components";

const container = document.getElementById("main");

ReactDOM.createRoot(container as HTMLElement).render(<Router />);
