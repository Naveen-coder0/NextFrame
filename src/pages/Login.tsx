import { supabase } from "../lib/supabase";

export default function Login() {
  const loginWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: window.location.origin + "/dashboard",
      },
    });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, rgba(255,140,90,0.15), transparent 40%), linear-gradient(180deg, #0b0f14, #0e131a)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
      }}
    >
      {/* Login Card */}
      <div
        style={{
          width: 420,
          padding: "40px 36px",
          borderRadius: 16,
          background: "rgba(255,255,255,0.04)",
          backdropFilter: "blur(14px)",
          boxShadow: "0 30px 60px rgba(0,0,0,0.6)",
          border: "1px solid rgba(255,255,255,0.08)",
          textAlign: "center",
        }}
      >
        {/* Brand */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
            marginBottom: 24,
          }}
        >
          <div
            style={{
              width: 42,
              height: 42,
              borderRadius: "50%",
              background: "#e07a4e",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
            }}
          >
            N
          </div>
          <h2 style={{ fontSize: 20, fontWeight: 600 }}>NextFrame</h2>
        </div>

        {/* Heading */}
        <h1 style={{ fontSize: 26, marginBottom: 10 }}>
          Welcome Back
        </h1>

        <p style={{ fontSize: 14, opacity: 0.75, marginBottom: 28 }}>
          Login to track your project progress, requests & updates
        </p>

        {/* Google Button */}
        <button
          onClick={loginWithGoogle}
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: 10,
            border: "none",
            background: "linear-gradient(135deg, #e07a4e, #ff9a6a)",
            color: "#0b0f14",
            fontSize: 15,
            fontWeight: 600,
            cursor: "pointer",
            transition: "all 0.25s ease",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow =
              "0 12px 30px rgba(224,122,78,0.35)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          Continue with Google
        </button>

        {/* Footer */}
        <p
          style={{
            fontSize: 12,
            opacity: 0.6,
            marginTop: 24,
          }}
        >
          Secure login • No passwords • Google protected
        </p>
      </div>
    </div>
  );
}
