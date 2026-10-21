
import { useState } from "react";
import {
  FaTerminal,
  FaNetworkWired,
  FaDatabase,
  FaServer,
  FaShieldHalved,
  FaLayerGroup,
  FaDiagramProject,
  FaChartLine,
  FaCode,
} from "react-icons/fa6";

const levels = [
  {
    id: "fundamentals",
    label: "01. Fundamentals",
    color: "#10B981",
    description: "Understand the building blocks of application architecture.",
    topics: [
      {
        title: "Requirements & Estimation",
        description:
          "Identify functional and non-functional requirements, estimate traffic, storage, bandwidth, and request volume.",
        concepts: ["Functional requirements", "NFRs", "Capacity estimation"],
        icon: FaDiagramProject,
      },
      {
        title: "Networking & APIs",
        description:
          "Understand how clients communicate with backend services and how web requests travel through a system.",
        concepts: ["HTTP / HTTPS", "REST APIs", "DNS", "TCP/IP"],
        icon: FaNetworkWired,
      },
      {
        title: "Application Architecture",
        description:
          "Understand the responsibilities of frontend, backend, API, service, and database layers.",
        concepts: ["Monolith", "Three-tier architecture", "Microservices"],
        icon: FaLayerGroup,
      },
      {
        title: "Databases",
        description:
          "Choose suitable data models and understand how databases store, retrieve, and protect data.",
        concepts: ["SQL vs NoSQL", "Indexes", "Transactions", "Normalization"],
        icon: FaDatabase,
      },
      {
        title: "Scaling & Performance",
        description:
          "Learn how applications handle growing traffic and identify performance bottlenecks.",
        concepts: ["Vertical scaling", "Horizontal scaling", "Latency", "Throughput"],
        icon: FaChartLine,
      },
      {
        title: "Security & Authentication",
        description:
          "Protect APIs, user sessions, application data, and access to resources.",
        concepts: ["Authentication", "Authorization", "JWT", "TLS"],
        icon: FaShieldHalved,
      },
    ],
  },
  {
    id: "intermediate",
    label: "02. Intermediate",
    color: "#38BDF8",
    description: "Design systems that handle traffic, failures, and concurrent work.",
    topics: [
      {
        title: "Load Balancing",
        description:
          "Distribute incoming requests across multiple application instances and understand health checks.",
        concepts: ["Reverse proxy", "Load balancers", "Health checks"],
        icon: FaNetworkWired,
      },
      {
        title: "Caching & Redis",
        description:
          "Reduce database load and response times with carefully managed caching strategies.",
        concepts: ["Cache-aside", "TTL", "Eviction", "Cache invalidation"],
        icon: FaDatabase,
      },
      {
        title: "Message Queues",
        description:
          "Move slow or asynchronous tasks out of request-response flows and decouple services.",
        concepts: ["RabbitMQ", "Kafka", "Async processing", "Dead-letter queues"],
        icon: FaLayerGroup,
      },
      {
        title: "Concurrency & Reliability",
        description:
          "Prevent duplicate operations and design safe behavior when requests are retried or services fail.",
        concepts: ["Race conditions", "Idempotency", "Retries", "Timeouts"],
        icon: FaServer,
      },
      {
        title: "Distributed Systems",
        description:
          "Understand service communication, consistency, replication, and partial failures.",
        concepts: ["Replication", "Consistency", "Service discovery"],
        icon: FaDiagramProject,
      },
      {
        title: "Observability & Rate Limiting",
        description:
          "Protect services from excessive requests and diagnose production issues using system signals.",
        concepts: ["Rate limiting", "Logs", "Metrics", "Distributed tracing"],
        icon: FaChartLine,
      },
    ],
  },
  {
    id: "advanced",
    label: "03. Advanced",
    color: "#A78BFA",
    description: "Explore distributed architecture trade-offs and large-scale resilience.",
    topics: [
      {
        title: "CAP Theorem & Consensus",
        description:
          "Explore consistency and availability trade-offs during network partitions and how distributed nodes coordinate.",
        concepts: ["CAP theorem", "Quorums", "Leader election", "Consensus"],
        icon: FaDiagramProject,
      },
      {
        title: "Sharding & Partitioning",
        description:
          "Distribute large datasets across multiple database nodes and understand the trade-offs.",
        concepts: ["Shard keys", "Hash partitioning", "Hotspots", "Rebalancing"],
        icon: FaDatabase,
      },
      {
        title: "Event-Driven Architecture",
        description:
          "Design systems around events and understand patterns for coordinating distributed business operations.",
        concepts: ["Event sourcing", "CQRS", "Saga pattern", "Outbox pattern"],
        icon: FaLayerGroup,
      },
      {
        title: "Multi-Region Architecture",
        description:
          "Design applications for geographic distribution, regional failures, and data replication.",
        concepts: ["Active-active", "Active-passive", "Replication lag"],
        icon: FaNetworkWired,
      },
      {
        title: "Disaster Recovery & SLOs",
        description:
          "Plan for outages and define measurable targets for reliability and recovery.",
        concepts: ["RTO", "RPO", "SLO", "SLI", "Error budgets"],
        icon: FaShieldHalved,
      },
      {
        title: "Cost & Architecture Trade-offs",
        description:
          "Evaluate complexity, operational cost, scalability, and reliability before selecting a design.",
        concepts: ["Bottleneck analysis", "Cost estimation", "Trade-offs"],
        icon: FaChartLine,
      },
    ],
  },
];

