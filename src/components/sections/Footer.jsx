export default function Footer() {
  return (
    <footer className="py-16 px-6 bg-black border-t border-zinc-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-2">Malioboro Classical Jogja</h3>
            <p className="text-gray-400">
              Komunitas sosial, seni, dan budaya yang tumbuh di Jalan Malioboro sejak tahun 1992.
            </p>
            <p className="text-yellow-400 font-semibold mt-4">
              Community • Culture • Art Since 1992
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Menu</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#about" className="hover:text-yellow-400 transition">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#vision" className="hover:text-yellow-400 transition">
                  Visi & Misi
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-yellow-400 transition">
                  Events
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-yellow-400 transition">
                  Galeri
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-yellow-400 transition">
                  Hubungi Kami
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-bold mb-4">Hubungi Kami</h4>
            <p className="text-gray-400 mb-4">
              📧 Email:{' '}
              <a
                href="mailto:malioboroclassicaljogja@gmail.com"
                className="text-yellow-400 hover:text-yellow-300 font-semibold transition"
              >
                malioboroclassicaljogja@gmail.com
              </a>
            </p>
            <p className="text-gray-400 mb-6">
              📍 Jalan Malioboro, Yogyakarta
            </p>

            {/* Social Media */}
            <div className="flex gap-4 flex-wrap">
              <a
                href="https://www.instagram.com/malioboroclassical/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-pink-500 to-red-500 text-white w-12 h-12 rounded-lg flex items-center justify-center hover:scale-110 transition transform duration-200"
                title="Instagram"
              >
                📸
              </a>
              <a
                href="https://www.facebook.com/malioboroclassical/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white w-12 h-12 rounded-lg flex items-center justify-center hover:scale-110 transition transform duration-200"
                title="Facebook"
              >
                👍
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mb-12 bg-gradient-to-r from-yellow-400/10 to-transparent border border-yellow-400/30 rounded-2xl p-6">
          <h4 className="text-lg font-bold mb-3">Daftar Newsletter</h4>
          <p className="text-gray-400 mb-4">
            Terima update terbaru tentang event dan kegiatan komunitas
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert(
                'Terima kasih telah subscribe! Anda akan menerima update melalui email.'
              );
              e.target.reset();
            }}
            className="flex gap-2"
          >
            <input
              type="email"
              placeholder="Masukkan email Anda"
              required
              className="flex-1 bg-black border border-zinc-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-yellow-400 transition"
            />
            <button
              type="submit"
              className="bg-yellow-400 text-black font-bold px-6 py-2 rounded-lg hover:bg-yellow-300 transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Divider */}
        <div className="border-t border-zinc-800 pt-8">
          {/* Bottom Info */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © 2026 Malioboro Classical Jogja. Semua hak dilindungi.
            </p>
            <p className="text-gray-500 text-sm">
              Dibuat dengan ❤️ untuk komunitas
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
