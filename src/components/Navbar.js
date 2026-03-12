"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import BookDemoButton from "@/components/BookDemoButton";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerClassName = isScrolled
    ? "bg-white/95 text-slate-900 shadow-sm ring-1 ring-black/5 backdrop-blur"
    : "bg-transparent text-white";

  const navLinkClassName = isScrolled
    ? "text-slate-700 hover:text-slate-950"
    : "text-white/90 [text-shadow:0_1px_14px_rgba(0,0,0,0.22)] hover:opacity-80";

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-colors duration-200 ${headerClassName}`}
    >
      <div className="mx-auto flex w-full  items-center justify-between px-6 md:px-10 lg:px-20 py-4">
        <Link href="/" className="flex items-center gap-3">
          {/* <span
            className={`grid h-9 w-9 place-items-center rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.12)] ring-1 backdrop-blur-md ${
              isScrolled ? "bg-slate-900/5 ring-black/10" : "bg-white/10 ring-white/15"
            }`}
            aria-hidden="true"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2.5c4.6 0 8.5 3.7 8.5 8.3 0 6.1-6.4 10.6-8.1 11.7a.75.75 0 0 1-.8 0C9.9 21.4 3.5 16.9 3.5 10.8 3.5 6.2 7.4 2.5 12 2.5Z"
                fill="url(#g)"
              />
              <defs>
                <linearGradient id="g" x1="4" y1="5" x2="20" y2="20">
                  <stop stopColor="#2F79FF" />
                  <stop offset="0.55" stopColor="#7C3AED" />
                  <stop offset="1" stopColor="#14B8A6" />
                </linearGradient>
              </defs>
            </svg>
          </span> */}

          <span className="whitespace-nowrap text-md md:text-lg font-bold">
            <span className={isScrolled ? "text-slate-900" : "text-white/95"}>
              Noor
            </span>
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-teal-400 bg-clip-text text-transparent">
              Nova
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-semibold md:flex">
          <Link href="/" className={`transition-colors ${navLinkClassName}`}>
            Home
          </Link>
          <Link href="/about" className={`transition-colors ${navLinkClassName}`}>
            About
          </Link>
          <Link href="/services" className={`transition-colors ${navLinkClassName}`}>
            Services
          </Link>
          <Link href="/#testimonials" className={`transition-colors ${navLinkClassName}`}>
            Testimonials
          </Link>
          <Link href="/#insights" className={`transition-colors ${navLinkClassName}`}>
            Insights
          </Link>
          <Link href="/#careers" className={`transition-colors ${navLinkClassName}`}>
            Careers
          </Link>
          <Link href="/#contact" className={`transition-colors ${navLinkClassName}`}>
            Contact
          </Link>
        </nav>

     <div className="hidden md:block">   <BookDemoButton className="hero-btn-primary inline-flex h-10 items-center justify-center rounded-md px-5 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(74,93,255,0.34)]">
          Book Demo
        </BookDemoButton></div>

             {/* Hamburger Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ${
          mobileOpen ? "max-h-[500px] mx-5 rounded-md opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden bg-transparent bg-white text-gray-900`}
      >
        <nav className="flex flex-col gap-5 px-6 pb-6 pt-4 text-sm font-semibold">
          <Link href="/" onClick={() => setMobileOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setMobileOpen(false)}>About</Link>
          <Link href="/services" onClick={() => setMobileOpen(false)}>Services</Link>
          <Link href="/#testimonials">Testimonials</Link>
          <Link href="/#insights">Insights</Link>
          <Link href="/#careers">Careers</Link>
          <Link href="/#contact">Contact</Link>

          <BookDemoButton className="mt-3 inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-5 text-white">
            Book Demo
          </BookDemoButton>
        </nav>
      </div>
    </header>
  );
}
