import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Loader from "@/components/Loader";
import {
  Suspense,
  MainWrap,
  Container,
  PageContainer,
  SpinnerWrap,
} from "./MainLayout.styled";
import { useAppDispatch } from "@/hooks";
import { fetchMyCompanies } from "@/redux/companies/operations";

const MainLayout = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const isDesktop = useMediaQuery({ query: "(min-width: 1280px)" });
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMyCompanies());
  }, [dispatch]);

  useEffect(() => {
    if (sidebarVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [sidebarVisible]);

  const onSidebarToggle = () => {
    setSidebarVisible((state) => !state);
  };

  return (
    <MainWrap>
      <Container>
        {(isDesktop || sidebarVisible) && (
          <Sidebar
            onSidebarToggle={onSidebarToggle}
            isMobileOpen={!isDesktop && sidebarVisible}
          />
        )}
        <PageContainer>
          <Header onSidebarToggle={onSidebarToggle} />

          <Suspense
            fallback={
              <SpinnerWrap>
                <Loader size="60px" color={"#3E85F3"} />
              </SpinnerWrap>
            }
          >
            <Outlet />
          </Suspense>
        </PageContainer>
      </Container>
    </MainWrap>
  );
};

export default MainLayout;
