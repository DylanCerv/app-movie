import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="p-2 md:px-10 lg:px-20">{children}</main>
      <Footer />
    </>
  );
}
