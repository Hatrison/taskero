// import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
// import { useMediaQuery } from "react-responsive";
// import Header from "@/components/Header";
// import Sidebar from "@/components/SideBar";
import Loader from "@/components/Loader";
import {
  Suspense,
  MainWrap,
  Container,
  PageContainer,
  SpinnerWrap,
} from "./MainLayout.styled";

const MainLayout = () => {
  // const [sidebarVisible, setSidebarVisible] = useState(false);
  // const isDesktop = useMediaQuery({ query: "(min-width: 1440px)" });

  // useEffect(() => {
  //   if (sidebarVisible) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "auto";
  //   }
  // }, [sidebarVisible]);

  // const onSidebarToggle = () => {
  //   setSidebarVisible((state) => !state);
  // };

  return (
    <MainWrap>
      <Container>
        {/* {(isDesktop || sideBarVisible) && (
          <Sidebar onSidebarToggle={onSidebarToggle} />
        )} */}
        <PageContainer>
          {/* <Header onSidebarToggle={onSidebarToggle} /> */}

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
