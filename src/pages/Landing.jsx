import { Link } from "react-router-dom";
import { useState } from "react";

export default function Landing() {
  const [showEvents, setShowEvents] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        color: "white",
        fontFamily: "sans-serif",
      }}
    >
      {/* BACKGROUND */}
      <img
        src="/mcjmulioboro.jpg"
        alt="bg"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          top: 0,
          left: 0,
        }}
      />

      {/* DARK OVERLAY */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(0,0,0,0.82))",
        }}
      />

      {/* CONTENT */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "24px",
        }}
      >
        {/* LOGO */}
        <img
          src="/logo.png"
          alt="MCJ Logo"
          style={{
            width: "880px",
            maxWidth: "98%",
            marginBottom: "28px",
            filter: `
              drop-shadow(0 0 10px rgba(255,255,255,0.5))
              drop-shadow(0 0 22px rgba(255,255,255,0.28))
            `,
          }}
        />

        {/* DESCRIPTION */}
        <p
          style={{
            maxWidth: "760px",
            color: "rgba(255,255,255,0.82)",
            fontSize: "clamp(15px, 1.5vw, 19px)",
            lineHeight: 1.8,
            marginBottom: "38px",
          }}
        >
          Komunitas sosial, seni, dan budaya yang tumbuh dari denyut
          Malioboro. Ruang bersama untuk berkarya, berbagi, berkolaborasi,
          dan menjaga semangat kreativitas Yogyakarta sejak 1992.
        </p>

        {/* BUTTONS */}
        <div
          style={{
            display: "flex",
            gap: "18px",
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <Link
            to="/community"
            style={{
              padding: "15px 34px",
              background: "white",
              color: "black",
              borderRadius: "999px",
              textDecoration: "none",
              fontWeight: "700",
              fontSize: "15px",
              boxShadow: "0 0 25px rgba(255,255,255,0.2)",
            }}
          >
            Explore Community
          </Link>

          <button
            onClick={() => setShowEvents(!showEvents)}
            style={{
              padding: "15px 34px",
              border: "1px solid rgba(255,255,255,0.4)",
              color: "white",
              borderRadius: "999px",
              background: "rgba(255,255,255,0.06)",
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "15px",
              backdropFilter: "blur(6px)",
              cursor: "pointer",
            }}
          >
            Upcoming Events
          </button>
        </div>

        {/* EVENTS LIST */}
        {showEvents && (
          <div
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.12)",
              padding: "18px 26px",
              borderRadius: "20px",
              backdropFilter: "blur(10px)",
              marginBottom: "24px",
              minWidth: "320px",
            }}
          >
            <div
              style={{
                fontSize: "17px",
                fontWeight: "600",
              }}
            >
              "0," Ruang Awal, Ruang Bersama
            </div>

            <div
              style={{
                marginTop: "8px",
                color: "rgba(255,255,255,0.7)",
                fontSize: "14px",
              }}
            >
              Coming Soon
            </div>
          </div>
        )}

        {/* SOCIAL */}
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            gap: "28px",
            fontSize: "15px",
            color: "rgba(255,255,255,0.75)",
          }}
        >
          <a
            href="https://instagram.com/malioboroclassicaljogja"
            target="_blank"
            style={{
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Instagram
          </a>

          <a
            href="https://facebook.com/malioboroclassicaljogja"
            target="_blank"
            style={{
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Facebook
          </a>

          <a
            href="https://www.youtube.com/@malioboroclassicaljogja"
            target="_blank"
            style={{
              color: "inherit",
              textDecoration: "none",
            }}
          >
            YouTube
          </a>
        </div>
      </div>
    </div>
  );
}