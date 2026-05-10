import React from "react";

export default function App() {
  const products = [
    {
      title: "Neon Headphone",
      price: "$199",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Luxury Smartwatch",
      price: "$349",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Gaming Setup",
      price: "$999",
      image:
        "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Ultra Camera",
      price: "$799",
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "RGB Keyboard",
      price: "$129",
      image:
        "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Wireless Speaker",
      price: "$249",
      image:
        "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const moreProducts = Array.from({ length: 50 }, (_, i) => ({
    title: `Premium Gadget ${i + 1}`,
    price: `$${100 + i * 7}`,
    image: `https://picsum.photos/500/500?random=${i + 1}`,
  }));

  const allProducts = [...products, ...moreProducts];

  return (
    <div style={styles.page}>
      <style>{`
        *{
          box-sizing:border-box;
          scroll-behavior:smooth;
        }

        body{
          margin:0;
          background:#050816;
          font-family:Arial;
        }

        .hover-lift:hover{
          transform:translateY(-10px) scale(1.03);
          box-shadow:0 0 40px rgba(34,211,238,0.35);
        }

        .nav-hover:hover{
          color:#22d3ee !important;
          transform:translateY(-2px);
        }

        .glow-btn:hover{
          transform:scale(1.08);
          box-shadow:0 0 30px rgba(124,58,237,0.7);
        }

        .card-hover:hover img{
          transform:scale(1.12);
        }

        .card-hover:hover{
          transform:translateY(-12px);
          border:1px solid rgba(34,211,238,0.4);
          box-shadow:0 0 40px rgba(34,211,238,0.2);
        }

        .hero-image:hover{
          transform:scale(1.05) rotate(-2deg);
          box-shadow:0 0 60px rgba(124,58,237,0.7);
        }

        .input-focus:focus{
          border:1px solid #22d3ee;
          box-shadow:0 0 20px rgba(34,211,238,0.4);
        }

        @media(max-width:900px){
          .nav-links{
            display:none !important;
          }

          .hero-section{
            flex-direction:column;
            text-align:center;
          }

          .section-title{
            font-size:42px !important;
          }
        }
      `}</style>

      <div style={styles.blur1}></div>
      <div style={styles.blur2}></div>
      <div style={styles.blur3}></div>

      <nav style={styles.navbar}>
        <h1 style={styles.logo}>Tomato's Alu</h1>

        <div className="nav-links" style={styles.navLinks}>
          <a className="nav-hover" href="#home" style={styles.link}>
            Home
          </a>

          <a className="nav-hover" href="#products" style={styles.link}>
            Products
          </a>

          <a className="nav-hover" href="#features" style={styles.link}>
            Features
          </a>

          <a className="nav-hover" href="#contact" style={styles.link}>
            Contact
          </a>
        </div>

        <button className="glow-btn" style={styles.button}>
          Get Started
        </button>
      </nav>

      <section id="home" className="hero-section" style={styles.hero}>
        <div style={styles.heroText}>
          <p style={styles.tag}>PREMIUM FUTURISTIC STORE</p>

          <h1 style={styles.heading}>
            The Future Of
            <span style={styles.gradient}> Shopping </span>
            Starts Here.
          </h1>

          <p style={styles.description}>
            Experience a next-generation ecommerce website with premium
            glassmorphism, neon glow effects, dynamic hover animations,
            responsive layouts and futuristic UI.
          </p>

          <div style={styles.heroButtons}>
            <button className="glow-btn hover-lift" style={styles.primaryBtn}>
              Explore Products
            </button>

            <button className="hover-lift" style={styles.secondaryBtn}>
              Watch Demo
            </button>
          </div>
        </div>

        <div style={styles.heroImageWrapper}>
          <img
            className="hero-image"
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop"
            alt="phone"
            style={styles.heroImage}
          />
        </div>
      </section>

      <section style={styles.statsContainer}>
        {[
          ["50K+", "Happy Customers"],
          ["1200+", "Premium Products"],
          ["99%", "Positive Reviews"],
          ["24/7", "Live Support"],
        ].map((item, i) => (
          <div key={i} className="hover-lift" style={styles.statCard}>
            <h2 style={styles.statNumber}>{item[0]}</h2>
            <p style={styles.statText}>{item[1]}</p>
          </div>
        ))}
      </section>

      <section id="products" style={styles.productsSection}>
        <div style={styles.sectionTop}>
          <div>
            <p style={styles.tag}>TRENDING COLLECTION</p>

            <h2 className="section-title" style={styles.sectionTitle}>
              Featured Products
            </h2>
          </div>

          <button className="glow-btn" style={styles.secondaryBtn}>
            View All
          </button>
        </div>

        <div style={styles.productsGrid}>
          {allProducts.map((product, index) => (
            <div key={index} className="card-hover" style={styles.card}>
              <div style={styles.imageWrapper}>
                <img
                  src={product.image}
                  alt={product.title}
                  style={styles.cardImage}
                />
              </div>

              <div style={styles.cardBody}>
                <h3 style={styles.cardTitle}>{product.title}</h3>

                <p style={styles.cardText}>
                  Premium futuristic device with ultra modern performance and
                  elegant design.
                </p>

                <div style={styles.cardBottom}>
                  <p style={styles.price}>{product.price}</p>

                  <button className="glow-btn" style={styles.buyBtn}>
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="features" style={styles.featureSection}>
        <div style={styles.featureCard} className="hover-lift">
          <h2 style={styles.featureIcon}>⚡</h2>
          <h3 style={styles.featureTitle}>Fast Delivery</h3>

          <p style={styles.featureText}>
            Lightning fast product delivery experience worldwide.
          </p>
        </div>

        <div style={styles.featureCard} className="hover-lift">
          <h2 style={styles.featureIcon}>🔒</h2>
          <h3 style={styles.featureTitle}>Secure Payment</h3>

          <p style={styles.featureText}>
            100% secure checkout with modern payment protection.
          </p>
        </div>

        <div style={styles.featureCard} className="hover-lift">
          <h2 style={styles.featureIcon}>🚀</h2>
          <h3 style={styles.featureTitle}>Premium Quality</h3>

          <p style={styles.featureText}>
            Best premium gadgets with futuristic experience.
          </p>
        </div>
      </section>

      <section style={styles.banner}>
        <div>
          <p style={styles.tag}>LIMITED OFFER</p>

          <h2 style={styles.bannerTitle}>
            Upgrade Your Digital Lifestyle Today.
          </h2>
        </div>

        <button className="glow-btn hover-lift" style={styles.primaryBtn}>
          Shop Deals
        </button>
      </section>

      <section id="contact" style={styles.contactSection}>
        <div style={styles.contactBox}>
          <p style={styles.tag}>CONTACT US</p>

          <h2 style={styles.sectionTitle}>
            Let's Build Something Amazing
          </h2>

          <div style={styles.formGrid}>
            <input
              className="input-focus"
              style={styles.input}
              placeholder="Your Name"
            />

            <input
              className="input-focus"
              style={styles.input}
              placeholder="Your Email"
            />
          </div>

          <textarea
            className="input-focus"
            style={styles.textarea}
            placeholder="Your Message"
          ></textarea>

          <button className="glow-btn hover-lift" style={styles.primaryBtn}>
            Send Message
          </button>
        </div>
      </section>

      <footer style={styles.footer}>
        <div>
          <h1 style={styles.logo}>Tomato's Alu</h1>

          <p style={styles.footerText}>
            Premium Digital Experience & Modern UI Design.
          </p>
        </div>

        <div style={styles.footerLinks}>
          <a
            href="https://www.facebook.com/rokib2304"
            target="_blank"
            rel="noreferrer"
            style={styles.footerLink}
          >
            Facebook
          </a>

          <a
            href="https://www.instagram.com/arifin__rakib?igsh=emo3djQwdTRhZG05&utm_source=qr"
            target="_blank"
            rel="noreferrer"
            style={styles.footerLink}
          >
            Instagram
          </a>
        </div>
      </footer>
    </div>
  );
}

const glass = "rgba(255,255,255,0.05)";

const styles = {
  page: {
    background: "#050816",
    minHeight: "100vh",
    color: "white",
    overflowX: "hidden",
    position: "relative",
  },

  blur1: {
    position: "absolute",
    width: 500,
    height: 500,
    background: "#7c3aed",
    filter: "blur(180px)",
    top: -120,
    left: -120,
    opacity: 0.5,
  },

  blur2: {
    position: "absolute",
    width: 500,
    height: 500,
    background: "#06b6d4",
    filter: "blur(180px)",
    bottom: 0,
    right: 0,
    opacity: 0.4,
  },

  blur3: {
    position: "absolute",
    width: 400,
    height: 400,
    background: "#ec4899",
    filter: "blur(180px)",
    top: "40%",
    left: "35%",
    opacity: 0.2,
  },

  navbar: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 999,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "22px 8%",
    background: "rgba(255,255,255,0.03)",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
    backdropFilter: "blur(14px)",
  },

  logo: {
    fontSize: 34,
    fontWeight: "900",
    background: "linear-gradient(to right,#22d3ee,#8b5cf6)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  navLinks: {
    display: "flex",
    gap: 30,
  },

  link: {
    textDecoration: "none",
    color: "#d1d5db",
    transition: "0.3s",
  },

  button: {
    background: "linear-gradient(to right,#06b6d4,#7c3aed)",
    border: "none",
    padding: "14px 28px",
    borderRadius: 30,
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
  },

  hero: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 50,
    padding: "180px 8% 100px",
    position: "relative",
    zIndex: 2,
  },

  heroText: {
    flex: 1,
    minWidth: 320,
  },

  tag: {
    color: "#22d3ee",
    letterSpacing: 4,
    fontWeight: "bold",
    marginBottom: 20,
  },

  heading: {
    fontSize: "clamp(60px,8vw,110px)",
    lineHeight: 1,
    fontWeight: "900",
    marginBottom: 30,
  },

  gradient: {
    background: "linear-gradient(to right,#22d3ee,#8b5cf6)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  description: {
    color: "#cbd5e1",
    fontSize: 20,
    lineHeight: 1.9,
    maxWidth: 650,
    marginBottom: 35,
  },

  heroButtons: {
    display: "flex",
    gap: 20,
    flexWrap: "wrap",
  },

  primaryBtn: {
    background: "linear-gradient(to right,#06b6d4,#7c3aed)",
    border: "none",
    padding: "16px 34px",
    borderRadius: 35,
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
  },

  secondaryBtn: {
    background: "transparent",
    border: "1px solid rgba(255,255,255,0.15)",
    padding: "16px 34px",
    borderRadius: 35,
    color: "white",
    cursor: "pointer",
  },

  heroImageWrapper: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    minWidth: 320,
  },

  heroImage: {
    width: "100%",
    maxWidth: 480,
    borderRadius: 40,
    border: "1px solid rgba(255,255,255,0.1)",
    transition: "0.5s",
  },

  statsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
    gap: 30,
    padding: "0 8% 100px",
  },

  statCard: {
    background: glass,
    border: "1px solid rgba(255,255,255,0.1)",
    padding: 35,
    borderRadius: 30,
    textAlign: "center",
    backdropFilter: "blur(14px)",
  },

  statNumber: {
    fontSize: 42,
    color: "#22d3ee",
    marginBottom: 12,
    fontWeight: "900",
  },

  statText: {
    color: "#d1d5db",
  },

  productsSection: {
    padding: "100px 8%",
  },

  sectionTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 20,
    marginBottom: 60,
  },

  sectionTitle: {
    fontSize: 60,
    fontWeight: "900",
  },

  productsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
    gap: 35,
  },

  card: {
    background: glass,
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 35,
    overflow: "hidden",
    backdropFilter: "blur(14px)",
    transition: "0.5s",
  },

  imageWrapper: {
    overflow: "hidden",
  },

  cardImage: {
    width: "100%",
    height: 360,
    objectFit: "cover",
    transition: "0.5s",
  },

  cardBody: {
    padding: 28,
  },

  cardTitle: {
    fontSize: 32,
    marginBottom: 16,
  },

  cardText: {
    color: "#cbd5e1",
    lineHeight: 1.7,
    marginBottom: 24,
  },

  cardBottom: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  price: {
    color: "#22d3ee",
    fontWeight: "900",
    fontSize: 30,
  },

  buyBtn: {
    background: "linear-gradient(to right,#06b6d4,#7c3aed)",
    border: "none",
    padding: "12px 22px",
    borderRadius: 25,
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
  },

  featureSection: {
    padding: "50px 8% 120px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
    gap: 35,
  },

  featureCard: {
    background: glass,
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 35,
    padding: 40,
  },

  featureIcon: {
    fontSize: 50,
    marginBottom: 20,
  },

  featureTitle: {
    fontSize: 32,
    marginBottom: 18,
  },

  featureText: {
    color: "#cbd5e1",
    lineHeight: 1.8,
  },

  banner: {
    margin: "0 8% 120px",
    background: "linear-gradient(to right,#06b6d4,#7c3aed)",
    padding: "70px 8%",
    borderRadius: 45,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 30,
    flexWrap: "wrap",
  },

  bannerTitle: {
    fontSize: "clamp(40px,6vw,70px)",
    lineHeight: 1.1,
    fontWeight: "900",
    maxWidth: 700,
  },

  contactSection: {
    padding: "0 8% 120px",
  },

  contactBox: {
    background: glass,
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 40,
    padding: "70px 8%",
  },

  formGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
    gap: 20,
    marginTop: 35,
    marginBottom: 20,
  },

  input: {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    padding: 18,
    borderRadius: 18,
    outline: "none",
    color: "white",
    fontSize: 16,
  },

  textarea: {
    width: "100%",
    minHeight: 180,
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    padding: 20,
    borderRadius: 18,
    outline: "none",
    color: "white",
    fontSize: 16,
    marginBottom: 30,
  },

  footer: {
    borderTop: "1px solid rgba(255,255,255,0.08)",
    padding: "35px 8%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 25,
  },

  footerText: {
    color: "#94a3b8",
  },

  footerLinks: {
    display: "flex",
    gap: 25,
  },

  footerLink: {
    color: "#d1d5db",
    textDecoration: "none",
  },
};