
import { useState } from "react";
import {
  FaTerminal,
  FaLayerGroup,
  FaJava,
  FaReact,
  FaDatabase,
  FaTools,
  FaCodeBranch,
} from "react-icons/fa";

const skillGroups = [
  {
    id: "aem",
    title: "AEM DEVELOPMENT",
    path: "~/skills/aem",
    icon: FaLayerGroup,
    accent: "#A78BFA",
    description: "Enterprise content management",
    skills: [
      "AEM Sites",
      "AEM Assets / DAM",
      "AEM Forms",
      "Adaptive Forms",
      "Adaptive Form Fragments",
      "Rule Editor",
      "Custom Functions",
      "Sling Models",
      "OSGi Services",
      "Sling Servlets",
      "HTL",
      "JCR",
      "Oak Indexing",
      "Workflows",
      "Event Listeners",
      "ACL Permissions",
      "AEM Migration",
    ],
  },
  {
    id: "java",
    title: "JAVA & BACKEND",
    path: "~/skills/backend",
    icon: FaJava,
    accent: "#F59E0B",
    description: "Application logic and server-side development",
    skills: [
      "Core Java",
      "OOP",
      "Collections",
      "Exception Handling",
      "JDBC",
      "Servlets",
      "JSP",
      "Hibernate",
      "Spring",
      "Spring Boot",
      "REST APIs",
      "Maven",
    ],
  },
  {
    id: "frontend",
    title: "FRONTEND DEVELOPMENT",
    path: "~/skills/frontend",
    icon: FaReact,
    accent: "#38BDF8",
    description: "Interactive and responsive user interfaces",
    skills: [
      "React",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "React Router",
      "Context API",
      "useState",
      "useEffect",
      "useContext",
      "useReducer",
      "React Hooks",
      "Responsive Design",
    ],
  },
  {
    id: "database",
    title: "DATABASES",
    path: "~/skills/database",
    icon: FaDatabase,
    accent: "#10B981",
    description: "Relational data and persistence",
    skills: [
      "SQL",
      "MySQL",
      "CRUD Operations",
      "Joins",
      "Database Connectivity",
    ],
  },
  
{
  id: "tools",
  title: "DEVELOPER TOOLS & CI/CD",
  path: "~/skills/tools",
  icon: FaTools,
  accent: "#F472B6",
  description: "Development, version control, and deployment workflows",
  skills: [
    "Git",
    "GitHub",
    "Bitbucket",
    "Jenkins",
    "CI/CD Pipelines",
    "Maven",
    "Postman",
    "Eclipse",
    "Visual Studio Code",
    "AEM SDK",
    "Chrome DevTools",
  ],
},

];

const filters = [
  { label: "All", value: "all" },
  { label: "AEM", value: "aem" },
  { label: "Java", value: "java" },
  { label: "React", value: "frontend" },
  { label: "Database", value: "database" },
  { label: "Tools", value: "tools" },
];

