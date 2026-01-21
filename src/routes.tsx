import { lazy, Suspense } from "react";
import { createRoutesFromElements, Route } from "react-router-dom";
import { AppWrapper } from "./App.tsx";
import ProgressLoader from "./Reusables/ProgressLoader.tsx";
import { AuthWrapper } from "./contexts/RequireAuth.tsx";

// Public pages (website)
const Home = lazy(() => import("./pages/Home.tsx"));
const About = lazy(() => import("./pages/About.tsx"));
const Services = lazy(() => import("./pages/Services.tsx"));
const Contact = lazy(() => import("./pages/Contact.tsx"));
const Blog = lazy(() => import("./pages/Blog.tsx"));

// Auth pages
const Login = lazy(() => import("./pages/Login.tsx"));
const Register = lazy(() => import("./pages/Register.tsx"));
const PasswdRst = lazy(() => import("./pages/PasswdRst.tsx"));

// Admin pages
const AdminDashboard = lazy(() => import("./pages/admin/Dashboard.tsx"));
const WebsiteSettings = lazy(() => import("./pages/admin/WebsiteSettings.tsx"));
const ContentManagement = lazy(
  () => import("./pages/admin/ContentManagement.tsx"),
);
const MediaLibrary = lazy(() => import("./pages/admin/MediaLibrary.tsx"));
const AppearanceSettings = lazy(
  () => import("./pages/admin/AppearanceSettings.tsx"),
);
const Vocations = lazy(() => import("./pages/Vocations.tsx"));

export const routes = createRoutesFromElements(
  <Route path="/" element={<AppWrapper />}>
    {/* Public website routes */}
    <Route
      path="/"
      element={
        <Suspense fallback={<ProgressLoader />}>
          <Home />
        </Suspense>
      }
    />
    <Route
      path="/about"
      element={
        <Suspense fallback={<ProgressLoader />}>
          <About />
        </Suspense>
      }
    />
    <Route
      path="/vocations"
      element={
        <Suspense fallback={<ProgressLoader />}>
          <Vocations />
        </Suspense>
      }
    />

    <Route
      path="/services"
      element={
        <Suspense fallback={<ProgressLoader />}>
          <Services />
        </Suspense>
      }
    />
    <Route
      path="/contact"
      element={
        <Suspense fallback={<ProgressLoader />}>
          <Contact />
        </Suspense>
      }
    />
    <Route
      path="/blog"
      element={
        <Suspense fallback={<ProgressLoader />}>
          <Blog />
        </Suspense>
      }
    />

    {/* Auth routes (no auth required) */}
    <Route
      path="/signin"
      element={
        <AuthWrapper requireAuth={false}>
          <Suspense fallback={<ProgressLoader />}>
            <Login />
          </Suspense>
        </AuthWrapper>
      }
    />
    <Route
      path="/signup"
      element={
        <AuthWrapper requireAuth={false}>
          <Suspense fallback={<ProgressLoader />}>
            <Register />
          </Suspense>
        </AuthWrapper>
      }
    />
    <Route
      path="/forgot-password"
      element={
        <AuthWrapper requireAuth={false}>
          <Suspense fallback={<ProgressLoader />}>
            <PasswdRst />
          </Suspense>
        </AuthWrapper>
      }
    />

    {/* Admin routes (require auth) */}
    <Route
      path="/admin/dashboard"
      element={
        <AuthWrapper requireAuth={true}>
          <Suspense fallback={<ProgressLoader />}>
            <AdminDashboard />
          </Suspense>
        </AuthWrapper>
      }
    />
    <Route
      path="/admin/website"
      element={
        <AuthWrapper requireAuth={true}>
          <Suspense fallback={<ProgressLoader />}>
            <WebsiteSettings />
          </Suspense>
        </AuthWrapper>
      }
    />
    <Route
      path="/admin/content"
      element={
        <AuthWrapper requireAuth={true}>
          <Suspense fallback={<ProgressLoader />}>
            <ContentManagement />
          </Suspense>
        </AuthWrapper>
      }
    />
    <Route
      path="/admin/media"
      element={
        <AuthWrapper requireAuth={true}>
          <Suspense fallback={<ProgressLoader />}>
            <MediaLibrary />
          </Suspense>
        </AuthWrapper>
      }
    />
    <Route
      path="/admin/appearance"
      element={
        <AuthWrapper requireAuth={true}>
          <Suspense fallback={<ProgressLoader />}>
            <AppearanceSettings />
          </Suspense>
        </AuthWrapper>
      }
    />
  </Route>,
);
