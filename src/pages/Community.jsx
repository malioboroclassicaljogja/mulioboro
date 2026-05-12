import { Link } from "react-router-dom";

export default function Community() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0b0b0b",
        color: "white",
        fontFamily: "sans-serif",
      }}
    >
      {/* HEADER */}
      <div
        style={{
          padding: "24px 32px",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "sticky",
          top: 0,
          backdropFilter: "blur(10px)",
          background: "rgba(0,0,0,0.7)",
          zIndex: 10,
        }}
      >
        <h1
          style={{
            fontSize: "22px",
            letterSpacing: "1px",
          }}
        >
          MCJ Community
        </h1>

        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
            opacity: 0.7,
          }}
        >
          Back
        </Link>
      </div>

      {/* HERO */}
      <div
        style={{
          padding: "80px 24px 40px",
          textAlign: "center",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(34px,5vw,64px)",
            marginBottom: "20px",
            lineHeight: 1.1,
          }}
        >
          Ruang Bersama Untuk Berkarya
        </h2>

        <p
          style={{
            color: "rgba(255,255,255,0.7)",
            lineHeight: 1.8,
            fontSize: "18px",
          }}
        >
          Malioboro Classical Jogja adalah ruang kreatif yang mempertemukan
          seni, budaya, musik, visual, komunitas sosial, dan kolaborasi
          lintas generasi di jantung Yogyakarta.
        </p>
      </div>

      {/* GRID SECTION */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
          gap: "24px",
          padding: "40px",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <Card
          title="🎨 Ruang Karya"
          desc="Ilustrasi, poster, fotografi, dan karya visual komunitas."
        />

        <Card
          title="🎵 Ruang Suara"
          desc="Musik, aransemen, kolaborasi audio, dan pertunjukan."
        />

        <Card
          title="🛍 Dodolan Mben Legi"
          desc="Ruang jual beli, karya, produk kreatif, dan hasil UMKM komunitas."
        />

        <Card
          title="🤝 Bhakti Sosial"
          desc="Aksi sosial, penggalangan dana, dan kegiatan kemanusiaan."
        />

        <Card
          title="🖌 Workshop"
          desc="Workshop menggambar, seni, dan kelas kreatif komunitas."
        />
      </div>
    </div>
  );
}

/* CARD */
function Card({ title, desc }) {
  return (
    <div
      style={{
        padding: "28px",
        borderRadius: "24px",
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        transition: "0.3s",
      }}
    >
      <h3
        style={{
          marginBottom: "14px",
          fontSize: "22px",
        }}
      >
        {title}
      </h3>

      <p
        style={{
          color: "rgba(255,255,255,0.7)",
          lineHeight: 1.7,
        }}
      >
        {desc}
      </p>
    </div>
  );
}