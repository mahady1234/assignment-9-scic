"use client";

import Link from "next/link";

export default function Navbar() {



  const linkClass = (path) =>
    `px-4 py-2 rounded-md font-medium transition ${
      pathname === path
        ? "text-black bg-gray-200"
        : "text-gray-700 hover:text-black"
    }`;

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-wide">
          ⌚ RUMI<span className="text-gray-500">WATCH</span>
        </Link>

        {/* Menu */}
        <div className="flex items-center gap-2">
          <Link href="/" className={linkClass("/")}>
            Home
          </Link>
          <Link href="/items" className={linkClass("/items")}>
            Watches
          </Link>

          {loggedIn && (
            <Link href="/add-item" className={linkClass("/add-item")}>
              Add Watch
            </Link>
          )}

          {!loggedIn ? (
            <Link
              href="/login"
              className="ml-3 bg-black text-white px-5 py-2 rounded-md hover:bg-gray-800"
            >
              Login
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="ml-3 bg-red-500 text-white px-5 py-2 rounded-md hover:bg-red-600"
            >
              Logout
            </button>
          )}
        </div>

      </div>
    </nav>
  );
}
