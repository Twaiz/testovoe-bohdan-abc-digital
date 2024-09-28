import { lazy } from "react";
import { Outlet } from "react-router-dom";

const Header = lazy(() => import(""));

const AppLayout = () => {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default AppLayout;
