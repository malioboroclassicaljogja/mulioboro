import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="relative min-h-screen flex items-center justify-center text-white bg-black overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[url('/malioboro-night.jpg')] bg-cover bg-center opacity-40"></div>
      <div className="absolute inset-0 bg-black/70"></div>

      {/* CONTENT */}
      <div className="relative text-center px-6">

        {/* LOGO */}
        <motion.img
          src="/logo.png"
          className="w-40 mx-auto mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        />

        {/* TEXT */}
        <p className="text-gray-300 max-w-md mx-auto mb-8">
          Komunitas sosial, seni, dan budaya di Jalan Malioboro, Yogyakarta sejak 1992.
        </p>

        {/* BUTTON */}
        <Link
          to="/community"
          className="px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition"
        >
          Explore Community
        </Link>

        {/* SOCIAL */}
        <div className="flex justify-center gap-6 mt-6 text-gray-400 text-sm">
          <a href="https://instagram.com/malioboroclassicaljogja">Instagram</a>
          <a href="https://facebook.com/malioboroclassicaljogja">Facebook</a>
        </div>

      </div>
    </div>
  );
}