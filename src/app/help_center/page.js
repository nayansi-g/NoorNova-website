import Link from "next/link";
import BookDemoButton from "@/components/BookDemoButton";
import { ChevronRight, LifeBuoy, MessageCircleQuestion, PhoneCall } from "lucide-react";

export const metadata = {
  title: "Help Center | NoorNova",
  description:
    "Find answers, troubleshooting steps, and support options for NoorNova AI automation.",
};

export default function HelpCenterPage() {
  const faqs = [
    {
      q: "How fast can NoorNova be set up?",
      a: "Most businesses can go live quickly after a short onboarding call. We’ll help connect your channels and test the flow before launch.",
    },
    {
      q: "Can the AI book appointments?",
      a: "Yes. We can configure appointment booking based on your availability and preferred scheduling rules.",
    },
    {
      q: "What happens if the AI can’t answer something?",
      a: "We can route calls/messages to your team, capture details for follow-up, or escalate based on your rules.",
    },
    {
      q: "Do you support integrations with CRMs?",
      a: "Yes. Tell us your CRM and desired workflow, and we’ll guide the best integration approach.",
    },
  ];

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
            Help{" "}
            <span className="bg-gradient-to-r from-blue-700 via-purple-800 to-teal-700 bg-clip-text text-transparent">
              Center
            </span>
          </h1>
          <p className="mt-4 max-w-3xl text-base text-gray-700 sm:text-lg">
            Quick answers and support options for NoorNova AI automation.
          </p>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent via-white/70 to-white" />
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-20 pt-10 md:px-10 lg:px-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_.95fr]">
          <div className="space-y-10">
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-start gap-3">
                <MessageCircleQuestion className="mt-0.5 h-5 w-5 text-blue-600" />
                <div>
                  <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
                    Frequently Asked Questions
                  </h2>
                  <p className="mt-1 text-sm text-slate-700 sm:text-base">
                    Start here for the most common questions.
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-5">
                {faqs.map((item) => (
                  <div key={item.q} className="rounded-2xl bg-slate-50 p-4">
                    <div className="font-semibold text-slate-900">{item.q}</div>
                    <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
                Useful Links
              </h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <HelpLink href="/documentation" label="Documentation" />
                <HelpLink href="/privacy_policy" label="Privacy Policy" />
                <HelpLink href="/terms_of_service" label="Terms of Service" />
                <HelpLink href="/services" label="Services" />
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-gray-200 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 p-6 text-white shadow-md sm:p-8">
              <div className="flex items-start gap-3">
                <LifeBuoy className="mt-0.5 h-5 w-5 text-white" />
                <div>
                  <div className="text-lg font-bold sm:text-xl">Contact Support</div>
                  <p className="mt-2 text-sm text-white/90 sm:text-base">
                    If you’re stuck, we’re here to help.
                  </p>
                  <div className="mt-5 space-y-3 text-sm text-white/90 sm:text-base">
                    <div className="flex items-center gap-2">
                      <PhoneCall className="h-4 w-4" />
                      <span>Call: +1 (800) 555-1234</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4" />
                      <a
                        className="font-semibold text-white hover:underline"
                        href="mailto:hello@noornova.com"
                      >
                        hello@noornova.com
                      </a>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <BookDemoButton className="hero-btn-primary rounded-md px-5 py-2.5 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(74,93,255,0.34)]">
                      Book Demo
                    </BookDemoButton>
                    <Link
                      href="/#contact"
                      className="rounded-md bg-white/15 px-5 py-2.5 text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/20"
                    >
                      Send Message
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              <h3 className="text-lg font-bold text-slate-900">Quick Tip</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
                For faster support, include your business name, the channel
                (calls/WhatsApp), and a short example of what you expected vs.
                what happened.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

function HelpLink({ href, label }) {
  return (
    <Link
      href={href}
      className="group flex items-center justify-between rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 sm:text-base"
    >
      <span>{label}</span>
      <ChevronRight className="h-4 w-4 text-slate-400 transition group-hover:translate-x-0.5" />
    </Link>
  );
}
