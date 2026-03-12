import { Bot, CalendarCheck, Phone } from "lucide-react";
import BookDemoButton from "@/components/BookDemoButton";

const Hero =()=>{
    return (
        <>
         <section className="relative w-full min-h-[760px] border-b border-gray-100 overflow-hidden">

  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center opacity-70"
    style={{
      backgroundImage: "url('/3Dimg.jpg')"
    }}
  />

  {/* Network overlay */}
  <div className="absolute inset-0 bg-[url('/hero-network.svg')] bg-cover bg-center opacity-40" />

  {/* Color overlay (blend like design) */}
  <div className="absolute inset-0 hero-image-overlay" />

  {/* Wave line */}
  <div className="pointer-events-none absolute left-0 top-[46%] h-[110px] w-full opacity-70">
    <div className="h-full w-full  bg-[length:1600px_110px] bg-center bg-no-repeat" />
  </div>

  {/* Content */}
  <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-3 pb-24 pt-32 md:pt-28 text-center">

    <h1 className="max-w-5xl text-4xl font-bold leading-[1.03] text-gray-900 sm:text-[56px] md:text-[64px]">
      Never Miss Another{" "}
      <span className="block">
        <span className="bg-gradient-to-r from-blue-700 via-purple-800 to-teal-700 bg-clip-text text-transparent">
          Customer Call
        </span>{" "}
        Again
      </span>
    </h1>

    <p className="mt-5 max-w-xl text-md leading:6  md:leading-8 text-gray-800 md:text-lg">
      AI Voice Agents answer, qualify and follow up with your leads 24/7 so
      your business never loses revenue.
    </p>

 
    <div className="mt-6 flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
      
      <BookDemoButton className="bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-3 border border-gray-400 rounded-md font-semibold text-white shadow-[0_16px_40px_rgba(74,93,255,0.35)]">
        Book Demo
      </BookDemoButton>

      <a
        href="#"
        className="inline-flex py-3 px-6 items-center justify-center rounded-md border-2 border-gray-300 bg-white/90 px-5 text-base font-semibold text-slate-700 shadow-[0_12px_30px_rgba(0,0,0,0.10)] backdrop-blur transition-colors hover:bg-white"
      >
        See How It Works
      </a>
    </div>

    {/* Steps Card */}
    <div className="mt-16 w-full max-w-3xl rounded-xl bg-white/90 px-8 py-8 shadow-[0_40px_90px_rgba(15,23,42,0.22)] ring-1 ring-black/5 backdrop-blur-md md:px-14">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:gap-14">
        <Step
          title="Incoming Call"
          tone="blue"
          icon={<Phone />}
        />
        <Arrow />
        <Step
          title="AI Conversation"
          tone="purple"
          icon={<Bot />}
        />
        <Arrow />
        <Step
          title="Appointment Booked"
          tone="green"
          icon={<CalendarCheck />}
        />
      </div>
    </div>

  </div>

  {/* Bottom fade into white section */}
  <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-b from-transparent via-white/70 to-white" />
</section>
        </>
    )
}

export default Hero;




function Step({ title, tone, icon }) {
  const toneClasses =
    tone === "blue"
      ? "bg-gradient-to-b from-blue-500 to-blue-700 text-white"
      : tone === "purple"
        ? "bg-gradient-to-b from-purple-500 to-purple-700 text-white"
        : "bg-gradient-to-b from-emerald-500 to-teal-700 text-white";

  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <div
        className={`grid h-14 w-14 place-items-center rounded-md ${toneClasses} shadow-[0_22px_50px_rgba(2,6,23,0.18)]`}
      >
        <span className="[&>svg]:h-8 [&>svg]:w-8">{icon}</span>
      </div>
      <div className="text-sm font-semibold tracking-tight text-slate-700">
        {title}
      </div>
    </div>
  );
}

function Arrow() {
  return (
    <div className="hidden items-center justify-center md:flex">
      <svg
        width="86"
        height="18"
        viewBox="0 0 86 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M3 9h72"
          stroke="url(#a)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M76 3l7 6-7 6"
          stroke="url(#a)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient id="a" x1="3" y1="9" x2="83" y2="9">
            <stop stopColor="#2F79FF" />
            <stop offset="0.55" stopColor="#7C3AED" />
            <stop offset="1" stopColor="#14B8A6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