const exercises = [
  {
    title: "URL Shortener",
    difficulty: "Fundamentals",
    description:
      "Design a service that generates short links, redirects users, and tracks link usage.",
    focus: ["REST APIs", "Database schema", "Caching", "Unique IDs"],
  },
  {
    title: "Employee Management System",
    difficulty: "Fundamentals",
    description:
      "Design a full-stack employee application with secure access, CRUD operations, and persistent data.",
    focus: ["React", "Spring Boot", "SQL", "Authentication"],
  },
  {
    title: "Notification Service",
    difficulty: "Intermediate",
    description:
      "Design a service that processes notifications asynchronously and handles retries and delivery failures.",
    focus: ["Message queues", "Retries", "Idempotency", "Monitoring"],
  },
  {
    title: "E-commerce Platform",
    difficulty: "Intermediate",
    description:
      "Design product browsing, cart management, order processing, and inventory updates.",
    focus: ["Caching", "Transactions", "Queues", "Consistency"],
  },
  {
    title: "Video Streaming Platform",
    difficulty: "Advanced",
    description:
      "Explore large-scale media delivery, content distribution, and high traffic.",
    focus: ["CDN", "Object storage", "Load balancing", "Observability"],
  },
  {
    title: "Distributed Payment System",
    difficulty: "Advanced",
    description:
      "Design payment processing with duplicate-request protection, transaction states, and failure recovery.",
    focus: ["Idempotency", "Consistency", "Saga", "Audit logs"],
  },
];

