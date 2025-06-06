import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sakara – Creative Solutions</title>
      </Head>
      <main>
         <div className="welcome-message bouncing-words">
  <span className="jump-letter" style={{ animationDelay: "0s" }}>W</span>
  <span className="jump-letter" style={{ animationDelay: "0.1s" }}>E</span>
  <span className="jump-letter" style={{ animationDelay: "0.2s" }}>L</span>
  <span className="jump-letter" style={{ animationDelay: "0.3s" }}>C</span>
  <span className="jump-letter" style={{ animationDelay: "0.4s" }}>O</span>
  <span className="jump-letter" style={{ animationDelay: "0.5s" }}>M</span>
  <span className="jump-letter" style={{ animationDelay: "0.6s" }}>E</span>
  <span className="jump-letter word-gap" style={{ animationDelay: "0.7s" }}> </span>
  <span className="jump-letter" style={{ animationDelay: "0.8s" }}>T</span>
  <span className="jump-letter" style={{ animationDelay: "0.9s" }}>O</span>
  <span className="jump-letter word-gap" style={{ animationDelay: "1.0s" }}> </span>
  <span className="jump-letter" style={{ animationDelay: "1.1s" }}>S</span>
  <span className="jump-letter" style={{ animationDelay: "1.2s" }}>A</span>
  <span className="jump-letter" style={{ animationDelay: "1.3s" }}>K</span>
  <span className="jump-letter" style={{ animationDelay: "1.4s" }}>A</span>
  <span className="jump-letter" style={{ animationDelay: "1.5s" }}>R</span>
  <span className="jump-letter" style={{ animationDelay: "1.6s" }}>A</span>
