import Link from "next/link";
import BookDemoButton from "@/components/BookDemoButton";

export const metadata = {
  title: "Terms of Service | NoorNova",
  description:
    "Read the terms and conditions for using NoorNova’s website and AI automation products.",
};

export default function TermsOfServicePage() {
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
            Terms of{" "}
            <span className="bg-gradient-to-r from-blue-700 via-purple-800 to-teal-700 bg-clip-text text-transparent">
              Service
            </span>
          </h1>
          <p className="mt-4 max-w-3xl text-base text-gray-700 sm:text-lg">
            These Terms of Service govern your access to and use of NoorNova’s
            website and AI automation products.
          </p>
          <p className="mt-2 text-sm text-gray-600">
            Last updated: March 12, 2026
          </p>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent via-white/70 to-white" />
      </section>

      <section className="mx-auto w-full max-w-4xl px-6 pb-20 pt-10 md:px-10 lg:px-20">
        <div className="space-y-10">
          <TermsSection title="1. Acceptance of Terms">
            <p className="text-sm leading-7 text-slate-700 sm:text-base">
              By accessing or using NoorNova, you agree to these Terms. If you
              do not agree, do not use our website or services.
            </p>
          </TermsSection>

          <TermsSection title="2. Services">
            <div className="space-y-4 text-sm leading-7 text-slate-700 sm:text-base">
              <p>
                NoorNova provides AI automation tools (such as AI voice agents,
                lead capture and follow-up, and messaging automations) to help
                businesses improve customer communication and bookings.
              </p>
              <p>
                We may update, modify, or discontinue features at any time.
              </p>
            </div>
          </TermsSection>

          <TermsSection title="3. User Responsibilities">
            <div className="space-y-4 text-sm leading-7 text-slate-700 sm:text-base">
              <p>You agree not to:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Use the services for unlawful, harmful, or deceptive activity.</li>
                <li>Attempt to disrupt or compromise our systems or security.</li>
                <li>Copy, resell, or reverse engineer our services without permission.</li>
              </ul>
            </div>
          </TermsSection>

          <TermsSection title="4. Intellectual Property">
            <p className="text-sm leading-7 text-slate-700 sm:text-base">
              NoorNova and its content, branding, and software are owned by
              NoorNova or its licensors and are protected by applicable laws.
            </p>
          </TermsSection>

          <TermsSection title="5. Third-Party Services">
            <p className="text-sm leading-7 text-slate-700 sm:text-base">
              Our website may link to third-party websites or services. We are
              not responsible for third-party content, policies, or practices.
            </p>
          </TermsSection>

          <TermsSection title="6. Disclaimers">
            <p className="text-sm leading-7 text-slate-700 sm:text-base">
              The services are provided “as is” and “as available”. We do not
              warrant that the services will be uninterrupted, error-free, or
              fully secure.
            </p>
          </TermsSection>

          <TermsSection title="7. Limitation of Liability">
            <p className="text-sm leading-7 text-slate-700 sm:text-base">
              To the maximum extent permitted by law, NoorNova will not be
              liable for indirect, incidental, special, consequential, or
              punitive damages, or any loss of profits or revenues.
            </p>
          </TermsSection>

          <TermsSection title="8. Termination">
            <p className="text-sm leading-7 text-slate-700 sm:text-base">
              We may suspend or terminate access to our services if we believe
              you have violated these Terms or for any reason permitted by law.
            </p>
          </TermsSection>

          <TermsSection title="9. Changes to These Terms">
            <p className="text-sm leading-7 text-slate-700 sm:text-base">
              We may update these Terms from time to time. Continued use after
              changes become effective means you accept the updated Terms.
            </p>
          </TermsSection>

          <TermsSection title="10. Contact">
            <p className="text-sm leading-7 text-slate-700 sm:text-base">
              Questions? Email{" "}
              <a
                className="font-semibold text-blue-700 hover:underline"
                href="mailto:hello@noornova.com"
              >
                hello@noornova.com
              </a>
              .
            </p>
          </TermsSection>

          <div className="rounded-3xl border border-gray-200 bg-slate-50 p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
              Need help choosing the right automation?
            </h2>
            <p className="mt-2 max-w-2xl text-slate-700">
              Book a demo and we’ll show you how NoorNova fits your business.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <BookDemoButton className="hero-btn-primary rounded-md px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(74,93,255,0.34)]">
                Book Demo
              </BookDemoButton>
              <Link
                href="/services"
                className="rounded-md border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-gray-50"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function TermsSection({ title, children }) {
  return (
    <div>
      <h2 className="text-lg font-bold text-slate-900 sm:text-xl">{title}</h2>
      <div className="mt-3">{children}</div>
    </div>
  );
}
