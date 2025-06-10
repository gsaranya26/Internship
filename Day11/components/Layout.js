import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <main>{children}</main>
      <Footer />
      <style jsx>{`
        .layout {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        main {
          flex: 1;
          width: 100%;
          max-width: 960px;
          margin: 0 auto;
          padding: 32px 16px 16px 16px;
          box-sizing: border-box;
        }
        @media (max-width: 600px) {
          main {
            padding: 20px 6px 10px 6px;
          }
        }
      `}</style>
    </div>
  );
}