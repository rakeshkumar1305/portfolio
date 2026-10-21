import React from "react";
import {
  FaTerminal,
  FaCode,
  FaBriefcase,
  FaArrowRight,
  FaCheckCircle,
  FaUser,
  FaRocket,
} from "react-icons/fa";

const About = () => {
  const highlights = [
    {
      number: "1.5+",
      title: "Years of Experience",
      description:
        "Professional experience in software development and AEM.",
      icon: <FaBriefcase />,
      color: "text-violet-400",
      border: "border-violet-500/30",
    },
    {
      number: "AEM",
      title: "Enterprise Development",
      description:
        "Working with AEM Sites, Assets, components, and migration support.",
      icon: <FaCode />,
      color: "text-sky-400",
      border: "border-sky-500/30",
    },
    {
      number: "Java",
      title: "Full Stack Journey",
      description:
        "Building practical skills through Java, Spring Boot, REST APIs, and React projects.",
      icon: <FaTerminal />,
      color: "text-emerald-400",
      border: "border-emerald-500/30",
    },
  ];

  const principles = [
    {
      command: "understand_requirements()",
      title: "Understand Before Building",
      description:
        "I focus on understanding requirements and existing application behavior before choosing an implementation.",
      icon: "01",
    },
    {
      command: "write_maintainable_code()",
      title: "Write Maintainable Code",
      description:
        "I value readable code, reusable components, clear responsibilities, and solutions that are easier to maintain.",
      icon: "02",
    },
    {
      command: "learn_by_building()",
      title: "Learn Through Practice",
      description:
        "I strengthen my development skills by building projects, integrating APIs, debugging issues, and exploring new technologies.",
      icon: "03",
    },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden bg-[#10121A] px-4 py-16 text-[#F8FAFC] sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-32 h-80 w-80 rounded-full bg-violet-600/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-[45%] h-96 w-96 rounded-full bg-sky-500/5 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-6xl">
        {/* Section heading */}
        <div className="mb-10">
          <div className="mb-4 flex items-center gap-2 font-mono text-sm text-emerald-400">
            <FaTerminal />
            <span>~/portfolio/about</span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            About{" "}
            <span className="bg-gradient-to-r from-violet-400 to-sky-400 bg-clip-text text-transparent">
              Me
            </span>
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            My professional journey, development mindset, and the direction
            I&apos;m taking as a software engineer.
          </p>
        </div>

        {/* Main terminal window */}
        <div className="overflow-hidden rounded-2xl border border-[#303344] bg-[#151824] shadow-2xl shadow-black/20">
          {/* Terminal title bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#303344] bg-[#1B2030] px-4 py-3 sm:px-6">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
            </div>

            <div className="flex items-center gap-2 font-mono text-xs text-slate-400 sm:text-sm">
              <FaTerminal />
              about-me.sh
            </div>

            <span className="font-mono text-xs text-slate-500">
              bash — 80x24
            </span>
          </div>

          <div className="p-4 sm:p-7 lg:p-8">
            {/* Profile introduction */}
            <div className="mb-8">
              <p className="font-mono text-sm text-emerald-400">
                <span className="text-violet-400">visitor@portfolio</span>
                <span className="text-slate-500">:</span>
                <span className="text-sky-400">~</span>
                <span className="text-slate-300">$ whoami</span>
              </p>

              <div className="mt-5 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                {/* About content */}
                <div className="rounded-xl border border-[#303344] bg-[#10121A] p-5 sm:p-7">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-violet-500/30 bg-violet-500/10 text-violet-300">
                      <FaUser />
                    </div>

                    <div>
                      <h2 className="text-lg font-semibold">
                        Software Engineer
                      </h2>
                      <p className="mt-1 font-mono text-xs text-slate-500">
                        profile.current
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 text-sm leading-7 text-slate-300 sm:text-base">
                    <p>
                      I am a Software Engineer with around 1.5 years of
                      professional experience, primarily working with Adobe
                      Experience Manager (AEM) in enterprise application
                      development.
                    </p>

                    <p>
                      Through my professional work, I have gained experience
                      with AEM Sites, Assets and DAM, AEM Forms, component
                      development, application troubleshooting, and supporting
                      platform migration activities. These experiences have
                      helped me understand how enterprise applications are
                      developed, maintained, and improved.
                    </p>

                    <p>
                      Alongside my professional responsibilities, I am
                      expanding my skills in full stack development with Java,
                      Spring Boot, REST APIs, SQL, and React. I apply what I
                      learn through personal projects, focusing on backend
                      logic, API integration, frontend development, and data
                      handling.
                    </p>

                    <p>
                      My goal is to grow into a Full Stack Java Developer who
                      can contribute across the application stack while
                      bringing practical enterprise development experience to
                      the team.
                    </p>
                  </div>
                </div>

                {/* Profile metadata */}
                <div className="space-y-4">
                  <div className="rounded-xl border border-[#303344] bg-[#10121A] p-5">
                    <p className="mb-4 font-mono text-xs text-slate-500">
                      // PROFILE_METADATA
                    </p>

                    <div className="space-y-4 font-mono text-sm">
                      <div>
                        <p className="text-violet-400">role</p>
                        <p className="mt-1 text-slate-200">
                          Software Engineer
                        </p>
                      </div>

                      <div>
                        <p className="text-violet-400">primary_technology</p>
                        <p className="mt-1 text-sky-300">Adobe AEM</p>
                      </div>

                      <div>
                        <p className="text-violet-400">learning_path</p>
                        <p className="mt-1 text-emerald-300">
                          Java + Spring Boot + React
                        </p>
                      </div>

                      <div>
                        <p className="text-violet-400">career_goal</p>
                        <p className="mt-1 text-slate-200">
                          Full Stack Java Developer
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-5">
                    <div className="flex items-center gap-2 font-mono text-sm text-emerald-400">
                      <FaCheckCircle />
                      development_status
                    </div>
                    <p className="mt-3 text-sm leading-6 text-slate-400">
                      Continuously learning, building projects, and improving
                      engineering skills.
                    </p>
                    <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-[#303344]">
                      <div className="h-full w-full rounded-full bg-gradient-to-r from-emerald-500 to-sky-400" />
                    </div>
                    <p className="mt-2 font-mono text-xs text-slate-500">
                      status: in_progress
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick overview */}
            <div className="mb-10">
              <p className="font-mono text-sm text-emerald-400">
                <span className="text-violet-400">visitor@portfolio</span>
                <span className="text-slate-300">$ cat overview.json</span>
              </p>

              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {highlights.map((item) => (
                  <article
                    key={item.title}
                    className={`group rounded-xl border ${item.border} bg-[#10121A] p-5 transition duration-300 hover:-translate-y-1 hover:bg-[#1B2030]`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-lg border ${item.border} bg-[#1B2030] text-lg ${item.color}`}
                      >
                        {item.icon}
                      </div>

                      <span className="font-mono text-xs text-slate-600">
                        [{item.number}]
                      </span>
                    </div>

                    <p className={`mt-5 font-mono text-2xl font-bold ${item.color}`}>
                      {item.number}
                    </p>

                    <h3 className="mt-2 font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-400">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            {/* Development approach */}
            <div className="mb-10">
              <p className="font-mono text-sm text-emerald-400">
                <span className="text-violet-400">visitor@portfolio</span>
                <span className="text-slate-300">
                  $ ./development-approach.sh
                </span>
              </p>

              <div className="mb-6 mt-5">
                <h2 className="text-2xl font-bold sm:text-3xl">
                  My Development Approach
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                  I believe good software development combines problem-solving,
                  maintainable code, and continuous improvement.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {principles.map((principle) => (
                  <article
                    key={principle.title}
                    className="group rounded-xl border border-[#303344] bg-[#10121A] p-5 transition duration-300 hover:-translate-y-1 hover:border-sky-500/40"
                  >
                    <div className="mb-5 flex items-center justify-between">
                      <span className="font-mono text-sm text-sky-400">
                        [{principle.icon}]
                      </span>
                      <FaCode className="text-slate-600 transition group-hover:text-violet-400" />
                    </div>

                    <p className="mb-3 break-words font-mono text-xs text-violet-300">
                      {principle.command}
                    </p>

                    <h3 className="text-lg font-semibold text-white">
                      {principle.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {principle.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            {/* Career direction */}
            <div>
              <p className="font-mono text-sm text-emerald-400">
                <span className="text-violet-400">visitor@portfolio</span>
                <span className="text-slate-300">$ cat next_milestone.txt</span>
              </p>

              <div className="mt-5 rounded-xl border border-violet-500/30 bg-gradient-to-br from-violet-500/10 via-[#10121A] to-sky-500/5 p-5 sm:p-7 lg:p-8">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                  <div className="max-w-2xl">
                    <div className="flex items-center gap-2 font-mono text-xs text-sky-300">
                      <FaRocket />
                      <span>career.goal</span>
                    </div>

                    <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
                      Building Toward Full Stack Development
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                      I am continuing to develop my Java and Spring Boot
                      backend skills alongside React frontend development. I
                      want to build reliable, maintainable applications and
                      take on broader responsibilities across the full
                      development lifecycle.
                    </p>
                  </div>

                  <a
                    href="/projects"
                    className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 self-start rounded-lg border border-violet-400/40 bg-violet-500/10 px-5 py-3 font-mono text-sm font-semibold text-violet-200 transition duration-300 hover:-translate-y-1 hover:border-violet-400 hover:bg-violet-500/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-400 sm:self-center"
                  >
                    ./view-projects
                    <FaArrowRight aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>

            {/* Terminal footer */}
            <div className="mt-8 border-t border-[#303344] pt-5 font-mono text-xs sm:text-sm">
              <p className="text-slate-400">
                <span className="text-emerald-400">SUCCESS</span>
                {" "}— about profile loaded.
              </p>

              <p className="mt-2 text-slate-500">
                visitor@portfolio:~$ _
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;