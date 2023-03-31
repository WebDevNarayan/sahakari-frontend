import React from "react";
import { Outlet } from "react-router-dom";
import { ContactFooter, Footer, Header, Navbar } from "../components/layouts";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <ContactFooter />
      <Footer />
    </>
  );
};

export default AppLayout;
