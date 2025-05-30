import Header from "@/components/Header";
import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="">
      <Header />

      <div className="">{children}</div>
    </main>
  );
};

export default Layout;
