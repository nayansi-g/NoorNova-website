"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

export default function DemoModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose?.();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="">
      {/* Modal */}
        <div
          className="fixed inset-0 z-50 flex items-center  justify-center bg-black/40 backdrop-blur-sm p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Book demo modal"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) onClose?.();
          }}
        >
          <div className="relative w-full  h-[95vh]  overflow-y-scroll scrollbar-hide max-w-2xl rounded-xl bg-white p-6 shadow-xl sm:p-8">

            {/* Close */}
            <button
              onClick={onClose}
              className="absolute right-5 top-5 text-gray-400 hover:text-gray-600"
            >
              <X size={20} />
            </button>

            {/* Title */}
            <h2 className="text-2xl font-bold text-center">
              Book Your AI Voice Agent Demo
            </h2>

            <p className="text-center text-gray-500 mt-2 mb-8 text-sm">
              See how AI can answer calls, capture leads, and book appointments automatically.
            </p>

            {/* Form */}
            <form className="space-y-5">

              {/* Row */}
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="John Smith"
                  className="w-full rounded-lg border p-3"
                />
                <input
                  type="text"
                  placeholder="Your Business"
                  className="w-full rounded-lg border p-3"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="john@business.com"
                  className="w-full rounded-lg border p-3"
                />
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="w-full rounded-lg border p-3"
                />
              </div>

              {/* Website */}
              <input
                type="text"
                placeholder="https://yourbusiness.com"
                className="w-full rounded-lg border p-3"
              />

              {/* Industry */}
              <select className="w-full rounded-lg border p-3">
                <option>Select your industry</option>
                <option>Real Estate</option>
                <option>Healthcare</option>
                <option>Home Services</option>
                <option>Marketing</option>
              </select>

              {/* Calls */}
              <div>
                <p className="text-sm mb-2 font-medium">
                  Average Calls Per Day
                </p>

                <div className="grid grid-cols-4 gap-3">
                  {["1-10", "10-30", "30-50", "50+"].map((range) => (
                    <button
                      type="button"
                      key={range}
                      className="rounded-lg border py-2 text-sm hover:bg-gray-100"
                    >
                      {range}
                    </button>
                  ))}
                </div>
              </div>

              {/* Automation Goals */}
              <div>
                <p className="text-sm font-medium mb-2">
                  Automation Goals
                </p>

                <div className="space-y-2 text-sm">
                  {[
                    "Answer calls",
                    "Lead qualification",
                    "Appointment booking",
                    "Customer support",
                    "Follow-ups",
                  ].map((item) => (
                    <label key={item} className="flex items-center gap-2">
                      <input type="checkbox" />
                      {item}
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 py-3 font-semibold text-white"
              >
                Schedule My Demo
              </button>

            </form>
          </div>
        </div>
    </div>
  );
}
