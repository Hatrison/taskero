import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { LoadContainer } from "@/components/Loader/Loader.styled";
import Loader from "@/components/Loader";

export const Layout = () => {
  return (
    <Suspense
      fallback={
        <LoadContainer>
          <Loader />
        </LoadContainer>
      }
    >
      <Outlet />
    </Suspense>
  );
};

export default Layout;
