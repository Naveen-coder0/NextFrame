import { motion } from "framer-motion";
import DashboardSidebar from "./DashboardSidebar";

export default function DashboardLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex" }}>
      <DashboardSidebar />

      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        style={{
          marginLeft: 260,
          minHeight: "100vh",
          padding: "120px 32px",
          background: "linear-gradient(180deg, #0b0f14, #0e131a)",
          color: "#fff",
          width: "100%",
        }}
      >
        <h1 style={{ fontSize: 28, marginBottom: 30 }}>{title}</h1>
        {children}
      </motion.main>
    </div>
  );
}
