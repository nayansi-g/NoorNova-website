import Image from "next/image";
import { PhoneOff, UserX, DollarSign, X } from "lucide-react";

export default function StatsSection() {

    const items = [
    {
      title: "Lost Revenue Opportunities",
      desc: "Every missed call could be a high-value customer ready to buy",
    },
    {
      title: "Damaged Reputation",
      desc: "Customers perceive unanswered calls as poor service quality",
    },
    {
      title: "Competitive Disadvantage",
      desc: "Leads immediately call your competitors who answer faster",
    },
    {
      title: "Wasted Marketing Budget",
      desc: "Your ads generate leads, but missed calls waste that investment",
    },
  ];


  const stats = [
    {
      icon: <PhoneOff size={32} className="text-white" />,
      value: "27%",
      title: "Business Calls Go Unanswered",
      desc: "More than 1 in 4 calls never get answered",
      iconBg: "bg-red-600",
      cardBg: "bg-red-50",
      valueColor: "text-red-600",
    },
    {
      icon: <UserX size={32} className="text-white" />,
      value: "85%",
      title: "Customers Don't Call Back",
      desc: "Lost leads move on to your competitors",
      iconBg: "bg-orange-500",
      cardBg: "bg-orange-50",
      valueColor: "text-orange-500",
    },
    {
      icon: <DollarSign size={32} className="text-white" />,
      value: "$3K-$10K",
      title: "Lost Revenue Per Month",
      desc: "Average business loses thousands monthly",
      iconBg: "bg-red-600",
      cardBg: "bg-red-50",
      valueColor: "text-red-600",
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-20 px-6 md:px-10 lg:px-20">
      <div className="mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-3xl mx-auto  font-bold text-gray-900 sm:text-4xl md:text-5xl">
          Missed Calls Are Costing Businesses{" "}
          <span className="text-red-600">Thousands</span>
        </h2>

        <p className="mt-4 text-base text-gray-600 sm:text-lg">
          Every unanswered call is a lost opportunity. Here&apos;s what the data
          shows:
        </p>

        {/* Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3 md:gap-8 lg:mt-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`rounded-xl p-4 shadow-sm sm:p-6 lg:p-6 ${stat.cardBg}`}
            >
              {/* Icon */}
              <div
                className={`w-13 h-13 mx-auto flex items-center justify-center rounded-full ${stat.iconBg}`}
              >
                {stat.icon}
              </div>

              {/* Value */}
              <h3 className={`mt-4 text-3xl font-bold sm:text-5xl ${stat.valueColor}`}>
                {stat.value}
              </h3>

              {/* Title */}
              <p className="mt-3 font-semibold text-gray-800">
                {stat.title}
              </p>

              {/* Description */}
              <p className="mt-2 text-gray-600 text-sm">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>

      </div>

      <div className="py-14 sm:py-20">
      <div className="mx-auto">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          
          {/* Image */}
          <div className="relative h-[240px] w-full overflow-hidden rounded-2xl sm:h-[320px] lg:h-[420px]">
            <Image
              src="/missedCallImg.jpg"
              alt="Missed calls problem"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="mb-6 text-2xl font-bold text-gray-900 sm:text-3xl lg:mb-10">
              The Hidden Cost of Missed Calls
            </h2>

            <div className="space-y-4">
              {items.map((item, index) => (
                <div key={index} className="flex gap-5">
                  
                  {/* Icon */}
                  <div className="w-10 h-10 flex items-center  justify-center rounded-xl bg-red-100">
                    <X className="text-red-600 border border-red-600 rounded-full" size={18} />
                  </div>

                  {/* Text */}
                  <div>
                    <h4 className="font-semibold text-md text-gray-900">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm mt-1">
                      {item.desc}
                    </p>
                  </div>

                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
    </section>
  );
}
