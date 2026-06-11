import React from "react";
import Header from "./Header";
import Footer from "./Footer";

interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
  return (
    <>
      <Header />
      <main id="container">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
