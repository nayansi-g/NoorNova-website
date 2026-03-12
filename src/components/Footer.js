import BookDemoButton from "@/components/BookDemoButton";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer-shell relative mt-0 w-full">
      <div className="mx-auto w-full  px-6 md:px-10 lg:px-14 py-10">
        <div className="grid gap-12 md:grid-cols-[1.35fr_1fr_1fr_1fr] md:gap-10">
          <div>
            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="inline-flex items-center gap-3 rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                aria-label="NoorNova Home"
              >

                <div className="text-lg font-bold text-white/95">
                  Noor
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-teal-300 bg-clip-text text-transparent">
                    Nova
                  </span>
                </div>
              </Link>
            </div>

            <p className="mt-6 max-w-xl text-md leading-tight text-white/80">
              AI automation tools helping local businesses capture every lead,
              answer every call, and grow revenue.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <a
                href="#"
                aria-label="LinkedIn"
                className="grid h-10 w-10 place-items-center rounded-md bg-white/10 text-white/90 ring-1 ring-white/10 backdrop-blur transition hover:bg-white/15"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M6.6 6.7a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM5 21h3.2V9H5v12ZM10.8 9H14v1.7h.1c.4-.8 1.6-1.9 3.4-1.9 3.6 0 4.2 2.2 4.2 5.2V21h-3.2v-5.5c0-1.3 0-2.9-2-2.9s-2.3 1.4-2.3 2.8V21h-3.2V9Z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="X"
                className="grid h-10 w-10 place-items-center rounded-md  bg-white/10 text-white/90 ring-1 ring-white/10 backdrop-blur transition hover:bg-white/15"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M18.9 2H22l-6.8 7.8L23 22h-6.2l-4.9-6.3L6.4 22H3.3l7.3-8.4L1 2h6.4l4.4 5.7L18.9 2Zm-1.1 18h1.7L6.3 3.9H4.5L17.8 20Z" />
                </svg>
              </a>
            </div>
          </div>

          <FooterCol
            title="Products"
            links={[
              {title:"AI Voice Agents", link:"#"},
              {title:"WhatsApp Automation", link:"#"},
              {title:"AI Lead Generation", link:"#"},
              {title:"AI Review Booster", link:"#"},
            ]}
          />
          <FooterCol
            title="Company"
            links={[{title:"About", link:"/about"},{title:"Careers", link:"/#careers"},{title:"Insights", link:"/#insights"},{title:"Contact", link:"/#contact"}]}
          />
          <FooterCol
            title="Resources"
            links={[{title:"Documentation", link:"#"} ,{title:"Help Center", link:"#"}, {title:"Privacy Policy", link:"#"}, {title:"Terms of Service", link:"#"}]}
          />
        </div>

        <div className="mt-6 h-px w-full bg-white/10" />

        <div className="mt-5 flex items-center justify-between gap-6 pb-10 text-sm text-white/50 md:pb-6">
          <div>© {new Date().getFullYear()} NoorNova. All rights reserved.</div>
          <BookDemoButton className="bg-gradient-to-r from-indigo-500 to-purple-600 px-5 py-2 rounded-md font-semibold text-white shadow-[0_16px_40px_rgba(74,93,255,0.35)]">
            Book Demo
          </BookDemoButton>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div className="md:pt-2">
      <div className="text-md font-semibold text-white">{title}</div>

      <ul className="mt-4 space-y-2 text-[14px] text-gray-300">
        {links.map((item) => (
          <li key={item.title}>
            {item.link?.startsWith("/") ? (
              <Link href={item.link} className="transition hover:text-white">
                {item.title}
              </Link>
            ) : (
              <a href={item.link} className="transition hover:text-white">
                {item.title}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

