export default function Footer() {
  return (
    <footer className="footer">
      <span>© {new Date().getFullYear()} Sakara. All rights reserved.</span>
      <style jsx>{`
        .footer {
          text-align: center;
          
          color: #fff;
          padding: 16px 0;
          margin-top: auto;
        }
        @media (max-width: 600px) {
          .footer {
            font-size: 0.95rem;
            padding: 12px 0;
          }
        }
      `}</style>
    </footer>
  );
}