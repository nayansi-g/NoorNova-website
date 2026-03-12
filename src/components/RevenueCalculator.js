"use client";
"use client";

import { useState } from "react";
import { Phone, XCircle, DollarSign, Calendar, Calculator } from "lucide-react";
import BookDemoButton from "@/components/BookDemoButton";

export default function RevenueCalculator() {
  const [calls, setCalls] = useState(100);
  const [missedPercent, setMissedPercent] = useState(30);
  const [avgDeal, setAvgDeal] = useState(200);

  const missedCalls = Math.round((calls * missedPercent) / 100);
  const weeklyRevenue = missedCalls * avgDeal;
  const yearlyRevenue = weeklyRevenue * 52;

  return (
    <section className="bg-[#FFF6EF] py-16 sm:py-20 px-6 md:px-10 lg:px-20">

        <div className="mx-auto text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
          <Calculator size={16} />
          Revenue Loss Calculator
        </div>

        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
          The Real Cost of{" "}
          <span className="text-red-600">
            Missed Opportunities
          </span>
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Adjust the sliders below to calculate how much revenue your
          business is losing
        </p>

      </div>
      <div className="mx-auto mt-12 grid  gap-8 lg:grid-cols-2 lg:gap-10 ">

        {/* LEFT PANEL */}
        <div className="rounded-2xl bg-white p-6 shadow-lg sm:p-8">

          <h3 className="text-xl font-semibold mb-8">
            Interactive Calculator
          </h3>

          {/* Calls Slider */}
          <div className="mb-8">
            <div className="flex justify-between mb-2 text-sm">
              <span>Calls per week</span>
              <span className="font-bold text-blue-600">{calls}</span>
            </div>

            <input
              type="range"
              min="10"
              max="500"
              value={calls}
              onChange={(e) => setCalls(Number(e.target.value))}
              className="w-full accent-blue-500"
            />
          </div>

          {/* Missed Percentage */}
          <div className="mb-8">
            <div className="flex justify-between mb-2 text-sm">
              <span>Missed calls percentage</span>
              <span className="font-bold text-orange-500">
                {missedPercent}%
              </span>
            </div>

            <input
              type="range"
              min="10"
              max="80"
              value={missedPercent}
              onChange={(e) => setMissedPercent(Number(e.target.value))}
              className="w-full accent-orange-500"
            />
          </div>

          {/* Avg Deal */}
          <div className="mb-8">
            <div className="flex justify-between mb-2 text-sm">
              <span>Average deal value</span>
              <span className="font-bold text-purple-600">
                ${avgDeal}
              </span>
            </div>

            <input
              type="range"
              min="50"
              max="2000"
              value={avgDeal}
              onChange={(e) => setAvgDeal(Number(e.target.value))}
              className="w-full accent-purple-500"
            />
          </div>

          {/* Calculation */}
          <div className="mb-6 rounded-xl bg-gray-100 p-6 text-sm">
           <div className="flex justify-between items-center"> <p className="font-medium mb-2">
              Missed calls per week
            </p>
            <p className="text-2xl font-bold">
              {missedCalls}
            </p></div>
            <p className="text-gray-500">
              {calls} calls Ã— {missedPercent}% = {missedCalls} missed opportunities
            </p>
          </div>

          {/* Weekly Revenue */}
          <div className="bg-red-500 text-white rounded-xl p-6 mb-4">
            <p className="text-sm">Lost Revenue Per Week</p>
            <p className="text-3xl font-bold">
              ${weeklyRevenue.toLocaleString()}
            </p>
          </div>

          {/* Yearly Revenue */}
          <div className="bg-red-600 text-white rounded-xl p-6">
            <p className="text-sm">Lost Revenue Per Year</p>
            <p className="text-3xl font-bold">
              ${yearlyRevenue.toLocaleString()}+
            </p>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="space-y-6">

          {/* Money Box */}
          <div className="bg-white rounded-xl shadow-lg p-4 text-center">
            <p className="text-red-600 font-semibold mb-2">
              Money Flowing Away
            </p>

            <p className="text-3xl font-bold text-red-600">
              ${weeklyRevenue.toLocaleString()}
            </p>

            <p className="text-gray-500">
              lost every week
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

            <div className="bg-blue-600 text-white p-6 rounded-xl">
              <Phone className="mb-2 bg-white/20 w-6 h-6 p-1 rounded-sm"/>
              <p className="text-2xl font-bold">{calls}</p>
              <p className="text-sm">Total Calls</p>
            </div>

            <div className="bg-orange-500 text-white p-6 rounded-xl">
              <XCircle className="mb-2 bg-white/20 w-6 h-6 p-1 rounded-sm"/>
              <p className="text-2xl font-bold">{missedCalls}</p>
              <p className="text-sm">Missed Calls</p>
            </div>

            <div className="bg-purple-600 text-white p-6 rounded-xl">
              <DollarSign className="mb-2 bg-white/20 w-6 h-6 p-1 rounded-sm"/>
              <p className="text-2xl font-bold">${avgDeal}</p>
              <p className="text-sm">Avg Deal</p>
            </div>

            <div className="bg-green-600 text-white p-6 rounded-xl">
              <Calendar className="mb-2 bg-white/20 w-6 h-6 p-1 rounded-sm"/>
              <p className="text-2xl font-bold">52</p>
              <p className="text-sm">Weeks/Year</p>
            </div>

          </div>

          {/* CTA */}
          <div className="bg-yellow-400 rounded-2xl p-6">
            <p className="font-semibold mb-2">
              Did You Know?
            </p>

            <p className="text-sm">
              With an AI Voice Agent, you could capture 100% of these calls
              and potentially recover{" "}
              <b>${yearlyRevenue.toLocaleString()}</b> in annual revenue.
            </p>

            <BookDemoButton className="mt-4 rounded-lg bg-purple-600 px-5 py-2 text-white">
              Book Demo
            </BookDemoButton>
          </div>

        </div>
      </div>
      <div className=" pt-12 sm:pt-16">
      <div className=" ">
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-teal-500 px-6 py-6 text-center text-white shadow-lg sm:px-10 sm:py-8">

          {/* Decorative Circles */}
          <div className="absolute left-6 top-6 w-16 h-16 border border-white/30 rounded-full"></div>
          <div className="absolute right-10 bottom-6 w-24 h-24 border border-white/30 rounded-full"></div>
          <div className="absolute left-1/2 top-1/2 w-40 h-40 border border-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>

          {/* Badge */}
          <div className="mb-4 inline-block rounded-full bg-white/20 px-4 py-1 text-sm backdrop-blur">
            💰 Stop Losing Money
          </div>

          {/* Heading */}
          <h2 className="mb-3 text-2xl font-bold sm:text-3xl md:text-4xl">
            Don&apos;t Let Another Lead Slip Away
          </h2>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-white/90 mb-6">
            Every day you wait is another day of lost revenue. Let our AI Voice
            Agent capture every opportunity and turn missed calls into booked
            appointments.
          </p>

          {/* Button */}
          <button className="bg-white text-blue-600 font-medium px-8 py-3 rounded-lg shadow hover:shadow-lg transition">
            Book Your Free Demo Now
          </button>
        </div>
      </div>
    </div>
    </section>
  );
}

