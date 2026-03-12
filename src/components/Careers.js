export default function Careers() {
  // Simple data (easy to edit later)
  const jobs = [
    {
      dept: "Sales",
      type: "Full-time",
      title: "Sales Executive",
      location: "Remote",
      desc: "Drive revenue growth by selling AI automation solutions to local businesses across the United States.",
    },
    {
      dept: "Engineering",
      type: "Full-time",
      title: "AI Automation Specialist",
      location: "Remote",
      desc: "Build and optimize AI voice agents and automation workflows for our growing customer base.",
    },
    {
      dept: "Customer Success",
      type: "Full-time",
      title: "Customer Success Manager",
      location: "Remote",
      desc: "Ensure customer satisfaction and help businesses maximize value from our AI automation tools.",
    },
  ];

  return (
    <section className="w-full bg-[#F5F6FF] py-16 lg:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-[24px] font-bold leading-[1.02] tracking-[-0.04em] text-slate-950 sm:text-[34px] md:text-[50px]">
            Join Our{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-teal-500 bg-clip-text text-transparent">
              Team
            </span>
          </h2>
          <p className="mt-4 text-md text-slate-600 md:text-lg">
            Help us build the future of AI automation for local businesses
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {jobs.map((job) => (
            <JobCard key={job.title} job={job} />
          ))}
        </div>
      </div>

      <section className="px-10 pt-12 sm:px-16 sm:pt-16 lg:px-20">
      <div className="mx-auto max-w-6xl rounded-3xl bg-white px-6 py-10 text-center shadow-lg sm:px-10">

        <h2 className="text-2xl md:text-2xl font-bold text-black">
          Don&apos;t see the right role?
        </h2>

        <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-gray-600">
          We&apos;re always looking for talented individuals to join our team. 
          Send us your resume and let us know how you can contribute to 
          Noornova&apos;s mission.
        </p>

        <button className="mt-4 px-6 py-2 border-2 border-gray-300 cursor-pointer rounded-xl text-gray-800 font-medium hover:bg-gray-200 transition">
          Get in Touch
        </button>

      </div>
    </section>
    </section>
  );
}

function JobCard({ job }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-[0_30px_80px_rgba(15,23,42,0.12)] ring-1 ring-slate-200/60">
      <div className="flex items-center justify-between gap-4">
        <span className="rounded-full bg-blue-100 px-2 py-1 text-[10px] font-semibold text-blue-700">
          {job.dept}
        </span>
        <span className="rounded-full bg-emerald-100 px-2 py-1 text-[10px] font-semibold text-emerald-700">
          {job.type}
        </span>
      </div>

      <h3 className="mt-4 text-xl font-bold tracking-tight text-slate-950">
        {job.title}
      </h3>

      <div className="mt-2 flex items-center gap-1 text-slate-600">
        <span className="text-slate-700">
          <svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M12 21s6.5-4.4 6.5-10a6.5 6.5 0 1 0-13 0c0 5.6 6.5 10 6.5 10Z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
            <path
              d="M12 12.2a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z"
              stroke="currentColor"
              strokeWidth="1.8"
            />
          </svg>
        </span>
        <span className="text-sm">{job.location}</span>
      </div>

      <p className="mt-3 text-[15px] leading-6 text-slate-600">{job.desc}</p>

      <a
        href="#"
        className="hero-btn-primary mt-6 inline-flex py-2 w-full items-center justify-center rounded-xl px-8 text-base font-semibold text-white shadow-[0_18px_45px_rgba(74,93,255,0.28)] ring-1 ring-white/10"
      >
        Apply Now
      </a>
    </div>
  );
}
