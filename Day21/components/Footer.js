export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-6 mt-16">
      <div className="max-w-7xl mx-auto text-center text-sm">
        © {new Date().getFullYear()} Acme Web Solutions. All rights reserved.
      </div>
    </footer>
  );
}