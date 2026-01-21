import { motion } from "framer-motion";
import DashboardLayout from "../components/DashboardLayout";

export default function Progress() {
  return (
    <DashboardLayout title="📊 Work Progress">
      <motion.div
        whileHover={{ scale: 1.02 }}
        style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 16,
          padding: 24,
        }}
      >
        <p style={{ opacity: 0.7 }}>
          Current project status
        </p>

        <div style={{ marginTop: 20 }}>
          <div
            style={{
              height: 12,
              background: "#1c1f26",
              borderRadius: 6,
              overflow: "hidden",
            }}
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "65%" }}
              transition={{ duration: 0.8 }}
              style={{
                height: "100%",
                background: "linear-gradient(135deg, #e07a4e, #ff9a6a)",
              }}
            />
          </div>
          <p style={{ marginTop: 10 }}>65% completed</p>
        </div>
      </motion.div>
    </DashboardLayout>
  );
}
