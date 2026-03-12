import {
  Phone,
  AudioLines,
  UserSearch,
  CalendarCheck,
  Mail,
  Clock,
  CalendarCheck2,
  Bot,
  UserCheck,
} from "lucide-react";
import Image from "next/image";


export default function AIVoiceFeatures() {

    const steps = [
    {
      icon: Phone,
      number: "1",
      title: "Call Received",
      desc: "Customer calls your business number",
      gradient: "from-blue-500 to-blue-700",
    },
    {
      icon: Bot,
      number: "2",
      title: "AI Conversation",
      desc: "AI engages in natural dialogue",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: UserCheck,
      number: "3",
      title: "Lead Qualified",
      desc: "AI assesses customer needs",
      gradient: "from-green-500 to-teal-500",
    },
    {
      icon: CalendarCheck,
      number: "4",
      title: "Appointment Booked",
      desc: "Meeting scheduled automatically",
      gradient: "from-indigo-500 to-purple-500",
    },
  ];

  const features = [
    {
      icon: Phone,
      title: "Answers Every Call",
      desc: "Never miss another opportunity. AI picks up instantly, every time, 24/7/365.",
      gradient: "from-blue-500 to-blue-700",
    },
    {
      icon: AudioLines,
      title: "Natural Conversations",
      desc: "Human-like voice interactions that feel authentic and build trust with callers.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: UserSearch,
      title: "Lead Qualification",
      desc: "Intelligently screens and qualifies leads based on your criteria automatically.",
      gradient: "from-green-500 to-teal-500",
    },
    {
      icon: CalendarCheck2,
      title: "Appointment Booking",
      desc: "Schedules appointments directly into your calendar while on the call.",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      icon: Mail,
      title: "Automatic Follow-ups",
      desc: "Sends personalized follow-up messages to nurture leads and close deals.",
      gradient: "from-purple-500 to-teal-500",
    },
    {
      icon: Clock,
      title: "Works 24/7",
      desc: "No breaks, no holidays, no sick days. Always available when customers call.",
      gradient: "from-blue-500 to-cyan-500",
    },
  ];

  return (
    <section className="bg-[#F2F6FF] py-16 sm:py-20 px-6 md:px-10 lg:px-20">
      <div className="mx-auto">

        <div className="text-center">
          <h2 className="text-[24px] font-bold leading-[1.02]  text-slate-950 sm:text-[34px] md:text-[46px]">
            Meet Your{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-teal-500 bg-clip-text text-transparent">
              24/7 AI Employee
            </span>
          </h2>
          <p className="mt-4 text-md text-slate-600 md:text-lg">
Never miss a call again. Our AI Voice Agent works around the clock to capture every opportunity.          </p>
        </div>
        
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon;

            return (
              <div
                key={i}
                className="rounded-xl bg-white p-6 shadow-sm transition hover:shadow-lg"
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br ${feature.gradient} text-white`}
                >
                  <Icon size={22} />
                </div>

                {/* Title */}
                <h3 className="mt-3 text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mt-1 text-gray-600 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 rounded-3xl bg-white p-6 shadow-md sm:p-10 lg:p-12">

        {/* Title */}
        <h2 className="mb-10 text-center text-2xl font-bold text-gray-900 sm:text-3xl">
          How It Works
        </h2>

        {/* Steps */}
        <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={index} className="relative flex flex-col items-center">
                
                {/* Step Number */}
                <span className="absolute -top-2 right-4 flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                  {step.number}
                </span>

                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center text-white bg-gradient-to-br ${step.gradient}`}
                >
                  <Icon size={28} />
                </div>

                {/* Title */}
                <h3 className="mt-4 font-semibold text-gray-900">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mt-1">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Process Image */}
        <div className="mt-10 flex h-[240px] justify-center overflow-hidden rounded-2xl sm:h-[320px] lg:mt-12 lg:h-[450px]">
          <Image
            src="/HowItWorks.png"
            alt="AI workflow process"
            width={1200}
            height={400}
            className="w-full h-auto  object-cover"
          />
        </div>

      </div>

      </div>
    </section>
  );
}
