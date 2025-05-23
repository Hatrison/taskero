import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "@/components/Layout";
import MainLayout from "@/components/MainLayout";
import PrivateRoute from "@/components/Route/PrivateRoute";
import RestrictedRoute from "@/components/Route/RestrictedRoute";
import { useAppSelector } from "@/hooks";
import { selectIsLoggedIn } from "@/redux/auth/selectors";

const LandingPage = lazy(() => import("@/pages/LandingPage"));
const LoginPage = lazy(() => import("@/pages/LoginPage"));
const RegisterPage = lazy(() => import("@/pages/RegisterPage"));
const AccountPage = lazy(() => import("@/pages/AccountPage"));
const ProjectListPage = lazy(() => import("@/pages/ProjectListPage"));
const ProjectBoardPage = lazy(() => import("@/pages/ProjectBoardPage"));
const CompanyPage = lazy(() => import("@/pages/CompanyPage"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage"));

const Router = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={isLoggedIn ? <MainLayout /> : <LandingPage />}>
            <Route
              index
              element={
                <PrivateRoute redirectTo="/" component={<ProjectListPage />} />
              }
            />
            <Route
              path="account"
              element={
                <PrivateRoute redirectTo="/" component={<AccountPage />} />
              }
            />
            <Route
              path="companies"
              element={
                <PrivateRoute redirectTo="/" component={<CompanyPage />} />
              }
            />
            <Route
              path="projects/:id"
              element={
                <PrivateRoute redirectTo="/" component={<ProjectBoardPage />} />
              }
            />
          </Route>

          <Route
            path="login"
            element={
              <RestrictedRoute redirectTo="/" component={<LoginPage />} />
            }
          />
          <Route
            path="register"
            element={
              <RestrictedRoute redirectTo="/" component={<RegisterPage />} />
            }
          />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
