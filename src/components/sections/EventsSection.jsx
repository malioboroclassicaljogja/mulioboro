export default function EventsSection() {
  const events = [
    {
      date: '11 Juli 2026',
      title: 'Event 0',
      description: 'Ruang Awal, Ruang Bersama',
      location: 'Titik Nol Kilometer Yogyakarta',
      category: 'Gathering',
      isComingSoon: true
    },
    {
      date: 'Agustus 2026',
      title: 'Summer Art Festival',
      description: 'Pameran seni dan pertunjukan musik live',
      location: 'Malioboro Mall',
      category: 'Festival',
      isComingSoon: false
    },
    {
      date: 'September 2026',
      title: 'Community Discussion',
      description: 'Diskusi budaya dan berbagi pengalaman',
      location: 'Rumah Komunitas MCJ',
      category: 'Workshop',
      isComingSoon: false
    },
    {
      date: 'Oktober 2026',
      title: 'Music & Performance',
      description: 'Pertunjukan musik dan seni performance',
      location: 'Venue Malioboro',
      category: 'Performance',
      isComingSoon: false
    },
    {
      date: 'November 2026',
      title: 'Heritage Documentation',
      description: 'Dokumentasi sejarah dan warisan budaya',
      location: 'Area Malioboro',
      category: 'Documentation',
      isComingSoon: false
    },
    {
      date: 'Desember 2026',
      title: 'Year End Celebration',
      description: 'Perayaan akhir tahun komunitas',
      location: 'Malioboro',
      category: 'Celebration',
      isComingSoon: false
    }
  ];

  return (
    <section className="py-24 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-4">
            Events
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Program & Kegiatan Komunitas
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ikuti serangkaian acara menarik yang kami selenggarakan sepanjang tahun
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="group bg-black border border-zinc-800 rounded-2xl p-6 hover:border-yellow-400 transition duration-300 hover:shadow-lg hover:shadow-yellow-400/20 relative overflow-hidden"
            >
              {/* Coming Soon Badge */}
              {event.isComingSoon && (
                <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Coming Soon
                </div>
              )}

              {/* Category Tag */}
              <div className="inline-block bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 px-3 py-1 rounded-lg text-xs font-semibold uppercase tracking-wider mb-4">
                {event.category}
              </div>

              {/* Date */}
              <p className="text-yellow-400 font-semibold mb-2 text-sm">
                📅 {event.date}
              </p>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-3 group-hover:text-yellow-400 transition">
                {event.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 mb-4 leading-relaxed">
                {event.description}
              </p>

              {/* Location */}
              <p className="text-gray-500 flex items-center gap-2 mb-6">
                <span>📍</span>
                <span className="text-sm">{event.location}</span>
              </p>

              {/* Action Button */}
              <button className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-lg hover:bg-yellow-300 transition transform hover:scale-105 duration-200">
                Jadilah Bagian
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-yellow-400/10 to-transparent border border-yellow-400/30 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">
            Tertarik Bergabung?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Follow Instagram kami untuk update terbaru tentang semua event dan kegiatan komunitas
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://www.instagram.com/malioboroclassical/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition transform hover:scale-105"
            >
              📸 Follow Instagram
            </a>
            <a
              href="https://www.facebook.com/malioboroclassical/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition transform hover:scale-105"
            >
              👍 Like Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
