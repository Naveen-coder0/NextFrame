import { motion } from "framer-motion";
import DashboardLayout from "../components/DashboardLayout";

export default function Profile() {
  return (
    <DashboardLayout title="👤 My Profile">
      <motion.div
        whileHover={{ scale: 1.01 }}
        style={{
          background: "rgba(255,255,255,0.04)",
          borderRadius: 16,
          padding: 24,
        }}
      >
        <input
          placeholder="Full Name"
          style={inputStyle}
        />
        <input
          placeholder="Phone Number"
          style={inputStyle}
        />

        <motion.button
          whileHover={{ scale: 1.05 }}
          style={saveBtn}
        >
          Save Profile
        </motion.button>
      </motion.div>
    </DashboardLayout>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: 12,
  marginBottom: 12,
  borderRadius: 10,
};

const saveBtn: React.CSSProperties = {
  padding: "10px 18px",
  borderRadius: 10,
  background: "#e07a4e",
  border: "none",
  cursor: "pointer",
  fontWeight: 600,
};
