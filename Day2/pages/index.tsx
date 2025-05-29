// pages/index.tsx
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <h1>Home Page</h1>
      <nav>
        <ul>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </>
  );
}
