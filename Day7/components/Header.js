import Link from 'next/link';
import { useRouter } from 'next/router';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const router = useRouter();

  return (
    <header className="header">
      <div className="logo">
        <Link href="/">Sakara</Link>
      </div>
      <nav>
        <ul>
          {navItems.map(item => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={router.pathname === item.href ? 'active' : ''}
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
          border-bottom: 2px solid #3e63dd;
        }
        nav a:hover {
          border-bottom: 2px solid #a2b7e7;
        }
        @media (max-width: 700px) {
          .header {
            flex-direction: column;
            align-items: stretch;
            height: auto;
            padding: 0 12px;
          }
          nav ul {
            flex-direction: column;
            gap: 0;
          }
          nav a {
            padding: 12px 0;
          }
        }
      `}</style>
    </header>
  );
}