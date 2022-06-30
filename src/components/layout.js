import * as React from "react";
import Nav from "./nav";
import Slogan from "./slogan";
import Footer from "./footer";
import { container } from "./layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={container}>
      <Nav />
      <Slogan />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
