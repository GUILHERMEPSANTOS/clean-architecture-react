import React, { memo } from "react";

import Styles from "./footer-styles.scss";

const Footer = () => {
  return <footer className={Styles.footer}></footer>;
};

export default memo(Footer);
