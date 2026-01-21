import { motion } from "framer-motion";
import DashboardLayout from "../components/DashboardLayout";

export default function Complaints() {
  return (
    <DashboardLayout title="📝 Complaints">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{
          background: "rgba(255,255,255,0.04)",
          borderRadius: 16,
          padding: 24,
        }}
      >
        <textarea
          placeholder="Describe your issue..."
          style={{
            width: "100%",
            height: 140,
            padding: 12,
            borderRadius: 10,
          }}
        />

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            marginTop: 14,
            padding: "10px 18px",
            borderRadius: 10,
            background: "#e07a4e",
            border: "none",
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          Submit Complaint
        </motion.button>
      </motion.div>
    </DashboardLayout>
  );
}
