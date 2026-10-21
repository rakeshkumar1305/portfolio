
import { useState } from "react";
import {
  FaArrowRight,
  FaCheckCircle,
  FaEnvelope,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaTerminal,
} from "react-icons/fa";

const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

const contactDetails = [
  {
    icon: FaEnvelope,
    label: "EMAIL",
    value: "Send a message using the form",
    color: "text-sky-400",
  },
  {
    icon: FaLinkedin,
    label: "LINKEDIN",
    value: "Connect professionally",
    href: "https://www.linkedin.com/in/rakesh-kumar1305/",
    color: "text-violet-400",
  },
  {
    icon: FaMapMarkerAlt,
    label: "LOCATION",
    value: "India",
    color: "text-emerald-400",
  },
];

const initialFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
  botcheck: "",
};

function TerminalPrompt({ children }) {
  return (
    <div className="mb-3 flex flex-wrap items-center gap-2 font-mono text-sm">
      <span className="text-emerald-400">➜</span>
      <span className="text-violet-400">~/contact</span>
      <span className="text-slate-500">$</span>
      <span className="text-slate-200">{children}</span>
    </div>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setStatus({ type: "", message: "" });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!ACCESS_KEY) {
      setStatus({
        type: "error",
        message:
          "Web3Forms access key is missing. Check your .env file and restart the development server.",
      });
      return;
    }

    // Honeypot: silently ignore submissions that fill this hidden field.
    if (formData.botcheck) {
      setStatus({
        type: "success",
        message: "Message submitted successfully.",
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: ACCESS_KEY,
            name: formData.name.trim(),
            email: formData.email.trim(),
            subject: formData.subject.trim(),
            message: formData.message.trim(),
            from_name: "Developer Portfolio",
            replyto: formData.email.trim(),
            botcheck: "",
          }),
        }
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Unable to send your message. Please try again."
        );
      }

      setStatus({
        type: "success",
        message:
          "Message sent successfully! Thank you for reaching out.",
      });

      setFormData({ ...initialFormData });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error.message ||
          "Something went wrong. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses =
    "w-full rounded-lg border border-[#303344] bg-[#10121A] px-4 py-3 text-sm text-slate-200 placeholder:text-slate-600 outline-none transition duration-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/10 disabled:cursor-not-allowed disabled:opacity-60";

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#10121A] px-4 py-20 text-slate-200 sm:px-6 lg:px-8 lg:py-28"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-violet-600/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-sky-500/10 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Section heading */}
        <div className="mb-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/5 px-3 py-1.5 font-mono text-xs text-violet-300">
            <FaTerminal />
            <span>CONTACT / 08</span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
            Let's build something{" "}
            <span className="text-violet-400">meaningful.</span>
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Have a job opportunity, a project idea, or want to talk
            about Java, React, or AEM? Send me a message.
          </p>
        </div>

        {/* Terminal window */}
        <div className="overflow-hidden rounded-2xl border border-[#303344] bg-[#1B2030]/90 shadow-2xl shadow-black/20">
          {/* Window header */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#303344] bg-[#171A27] px-4 py-3 sm:px-6">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-rose-400" />
              <span className="h-3 w-3 rounded-full bg-amber-400" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
            </div>

            <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
              <FaTerminal className="text-violet-400" />
              contact.sh
            </div>

            <span className="font-mono text-xs text-emerald-400">
              ● online
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* Contact information */}
            <div className="border-b border-[#303344] p-5 sm:p-8 lg:col-span-2 lg:border-b-0 lg:border-r">
              <TerminalPrompt>
                ./connect-with-me
              </TerminalPrompt>

              <h3 className="mb-3 text-xl font-semibold text-slate-50">
                Start a conversation
              </h3>

              <p className="mb-8 text-sm leading-6 text-slate-400">
                I'm a Software Engineer with professional AEM
                experience and a growing focus on full-stack Java
                development with React.
              </p>

              <div className="space-y-4">
                {contactDetails.map((item) => {
                  const Icon = item.icon;

                  const content = (
                    <>
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#1B2030] ${item.color}`}
                      >
                        <Icon />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="mb-1 font-mono text-[10px] tracking-[0.18em] text-slate-500">
                          {item.label}
                        </p>

                        <p className="break-words text-sm text-slate-200">
                          {item.value}
                        </p>
                      </div>
                    </>
                  );

                  return (
                    <div
                      key={item.label}
                      className="flex items-start gap-3 rounded-xl border border-[#303344] bg-[#10121A]/70 p-4 transition duration-300 hover:-translate-y-0.5 hover:border-violet-500/40"
                    >
                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noreferrer"
                          className="flex w-full items-start gap-3"
                        >
                          {content}
                        </a>
                      ) : (
                        content
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 border-t border-[#303344] pt-6">
                <p className="mb-3 font-mono text-xs text-slate-500">
                  // FIND ME ONLINE
                </p>

                <a
                  href="https://www.linkedin.com/in/rakesh-kumar1305/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Visit LinkedIn profile"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#303344] bg-[#10121A] text-slate-400 transition hover:border-violet-500/50 hover:text-violet-300"
                >
                  <FaLinkedin size={18} />
                </a>
              </div>
            </div>

            {/* Contact form */}
            <div className="p-5 sm:p-8 lg:col-span-3">
              <TerminalPrompt>
                ./send-message --interactive
              </TerminalPrompt>

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                {/* Honeypot spam field: keep hidden */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="contact-botcheck">
                    Leave this field empty
                  </label>
                  <input
                    id="contact-botcheck"
                    type="checkbox"
                    name="botcheck"
                    checked={Boolean(formData.botcheck)}
                    onChange={(event) =>
                      setFormData((previous) => ({
                        ...previous,
                        botcheck: event.target.checked ? "1" : "",
                      }))
                    }
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-2 block font-mono text-xs text-slate-400"
                    >
                      name <span className="text-violet-400">*</span>
                    </label>

                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      className={inputClasses}
                      required
                      maxLength={100}
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-2 block font-mono text-xs text-slate-400"
                    >
                      email <span className="text-violet-400">*</span>
                    </label>

                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClasses}
                      required
                      maxLength={254}
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="mb-2 block font-mono text-xs text-slate-400"
                  >
                    subject <span className="text-violet-400">*</span>
                  </label>

                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    placeholder="Job opportunity, collaboration..."
                    value={formData.subject}
                    onChange={handleChange}
                    className={inputClasses}
                    required
                    maxLength={150}
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block font-mono text-xs text-slate-400"
                  >
                    message <span className="text-violet-400">*</span>
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    placeholder="Hi, I'd like to discuss..."
                    value={formData.message}
                    onChange={handleChange}
                    className={`${inputClasses} resize-y`}
                    required
                    maxLength={5000}
                    disabled={isSubmitting}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-lg bg-violet-500 px-5 py-3.5 font-mono text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-violet-400 hover:shadow-lg hover:shadow-violet-500/20 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  <FaPaperPlane />

                  <span>
                    {isSubmitting
                      ? "sending_message()..."
                      : "send_message()"}
                  </span>

                  {!isSubmitting && (
                    <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                  )}
                </button>

                {status.message && (
                  <div
                    role={status.type === "error" ? "alert" : "status"}
                    aria-live="polite"
                    className={`flex items-start gap-2 rounded-lg border p-3 text-sm leading-6 ${
                      status.type === "success"
                        ? "border-emerald-500/20 bg-emerald-500/5 text-emerald-300"
                        : "border-rose-500/20 bg-rose-500/5 text-rose-300"
                    }`}
                  >
                    <FaCheckCircle className="mt-1 shrink-0" />
                    <span>{status.message}</span>
                  </div>
                )}

                <p className="text-xs leading-5 text-slate-500">
                  // Your message will be delivered through Web3Forms.
                </p>
              </form>
            </div>
          </div>

          {/* Terminal footer */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[#303344] bg-[#171A27] px-4 py-3 font-mono text-[10px] text-slate-500 sm:px-6">
            <span>contact.service: web3forms</span>
            <span className="text-emerald-400">
              ready_to_connect = true
            </span>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="font-mono text-xs text-slate-500">
            {"/* Thanks for visiting my portfolio */"}
          </p>
        </div>
      </div>
    </section>
  );
}
