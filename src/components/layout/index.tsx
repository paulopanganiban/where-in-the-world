import React from "react";
import Head from "next/head";
import Header from "../header";
interface Props {
  title?: string;
}
const Layout: React.FC<Props> = ({ children, title = "World Ranks" }) => {
  return (
   
      <main>{children}</main>
  );
};

export default Layout;
