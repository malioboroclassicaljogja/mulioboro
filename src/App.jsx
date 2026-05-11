import './App.css'

export default function App() {
  return (
    <div className="website">

      {/* HERO */}
      <section
        className="hero"
        style={{
          backgroundImage: "url('/mcj mulioboro.jpg')",
        }}
      >
        <div className="overlay"></div>

        <div className="hero-content">
          <p className="subtitle">
            Community • Social • Art • Culture
          </p>

          <h1>Malioboro Classical Jogja</h1>

          <p className="description">
            Website resmi Malioboro Classical Jogja - Komunitas sosial,
            seni, dan budaya di Jalan Malioboro, Yogyakarta sejak tahun 1992.
          </p>

          <a href="#about">
            <button>Explore Community</button>
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="container">

          <div className="about-grid">

            <div>
              <img
                src="/mcj mulioboro.jpg"
                alt="MCJ"
              />
            </div>

            <div>
              <h2>Tentang Komunitas</h2>

              <p>
                Malioboro Classical Jogja merupakan komunitas sosial,
                seni, dan budaya yang lahir dan tumbuh di kawasan
                Jalan Malioboro sejak tahun 1992.
              </p>

              <p>
                Komunitas ini terbentuk dari para pemuda yang pada awalnya
                sering berkumpul dan beraktivitas kreatif di sekitar
                kawasan Malioboro, khususnya area Malioboro Mall.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section className="events">
        <div className="container">

          <h2>Events & Activities</h2>

          <div className="event-grid">

            <div className="card">
              <h3>Live Music Malioboro</h3>

              <p>
                Pertunjukan musik komunitas dan kolaborasi seniman jalanan.
              </p>
            </div>

            <div className="card">
              <h3>Diskusi Budaya</h3>

              <p>
                Ruang berbagi pemikiran tentang seni dan budaya Yogyakarta.
              </p>
            </div>

            <div className="card">
              <h3>Community Gathering</h3>

              <p>
                Ajang silaturahmi lintas generasi komunitas Malioboro.
              </p>
            </div>

          </div>
        </div>
      </section>

     {/* GALLERY */}
<section className="gallery">
  <div className="container">

    <h2>Gallery Documentation</h2>

    {/* BAKTI SOSIAL */}
    <div className="gallery-category">
      <h3>Bakti Sosial</h3>

      <div className="gallery-grid">
        <img src="/events/bakti-sosial/bakti-1.jpg" alt="Bakti Sosial" />
        <img src="/events/bakti-sosial/bakti-2.jpg" alt="Bakti Sosial" />
        <img src="/events/bakti-sosial/bakti-3.jpg" alt="Bakti Sosial" />
      </div>
    </div>

    {/* WORKSHOP */}
    <div className="gallery-category">
      <h3>Workshop Menggambar</h3>

      <div className="gallery-grid">
        <img src="/events/workshop/workshop-1.jpg" alt="Workshop" />
        <img src="/events/workshop/workshop-2.jpg" alt="Workshop" />
        <img src="/events/workshop/workshop-3.jpg" alt="Workshop" />
      </div>
    </div>

    {/* DONASI */}
    <div className="gallery-category">
      <h3>Penggalangan Dana Bencana</h3>

      <div className="gallery-grid">
        <img src="/events/dana-bencana/dana-1.jpg" alt="Dana Bencana" />
        <img src="/events/dana-bencana/dana-2.jpg" alt="Dana Bencana" />
        <img src="/events/dana-bencana/dana-3.jpg" alt="Dana Bencana" />
      </div>
    </div>

    {/* O, */}
    <div className="gallery-category">
      <h3>Coming Soon — “O”</h3>

      <div className="gallery-grid">
        <img src="/events/ruang-awal/o-1.jpg" alt="O Ruang Awal" />
        <img src="/events/ruang-awal/o-2.jpg" alt="O Ruang Awal" />
        <img src="/events/ruang-awal/o-3.jpg" alt="O Ruang Awal" />
      </div>
    </div>

  </div>
</section>
      {/* FOOTER */}
      <footer>

        <h3>Malioboro Classical Jogja</h3>

        <p>
          Community • Culture • Art Since 1992
        </p>

      </footer>

    </div>
  )
}