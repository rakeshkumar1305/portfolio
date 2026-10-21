import { useMemo, useState } from "react";
import {
  FaArrowRight,
  FaCode,
  FaDatabase,
  FaLayerGroup,
  FaLaptopCode,
  FaTerminal,
} from "react-icons/fa6";

const projects = [
  // PROFESSIONAL AEM PROJECTS
  {
    id: 1,
    title: "O'Reilly — AEM Assets",
    category: "Professional",
    type: "Client Project",
    subtitle: "Digital Asset Management & Automation",
    description:
      "Worked as a full-stack AEM developer on enterprise digital asset management, workflow automation, and automated image-processing capabilities.",
    responsibilities: [
      "Created workflows and email notifications.",
      "Configured ACL permissions and worked on Oak indexing.",
      "Implemented automated image modification and whitespace removal.",
      "Developed image modification reports.",
      "Worked with logging and event listeners.",
    ],
    technologies: [
      "AEM Assets",
      "Java",
      "OSGi",
      "JCR",
      "Oak",
      "Workflows",
    ],
    icon: <FaLayerGroup />,
    featured: true,
  },
  {
    id: 2,
    title: "Fleetcore — AEM Sites",
    category: "Professional",
    type: "Client Project",
    subtitle: "Enterprise Website Development",
    description:
      "Worked as a full-stack AEM developer, enhancing website functionality, resolving technical issues, implementing fraud-detection functionality, and supporting platform migration.",
    responsibilities: [
      "Debugged and fixed application issues.",
      "Developed and enhanced user interfaces.",
      "Implemented fraud-detection functionality.",
      "Supported migration from AEM 6.5 to AEM 6.5 LTS.",
    ],
    technologies: [
      "AEM Sites",
      "Java",
      "HTL",
      "JavaScript",
      "OSGi",
      "JCR",
    ],
    icon: <FaCode />,
    featured: true,
  },
  {
    id: 3,
    title: "AEM Forms Development",
    category: "Professional",
    type: "Current Project",
    subtitle: "Adaptive Forms & Form Customization",
    description:
      "Working on AEM Forms, focusing on Adaptive Form creation, reusable form fragments, form design, and dynamic behavior using rules and custom functions.",
    responsibilities: [
      "Work with AEM Forms Designer for form design and customization.",
      "Create and reuse Adaptive Form Fragments.",
      "Configure rules in Adaptive Forms to implement dynamic behavior.",
      "Develop and use custom functions to support form logic.",
      "Improve reusability through modular form components.",
    ],
    technologies: [
      "AEM Forms",
      "Adaptive Forms",
      "Form Fragments",
      "Rule Editor",
      "Custom Functions",
      "JavaScript",
    ],
    icon: <FaLayerGroup />,
    featured: true,
  },

  // JAVA + REACT + SQL FULL-STACK PROJECTS
  {
    id: 4,
    title: "Employee Management System",
    category: "Full Stack",
    type: "Personal Project",
    subtitle: "Employee Administration Platform",
    description:
      "A full-stack employee management application combining a React frontend, Java backend, and SQL database to manage employee information.",
    responsibilities: [
      "Build employee management screens using React.",
      "Implement backend business logic in Java.",
      "Connect the frontend and backend through APIs, where implemented.",
      "Use SQL to persist and manage employee records.",
      "Organize the application into frontend, backend, and database layers.",
    ],
    technologies: ["Java", "React", "SQL"],
    icon: <FaDatabase />,
    featured: true,
  },
  {
    id: 5,
    title: "Banking Management System",
    category: "Full Stack",
    type: "Personal Project",
    subtitle: "Banking Operations Application",
    description:
      "A full-stack banking application combining a React user interface, Java backend processing, and SQL data storage for banking-related operations.",
    responsibilities: [
      "Develop the frontend with React components and forms.",
      "Implement banking application logic in Java.",
      "Use SQL to store and retrieve application data.",
      "Connect application layers to support data flow.",
      "Structure the application for maintainable full-stack development.",
    ],
    technologies: ["Java", "React", "SQL"],
    icon: <FaDatabase />,
    featured: true,
  },
  {
    id: 6,
    title: "E-learning Management System",
    category: "Full Stack",
    type: "Personal Project",
    subtitle: "Online Learning Platform",
    description:
      "A full-stack learning management application combining a React frontend, Java backend, and SQL database for an online learning platform.",
    responsibilities: [
      "Create user-facing pages and reusable UI components in React.",
      "Develop backend functionality using Java.",
      "Use SQL for application data storage and retrieval.",
      "Integrate frontend and backend functionality.",
      "Structure the application across frontend, backend, and database layers.",
    ],
    technologies: ["Java", "React", "SQL"],
    icon: <FaDatabase />,
    featured: true,
  },

  // REACT PROJECTS
  {
    id: 7,
    title: "To-Do Application",
    category: "React",
    type: "Personal Project",
    subtitle: "Task Management & Productivity",
    description:
      "A React application for organizing everyday tasks through a dynamic user interface, demonstrating component-based development and state management.",
    responsibilities: [
      "Build reusable components for displaying tasks.",
      "Manage task-related state with React hooks.",
      "Handle user interactions through event handlers.",
      "Organize the interface into maintainable components.",
    ],
    technologies: ["React", "JavaScript", "HTML", "CSS"],
    icon: <FaLaptopCode />,
  },
  {
    id: 8,
    title: "Splitwise Application",
    category: "React",
    type: "Personal Project",
    subtitle: "Shared Expense Management",
    description:
      "A React project inspired by expense-sharing applications, focusing on a user interface for organizing shared expenses and representing how costs can be divided.",
    responsibilities: [
      "Build reusable UI components for expense-related screens.",
      "Manage application state using React.",
      "Represent expense details and participant information.",
      "Practice component communication and interactive UI development.",
    ],
    technologies: ["React", "JavaScript", "HTML", "CSS"],
    icon: <FaLaptopCode />,
  },
  {
    id: 9,
    title: "Add-to-Cart Application",
    category: "React",
    type: "Personal Project",
    subtitle: "Product Listing & Shopping Cart",
    description:
      "A React shopping application combining product browsing with cart management, shared state, component communication, and interactive quantity controls.",
    responsibilities: [
      "Display product information in reusable components.",
      "Manage shared cart data using Context API.",
      "Add products to the cart and remove them.",
      "Implement quantity controls for cart items.",
      "Practice React Router and state-management patterns.",
    ],
    technologies: [
      "React",
      "JavaScript",
      "Context API",
      "React Router",
      "CSS",
    ],
    icon: <FaLaptopCode />,
  },
];

