import Link from 'next/link'

export default function Navbar() {
  return (
    <nav style={{ padding: 20, borderBottom: '1px solid #eee' }}>
      <Link href="/" style={{ marginRight: 20 }}>Home</Link>
      <Link href="/about" style={{ marginRight: 20 }}>About</Link>
      <Link href="/services" style={{ marginRight: 20 }}>Services</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  )
}
 