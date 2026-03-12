"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { X } from "lucide-react";

const SCRIPT_URL =
  process.env.NEXT_PUBLIC_DEMO_SHEET_SCRIPT_URL ||
    "https://script.google.com/macros/s/AKfycbyFLMjUoc3tFtASd4mzqGmuMjXTplAAmaRUE5R1bJgp5WVqztvOHVDZEL3hrEdadvAJZw/exec"

export default function DemoModal({ open, onClose }) {
  const [fullName, setFullName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [industry, setIndustry] = useState("");
  const [callsPerDay, setCallsPerDay] = useState("");
  const [goals, setGoals] = useState([]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const closeTimerRef = useRef(null);

  const callsOptions = useMemo(() => ["1-10", "10-30", "30-50", "50+"], []);
  const goalsOptions = useMemo(
    () => [
      "Answer calls",
      "Lead qualification",
      "Appointment booking",
      "Customer support",
      "Follow-ups",
    ],
    [],
  );

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

  useEffect(() => {
    if (!open) return;
    setIsSuccess(false);
    setError("");
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, [open]);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }

    try {
      const formBody = new URLSearchParams();

      // Send keys in a couple common formats (helps match your Apps Script)
      formBody.append("fullName", fullName);
      formBody.append("name", fullName);

      formBody.append("businessName", businessName);
      formBody.append("business", businessName);

      formBody.append("email", email);
      formBody.append("phone", phone);
      formBody.append("mobile", phone);

      formBody.append("website", website);
      formBody.append("industry", industry);

      formBody.append("callsPerDay", callsPerDay);
      formBody.append("calls", callsPerDay);

      formBody.append("goals", goals.join(", "));

      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: formBody.toString(),
      });

      setIsSuccess(true);
      setFullName("");
      setBusinessName("");
      setEmail("");
      setPhone("");
      setWebsite("");
      setIndustry("");
      setCallsPerDay("");
      setGoals([]);

      // Close automatically after successful submission
      closeTimerRef.current = setTimeout(() => {
        onClose?.();
      }, 800);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

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
            <form className="space-y-5" onSubmit={handleSubmit}>
              {isSuccess ? (
                <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800">
                  Thanks! Your details were submitted successfully. We&apos;ll
                  contact you soon.
                </div>
              ) : null}
              {error ? (
                <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                  {error}
                </div>
              ) : null}

              {/* Row */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="John Smith"
                  className="w-full rounded-lg border p-3"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Your Business"
                  className="w-full rounded-lg border p-3"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  required
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  type="email"
                  placeholder="john@gmail.com"
                  className="w-full rounded-lg border p-3"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="w-full rounded-lg border p-3"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>

              {/* Website */}
              <input
                type="text"
                placeholder="https://yourbusiness.com"
                className="w-full rounded-lg border p-3"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />

              {/* Industry */}
              <select
                className="w-full rounded-lg border p-3"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                required
              >
                <option value="">Select your industry</option>
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
                  {callsOptions.map((range) => (
                    <button
                      type="button"
                      key={range}
                      onClick={() => setCallsPerDay(range)}
                      className={`rounded-lg border py-2 text-sm transition hover:bg-gray-100 ${
                        callsPerDay === range
                          ? "border-blue-600 bg-blue-50"
                          : "border-gray-200 bg-white"
                      }`}
                    >
                      {range}
                    </button>
                  ))}
                </div>
                <p className="mt-2 text-xs text-gray-500">
                  {callsPerDay ? `Selected: ${callsPerDay}` : "Select one option"}
                </p>
              </div>

              {/* Automation Goals */}
              <div>
                <p className="text-sm font-medium mb-2">
                  Automation Goals
                </p>

                <div className="space-y-2 text-sm">
                  {goalsOptions.map((item) => (
                    <label key={item} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={goals.includes(item)}
                        onChange={(e) => {
                          setGoals((prev) => {
                            if (e.target.checked) return [...prev, item];
                            return prev.filter((x) => x !== item);
                          });
                        }}
                      />
                      {item}
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting || !callsPerDay}
                className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 py-3 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Submitting..." : "Schedule My Demo"}
              </button>

            </form>
          </div>
        </div>
    </div>
  );
}
