import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import ScrollToTop from "@/components/ui/ScrollToTop";
import { supabase } from "@/lib/supabase";

import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Work from "./pages/Work";
import Process from "./pages/Process";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Progress from "./pages/Progress";
import Complaints from "./pages/Complaints";
import Profile from "./pages/Profile";

const queryClient = new QueryClient();

/* ---------------- Page Animation Wrapper ---------------- */

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);

/* ---------------- Animated Routes ---------------- */

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Login */}
        <Route
          path="/login"
          element={
            <PageWrapper>
              <Login />
            </PageWrapper>
          }
        />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            <PageWrapper>
              <Dashboard />
            </PageWrapper>
          }
        />

        {/* Dashboard Sub Pages */}
        <Route path="/dashboard/progress" element={<Progress />} />
        <Route path="/dashboard/complaints" element={<Complaints />} />
        <Route path="/dashboard/profile" element={<Profile />} />

        {/* Public Pages */}
        <Route path="/" element={<PageWrapper><Index /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
        <Route path="/work" element={<PageWrapper><Work /></PageWrapper>} />
        <Route path="/process" element={<PageWrapper><Process /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />

        {/* 404 */}
        <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

/* ---------------- App Root ---------------- */

const App = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // ✅ VERY IMPORTANT: Handle OAuth redirect
    supabase.auth.getSessionFromUrl({ storeSession: true }).then(() => {
      // Clean URL after OAuth (#access_token)
      if (window.location.hash.includes("access_token")) {
        window.history.replaceState(
          {},
          document.title,
          window.location.pathname
        );
      }
    });

    // Get current user
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
      setLoading(false);
    });

    // Listen for auth changes
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  if (loading) return null;

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <BrowserRouter>
          <ScrollToTop />
          <AnimatedRoutes />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
