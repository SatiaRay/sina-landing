"use client";
import { useEffect, useState } from "react";

const items = [
  { href: "#about", label: "درباره ما" },
  { href: "#features", label: "امکانات" },
  { href: "#screenshots", label: "عکس‌ها" },
  { href: "#process", label: "فرآیند" },
  { href: "#pricing", label: "قیمت‌گذاری" },
  { href: "#contact", label: "تماس با ما" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);

    const onResize = () => {
      if (window.innerWidth >= 992) setOpen(false);
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const handleClick = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header className="header" style={{ display: "block" }}>
      <nav
        className={`navbar navbar-expand-lg fixed-top ${open ? "nav-open" : ""}`}
        style={{
          zIndex: 999999,
          background: scrolled ? "#fff" : "transparent",
          boxShadow: scrolled ? "0 2px 12px rgba(0,0,0,0.08)" : "none",
          minHeight: 80,
          transition: "all .2s ease",
        }}
      >
        <div className="container">
          <a
            className="navbar-brand"
            href="/"
            style={{ display: "flex", alignItems: "center" }}
            onClick={() => setOpen(false)}
          >
            <img
              src={scrolled ? "/assets/img/logo-color.png" : "/assets/img/logo-white.png"}
              alt="Sina AI"
              style={{ height: 36 }}
            />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            aria-expanded={open}
            aria-label="Toggle navigation"
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className="ti-menu"
              style={{ fontSize: 22, color: scrolled ? "#111" : "#fff" }}
            />
          </button>

          <div className={`navbar-collapse ${open ? "show" : ""}`}>
            <ul className="navbar-nav ms-auto menu align-items-lg-center nav-menu">
              {items.map((it) => (
                <li className="nav-item" key={it.href}>
                  <a
                    className="nav-link page-scroll"
                    href={it.href}
                    onClick={handleClick(it.href)}
                    style={{
                      color: scrolled ? "#111" : "#fff",
                      padding: "8px 12px",
                      fontWeight: 500,
                    }}
                  >
                    {it.label}
                  </a>
                </li>
              ))}

              <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
                <a href="/register" className="btn nav-cta nav-cta-primary">
                  شروع رایگان
                </a>
              </li>

              <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
                <a href="/login" className="btn nav-cta nav-cta-outline">
                  ورود
                </a>
              </li>

              <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
                <a href="/demo" className="btn nav-cta nav-cta-ghost">
                  دمو زنده
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
