import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaTerminal,
  FaDownload,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { to: "/", label: "Overview", path: "~/overview" },
    { to: "/about", label: "About", path: "~/about" },
    { to: "/experience", label: "Experience", path: "~/experience" },
    { to: "/projects", label: "Projects", path: "~/projects" },
    { to: "/tech-stack", label: "Tech Stack", path: "~/tech-stack" },
    {
      to: "/system-design",
      label: "System Design",
      path: "~/system-design",
    },
    { to: "/contact", label: "Contact", path: "~/contact" },
  ];

 const navLinkClass = ({ isActive }) =>
  `group flex items-center gap-2 rounded-md border px-3 py-2
  font-mono text-xs transition-all duration-200 ${
    isActive
      ? "border-[#8B5CF6]/30 bg-[#8B5CF6]/10 text-[#C4B5FD]"
      : "border-transparent text-[#94A3B8] hover:border-[#303344] hover:bg-[#1B2030] hover:text-[#F8FAFC]"
  }`;

  const closeMenu = () => setMenuOpen(false);

  const ResumeLink = ({ mobile = false }) => (
    <a
      href="/RAKESH.pdf"
      download="Rakesh_Kumar_Nayak_Resume.pdf"
      onClick={closeMenu}
      className={`inline-flex items-center justify-center gap-2 rounded-lg
        border border-[#8B5CF6]/40 bg-[#8B5CF6]/10 px-4 py-2.5
        font-mono text-sm font-semibold text-[#C4B5FD]
        transition-all duration-200 hover:border-[#8B5CF6]
        hover:bg-[#8B5CF6]/20 hover:text-white
        focus-visible:outline-2 focus-visible:outline-offset-4
        focus-visible:outline-violet-400 ${
          mobile ? "w-full" : ""
        }`}
    >
      <FaDownload aria-hidden="true" className="text-xs" />
      <span>Download Resume</span>
    </a>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#303344]
      bg-[#10121A]/95 text-[#F8FAFC] shadow-lg shadow-black/10 backdrop-blur-xl">

      <nav
        className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-10"
        aria-label="Main navigation"
      >
        {/* Terminal title bar */}
        <div className="flex min-h-[76px] items-center justify-between gap-4">
          {/* Brand */}
          <NavLink
            to="/"
            onClick={closeMenu}
            className="flex min-w-0 items-center gap-3"
            aria-label="Rakesh Kumar Nayak - Home"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center
              rounded-xl border border-[#38BDF8]/20 bg-[#1B2030]
              font-mono text-lg font-bold text-[#38BDF8]">
              <FaTerminal aria-hidden="true" />
            </span>

            <span className="min-w-0">
              <span className="block truncate font-mono text-sm font-bold
                sm:text-base lg:text-lg">
                <span className="text-[#10B981]">~/</span>
                Rakesh_Kumar
                <span className="text-[#8B5CF6]">.dev</span>
              </span>

              <span className="mt-1 flex items-center gap-2 font-mono
                text-[10px] text-[#94A3B8] sm:text-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
                Software Engineer
              </span>
            </span>
          </NavLink>

          {/* Desktop resume and mobile menu */}
          <div className="flex shrink-0 items-center gap-3">
            <div className="hidden sm:block">
              <ResumeLink />
            </div>

            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center
                rounded-lg border border-[#303344] bg-[#1B2030]
                text-[#38BDF8] transition hover:border-[#8B5CF6]
                hover:bg-[#8B5CF6]/10 focus-visible:outline-2
                focus-visible:outline-offset-4 focus-visible:outline-violet-400
                lg:hidden"
              onClick={() => setMenuOpen((previous) => !previous)}
              aria-label={
                menuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={menuOpen}
              aria-controls="portfolio-navigation"
            >
              {menuOpen ? (
                <FaTimes aria-hidden="true" className="h-5 w-5" />
              ) : (
                <FaBars aria-hidden="true" className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Desktop terminal navigation */}
        <div className="hidden items-center justify-between gap-4
          border-t border-[#303344]/70 py-3 lg:flex">
          <div className="flex shrink-0 items-center gap-2 font-mono text-xs">
            <span className="text-[#10B981]">rakesh@portfolio</span>
            <span className="text-[#94A3B8]">:</span>
            <span className="text-[#38BDF8]">~</span>
            <span className="text-[#94A3B8]">$</span>
            <span className="text-[#94A3B8]">navigate</span>
          </div>

          <ul className="flex flex-wrap items-center justify-end gap-1">
            {links.map(({ to, label, path }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === "/"}
                  className={navLinkClass}
                >
                  <span className="text-[#10B981]">/</span>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile and tablet terminal menu */}
        {menuOpen && (
          <div
            id="portfolio-navigation"
            className="border-t border-[#303344] py-4 lg:hidden"
          >
            <div className="mb-3 flex items-center gap-2 rounded-lg
              border border-[#303344] bg-[#1B2030] px-3 py-3 font-mono text-xs">
              <span className="text-[#10B981]">rakesh@portfolio</span>
              <span className="text-[#94A3B8]">$</span>
              <span className="text-[#38BDF8]">ls ./pages</span>
            </div>

            <ul className="flex flex-col gap-1">
              {links.map(({ to, label, path }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    end={to === "/"}
                    onClick={closeMenu}
                    className={navLinkClass}
                  >
                    <span className="text-[#10B981]">&gt;</span>
                    <span>{label}</span>
                    <span className="ml-auto text-[10px] text-[#64748B]">
                      {path}
                    </span>
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="mt-4 sm:hidden">
              <ResumeLink mobile />
            </div>

            <p className="mt-4 font-mono text-[10px] text-[#64748B]">
              <span className="text-[#10B981]">●</span>
              {" "}navigation_ready
            </p>
          </div>
        )}
      </nav>
    </header>
  );
}

export default NavBar;