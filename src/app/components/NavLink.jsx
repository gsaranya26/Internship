"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, title }) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={`block py-2 pl-3 pr-4 sm:text-xl rounded md:p-0 transition-colors duration-300 ${
        isActive ? "text-white font-semibold" : "text-[#ADB7BE] hover:text-white"
      }`}
    >
      {title}
    </Link>
  );
};

export default NavLink;
