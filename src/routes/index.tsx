import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "@/components/Layout";
import MainLayout from "@/components/MainLayout";
import PrivateRoute from "@/components/Route/PrivateRoute";
import RestrictedRoute from "@/components/Route/RestrictedRoute";
import { useAppSelector } from "@/hooks/useAppSelector";
import { selectIsLoggedIn } from "@/redux/auth/selectors";

const LandingPage = lazy(() => import("@/pages/LandingPage"));
const LoginPage = lazy(() => import("@/pages/LoginPage"));
const RegisterPage = lazy(() => import("@/pages/RegisterPage"));
const AccountPage = lazy(() => import("@/pages/AccountPage"));
const ProjectListPage = lazy(() => import("@/pages/ProjectListPage"));
const ProjectBoardPage = lazy(() => import("@/pages/ProjectBoardPage"));
const ProjectEditPage = lazy(() => import("@/pages/ProjectEditPage"));
const CompanyPage = lazy(() => import("@/pages/CompanyPage"));
const ReviewsPage = lazy(() => import("@/pages/ReviewsPage"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage"));

const Router = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={isLoggedIn ? <MainLayout /> : <LandingPage />}>
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
            path="companies/:id"
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
          <Route
            path="projects/:id/edit"
            element={
              <PrivateRoute redirectTo="/" component={<ProjectEditPage />} />
            }
          />
          <Route
            path="reviews"
            element={
              <PrivateRoute redirectTo="/" component={<ReviewsPage />} />
            }
          />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
