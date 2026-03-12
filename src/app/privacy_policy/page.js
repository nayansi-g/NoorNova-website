import Link from "next/link";
import BookDemoButton from "@/components/BookDemoButton";

export const metadata = {
  title: "Privacy Policy | NoorNova",
  description:
    "Learn how NoorNova collects, uses, and protects your information when you use our AI automation products.",
};

export default function PrivacyPolicyPage() {
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
            Privacy{" "}
            <span className="bg-gradient-to-r from-blue-700 via-purple-800 to-teal-700 bg-clip-text text-transparent">
              Policy
            </span>
          </h1>
          <p className="mt-4 max-w-3xl text-base text-gray-700 sm:text-lg">
            This Privacy Policy explains how NoorNova collects, uses, and
            protects your information when you use our website and AI automation
            products.
          </p>
          <p className="mt-2 text-sm text-gray-600">
            Last updated: March 12, 2026
          </p>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent via-white/70 to-white" />
      </section>

      <section className="mx-auto w-full max-w-4xl px-6 pb-20 pt-10 md:px-10 lg:px-20">
        <div className="space-y-10">
          <PolicySection title="1. Information We Collect">
            <div className="space-y-4 text-sm leading-7 text-slate-700 sm:text-base">
              <p>
                We may collect information you provide directly (for example,
                when you request a demo, contact us, or submit a form), and
                information collected automatically when you use our website.
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <span className="font-semibold">Contact details</span> (name,
                  email address, phone number, business name).
                </li>
                <li>
                  <span className="font-semibold">Form content</span> (messages
                  you send to our team).
                </li>
                <li>
                  <span className="font-semibold">Usage data</span> (pages
                  viewed, approximate location, device and browser info).
                </li>
              </ul>
            </div>
          </PolicySection>

          <PolicySection title="2. How We Use Information">
            <div className="space-y-4 text-sm leading-7 text-slate-700 sm:text-base">
              <p>We use information to:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Respond to requests and provide support.</li>
                <li>Schedule demos and follow up with you.</li>
                <li>Improve our website, products, and user experience.</li>
                <li>Prevent fraud, abuse, and security incidents.</li>
                <li>Comply with legal obligations.</li>
              </ul>
            </div>
          </PolicySection>

          <PolicySection title="3. Sharing of Information">
            <div className="space-y-4 text-sm leading-7 text-slate-700 sm:text-base">
              <p>
                We do not sell your personal information. We may share
                information with service providers who help us operate our
                business (for example: form processing, analytics, and
                communication tools) and only as needed to provide our services.
              </p>
            </div>
          </PolicySection>

          <PolicySection title="4. Cookies & Analytics">
            <div className="space-y-4 text-sm leading-7 text-slate-700 sm:text-base">
              <p>
                We may use cookies or similar technologies to remember
                preferences, understand site usage, and improve performance. You
                can control cookies through your browser settings.
              </p>
            </div>
          </PolicySection>

          <PolicySection title="5. Data Retention & Security">
            <div className="space-y-4 text-sm leading-7 text-slate-700 sm:text-base">
              <p>
                We retain information for as long as necessary for the purposes
                described in this policy, unless a longer retention period is
                required by law. We use reasonable safeguards designed to
                protect information; however, no method of transmission or
                storage is 100% secure.
              </p>
            </div>
          </PolicySection>

          <PolicySection title="6. Your Choices">
            <div className="space-y-4 text-sm leading-7 text-slate-700 sm:text-base">
              <p>
                You may request access, correction, or deletion of your personal
                information by contacting us. Depending on your location, you
                may have additional rights under applicable privacy laws.
              </p>
            </div>
          </PolicySection>

          <PolicySection title="7. Contact Us">
            <div className="space-y-4 text-sm leading-7 text-slate-700 sm:text-base">
              <p>
                If you have questions about this policy, contact NoorNova at{" "}
                <a
                  className="font-semibold text-blue-700 hover:underline"
                  href="mailto:hello@noornova.com"
                >
                  hello@noornova.com
                </a>
                .
              </p>
            </div>
          </PolicySection>

          <div className="rounded-3xl border border-gray-200 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 p-6 text-white shadow-md sm:p-8">
            <h2 className="text-xl font-bold sm:text-2xl">Want a walkthrough?</h2>
            <p className="mt-2 max-w-2xl text-white/90">
              Book a demo to see how NoorNova helps you capture every lead,
              answer every call, and grow revenue.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <BookDemoButton className="hero-btn-primary rounded-md px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(74,93,255,0.34)]">
                Book Demo
              </BookDemoButton>
              <Link
                href="/#contact"
                className="rounded-md bg-white/15 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/20"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function PolicySection({ title, children }) {
  return (
    <div>
      <h2 className="text-lg font-bold text-slate-900 sm:text-xl">{title}</h2>
      <div className="mt-3">{children}</div>
    </div>
  );
}
