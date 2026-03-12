import { Phone, MessageCircle, Check } from "lucide-react";
import BookDemoButton from "@/components/BookDemoButton";

export default function AIServicesSection() {
  const services = [
    {
      icon: Phone,
      badge: "POPULAR",
      badgeStyle: "bg-blue-600 text-white",
      title: "AI Voice Agent",
      description:
        "Never miss a call again. Our AI answers, qualifies leads, and books appointments 24/7.",
      features: [
        "24/7 call answering",
        "Smart conversations with natural voice",
        "Automatic appointment booking",
        "CRM integration",
        "Real-time analytics dashboard",
      ],
      button: "Book Demo",
      gradient: "from-blue-600 to-purple-600",
      cardBg: "bg-gradient-to-br from-gray-50 to-gray-100",
    },
    {
      icon: MessageCircle,
      badge: "$200/month",
      badgeStyle: "bg-green-600 text-white",
      title: "WhatsApp Automation AI",
      description:
        "Automate customer conversations and follow-ups on WhatsApp to never lose a lead.",
      features: [
        "Automatic replies to messages",
        "Intelligent lead capture",
        "Personalized follow-ups",
        "Broadcast messaging campaigns",
        "Multi-language support",
      ],
      button: "Book Demo",
      gradient: "from-teal-600 to-blue-600",
      cardBg: "bg-gradient-to-br from-gray-50 to-gray-100",
    },
  ];

  return (
    <section className="bg-white px-6 md:px-10 lg:px-20 py-16  sm:py-20 ">

         <div className="text-center">
          <h2 className="text-[24px] font-bold leading-[1.02] tracking-[-0.02em] text-slate-950 sm:text-[34px] md:text-[50px]">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-teal-500 bg-clip-text text-transparent">
              AI Solutions
            </span>
          </h2>
          <p className="mt-4 text-md text-slate-600 md:text-lg">
           Learn how AI automation can help your business grow
          </p>
        </div>
      <div className="mx-auto grid  gap-6 pt-10 lg:grid-cols-2 lg:gap-10">
        {services.map((service, i) => {
          const Icon = service.icon;

          return (
            <div
              key={i}
              className={`relative rounded-2xl p-6 shadow-md sm:p-8 lg:p-10 ${service.cardBg}`}
            >
              {/* Badge */}
              <span
                className={`absolute top-8 right-8 text-xs px-3 py-1 rounded-full font-semibold ${service.badgeStyle}`}
              >
                {service.badge}
              </span>

              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 text-white shadow-md">
                <Icon size={22} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mt-6">{service.title}</h3>

              {/* Description */}
              <p className="text-gray-600 mt-2">{service.description}</p>

              {/* Features */}
              <ul className="mt-6 space-y-3">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700">
                    <Check size={18} className="text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <BookDemoButton
                className={`mt-8 w-full rounded-lg bg-gradient-to-r py-3 font-semibold text-white ${service.gradient}`}
              >
                {service.button}
              </BookDemoButton>
            </div>
          );
        })}
      </div>
      <AIFeaturesSection />
    </section>
  );
}



import { UserPlus, Star, Megaphone, TrendingUp } from "lucide-react";

function AIFeaturesSection() {
  const features = [
    {
      icon: <UserPlus size={28} />,
      title: "AI Lead Generation System",
      description: "Automatically find and qualify leads",
    },
    {
      icon: <Star size={28} />,
      title: "AI Review Booster",
      description: "Get more 5-star reviews automatically",
    },
    {
      icon: <Megaphone size={28} />,
      title: "AI Marketing Automation",
      description: "Automate your entire marketing funnel",
    },
    {
      icon: <TrendingUp size={28} />,
      title: "AI Sales Assistant",
      description: "Close more deals with AI guidance",
    },
  ];

  return (
    <section className="bg-white pt-12 sm:pt-16">
      <div className="mx-auto ">

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-2xl bg-gray-50 p-3 transition sm:p-4"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center text-gray-600">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="mt-6 text-lg font-semibold text-gray-900">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-gray-600 text-sm">
                {feature.description}
              </p>

              {/* Badge */}
              <span className="inline-block mt-5 px-4 py-1 text-sm font-medium text-purple-700 bg-purple-100 rounded-full">
                Coming Soon
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
