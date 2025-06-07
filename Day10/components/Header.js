import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  // Close menu on navigation
  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="logo">
        <Link href="/">Sakara</Link>
      </div>
      {/* Hamburger icon for mobile */}
      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        <span />
        <span />
        <span />
      </button>
      <nav className={menuOpen ? 'open' : ''}>
        <ul>
          {navItems.map(item => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={router.pathname === item.href ? 'active' : ''}
                onClick={handleNavClick}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <style jsx>{`
        .header {
          width: 100vw;
          min-width: 100%;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 40px;
          height: 60px;
          box-sizing: border-box;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 1000;
          
          /* add a background for better readability */
        }
        .logo a {
          color: #fff;
          font-size: 1.5rem;
          font-weight: bold;
          letter-spacing: 2px;
          text-decoration: none;
        }
        nav ul {
          display: flex;
          gap: 40px;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        nav li {
          display: flex;
          align-items: center;
        }
        nav a {
          color: #fff;
          text-decoration: none;
          font-size: 1rem;
          padding: 4px 0;
          border-bottom: 2px solid transparent;
          transition: border-bottom 0.2s;
        }
        nav a.active {
          border-bottom: 2px solid #ffe082;
        }
        nav a:hover {
          border-bottom: 2px solid #a2b7e7;
        }
        .hamburger {
          display: none;
        }
        /* Mobile styles */
        @media (max-width: 700px) {
          .header {
            flex-direction: row;
            align-items: center;
            height: 60px;
            padding: 0 16px;
          }
          .logo {
            z-index: 1101;
          }
          .hamburger {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            background: none;
            border: none;
            cursor: pointer;
            margin-left: auto;
            z-index: 1101;
          }
          .hamburger span {
            display: block;
            width: 26px;
            height: 3px;
            margin: 4px 0;
            background: #fff;
            border-radius: 2px;
            transition: 0.4s;
          }
          nav {
            position: fixed;
            top: 60px;
            left: 0;
            right: 0;
            background: rgba(62, 99, 221, 0.98);
            padding: 24px 0 16px 0;
            transform: translateY(-100%);
            transition: transform 0.3s cubic-bezier(.77,0,.18,1.01);
            z-index: 1100;
            box-shadow: 0 2px 24px rgba(0,0,0,0.08);
            border-radius: 0 0 18px 18px;
          }
          nav.open {
            transform: translateY(0);
          }
          nav ul {
            flex-direction: column;
            align-items: center;
            gap: 20px;
          }
        }
      `}</style>
    </header>
  );
}