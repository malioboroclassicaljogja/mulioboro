import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Community() {
  return (
    <div className="bg-neutral-950 text-white">

      {/* HEADER */}
      <div className="flex justify-between items-center px-6 py-6 border-b border-gray-800">
        <h1 className="text-lg font-bold">MCJ Community Hub</h1>
        <Link to="/" className="text-gray-400 hover:text-white">
          Exit
        </Link>
      </div>

      <Section title="🎭 Community Feed">
        <Card text="Latest creations from members" />
        <Card text="Collaboration posts & ideas" />
      </Section>

      <Section title="🎨 Ruang Karya">
        <Card text="Illustration & Poster" />
        <Card text="Photography Showcase" />
      </Section>

      <Section title="🎵 Ruang Suara">
        <Card text="Music & Sound Projects" />
        <Card text="Audio Collaboration" />
      </Section>

      <Section title="📖 KISMIS">
        <Card text="Urban Legend Jogja" />
        <Card text="Mystery Stories" />
      </Section>

      <Section title="📅 Event">
        <Card text="Workshop & Gathering" />
        <Card text="Social Activities" />
      </Section>

    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="px-6 py-10 border-b border-gray-900">
      <motion.h2
        className="text-xl mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        {title}
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-4">
        {children}
      </div>
    </div>
  );
}

function Card({ text }) {
  return (
    <motion.div
      className="p-5 border border-gray-800 rounded-xl hover:border-white transition"
      whileHover={{ scale: 1.03 }}
    >
      {text}
    </motion.div>
  );
}