import React from "react";
import {
  FaArrowRight,
  FaCode,
  FaLinkedin,
  FaTerminal,
} from "react-icons/fa";
import profile from "../assets/profile-image.jpeg";

const technologies = ["Java", "Spring Boot", "React", "AEM", "SQL"];

const Overview = () => {
  return (
    <section
      id="overview"
      className="relative flex min-h-screen flex-col justify-center
      overflow-hidden bg-[#10121A] px-4 py-20 text-[#F8FAFC]
      sm:px-8 lg:px-12 xl:px-16"
    >
      {/* Background effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-10
        h-96 w-96 rounded-full bg-violet-600/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-40
        h-96 w-96 rounded-full bg-sky-500/10 blur-3xl"
      />

      <div
        className="relative mx-auto grid w-full max-w-7xl
        items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]
        lg:gap-16"
      >
        {/* LEFT: Terminal introduction */}
        <div className="min-w-0">
          {/* Welcome label */}
          <div
            className="mb-6 inline-flex items-center gap-2 rounded-full
            border border-emerald-500/20 bg-emerald-500/5
            px-3 py-2 font-mono text-xs text-emerald-400"
          >
            <span className="relative flex h-2 w-2">
              <span
                className="absolute inline-flex h-full w-full
              animate-ping rounded-full bg-emerald-400 opacity-50"
              />
              <span
                className="relative inline-flex h-2 w-2
              rounded-full bg-emerald-400"
              />
            </span>

            <span>WELCOME_TO_MY_PORTFOLIO</span>
          </div>

          {/* Terminal window */}
          <div
            className="overflow-hidden rounded-2xl border
            border-[#303344] bg-[#1B2030]/90
            shadow-2xl shadow-black/20"
          >
            {/* Terminal header */}
            <div
              className="flex flex-wrap items-center justify-between
              gap-3 border-b border-[#303344] bg-[#171A27]
              px-4 py-3 sm:px-5"
            >
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-400" />
                <span className="h-3 w-3 rounded-full bg-amber-400" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
              </div>

              <div
                className="flex items-center gap-2 font-mono
                text-xs text-slate-400"
              >
                <FaTerminal className="text-violet-400" />
                portfolio.sh
              </div>

              <span className="font-mono text-xs text-slate-500">bash</span>
            </div>

            {/* Terminal content */}
            <div className="p-5 sm:p-7 lg:p-8">
              {/* Command */}
              <div className="mb-5 flex flex-wrap items-center gap-2 font-mono text-sm">
                <span className="text-emerald-400">➜</span>
                <span className="text-violet-400">~/portfolio</span>
                <span className="text-slate-500">$</span>
                <span className="text-slate-300">whoami</span>
              </div>

              <p className="mb-2 font-mono text-xs text-sky-400">
                // SOFTWARE ENGINEER
              </p>

              <h1
                className="text-3xl font-bold leading-tight tracking-tight
              sm:text-4xl xl:text-5xl"
              >
                Hi, I'm{" "}
                <span
                  className="bg-gradient-to-r from-violet-400
                  to-sky-400 bg-clip-text text-transparent"
                >
                  Rakesh Kumar
                </span>
                <span className="text-emerald-400">.</span>
              </h1>

              <h2
                className="mt-5 text-lg font-medium leading-relaxed
              text-slate-300 sm:text-xl"
              >
                Building web experiences with{" "}
                <span className="text-violet-300">AEM</span>,
                <span className="text-sky-300"> Java</span> and{" "}
                <span className="text-emerald-300">React</span>.
              </h2>

              <div
                className="my-6 border-l-2 border-violet-500/50
                pl-4 text-sm leading-7 text-slate-400 sm:text-base"
              >
                I work on enterprise applications using Adobe Experience Manager
                and am growing toward full-stack development with Spring Boot,
                REST APIs, React, and SQL.
              </div>

              {/* Skills command */}
              <div className="mb-3 flex flex-wrap items-center gap-2 font-mono text-xs sm:text-sm">
                <span className="text-emerald-400">➜</span>
                <span className="text-violet-400">~/portfolio</span>
                <span className="text-slate-500">$</span>
                <span className="text-slate-300">cat tech-stack.json</span>
              </div>

              {/* Technology badges */}
              <div className="flex flex-wrap gap-2">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md border border-[#303344]
                    bg-[#10121A] px-3 py-2 font-mono text-xs
                    text-slate-300 transition duration-300
                    hover:-translate-y-0.5 hover:border-violet-500/60
                    hover:text-violet-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/projects"
                  className="group inline-flex min-h-12 items-center
                  justify-center gap-2 rounded-lg bg-violet-500
                  px-5 py-3 text-sm font-semibold text-white
                  transition duration-300 hover:-translate-y-1
                  hover:bg-violet-400 hover:shadow-lg
                  hover:shadow-violet-500/20
                  focus-visible:outline-2
                  focus-visible:outline-offset-4
                  focus-visible:outline-violet-400"
                >
                  <FaCode />
                  Explore Projects
                  <FaArrowRight
                    className="transition-transform
                    group-hover:translate-x-1"
                  />
                </a>

                <a
                  href="/RAKESH.pdf"
                  download="Rakesh_Kumar_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center
                  justify-center gap-2 rounded-lg border
                  border-[#414559] bg-[#10121A] px-5 py-3
                  text-sm font-semibold text-slate-200
                  transition duration-300 hover:-translate-y-1
                  hover:border-sky-400 hover:text-sky-300
                  focus-visible:outline-2
                  focus-visible:outline-offset-4
                  focus-visible:outline-sky-400"
                >
                  View Resume <span aria-hidden="true">↗</span>
                </a>
              </div>

              {/* Social link */}
              <div className="mt-6 border-t border-[#303344] pt-5">
                <a
                  href="https://www.linkedin.com/in/rakesh-kumar1305/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2
                  text-sm text-slate-400 transition
                  hover:text-sky-400"
                >
                  <FaLinkedin />
                  Connect with me on LinkedIn
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            {/* Terminal footer */}
            <div
              className="flex flex-wrap items-center justify-between
              gap-2 border-t border-[#303344] bg-[#171A27]
              px-4 py-3 font-mono text-[10px] text-slate-500 sm:px-5"
            >
              <span>user: rakesh</span>
              <span className="text-emerald-400">process_status: running</span>
            </div>
          </div>
        </div>

        {/* RIGHT: Profile image */}
        <div className="relative mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-md">
          {/* Glow */}
          <div
            aria-hidden="true"
            className="absolute -inset-5 rounded-3xl
            bg-gradient-to-br from-violet-600/20
            to-sky-500/10 blur-2xl"
          />

          {/* Image container */}
          <div
            className="relative aspect-[4/5] overflow-hidden
            rounded-2xl border border-violet-500/50
            bg-[#1B2030] shadow-2xl shadow-violet-950/30"
          >
            <img
              src={profile}
              alt="Rakesh Kumar, Software Engineer"
              loading="eager"
              className="h-full w-full object-cover
              transition duration-700 hover:scale-105"
            />

            {/* Bottom image gradient */}
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-1/3
              bg-gradient-to-t from-[#10121A]/80 to-transparent"
            />
          </div>

          {/* Floating developer card */}
          {/* Floating developer card */}
          <div
            className="absolute -left-4 top-10 z-20
  flex items-center gap-3 rounded-xl
  border border-violet-400/30
  bg-[#1B2030]/95 p-3 shadow-2xl
  shadow-violet-950/40 backdrop-blur-md
  animate-[float_3s_ease-in-out_infinite]
  sm:-left-8 sm:top-14 sm:p-4"
          >
            <div
              className="flex h-10 w-10 items-center
    justify-center rounded-lg bg-violet-500/15
    text-xl text-violet-400"
            >
              <FaCode />
            </div>

            <div>
              <p className="text-sm font-semibold text-white">Developer mode</p>
              <p className="mt-1 text-xs text-slate-400">
                Learn · Build · Improve
              </p>
            </div>
          </div>

          {/* Profile image caption */}
          <div
            className="absolute -bottom-5 right-2 flex max-w-[95%]
            items-center gap-2 rounded-lg border border-[#303344]
            bg-[#1B2030] px-3 py-3 text-xs text-slate-300
            shadow-xl sm:-right-4 sm:px-4"
          >
            <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
            <span>Turning ideas into applications</span>
          </div>
        </div>
      </div>

      {/* Developer status panel */}
      <div
        className="relative mx-auto mt-16 w-full max-w-7xl
        overflow-hidden rounded-xl border border-[#303344]
        bg-[#151824] lg:mt-20"
      >
        <div
          className="flex flex-wrap items-center gap-3 border-b
          border-[#303344] px-4 py-3 font-mono text-xs text-slate-400"
        >
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </div>
          developer-status.json
        </div>

        <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-3 sm:p-5">
          <div className="flex items-start gap-3">
            <span className="mt-1 text-emerald-400">{"{ }"}</span>
            <div>
              <p className="font-mono text-xs text-slate-500">current_focus</p>
              <p className="mt-1 text-sm text-slate-200">
                Java &amp; Spring Boot
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="mt-1 text-sky-400">{"< />"}</span>
            <div>
              <p className="font-mono text-xs text-slate-500">frontend</p>
              <p className="mt-1 text-sm text-slate-200">
                React &amp; Tailwind CSS
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="mt-1 text-violet-400">{"[ ]"}</span>
            <div>
              <p className="font-mono text-xs text-slate-500">
                professional_experience
              </p>
              <p className="mt-1 text-sm text-slate-200">
                Adobe Experience Manager
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-[#303344] px-4 py-3">
          <p className="break-words font-mono text-xs leading-6 text-slate-400 sm:text-sm">
            <span className="font-bold text-emerald-400">$</span> Always
            learning. Always building. Always improving.
            <span className="ml-1 inline-block h-4 w-1.5 animate-pulse bg-violet-400 align-middle" />
          </p>
        </div>
      </div>
    </section>
  );
};

export default Overview;
