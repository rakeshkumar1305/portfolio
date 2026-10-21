import React from "react";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaTerminal,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#303344] bg-[#10121A] text-[#94A3B8]">
      <div className="mx-auto max-w-[1600px] px-4 py-8 sm:px-6 lg:px-10">

        {/* Terminal footer header */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            to="/"
            className="flex items-center gap-3 transition hover:text-white"
            aria-label="Return to home"
          >
            <span className="flex h-10 w-10 items-center justify-center
              rounded-lg border border-[#38BDF8]/20 bg-[#1B2030]
              text-[#38BDF8]"
            >
              <FaTerminal />
            </span>

            <span>
              <span className="block font-mono text-sm font-bold text-[#F8FAFC]">
                ~/Rakesh_Kumar.dev
              </span>
              <span className="mt-1 block text-xs">
                Software Engineer
              </span>
            </span>
          </Link>

          {/* Back to top */}
          <a
            href="#root"
            onClick={(event) => {
              event.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 rounded-lg
              border border-[#303344] px-3 py-2 font-mono text-xs
              transition hover:border-[#8B5CF6] hover:text-[#C4B5FD]"
          >
            Back to top <FaArrowUp />
          </a>
        </div>

        {/* Terminal command line */}
        <div className="my-6 border-y border-[#303344] py-4">
          <p className="font-mono text-xs leading-6 sm:text-sm">
            <span className="text-[#10B981]">rakesh@portfolio</span>
            <span className="text-[#94A3B8]">:</span>
            <span className="text-[#38BDF8]">~</span>
            <span className="text-[#94A3B8]"> $ </span>
            <span className="text-[#C4B5FD]">
              echo "Thanks for visiting my portfolio!"
            </span>
          </p>
        </div>

        {/* Footer links */}
        <div className="flex flex-col items-start justify-between gap-5
          sm:flex-row sm:items-center">

          <p className="text-xs leading-6">
            © {currentYear}{" "}
            <span className="font-medium text-[#F8FAFC]">
              Rakesh Kumar Nayak
            </span>
            . All rights reserved.
          </p>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center gap-4 sm:gap-5">
              <li>
                <Link
                  to="/contact"
                  className="font-mono text-xs transition
                    hover:text-[#38BDF8]"
                >
                  ~/contact
                </Link>
              </li>

              <li>
                <a
                  href="https://github.com/rakeshkumar1305"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="inline-flex items-center gap-2 text-sm
                    transition hover:text-[#F8FAFC]"
                >
                  <FaGithub />
                  <span>GitHub</span>
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/in/rakesh-kumar1305/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="inline-flex items-center gap-2 text-sm
                    transition hover:text-[#38BDF8]"
                >
                  <FaLinkedin />
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
