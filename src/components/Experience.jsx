import React from "react";
import {
  FaBriefcase,
  FaCode,
  FaTerminal,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

const experience = {
  company: "Bhasaka Technologies",
  designation: "Software Engineer",
  employmentType: "Full-time",
  duration: "Aug 2025 — Present",
  status: "Currently Working",
};

const projects = [
  {
    id: "01",
    name: "O'Reilly",
    category: "AEM Assets / DAM",
    status: "Professional Project",
    color: "text-violet-400",
    border: "border-violet-500/40",
    technologies: [
      "AEM Assets",
      "Java",
      "OSGi",
      "Workflows",
      "Oak Indexing",
    ],
    responsibilities: [
      "Created and enhanced AEM workflows and email notifications.",
      "Configured ACL permissions to manage asset access.",
      "Worked on Oak indexing and event listeners.",
      "Contributed to automated image modification and whitespace removal.",
      "Implemented logging and image modification report generation.",
    ],
  },
  {
    id: "02",
    name: "Fleetcore",
    category: "AEM Sites",
    status: "Professional Project",
    color: "text-sky-400",
    border: "border-sky-500/40",
    technologies: [
      "AEM Sites",
      "Java",
      "HTL",
      "Components",
      "AEM 6.5 LTS",
    ],
    responsibilities: [
      "Debugged issues and implemented fixes in the application.",
      "Developed and enhanced user interface components.",
      "Worked on implementing fraud detection functionality.",
      "Supported migration from AEM 6.5 to AEM 6.5 LTS.",
    ],
  },
  {
    id: "03",
    name: "AEM Forms",
    category: "Adaptive Forms",
    status: "Current Project",
    color: "text-emerald-400",
    border: "border-emerald-500/40",
    technologies: [
      "Adaptive Forms",
      "Form Fragments",
      "Rule Editor",
      "Custom Functions",
      "JavaScript",
    ],
    responsibilities: [
      "Create Adaptive Forms and Adaptive Form Fragments.",
      "Configure form behavior using the Rule Editor.",
      "Develop and use custom functions in form rules.",
      "Work with AEM Forms Designer.",
    ],
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen bg-[#10121A] px-4 py-20 text-slate-100 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <div className="mb-12">
          <div className="mb-3 flex items-center gap-2 font-mono text-sm text-emerald-400">
            <FaTerminal />
            <span>~/portfolio/experience</span>
          </div>

          <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            Professional{" "}
            <span className="text-violet-400">Experience</span>
          </h1>

          <p className="mt-4 max-w-2xl leading-7 text-slate-400">
            My professional journey as a Software Engineer, working with
            Adobe Experience Manager and enterprise application development.
          </p>
        </div>

        {/* Terminal window */}
        <div className="overflow-hidden rounded-2xl border border-[#303344] bg-[#151824] shadow-2xl shadow-black/20">
          {/* Terminal header */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#303344] bg-[#1B2030] px-4 py-3 sm:px-6">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
            </div>

            <div className="flex items-center gap-2 font-mono text-xs text-slate-400 sm:text-sm">
              <FaTerminal />
              experience.sh
            </div>
          </div>

          <div className="p-5 sm:p-8">
            {/* Employment details */}
            <div className="mb-10">
              <p className="font-mono text-sm text-emerald-400">
                $ cat current_role.json
              </p>

              <div className="mt-5 rounded-xl border border-[#303344] bg-[#10121A] p-5 sm:p-6">
                <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
                  <div>
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl border border-violet-500/30 bg-violet-500/10">
                      <FaBriefcase className="text-xl text-violet-400" />
                    </div>

                    <h2 className="text-xl font-semibold sm:text-2xl">
                      {experience.designation}
                    </h2>

                    <p className="mt-2 text-lg text-sky-400">
                      {experience.company}
                    </p>

                    <p className="mt-1 text-sm text-slate-400">
                      {experience.employmentType}
                    </p>
                  </div>

                  <div className="sm:text-right">
                    <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs text-emerald-400">
                      <FaCheckCircle />
                      {experience.status}
                    </span>

                    <p className="mt-3 font-mono text-sm text-slate-400">
                      {experience.duration}
                    </p>
                  </div>
                </div>

                <div className="mt-6 border-t border-[#303344] pt-4">
                  <p className="font-mono text-sm text-slate-400">
                    <span className="text-violet-400">role:</span>{" "}
                    Software Engineer
                  </p>
                  <p className="mt-2 font-mono text-sm text-slate-400">
                    <span className="text-violet-400">focus:</span>{" "}
                    AEM Development · Enterprise Applications
                  </p>
                </div>
              </div>
            </div>

            {/* Projects timeline */}
            <div>
              <p className="font-mono text-sm text-emerald-400">
                $ git log --projects
              </p>

              <div className="relative mt-6 space-y-6">
                {/* Timeline line */}
                <div className="absolute bottom-8 left-[17px] top-8 hidden w-px bg-gradient-to-b from-violet-500 via-sky-500 to-emerald-500 sm:block" />

                {projects.map((project) => (
                  <article
                    key={project.id}
                    className="relative rounded-xl border border-[#303344] bg-[#1B2030]/70 p-5 transition duration-300 hover:-translate-y-1 hover:border-violet-500/50 hover:bg-[#1B2030] sm:ml-10 sm:p-6"
                  >
                    <div className="absolute -left-[50px] top-7 hidden h-9 w-9 items-center justify-center rounded-full border border-[#303344] bg-[#151824] font-mono text-xs text-violet-400 sm:flex">
                      {project.id}
                    </div>

                    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                      <div>
                        <p
                          className={`font-mono text-xs ${project.color}`}
                        >
                          {project.status}
                        </p>

                        <h3 className="mt-2 text-xl font-semibold">
                          {project.name}
                        </h3>

                        <p className="mt-1 text-sm text-slate-400">
                          {project.category}
                        </p>
                      </div>

                      <FaCode
                        className={`text-xl ${project.color}`}
                        aria-hidden="true"
                      />
                    </div>

                    {/* Responsibilities */}
                    <div className="mt-5">
                      <p className="mb-3 font-mono text-xs text-slate-500">
                        // responsibilities
                      </p>

                      <ul className="space-y-3">
                        {project.responsibilities.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 text-sm leading-6 text-slate-300"
                          >
                            <FaArrowRight
                              className={`mt-1.5 shrink-0 text-xs ${project.color}`}
                              aria-hidden="true"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technology tags */}
                    <div className="mt-5 flex flex-wrap gap-2 border-t border-[#303344] pt-4">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className={`rounded-md border ${project.border} bg-[#10121A] px-2.5 py-1 font-mono text-xs text-slate-300`}
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Terminal footer */}
            <div className="mt-8 border-t border-[#303344] pt-5 font-mono text-sm">
              <p className="text-slate-400">
                <span className="text-emerald-400">success</span>
                {" "}— experience history loaded.
              </p>
              <p className="mt-2 text-emerald-400">
                $ <span className="animate-pulse">_</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
