import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { supabase } from "../lib/supabase";

const links = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Work Progress", path: "/dashboard/progress" },
  { name: "Complaints", path: "/dashboard/complaints" },
  { name: "Profile", path: "/dashboard/profile" },
];

export default function DashboardSidebar() {
  const location = useLocation();

  const logout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/";
  };

  return (
    <motion.aside
      initial={{ x: -60, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      style={{
        width: 260,
        minHeight: "100vh",
        background: "rgba(15,18,25,0.95)",
        borderRight: "1px solid rgba(255,255,255,0.08)",
        padding: "32px 20px",
        position: "fixed",
        left: 0,
        top: 0,
        color: "#fff",
      }}
    >
      {/* Logo */}
      <h2 style={{ fontSize: 22, marginBottom: 40 }}>NextFrame</h2>

      {/* Nav */}
      <nav style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {links.map((link) => {
          const active = location.pathname === link.path;

          return (
            <Link
              key={link.path}
              to={link.path}
              style={{
                padding: "12px 14px",
                borderRadius: 10,
                textDecoration: "none",
                color: active ? "#0b0f14" : "#ffffff",
                background: active
                  ? "linear-gradient(135deg, #e07a4e, #ff9a6a)"
                  : "transparent",
                fontWeight: 500,
                transition: "all 0.2s",
              }}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <button
        onClick={logout}
        style={{
          marginTop: 40,
          padding: "12px",
          width: "100%",
          borderRadius: 10,
          border: "none",
          background: "#e07a4e",
          color: "#0b0f14",
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        Logout
      </button>
    </motion.aside>
  );
}
