import { lazy } from "react";
import { Outlet } from "react-router-dom";

const Header = lazy(() => import("@/components/Header"));

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