</div>
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content float">
            <h2>Empowering Your Business with Creative Solutions</h2>
            <p>
              Sakara delivers exceptional consulting, branding, and tech services—tailored to your needs.
            </p>
            <a href="/services" className="cta glow">
              Explore Our Services
            </a>
          </div>
        </section>

        {/* Services Overview */}
        <section className="services fade-in-up">
          <h2>Our Services</h2>
          <div className="service-list">
            <div className="service-card card-float">
              <span className="icon">🎨</span>
              <h3>Brand Design</h3>
              <p>
                Unique visual identities that make your business stand out.
              </p>
            </div>
            <div className="service-card card-float" style={{ animationDelay: "0.2s" }}>
              <span className="icon">💡</span>
              <h3>Consulting</h3>
              <p>
                Personalized advice to help your business grow and innovate.
              </p>
            </div>
            <div className="service-card card-float" style={{ animationDelay: "0.4s" }}>
              <span className="icon">💻</span>
              <h3>Web Solutions</h3>
              <p>
                Custom websites and apps designed for performance and style.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Sakara */}
        <section className="why fade-in-up">
          <h2>Why Choose Sakara?</h2>
          <ul>
            <li>🚀 Creative, custom-first approach</li>
            <li>🤝 Transparent communication & collaboration</li>
            <li>🏆 Proven, satisfied clients</li>
            <li>📱 Mobile-first, modern solutions</li>
          </ul>
        </section>

        {/* Testimonial */}
        <section className="testimonial fade-in-up">
          <blockquote>
            “Sakara transformed our brand and web presence. Their team is amazing to work with!”
          </blockquote>
          <cite>– Happy Client</cite>
        </section>
      </main>
      <style jsx global>{`
        body {
          background: linear-gradient(120deg,rgb(101, 246, 145), #fda085, #a18cd1, #fbc2eb, #f6d365);
          background-size: 400% 400%;
          animation: gradientBG 20s ease-in-out infinite;
          min-height: 100vh;
          margin: 0;
        }
        @keyframes gradientBG {
          0% { background-position: 0% 50%; }
          25% { background-position: 50% 100%; }
          50% { background-position: 100% 50%; }
          75% { background-position: 50% 0%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
      <style jsx>{`
        main {
          padding-top: 80px;
          min-height: 100vh;
          overflow: hidden;
        }
        .welcome-message {
  display: flex;
  justify-content: center;
  gap: 2px;
  margin-top: 32px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}
.jump-letter {
  font-size: 2.7rem;
  font-weight: 800;
  color: #101840;
  letter-spacing: 2px;
  text-shadow: 0 4px 24px rgba(33,39,89,0.08);
  display: inline-block;
  animation: jump 1.8s cubic-bezier(.55,0,.45,1) infinite;
}
@keyframes jump {
  0%   { transform: translateY(0);}
  8%   { transform: translateY(-20px);}
  16%  { transform: translateY(0);}
  100% { transform: translateY(0);}
}  
  .word-gap {
  width: 28px; /* or any value you like for spacing between words */
  display: inline-block;
}
        .welcome-message h1 {
          font-size: 2.7rem;
          font-weight: 800;
          color: #101840;
          letter-spacing: 2px;
          text-shadow: 0 4px 24px rgba(33,39,89,0.08);
        }
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.92);}
          to { opacity: 1; transform: scale(1);}
        }
        .hero {
          min-height: 390px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          text-align: center;
        }
        .hero-content {
          background: rgba(88, 199, 119, 0.1);
          padding: 48px 24px;
          border-radius: 18px;
          box-shadow: 0 4px 40px rgba(62, 197, 221, 0.1);
          animation: fadeIn 1s cubic-bezier(.77,0,.18,1.01) 0.2s both;
        }
        .float {
          animation: floatY 4.5s ease-in-out infinite;
        }
        @keyframes floatY {
          0% { transform: translateY(0); }
          50% { transform: translateY(-18px); }
          100% { transform: translateY(0); }
        }
        .hero h2 {
          font-size: 2.2rem;
          margin-bottom: 18px;
          font-weight: 700;
          color:rgb(16, 35, 64);
          text-shadow: 0 4px 24px rgba(187, 178, 86, 0.06);
        }
        .hero p {
          font-size: 1.3rem;
          margin-bottom: 38px;
          color: #233;
        }
        .cta {
          background:rgb(95, 184, 198);
          color: #fff;
          padding: 14px 36px;
          border-radius: 6px;
          font-size: 1.1rem;
          text-decoration: none;
          font-weight: 500;
       
          transition: background 0.22s, transform 0.17s;
          display: inline-block;
          position: relative;
          overflow: hidden;
        }
        .glow {
          animation: glowPulse 2.5s ease-in-out infinite alternate;
        }
        @keyframes glowPulse {
          0% { box-shadow: 0 2px 16px, 0 0 0pxrgb(197, 232, 167); }
          100% { box-shadow: 0 2px 26px #d5daea, 0 0 14px#70dcea; }
        }
        .cta:after {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0; right: 0;
          background: hsla(212, 76.90%, 35.70%, 0.12);
          opacity: 0;
          transition: opacity 0.2s;
        }
        .cta:hover, .cta:focus {
          background: #3e63dd;
          transform: translateY(-2px) scale(1.04);
        }
        .cta:hover:after, .cta:focus:after {
          opacity: 1;
        }
        .services {
          margin: 0 auto;
          max-width: 1100px;
          padding: 44px 24px;
          text-align: center;
        }
        .services h2 {
          font-size: 2rem;
          margin-bottom: 36px;
          color: #101840;
          letter-spacing: 1px;
        }
        .service-list {
          display: flex;
          justify-content: center;
          gap: 32px;
          flex-wrap: wrap;
        }
        .service-card {
          background:rgba(210, 231, 236, 0.27);
         
          border-radius: 14px;
          box-shadow: 0 2px 16px rgba(0,0,0,0.05);
          padding: 32px 20px;
          width: 250px;
          transition: transform 0.18s, box-shadow 0.18s;
          cursor: pointer;
          animation: fadeInUp 1.1s cubic-bezier(.77,0,.18,1.01) both;
        }
        .card-float {
          animation: cardFloat 4.5s ease-in-out infinite;
        }
        .card-float:nth-child(2) { animation-delay: 1.5s; }
        .card-float:nth-child(3) { animation-delay: 3s; }
        @keyframes cardFloat {
          0% { transform: translateY(0);}
          50% { transform: translateY(-12px) scale(1.025);}
          100% { transform: translateY(0);}
        }
        .service-card:hover {
          transform: translateY(-12px) scale(1.07) rotate(-1deg);
          box-shadow: 0 12px 32px rgba(62,99,221,0.13);
        }
        .icon {
          font-size: 2.4rem;
          display: block;
          margin-bottom: 18px;
        }
        .service-card h3 {
          margin-bottom: 10px;
          color: #3e63dd;
        }
        .why {
         
          padding: 42px 24px 24px 24px;
          text-align: center;
          margin: 40px 0 0 0;
          border-radius: 18px 18px 0 0;
          animation: fadeIn 1.5s cubic-bezier(.77,0,.18,1.01) 0.5s both;
        }
        .why h2 {
          color: #101840;
          margin-bottom: 24px;
        }
        .why ul {
          list-style: none;
          padding: 0;
          font-size: 1.1rem;
          color: #222;
        }
        .why li {
          margin-bottom: 12px;
          font-weight: 500;
          opacity: 0.89;
          transition: color 0.2s;
        }
        .why li:hover {
          color: #3e63dd;
        }
        .testimonial {
          text-align: center;
          padding: 40px 24px 60px 24px;
          font-size: 1.13rem;
        }
        .testimonial blockquote {
          font-style: italic;
          color: #3e63dd;
          margin-bottom: 12px;
          animation: fadeIn 1.4s cubic-bezier(.77,0,.18,1.01) 0.7s both;
        }
        .testimonial cite {
          color: #101840;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px);}
          to   { opacity: 1; transform: translateY(0);}
        }
        .fade-in-up {
          animation: fadeInUp 1s cubic-bezier(.77,0,.18,1.01) both;
        }
        @media (max-width: 860px) {
          .service-list {
            flex-direction: column;
            align-items: center;
          }
          .service-card {
            width: 92vw;
            max-width: 350px;
          }
        }
        @media (max-width: 600px) {
          .hero-content {
            padding: 30px 8px;
          }
          .welcome-message h1 {
            font-size: 1.3rem;
          }
          .hero h2 {
            font-size: 1.2rem;
          }
          .services, .why, .testimonial {
            padding-left: 8px;
            padding-right: 8px;
          }
        }
      `}</style>
    </>
  );
}