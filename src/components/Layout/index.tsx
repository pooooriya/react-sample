import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = (): JSX.Element => {
  return (
    <>
      <Header />
      <div className="p-5 min-h-[70vh]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
