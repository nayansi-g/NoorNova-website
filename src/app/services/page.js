import { Check, Headphones, Heart, Lightbulb, LineChart, Megaphone, Phone, PhoneCall, Rocket, Settings, ShieldCheck, Star, TrendingUp, UserPlus } from "lucide-react";
import Image from "next/image";
import BookDemoButton from "@/components/BookDemoButton";
import { IconBase } from "react-icons";
import { FaWhatsapp } from "react-icons/fa";

const Services = () => {
     const subfeatures = [
    {
      title: "AI Lead Generation System",
      desc: "Automatically find, qualify, and engage potential customers in your target market.",
      icon: UserPlus,
      gradient: "from-blue-500 to-blue-600",
    },
    {
      title: "AI Review Booster",
      desc: "Get more 5-star reviews automatically by engaging satisfied customers at the perfect moment.",
      icon: Star,
      gradient: "from-purple-500 to-purple-600",
    },
    {
      title: "AI Marketing Automation",
      desc: "Automate your entire marketing funnel from lead capture to conversion.",
      icon: Megaphone,
      gradient: "from-teal-500 to-teal-600",
    },
    {
      title: "AI Sales Assistant",
      desc: "Close more deals with AI-powered guidance, objection handling, and follow-up automation.",
      icon: LineChart,
      gradient: "from-indigo-500 to-purple-600",
    },
  ];


   const features = [
    {
      title: "24/7 Call Answering",
      desc: "Never miss a call, even after hours or during busy periods",
    },
    {
      title: "Natural Voice Conversations",
      desc: "Human-like AI voice that builds trust and rapport with callers",
    },
    {
      title: "Smart Lead Qualification",
      desc: "Asks the right questions to identify high-value prospects",
    },
    {
      title: "Instant Appointment Booking",
      desc: "Schedules meetings directly into your calendar during the call",
    },
    {
      title: "CRM Integration",
      desc: "Automatically logs calls and updates your customer database",
    },
    {
      title: "Real-Time Analytics",
      desc: "Track call volume, conversion rates, and revenue impact",
    },
  ];

  const features2 = [
    {
      title: "Instant Auto-Replies",
      desc: "Respond to customer messages immediately, 24/7",
    },
    {
      title: "Intelligent Lead Capture",
      desc: "Collect contact info and qualify leads through conversation",
    },
    {
      title: "Personalized Follow-Ups",
      desc: "Send customized messages based on customer behavior",
    },
    {
      title: "Broadcast Campaigns",
      desc: "Send promotions and updates to your entire contact list",
    },
    {
      title: "Multi-Language Support",
      desc: "Communicate with customers in their preferred language",
    },
    {
      title: "Conversation Analytics",
      desc: "Track engagement, response rates, and conversion metrics",
    },
  ];
  const industries = [
    "Real Estate",
    "Dental Clinics",
    "Med Spas",
    "Home Services",
    "Law Firms",
    "Insurance",
  ];

    const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We push the boundaries of AI technology to create solutions that truly make a difference for local businesses.",
      bg: "bg-blue-100",
      iconBg: "bg-blue-600",
    },
    {
      icon: Heart,
      title: "Customer First",
      description:
        "Every decision we make is guided by one question: How does this help our customers grow their business?",
      bg: "bg-purple-100",
      iconBg: "bg-purple-600",
    },
    {
      icon: Rocket,
      title: "Growth",
      description:
        "We're committed to continuous improvement, always adding new features and capabilities to serve you better.",
      bg: "bg-teal-100",
      iconBg: "bg-teal-600",
    },
  ];

    return (
        <div className="bg-white text-gray-900">

         <section className="relative w-full overflow-hidden border-b border-gray-100">

  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center opacity-70"
    style={{
      backgroundImage: "url('/3Dimg.jpg')"
    }}
  />

  {/* Network overlay */}
  <div className="absolute inset-0 bg-[url('/hero-network.svg')] bg-cover bg-center opacity-50" />

  {/* Color overlay (blend like design) */}
  <div className="absolute inset-0 hero-image-overlay" />

  {/* Content */}
  <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-4 pb-20 pt-28 text-center sm:px-6 lg:px-8 lg:pb-24">

    <h1 className="max-w-5xl text-3xl font-bold leading-[1.05] text-gray-900 sm:text-4xl md:text-5xl">
     AI Automation{" "}
      <span className="block">
        <span className="bg-gradient-to-r from-blue-700 via-purple-800 to-teal-700 bg-clip-text text-transparent">
          Solutions
        </span>{" "}
       
      </span>
    </h1>

    <p className="mt-5 max-w-2xl text-base leading-6 text-gray-700 sm:text-lg sm:leading-7">
Powerful AI tools designed to help local businesses capture every lead, answer every call, and maximize revenue.    </p>

  </div>

  {/* Bottom fade into white section */}
  <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-b from-transparent via-white/70 to-white" />
</section>
 <div className="py-14 sm:py-20">
     <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        
        {/* LEFT CARD */}
        <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-md">

          {/* Icon + Badge */}
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white">
              <PhoneCall size={22} />
            </div>

            <span className="text-xs font-semibold bg-blue-600 text-white px-3 py-1 rounded-full">
              MOST POPULAR
            </span>
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-gray-900">
            AI Voice Agent
          </h3>

          <p className="text-gray-600 mt-1">
            Your 24/7 AI employee that answers every call, qualifies leads,
            and books appointments automatically—so you never miss another opportunity.
          </p>

          {/* Features */}
          <div className="mt-2">
            <h4 className="font-semibold text-gray-900 mb-4">
              Key Features
            </h4>

            <div className="space-y-2">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-2">
                  <Check className="text-green-500 mt-1" size={18} />
                  <div>
                    <p className="font-semibold text-sm text-gray-900">
                      {feature.title}
                    </p>
                    <p className="text-sm text-gray-600">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Industries */}
          <div className="mt-4">
            <h4 className="font-semibold text-gray-900 mb-3">
              Perfect For
            </h4>

            <div className="flex flex-wrap gap-2">
              {industries.map((item, i) => (
                <span
                  key={i}
                  className="text-xs bg-gray-100 px-3 py-1 rounded-md"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Button */}
          <BookDemoButton className="mt-6 w-full rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 py-3 font-semibold text-white transition hover:opacity-90">
            Book Demo
          </BookDemoButton>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <Image
            src="/services1.jpg"
            alt="AI Voice Agent"
            width={700}
            height={800}
            className="rounded-3xl object-cover"
          />

          {/* Floating Button */}
          {/* <button className="absolute bottom-6 right-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-full shadow-lg text-sm">
            Book Demo
          </button> */}
        </div>

      </div>
    </div>
 <div className="py-14 sm:py-20">
     <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        {/* RIGHT IMAGE */}
        <div className="relative">
          <Image
            src="/services2.jpg"
            alt="AI Voice Agent"
            width={700}
            height={800}
            className="rounded-3xl object-cover"
          />
        </div>

        {/* LEFT CARD */}
        <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-md">

          {/* Icon + Badge */}
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-green-600 to-indigo-600 text-white">
              <FaWhatsapp size={22} />
            </div>

            <span className="text-xs font-semibold bg-teal-700 text-white px-3 py-1 rounded-full">
              $200/month
            </span>
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-gray-900">
            WhatsApp Automation AI
          </h3>

          <p className="text-gray-600 mt-1">
            Automate customer conversations and follow-ups on WhatsApp to engage leads instantly and never let an opportunity slip away.
          </p>

          {/* Features */}
          <div className="mt-2">
            <h4 className="font-semibold text-gray-900 mb-4">
              Key Features
            </h4>

            <div className="space-y-2">
              {features2.map((feature, index) => (
                <div key={index} className="flex gap-2">
                  <Check className="text-green-500 mt-1" size={18} />
                  <div>
                    <p className="font-semibold text-sm text-gray-900">
                      {feature.title}
                    </p>
                    <p className="text-sm text-gray-600">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Industries */}
          <div className="mt-4">
            <h4 className="font-semibold text-gray-900 mb-3">
              Perfect For
            </h4>

            <div className="flex flex-wrap gap-2">
              {industries.map((item, i) => (
                <span
                  key={i}
                  className="text-xs bg-gray-100 px-3 py-1 rounded-md"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Button */}
          <BookDemoButton className="mt-6 w-full rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 py-3 font-semibold text-white transition hover:opacity-90">
            Book Demo
          </BookDemoButton>
        </div>

        

      </div>
    </div>

      <section className="bg-[#F3F5FF] py-14 sm:py-20">
         <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-10 text-center sm:mb-14">
          <h2 className="text-[24px] font-bold leading-[1.02]  text-slate-950 sm:text-[34px] md:text-[46px]">
            Coming {" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-teal-500 bg-clip-text text-transparent">Soon</span>
          </h2>

          <p className="mt-3 text-gray-600">
            We&apos;re building more AI tools to help your business grow
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {subfeatures.map((feature, i) => {
            const Icon = feature.icon;

            return (
              <div
                key={i}
                className="relative bg-white p-4 rounded-3xl shadow-md hover:shadow-xl transition"
              >
                {/* Coming Soon Badge */}
                <span className="absolute top-6 right-6 text-xs font-semibold bg-purple-100 text-purple-600 px-3 py-1 rounded-full">
                  Coming Soon
                </span>

                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center text-white bg-gradient-to-r ${feature.gradient}`}
                >
                  <Icon size={26} />
                </div>

                {/* Title */}
                <h3 className="mt-4 text-lg font-semibold leading-6 text-gray-900">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-md text-gray-600 leading-6">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
      </section>
      <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 px-6 py-10 text-center text-white shadow-lg sm:px-8">

          {/* Heading */}
          <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
            Ready to Get Started?
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-base text-white/90 sm:text-lg">
            See how our AI solutions can transform your business. Book a free demo today.
          </p>

          {/* Button */}
          <div className="mt-10">
            <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-md shadow hover:scale-105 transition">
              Book Your Free Demo
            </button>
          </div>

        </div>

      </div>
    </section>
        </div>
    )
}


export default Services;