function TopicCard({ topic, accent }) {
  const Icon = topic.icon;

  return (
    <article
      className="group rounded-xl border border-[#303344] bg-[#1B2030]
        p-5 transition-all duration-300 hover:-translate-y-1
        hover:border-[#8B5CF6]/60 hover:shadow-lg hover:shadow-black/20"
    >
      <div className="mb-4 flex items-start gap-3">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center
            rounded-lg border border-[#303344] bg-[#10121A]"
          style={{ color: accent }}
        >
          <Icon size={18} />
        </div>

        <div className="min-w-0">
          <h3 className="font-semibold text-[#F8FAFC]">
            {topic.title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-[#94A3B8]">
            {topic.description}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {topic.concepts.map((concept) => (
          <span
            key={concept}
            className="rounded-md border border-[#303344] bg-[#10121A]
              px-2 py-1 font-mono text-xs text-[#CBD5E1]"
          >
            {concept}
          </span>
        ))}
      </div>
    </article>
  );
}

function ExerciseCard({ exercise }) {
  return (
    <article className="flex flex-col rounded-xl border border-[#303344] bg-[#1B2030] p-5 transition-colors hover:border-[#8B5CF6]/50">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <span className="font-mono text-xs text-[#38BDF8]">
          {exercise.difficulty}
        </span>
        <FaCode className="text-[#64748B]" />
      </div>

      <h3 className="text-lg font-semibold text-[#F8FAFC]">
        {exercise.title}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-6 text-[#94A3B8]">
        {exercise.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {exercise.focus.map((item) => (
          <span
            key={item}
            className="rounded-md border border-[#303344] px-2 py-1
              text-xs text-[#CBD5E1]"
          >
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function SystemDesign() {
  const [activeLevel, setActiveLevel] = useState("fundamentals");
  const [showAllExercises, setShowAllExercises] = useState(false);

  const currentLevel = levels.find(
    (level) => level.id === activeLevel
  );

  const displayedExercises = showAllExercises
    ? exercises
    : exercises.slice(0, 3);

  return (
    <main className="min-h-screen bg-[#10121A] px-4 py-16 text-[#F8FAFC] sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <header className="mb-10">
          <p className="mb-3 font-mono text-sm text-[#10B981]">
            <FaTerminal className="mr-2 inline" />
            ~/portfolio/system-design
          </p>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            System Design
            <span className="text-[#8B5CF6]">.</span>
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#94A3B8] sm:text-base">
            My system design learning roadmap — from application
            fundamentals to distributed systems, scalability, and
            reliability.
          </p>
        </header>

        {/* Terminal intro */}
        <section className="mb-10 overflow-hidden rounded-xl border border-[#303344] bg-[#1B2030]">
          <div className="flex items-center gap-2 border-b border-[#303344] bg-[#161925] px-4 py-3">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#F87171]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FBBF24]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#34D399]" />
            </div>
            <span className="ml-2 font-mono text-xs text-[#94A3B8]">
              system-design-roadmap.sh
            </span>
          </div>

          <div className="space-y-3 p-5 font-mono text-xs leading-6 sm:p-6 sm:text-sm">
            <p>
              <span className="text-[#10B981]">$</span>{" "}
              <span className="text-[#38BDF8]">./start-learning.sh</span>
            </p>
            <p className="text-[#CBD5E1]">
              Learn the requirements. Design the architecture.
              Understand the trade-offs.
            </p>
            <p>
              <span className="text-[#10B981]">[INFO]</span>{" "}
              <span className="text-[#94A3B8]">
                Focus: Java · Spring Boot · React · SQL · Distributed Systems
              </span>
            </p>
            <p>
              <span className="text-[#A78BFA]">➜</span>{" "}
              <span className="text-[#CBD5E1]">
                Select a learning level to explore the roadmap.
              </span>
            </p>
          </div>
        </section>

        {/* Level filters */}
        <section className="mb-8">
          <p className="mb-3 font-mono text-xs text-[#64748B]">
            SELECT_LEARNING_LEVEL
          </p>

          <div className="flex flex-wrap gap-2">
            {levels.map((level) => {
              const selected = activeLevel === level.id;

              return (
                <button
                  key={level.id}
                  type="button"
                  onClick={() => setActiveLevel(level.id)}
                  aria-pressed={selected}
                  className={`rounded-lg border px-4 py-3 font-mono text-xs
                    transition-all duration-200 sm:text-sm ${
                      selected
                        ? "bg-[#8B5CF6]/15 text-white"
                        : "border-[#303344] bg-[#1B2030] text-[#94A3B8] hover:text-white"
                    }`}
                  style={{
                    borderColor: selected ? level.color : undefined,
                  }}
                >
                  {selected ? "> " : ""}
                  {level.label}
                </button>
              );
            })}
          </div>
        </section>

        {/* Selected level */}
        <section className="mb-12">
          <div className="mb-6">
            <p
              className="mb-2 font-mono text-xs"
              style={{ color: currentLevel.color }}
            >
              {currentLevel.label}
            </p>

            <h2 className="text-2xl font-semibold sm:text-3xl">
              {currentLevel.id === "fundamentals"
                ? "Build the foundation"
                : currentLevel.id === "intermediate"
                  ? "Design for real-world traffic"
                  : "Think in distributed systems"}
            </h2>

            <p className="mt-3 text-sm leading-6 text-[#94A3B8]">
              {currentLevel.description}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {currentLevel.topics.map((topic) => (
              <TopicCard
                key={topic.title}
                topic={topic}
                accent={currentLevel.color}
              />
            ))}
          </div>
        </section>

        {/* Design methodology */}
        <section className="mb-12">
          <div className="mb-6">
            <p className="mb-2 font-mono text-xs text-[#10B981]">
              ./design-process
            </p>
            <h2 className="text-2xl font-semibold">
              How to approach a design problem
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["01", "Clarify", "Define functional and non-functional requirements."],
              ["02", "Estimate", "Estimate traffic, storage, and throughput."],
              ["03", "Design", "Define APIs, data models, and major components."],
              ["04", "Evaluate", "Discuss bottlenecks, failures, security, and trade-offs."],
            ].map(([number, title, description]) => (
              <article
                key={number}
                className="rounded-xl border border-[#303344] bg-[#1B2030] p-5"
              >
                <p className="font-mono text-sm text-[#8B5CF6]">
                  STEP_{number}
                </p>
                <h3 className="mt-3 font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#94A3B8]">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Practice problems */}
        <section className="mb-12">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-2 font-mono text-xs text-[#38BDF8]">
                ./practice-problems
              </p>
              <h2 className="text-2xl font-semibold">
                System design exercises
              </h2>
              <p className="mt-2 text-sm text-[#94A3B8]">
                Practice applying concepts to realistic applications.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setShowAllExercises((value) => !value)}
              className="rounded-lg border border-[#303344] px-4 py-2
                font-mono text-xs text-[#CBD5E1] transition
                hover:border-[#8B5CF6] hover:text-white"
            >
              {showAllExercises ? "Show fewer" : "View all exercises"}
            </button>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {displayedExercises.map((exercise) => (
              <ExerciseCard key={exercise.title} exercise={exercise} />
            ))}
          </div>
        </section>

        {/* Closing terminal */}
        <footer className="rounded-xl border border-[#303344] bg-[#1B2030] p-6 sm:p-8">
          <p className="font-mono text-xs text-[#10B981]">
            $ echo $NEXT_STEP
          </p>
          <h2 className="mt-3 text-xl font-semibold sm:text-2xl">
            Learn the fundamentals. Practice the trade-offs.
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-[#94A3B8]">
            My goal is to strengthen my ability to design maintainable,
            reliable, and scalable applications alongside my AEM and
            full-stack Java development experience.
          </p>
        </footer>
      </div>
    </main>
  );
}
