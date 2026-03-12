import Link from "next/link";
import BookDemoButton from "@/components/BookDemoButton";
import { CheckCircle2, LifeBuoy, PlugZap } from "lucide-react";

export const metadata = {
  title: "Documentation | NoorNova",
  description:
    "Documentation for NoorNova AI automation: setup, integrations, and best practices.",
};

export default function DocumentationPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="relative w-full overflow-hidden border-b border-gray-100">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{ backgroundImage: "url('/3Dimg.jpg')" }}
        />
        <div className="absolute inset-0 bg-[url('/hero-network.svg')] bg-cover bg-center opacity-50" />
        <div className="absolute inset-0 hero-image-overlay" />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-14 pt-28 md:px-10 lg:px-20">
          <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
            NoorNova{" "}
            <span className="bg-gradient-to-r from-blue-700 via-purple-800 to-teal-700 bg-clip-text text-transparent">
              Documentation
            </span>
          </h1>
          <p className="mt-4 max-w-3xl text-base text-gray-700 sm:text-lg">
            Quick setup guides, product fundamentals, and best practices to help
            you launch AI automation fast.
          </p>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent via-white/70 to-white" />
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-20 pt-10 md:px-10 lg:px-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr]">
          <div className="space-y-10">
            <DocSection id="getting-started" title="Getting Started">
              <ol className="list-decimal space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
                <li>
                  Click <span className="font-semibold">Book Demo</span> and
                  submit your details.
                </li>
                <li>
                  We confirm your goals (appointments, leads, support, etc.).
                </li>
                <li>
                  We set up your AI workflow and connect your phone/messaging
                  channels.
                </li>
                <li>
                  Test with sample calls/messages, then go live.
                </li>
              </ol>
            </DocSection>

            <DocSection id="ai-voice-agents" title="AI Voice Agents">
              <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
                <li>Answer inbound calls 24/7.</li>
                <li>Qualify leads with your preferred questions.</li>
                <li>Book appointments and send confirmations.</li>
                <li>Follow up on missed calls with instant outreach.</li>
              </ul>
            </DocSection>

            <DocSection id="whatsapp-automation" title="WhatsApp Automation">
              <p className="text-sm leading-7 text-slate-700 sm:text-base">
                Automate lead nurturing and customer updates with WhatsApp
                sequences. Typical flows include: new lead welcome, appointment
                reminders, post-visit follow-ups, and review requests.
              </p>
            </DocSection>

            <DocSection id="integrations" title="Integrations">
              <div className="space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
                <p>
                  NoorNova can be connected to your existing tools (calendar,
                  CRM, forms, and internal systems). During onboarding, we help
                  configure the best setup for your workflow.
                </p>
                <p>
                  If you need a custom integration, contact us with your tool
                  name and desired outcome.
                </p>
              </div>
            </DocSection>

            <DocSection id="support" title="Support">
              <p className="text-sm leading-7 text-slate-700 sm:text-base">
                For questions, reach out at{" "}
                <a
                  className="font-semibold text-blue-700 hover:underline"
                  href="mailto:hello@noornova.com"
                >
                  hello@noornova.com
                </a>{" "}
                or visit the{" "}
                <Link
                  href="/help_center"
                  className="font-semibold text-blue-700 hover:underline"
                >
                  Help Center
                </Link>
                .
              </p>
            </DocSection>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-blue-600" />
                <div>
                  <div className="font-semibold text-slate-900">
                    Recommended Setup
                  </div>
                  <p className="mt-1 text-sm text-slate-700">
                    Start with call answering + appointment booking, then add
                    follow-up automation for maximum impact.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <PlugZap className="mt-0.5 h-5 w-5 text-purple-600" />
                <div>
                  <div className="font-semibold text-slate-900">Need an API?</div>
                  <p className="mt-1 text-sm text-slate-700">
                    We can help you connect NoorNova with your CRM or internal
                    tools. Share your requirements and we’ll guide you.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 p-6 text-white shadow-md">
              <div className="flex items-start gap-3">
                <LifeBuoy className="mt-0.5 h-5 w-5 text-white" />
                <div>
                  <div className="font-semibold">Want help implementing?</div>
                  <p className="mt-1 text-sm text-white/90">
                    Book a demo and we’ll set everything up with you.
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <BookDemoButton className="hero-btn-primary rounded-md px-5 py-2.5 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(74,93,255,0.34)]">
                      Book Demo
                    </BookDemoButton>
                    <Link
                      href="/#contact"
                      className="rounded-md bg-white/15 px-5 py-2.5 text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/20"
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

function DocSection({ id, title, children }) {
  return (
    <section id={id}>
      <h2 className="text-lg font-bold text-slate-900 sm:text-xl">{title}</h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}
