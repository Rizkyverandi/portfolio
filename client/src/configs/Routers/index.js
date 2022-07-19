import { lazy, Suspense } from "react";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import { FooterSection, Navbar } from "../../components";
import { ParticlesLayout, NotFoundSection } from "../../utils";
import { Admin } from "../../pages";
import { AuthProvider } from "../../utils/Auth/AuthProvider";
import Protected from "./protected";
const Stack = lazy(() => import("../../pages/StackPage"));
const Works = lazy(() => import("../../pages/WorkPage"));
const Home = lazy(() => import("../../pages/HomePage"));
const Login = lazy(() => import("../../pages/LoginPage"));

const Routers = () => {
  let location = useLocation();

  return (
    <>
      <AuthProvider>
        <Navbar />
        <ParticlesLayout />
        <AnimatePresence exitBeforeEnter initial={true}>
          <Routes key={location.pathname} location={location}>
            {/* public routes */}
            <Route
              path="/"
              exact
              element={
                <Suspense>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="stack"
              exact
              element={
                <Suspense>
                  <Stack />
                </Suspense>
              }
            />
            <Route
              path="works"
              exact
              element={
                <Suspense>
                  <Works />
                </Suspense>
              }
            />
            <Route
              path="admin"
              element={
                <Suspense>
                  <Login />
                </Suspense>
              }
            />

            {/* private routes */}
            <Route
              path="/work/addwork"
              element={
                <Suspense>
                  <Protected allowedRoles={[4310]}>
                    <Admin />
                  </Protected>
                </Suspense>
              }
            />

            {/* catch missing routes */}
            <Route
              path="*"
              element={
                <Suspense>
                  <NotFoundSection />
                </Suspense>
              }
            />
          </Routes>
        </AnimatePresence>
        <FooterSection />{" "}
      </AuthProvider>
    </>
  );
};

export default Routers;
