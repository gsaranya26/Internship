import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="header p-5 border-b border-gray-200 bg-white">
      <Link href="/" className="mr-5 text-blue-700 hover:text-pink-600">Home</Link>
      <Link href="/about" className="mr-5 text-blue-700 hover:text-pink-600">About</Link>
      <Link href="/services" className="mr-5 text-blue-700 hover:text-pink-600">Services</Link>
      <Link href="/contact" className="text-blue-700 hover:text-pink-600">Contact</Link>
    </nav>
  );
}
