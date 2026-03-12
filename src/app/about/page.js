import { Headphones, Heart, Lightbulb, Rocket, Settings, ShieldCheck, TrendingUp } from "lucide-react";
import Image from "next/image";

const About = () => {
     const features = [
    {
      icon: ShieldCheck,
      title: "Proven Results",
      desc: "Our customers see an average 40% increase in appointment bookings and capture 30% more leads within the first month.",
      iconBg: "bg-blue-100 text-blue-600",
    },
    {
      icon: Headphones,
      title: "Dedicated Support",
      desc: "Our team is always here to help you succeed. From setup to optimization, we're with you every step of the way.",
      iconBg: "bg-purple-100 text-purple-600",
    },
    {
      icon: Settings,
      title: "Easy Integration",
      desc: "Set up in minutes, not weeks. Our AI solutions integrate seamlessly with your existing systems and workflows.",
      iconBg: "bg-teal-100 text-teal-600",
    },
    {
      icon: TrendingUp,
      title: "Continuous Innovation",
      desc: "We're constantly developing new AI tools and features to help you stay ahead of the competition.",
      iconBg: "bg-blue-100 text-blue-600",
    },
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
        <>
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

    <h1 className="max-w-5xl text-3xl font-bold leading-[1.05] text-gray-900 sm:text-4xl md:text-5xl ">
     Building the Future of{" "}
      <span className="block">
        <span className="bg-gradient-to-r from-blue-700 via-purple-800 to-teal-700 bg-clip-text text-transparent">
          AI Automation
        </span>{" "}
       
      </span>
    </h1>

    <p className="mt-5 max-w-2xl text-base leading-7 text-gray-700 sm:text-lg sm:leading-8">
      Noornova empowers local businesses across the United States to capture every lead, answer every call, and grow revenue through intelligent AI automation.
    </p>

  </div>

  {/* Bottom fade into white section */}
  <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-b from-transparent via-white/70 to-white" />
</section>
 <div className="py-14 sm:py-20">
      <div className="mx-auto px-6 md:px-10 lg:px-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          
           {/* Content */}
          <div>
            <h2 className="mb-6 text-2xl md:text-4xl font-bold text-gray-900 sm:text-3xl lg:mb-6">
              Our Mission
            </h2>

            <div className="space-y-4">
           <p>We believe every local business deserves access to enterprise-level AI technology. Our mission is to democratize AI automation, making it affordable and accessible for businesses of all sizes.</p>
           <p>Too many businesses lose revenue because they can&apos;t answer every call, follow up with every lead, or provide 24/7 customer service. We&apos;re changing that with AI-powered solutions that work tirelessly to grow your business.</p>
           <p>From AI voice agents that answer calls and book appointments to WhatsApp automation that nurtures leads, we&apos;re building a complete AI ecosystem for local businesses.</p>
            </div>

          </div>

          {/* Image */}
          <div className="relative h-[240px] w-full overflow-hidden rounded-2xl sm:h-[320px] lg:h-[420px]">
            <Image
              src="/OURMISSION.jpg"
              alt="Missed calls problem"
              fill
              className="object-cover"
            />
          </div>

         
        </div>
      </div>
    </div>
 <div className="py-14 sm:py-20">
      <div className="mx-auto px-6 md:px-10 lg:px-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          
          {/* Image */}
          <div className="relative h-[240px] w-full overflow-hidden rounded-2xl sm:h-[320px] lg:h-[420px]">
            <Image
              src="/OURVISSION.jpg"
              alt="Missed calls problem"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="mb-6 text-2xl md:text-4xl font-bold text-gray-900 sm:text-3xl lg:mb-6">
              Our Vision
            </h2>

            <div className="space-y-4">
           <p>
We envision a future where every local business has a complete AI-powered team working 24/7 to drive growth. No more missed opportunities, no more lost revenue, no more manual repetitive tasks.</p>
<p>Our roadmap includes AI lead generation systems, review boosters, marketing automation, and sales assistants—all designed specifically for local businesses.</p>
<p>We&apos;re not just building tools; we&apos;re creating an AI ecosystem that transforms how local businesses operate and compete in the digital age.</p>
            </div>

          </div>
        </div>
      </div>
    </div>

     <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-14 sm:grid-cols-2 sm:px-6 sm:py-16 lg:grid-cols-3 lg:gap-8 lg:px-8">

        {values.map((value, index) => {
          const Icon = value.icon;

          return (
            <div
              key={index}
              className={`${value.bg} p-6 rounded-xl text-center shadow-sm`}
            >
              {/* Icon */}
              <div className={`${value.iconBg} mx-auto flex h-14 w-14 items-center justify-center rounded-full text-white`}>
                <Icon size={20} />
              </div>

              {/* Title */}
              <h3 className="mt-4 text-2xl font-bold text-gray-900">
                {value.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          );
        })}

      </div>

      <section className="bg-[#F3F5FF] py-14 sm:py-20">
         <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-20">

        {/* Header */}
        <div className="mb-10 text-center sm:mb-14">
          <h2 className="text-[24px] font-bold leading-[1.02]  text-slate-950 sm:text-[34px] md:text-[46px]">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-teal-500 bg-clip-text text-transparent">Noornova</span>
          </h2>

          <p className="text-gray-600 mt-3">
            We&apos;re more than just a technology provider—we&apos;re your growth partner
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {features.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
              >
                {/* Icon */}
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-lg ${item.iconBg}`}
                >
                  <Icon size={20} />
                </div>

                {/* Title */}
                <h3 className="mt-4 font-semibold text-lg text-gray-900">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
      </section>
      <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-20">
        
        <div className="rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 px-6 py-10 text-center text-white shadow-lg sm:px-8">

          {/* Heading */}
          <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
            Ready to Transform Your Business?
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-base text-white/90 sm:text-lg">
            Join hundreds of local businesses using Noornova AI to capture more
            leads and grow revenue.
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
        </>
    )
}


export default About;