const filters = [
  { label: "All Projects", value: "All" },
  { label: "Professional", value: "Professional" },
  { label: "Java Full Stack", value: "Full Stack" },
  { label: "React", value: "React" },
];

const categoryStyles = {
  Professional: {
    label: "aem",
    text: "text-violet-300",
    border: "border-violet-500/30",
    background: "bg-violet-500/10",
    icon: "text-violet-300",
  },
  "Full Stack": {
    label: "java-full-stack",
    text: "text-sky-300",
    border: "border-sky-500/30",
    background: "bg-sky-500/10",
    icon: "text-sky-300",
  },
  React: {
    label: "react",
    text: "text-emerald-300",
    border: "border-emerald-500/30",
    background: "bg-emerald-500/10",
    icon: "text-emerald-300",
  },
};

function TerminalPrompt({ command }) {
  return (
    <p className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs sm:text-sm">
      <span className="text-emerald-400">visitor@portfolio</span>
      <span className="text-slate-600">:</span>
      <span className="text-sky-400">~/projects</span>
      <span className="text-slate-300">$ {command}</span>
    </p>
  );
}

function ProjectCard({ project, index }) {
  const style = categoryStyles[project.category];

  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-xl
        border border-[#303344] bg-[#151824]
        transition duration-300 hover:-translate-y-1
        hover:border-violet-500/50 hover:shadow-xl
        hover:shadow-violet-950/20 ${
          project.featured ? "" : ""
        }`}
    >
      {/* Card terminal header */}
      <div className="flex items-center justify-between gap-3 border-b border-[#303344] bg-[#1B2030]/80 px-4 py-3">
        <div className="flex items-center gap-2">
          <FaTerminal className={`text-xs ${style.icon}`} />
          <span className="font-mono text-xs text-slate-500">
            project_{String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <span
          className={`rounded-md border ${style.border} ${style.background}
            px-2 py-1 font-mono text-[10px] ${style.text}`}
        >
          {style.label}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {/* Project identity */}
        <div className="mb-5 flex items-start justify-between gap-3">
          <div
            className={`flex h-12 w-12 shrink-0 items-center justify-center
              rounded-xl border ${style.border} ${style.background}
              text-xl ${style.icon} transition duration-300
              group-hover:scale-105`}
          >
            {project.icon}
          </div>

          <span className="rounded-md border border-[#303344] bg-[#10121A]
            px-2.5 py-1.5 text-right font-mono text-[10px] leading-4
            text-slate-400 sm:text-xs">
            {project.type}
          </span>
        </div>

        <p className={`mb-2 font-mono text-xs ${style.text}`}>
          // {project.subtitle}
        </p>

        <h2 className="text-lg font-semibold leading-7 text-slate-100
          transition-colors group-hover:text-white sm:text-xl">
          {project.title}
        </h2>

        <p className="mt-3 text-sm leading-7 text-slate-400">
          {project.description}
        </p>

        {/* Responsibilities */}
        {project.responsibilities?.length > 0 && (
          <div className="mt-6">
            <p className="mb-3 font-mono text-xs text-slate-500">
              <span className="text-emerald-400">const</span>{" "}
              contributions = [
            </p>

            <ul className="space-y-2.5">
              {project.responsibilities.map((item, itemIndex) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm leading-6 text-slate-300"
                >
                  <span className={`mt-1 shrink-0 font-mono text-xs ${style.text}`}>
                    {String(itemIndex + 1).padStart(2, "0")}.
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-3 font-mono text-xs text-slate-600">];</p>
          </div>
        )}

        {/* Technology tags */}
        <div className="mt-auto pt-6">
          <div className="mb-3 border-t border-[#303344] pt-4">
            <p className="font-mono text-xs text-slate-500">
              // tech_stack
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-md border border-[#303344] bg-[#10121A]
                  px-2.5 py-1.5 font-mono text-[11px] text-slate-300
                  transition hover:border-violet-500/40 hover:text-violet-200"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }

    return projects.filter(
      (project) => project.category === activeFilter
    );
  }, [activeFilter]);

  const professionalCount = projects.filter(
    (project) => project.category === "Professional"
  ).length;

  const fullStackCount = projects.filter(
    (project) => project.category === "Full Stack"
  ).length;

  const reactCount = projects.filter(
    (project) => project.category === "React"
  ).length;

  return (
    <main
      id="projects"
      className="relative min-h-screen overflow-hidden
        bg-[#10121A] px-4 py-16 text-[#F8FAFC]
        sm:px-6 sm:py-20 lg:px-8"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-40
          h-96 w-96 rounded-full bg-violet-600/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Main terminal window */}
        <div className="mb-8 overflow-hidden rounded-2xl
          border border-[#303344] bg-[#151824] shadow-2xl shadow-black/20">

          {/* Terminal title bar */}
          <div className="flex flex-wrap items-center justify-between gap-3
            border-b border-[#303344] bg-[#1B2030] px-4 py-3 sm:px-6">

            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
            </div>

            <div className="flex items-center gap-2 font-mono text-xs text-slate-400 sm:text-sm">
              <FaTerminal />
              projects.sh
            </div>

            <span className="hidden font-mono text-xs text-slate-500 sm:block">
              bash — portfolio
            </span>
          </div>

          {/* Terminal content */}
          <div className="p-5 sm:p-8 lg:p-10">
            <TerminalPrompt command="./projects --list" />

            <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              My Projects<span className="text-violet-400">.</span>
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
              A collection of my professional AEM experience and personal
              projects across Java full-stack development and React.
            </p>

            {/* Project category summary */}
            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="rounded-lg border border-violet-500/20 bg-violet-500/5 p-4">
                <p className="font-mono text-xs text-violet-300">
                  professional
                </p>
                <p className="mt-2 text-2xl font-bold text-white">
                  {String(professionalCount).padStart(2, "0")}
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  AEM projects
                </p>
              </div>

              <div className="rounded-lg border border-sky-500/20 bg-sky-500/5 p-4">
                <p className="font-mono text-xs text-sky-300">
                  full_stack
                </p>
                <p className="mt-2 text-2xl font-bold text-white">
                  {String(fullStackCount).padStart(2, "0")}
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Java + React
                </p>
              </div>

              <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-4">
                <p className="font-mono text-xs text-emerald-300">
                  frontend
                </p>
                <p className="mt-2 text-2xl font-bold text-white">
                  {String(reactCount).padStart(2, "0")}
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  React projects
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Filter controls */}
        <section aria-label="Filter projects" className="mb-8">
          <TerminalPrompt command="filter --category" />

          <div className="mt-4 flex flex-wrap gap-2.5">
            {filters.map((filter) => {
              const isActive = activeFilter === filter.value;

              return (
                <button
                  key={filter.value}
                  type="button"
                  onClick={() => setActiveFilter(filter.value)}
                  aria-pressed={isActive}
                  className={`rounded-lg border px-4 py-2.5
                    font-mono text-xs transition duration-200
                    focus-visible:outline-2 focus-visible:outline-offset-4
                    focus-visible:outline-violet-400 ${
                      isActive
                        ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-300"
                        : "border-[#303344] bg-[#1B2030] text-slate-400 hover:border-violet-500/50 hover:text-white"
                    }`}
                >
                  {isActive && (
                    <span className="mr-2 text-emerald-400">›</span>
                  )}
                  {filter.label}
                </button>
              );
            })}
          </div>
        </section>

        {/* Results status */}
        <div
          aria-live="polite"
          className="mb-5 flex flex-wrap items-center justify-between gap-3
            border-b border-[#303344] pb-4"
        >
          <p className="font-mono text-xs text-slate-400">
            <span className="text-emerald-400">✓</span>{" "}
            {String(filteredProjects.length).padStart(2, "0")} projects found
          </p>

          <p className="font-mono text-xs text-slate-500">
            filter: {activeFilter.toLowerCase().replace(" ", "-")}
          </p>
        </div>

        {/* Project grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 items-stretch gap-5
            md:grid-cols-2 xl:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-[#303344]
            bg-[#151824] p-8 text-center">
            <FaTerminal className="mx-auto text-2xl text-slate-500" />
            <p className="mt-4 font-mono text-sm text-slate-300">
              No projects found.
            </p>
            <button
              type="button"
              onClick={() => setActiveFilter("All")}
              className="mt-4 inline-flex items-center gap-2
                font-mono text-sm text-violet-300 hover:text-violet-200"
            >
              Reset filters <FaArrowRight />
            </button>
          </div>
        )}

        {/* Footer CTA */}
        <div className="mt-12 overflow-hidden rounded-2xl
          border border-[#303344] bg-[#151824]">

          <div className="flex items-center gap-2 border-b
            border-[#303344] bg-[#1B2030] px-4 py-3 sm:px-6">
            <FaTerminal className="text-xs text-emerald-400" />
            <span className="font-mono text-xs text-slate-400">
              next_milestone.txt
            </span>
          </div>

          <div className="p-5 sm:p-8">
            <p className="font-mono text-xs text-emerald-400">
              $ cat career-goal.txt
            </p>

            <div className="mt-4 flex flex-col gap-5 sm:flex-row
              sm:items-center sm:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-xl font-bold sm:text-2xl">
                  Building toward full-stack Java development.
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  My focus is combining enterprise AEM experience with Java,
                  Spring Boot, React, REST APIs, and database development.
                </p>
              </div>

              <a
                href="/contact"
                className="inline-flex min-h-12 shrink-0 items-center
                  justify-center gap-3 self-start rounded-lg
                  border border-violet-500/40 bg-violet-500/10
                  px-5 py-3 font-mono text-sm font-semibold
                  text-violet-200 transition duration-300
                  hover:-translate-y-1 hover:border-violet-400
                  hover:bg-violet-500/20 focus-visible:outline-2
                  focus-visible:outline-offset-4 focus-visible:outline-violet-400
                  sm:self-center"
              >
                ./contact
                <FaArrowRight />
              </a>
            </div>
          </div>
        </div>

        {/* Terminal footer */}
        <div className="mt-6 font-mono text-xs text-slate-500">
          <p>
            <span className="text-emerald-400">SUCCESS</span>
            {" "}— project directory loaded.
          </p>
          <p className="mt-2">
            visitor@portfolio:~/projects$ _
          </p>
        </div>
      </div>
    </main>
  );
}
