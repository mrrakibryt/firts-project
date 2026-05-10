import React from "react";

export default function App() {
  const games = [
    {
      title: "Cyber Strike 2077",
      genre: "Action / Cyberpunk",
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Shadow Legends",
      genre: "RPG / Adventure",
      image:
        "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Battle Zone X",
      genre: "FPS / Multiplayer",
      image:
        "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Neon Racers",
      genre: "Racing / Futuristic",
      image:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <div style={styles.page}>
      <style>{`
        *{box-sizing:border-box;scroll-behavior:smooth;}
        body{margin:0;font-family:Arial;background:#050816;}

        /* NAV HOVER FIX */
        .nav-link{
          color:#d1d5db;
          text-decoration:none;
          transition:0.3s;
          position:relative;
        }

        .nav-link:hover{
          color:#00ffd5;
        }

        .nav-link::after{
          content:"";
          position:absolute;
          left:0;
          bottom:-5px;
          width:0%;
          height:2px;
          background:#00ffd5;
          transition:0.3s;
        }

        .nav-link:hover::after{
          width:100%;
        }

        /* BUTTON */
        .btn{
          transition:0.3s;
          cursor:pointer;
        }

        .btn:hover{
          transform:scale(1.08);
          box-shadow:0 0 25px rgba(0,255,213,0.5);
        }

        /* CARD */
        .card{
          transition:0.4s;
        }

        .card:hover{
          transform:translateY(-12px);
          box-shadow:0 0 40px rgba(0,255,213,0.25);
        }

        .card img{
          transition:0.5s;
        }

        .card:hover img{
          transform:scale(1.1);
        }

        /* HERO IMAGE */
        .hero-img{
          transition:0.5s;
        }

        .hero-img:hover{
          transform:scale(1.05) rotate(-2deg);
          box-shadow:0 0 60px rgba(0,255,213,0.3);
        }

        /* MOBILE */
        @media(max-width:900px){
          .hero{
            flex-direction:column;
            text-align:center;
          }

          .nav-links{
            display:none;
          }
        }
      `}</style>

      {/* NAVBAR */}
      <nav style={styles.nav}>
        <h2 style={styles.logo}>GAMEZONE</h2>

        <div className="nav-links" style={styles.navLinks}>
          <a className="nav-link" href="#home">Home</a>
          <a className="nav-link" href="#games">Games</a>
          <a className="nav-link" href="#features">Features</a>
          <a className="nav-link" href="#contact">Contact</a>
        </div>

        <button className="btn" style={styles.button}>
          Play Now
        </button>
      </nav>

      {/* HERO */}
      <section id="home" className="hero" style={styles.hero}>
        <div style={styles.heroText}>
          <h1 style={styles.title}>
            NEXT GEN <span style={styles.glow}>GAMING</span>
          </h1>

          <p style={styles.desc}>
            Ultra realistic gaming experience with next level graphics,
            action-packed missions and smooth gameplay.
          </p>

          <button className="btn" style={styles.button}>
            Explore Games
          </button>
        </div>

        <img
          className="hero-img"
          style={styles.heroImg}
          src="https://images.unsplash.com/photo-1605901309584-818e25960a8f?q=80&w=1200&auto=format&fit=crop"
          alt="gaming"
        />
      </section>

      {/* GAMES */}
      <section id="games" style={styles.section}>
        <h2 style={styles.sectionTitle}>Popular Games</h2>

        <div style={styles.grid}>
          {games.map((g, i) => (
            <div key={i} className="card" style={styles.card}>
              <img src={g.image} style={styles.img} />
              <h3>{g.title}</h3>
              <p style={{ color: "#aaa" }}>{g.genre}</p>
              <button className="btn" style={styles.smallBtn}>
                Play
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" style={styles.features}>
        <h2 style={styles.sectionTitle}>Features</h2>

        <div style={styles.featureGrid}>
          <div style={styles.featureCard}>⚡ Fast Gameplay</div>
          <div style={styles.featureCard}>🎮 High Graphics</div>
          <div style={styles.featureCard}>🌐 Multiplayer</div>
          <div style={styles.featureCard}>🔒 Secure Accounts</div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={styles.contact}>
        <h2 style={styles.sectionTitle}>Contact</h2>

        <input placeholder="Name" style={styles.input} />
        <input placeholder="Email" style={styles.input} />
        <textarea placeholder="Message" style={styles.textarea} />

        <button className="btn" style={styles.button}>
          Send Message
        </button>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <p>© 2026 GAMEZONE</p>
      </footer>
    </div>
  );
}

const styles = {
  page: { background: "#050816", color: "white" },

  nav: {
    position: "fixed",
    width: "100%",
    top: 0,
    display: "flex",
    justifyContent: "space-between",
    padding: 20,
    alignItems: "center",
    background: "rgba(0,0,0,0.6)",
    backdropFilter: "blur(10px)",
    zIndex: 10,
  },

  logo: { color: "#00ffd5", fontSize: 24, fontWeight: "bold" },

  navLinks: { display: "flex", gap: 25 },

  button: {
    background: "linear-gradient(to right,#00ffd5,#7c3aed)",
    border: "none",
    padding: "10px 20px",
    borderRadius: 25,
    color: "white",
  },

  hero: {
    display: "flex",
    justifyContent: "space-between",
    padding: "140px 50px 80px",
    alignItems: "center",
    gap: 40,
  },

  heroText: { maxWidth: 500 },

  title: { fontSize: 55, fontWeight: "bold" },

  glow: { color: "#00ffd5" },

  desc: { color: "#aaa", marginTop: 10, marginBottom: 20 },

  heroImg: {
    width: 420,
    borderRadius: 20,
  },

  section: { padding: 40 },

  sectionTitle: { fontSize: 40, marginBottom: 20 },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
    gap: 20,
  },

  card: {
    background: "#111",
    padding: 15,
    borderRadius: 15,
    overflow: "hidden",
  },

  img: { width: "100%", borderRadius: 10 },

  smallBtn: {
    marginTop: 10,
    padding: "6px 12px",
    borderRadius: 10,
    border: "none",
    background: "#00ffd5",
  },

  features: { padding: 40 },

  featureGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
    gap: 20,
  },

  featureCard: {
    background: "#111",
    padding: 20,
    borderRadius: 15,
    textAlign: "center",
  },

  contact: { padding: 40 },

  input: {
    width: "100%",
    padding: 10,
    marginBottom: 10,
  },

  textarea: {
    width: "100%",
    height: 100,
    marginBottom: 10,
  },

  footer: {
    textAlign: "center",
    padding: 20,
    borderTop: "1px solid #222",
  },
};