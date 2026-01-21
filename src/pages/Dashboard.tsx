import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function Dashboard() {
    const [email, setEmail] = useState<string | null>(null);

    /* 🔐 Lock dashboard */
    useEffect(() => {
        supabase.auth.getUser().then(({ data }) => {
            if (!data.user) {
                window.location.href = "/login";
            } else {
                setEmail(data.user.email ?? null);
            }
        });
    }, []);

    /* 🚪 Logout function (THIS WAS MISSING) */
    const logout = async () => {
        await supabase.auth.signOut();
        window.location.href = "/";
    };

    return (
        <div
            style={{
                minHeight: "100vh",
                padding: "120px 24px 40px",
                background: "linear-gradient(180deg, #0b0f14, #0e131a)",
                color: "#ffffff",
            }}
        >
            <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                {/* Header */}
                <h1 style={{ fontSize: 30, marginBottom: 6 }}>
                    Client Dashboard
                </h1>
                <p style={{ opacity: 0.7, marginBottom: 40 }}>
                    Welcome back{email ? `, ${email}` : ""}
                </p>

                {/* Cards */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                        gap: 24,
                    }}
                >
                    {/* Work Progress */}
                    <div style={cardStyle}>
                        <h3 style={cardTitle}>📊 Work Progress</h3>
                        <p style={cardText}>
                            Track how much work is completed on your project.
                        </p>
                        <a href="/dashboard/progress" style={cardButton}>
                            View Progress
                        </a>

                    </div>

                    {/* Complaints */}
                    <div style={cardStyle}>
                        <h3 style={cardTitle}>📝 Complaints</h3>
                        <p style={cardText}>
                            Raise issues or check responses from our team.
                        </p>
                        <a href="/dashboard/complaints" style={cardButton}>
  View Complaints
</a>
                    </div>

                    {/* Profile */}
                    <div style={cardStyle}>
                        <h3 style={cardTitle}>👤 My Profile</h3>
                        <p style={cardText}>
                            View or update your personal details.
                        </p>
                        <a href="/dashboard/profile" style={cardButton}>
  Edit Profile
</a>
                    </div>
                </div>

                {/* Logout */}
                <div style={{ marginTop: 50 }}>
                    <button
                        onClick={logout}
                        style={{
                            padding: "12px 20px",
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
                </div>
            </div>
        </div>
    );
}

/* ---------- Styles ---------- */

const cardStyle: React.CSSProperties = {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 16,
    padding: 24,
    backdropFilter: "blur(10px)",
};

const cardTitle: React.CSSProperties = {
    fontSize: 18,
    marginBottom: 8,
};

const cardText: React.CSSProperties = {
    fontSize: 14,
    opacity: 0.7,
    marginBottom: 16,
};

const cardButton: React.CSSProperties = {
    padding: "10px 14px",
    borderRadius: 8,
    border: "none",
    background: "linear-gradient(135deg, #e07a4e, #ff9a6a)",
    color: "#0b0f14",
    fontWeight: 600,
    cursor: "pointer",
};
