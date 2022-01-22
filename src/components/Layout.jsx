import axios from "axios";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const menu = await axios.get("/api/menu");
}