function SkillTag({ skill, accent }) {
  return (
    <span
      className="inline-flex items-center gap-2 rounded-md
        border border-[#303344] bg-[#10121A] px-3 py-2
        font-mono text-xs text-[#CBD5E1]
        transition-all duration-200
        hover:-translate-y-0.5 hover:border-opacity-70
        hover:bg-[#24283A] hover:text-white sm:text-sm"
      style={{ "--skill-accent": accent }}
    >
      <span
        className="h-1.5 w-1.5 shrink-0 rounded-full"
        style={{ backgroundColor: accent }}
      />
      {skill}
    </span>
  );
}

function SkillTerminal({ group, index }) {
  const Icon = group.icon;

  return (
    <article
      className="group overflow-hidden rounded-xl border border-[#303344]
        bg-[#1B2030] transition-all duration-300
        hover:-translate-y-1 hover:border-[#8B5CF6]/60
        hover:shadow-lg hover:shadow-black/20"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Terminal title bar */}
      <div
        className="flex flex-wrap items-center justify-between gap-3
          border-b border-[#303344] bg-[#161925] px-4 py-3"
      >
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#F87171]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FBBF24]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#34D399]" />
          </div>

          <span className="ml-2 font-mono text-xs text-[#94A3B8]">
            {group.path}
          </span>
        </div>

        <span className="font-mono text-xs text-[#64748B]">
          [{String(index + 1).padStart(2, "0")}]
        </span>
      </div>

      {/* Terminal content */}
      <div className="p-5 sm:p-6">
        <div className="mb-4 flex items-start gap-3">
          <div
            className="flex h-11 w-11 shrink-0 items-center justify-center
              rounded-lg border border-[#303344] bg-[#10121A]"
            style={{ color: group.accent }}
          >
            <Icon size={22} />
          </div>

          <div className="min-w-0">
            <h3 className="font-mono text-sm font-semibold tracking-wide text-[#F8FAFC]">
              {group.title}
            </h3>
            <p className="mt-1 text-xs leading-5 text-[#94A3B8]">
              {group.description}
            </p>
          </div>
        </div>

        <div className="mb-3 font-mono text-xs">
          <span className="text-[#10B981]">$</span>{" "}
          <span className="text-[#38BDF8]">ls</span>{" "}
          <span className="text-[#CBD5E1]">./technologies</span>
        </div>

        <div className="mb-4 h-px bg-[#303344]" />

        <div className="flex flex-wrap gap-2">
          {group.skills.map((skill) => (
            <SkillTag
              key={skill}
              skill={skill}
              accent={group.accent}
            />
          ))}
        </div>

        <div className="mt-5 flex items-center gap-2 border-t border-[#303344] pt-3">
          <span
            className="h-1.5 w-1.5 animate-pulse rounded-full"
            style={{ backgroundColor: group.accent }}
          />
          <span className="font-mono text-xs text-[#64748B]">
            {group.skills.length} technologies listed
          </span>
        </div>
      </div>
    </article>
  );
}

export default function TechStack() {
  const [activeFilter, setActiveFilter] = useState("all");

  const visibleGroups =
    activeFilter === "all"
      ? skillGroups
      : skillGroups.filter((group) => group.id === activeFilter);

  const totalSkills = visibleGroups.reduce(
    (total, group) => total + group.skills.length,
    0
  );

  return (
    <main
      className="min-h-screen bg-[#10121A] px-4 py-16
        text-[#F8FAFC] sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <header className="mb-10">
          <p className="mb-3 font-mono text-sm text-[#10B981]">
            <FaTerminal className="mr-2 inline" />
            ~/portfolio/tech-stack
          </p>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            My Tech Stack
            <span className="text-[#8B5CF6]">.</span>
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#94A3B8] sm:text-base">
            Technologies and tools I work with across enterprise AEM
            development and my journey toward full-stack Java and React
            development.
          </p>
        </header>

        {/* Terminal overview */}
        <section
          className="mb-8 overflow-hidden rounded-xl border
            border-[#303344] bg-[#1B2030]"
        >
          <div
            className="flex items-center gap-2 border-b border-[#303344]
              bg-[#161925] px-4 py-3"
          >
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#F87171]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FBBF24]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#34D399]" />
            </div>
            <span className="ml-2 font-mono text-xs text-[#94A3B8]">
              rakesh@developer-studio:~
            </span>
          </div>

          <div className="space-y-3 p-5 font-mono text-xs leading-6 sm:p-6 sm:text-sm">
            <p>
              <span className="text-[#10B981]">rakesh@dev</span>
              <span className="text-[#94A3B8]">:</span>
              <span className="text-[#38BDF8]">~</span>
              <span className="text-white"> $ whoami</span>
            </p>

            <p className="text-[#CBD5E1]">
              Software Engineer | AEM | Java | React
            </p>

            <p>
              <span className="text-[#10B981]">rakesh@dev</span>
              <span className="text-[#94A3B8]">:</span>
              <span className="text-[#38BDF8]">~</span>
              <span className="text-white"> $ cat focus.txt</span>
            </p>

            <p className="text-[#94A3B8]">
              Enterprise AEM development, full-stack applications,
              databases, and continuous learning.
            </p>

            <p>
              <span className="text-[#10B981]">➜</span>{" "}
              <span className="text-[#A78BFA]">
                Ready to explore the stack.
              </span>
              <span className="ml-1 inline-block h-4 w-2 animate-pulse bg-[#8B5CF6] align-middle" />
            </p>
          </div>
        </section>

        {/* Filters */}
        <div className="mb-6">
          <p className="mb-3 font-mono text-xs text-[#64748B]">
            SELECT_DIRECTORY
          </p>

          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => {
              const selected = activeFilter === filter.value;

              return (
                <button
                  key={filter.value}
                  type="button"
                  onClick={() => setActiveFilter(filter.value)}
                  aria-pressed={selected}
                  className={`rounded-lg border px-4 py-2 font-mono
                    text-xs transition-all duration-200 sm:text-sm ${
                      selected
                        ? "border-[#8B5CF6] bg-[#8B5CF6]/15 text-[#C4B5FD]"
                        : "border-[#303344] bg-[#1B2030] text-[#94A3B8] hover:border-[#8B5CF6]/60 hover:text-white"
                    }`}
                >
                  {selected ? "> " : ""}
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic summary */}
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <p className="font-mono text-xs text-[#94A3B8]">
            <span className="text-[#10B981]">●</span>{" "}
            {visibleGroups.length} directories
            <span className="mx-2 text-[#475569]">|</span>
            {totalSkills} listed technologies
          </p>

          <p className="font-mono text-xs text-[#64748B]">
            status: catalog loaded
          </p>
        </div>

        {/* Responsive terminal grid */}
        <section
          aria-label="Technology categories"
          className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {visibleGroups.map((group) => (
            <SkillTerminal
              key={group.id}
              group={group}
              index={skillGroups.findIndex(
                (item) => item.id === group.id
              )}
            />
          ))}
        </section>

        {/* Footer */}
        <footer className="mt-10 border-t border-[#303344] pt-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-mono text-xs leading-6 text-[#64748B]">
              <FaCodeBranch className="mr-2 inline text-[#10B981]" />
              Learning, building, and improving — one commit at a time.
            </p>

            <span className="font-mono text-xs text-[#94A3B8]">
              EOF
            </span>
          </div>
        </footer>
      </div>
    </main>
  );
}
