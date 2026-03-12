"use client"

import { ChevronDown } from "lucide-react"
import { useState } from "react"


const SCRIPT_URL =
  process.env.NEXT_PUBLIC_CONTACT_FORM_URL 
//   "https://script.google.com/macros/s/AKfycbxWb33jkYVZDqGpN6GTj_KLoywIXbwA8RdzM-CncjNmhrAxwcQCENNfsK7xvZuvFMqeOQ/exec"

const serviceOptions = ["$1000 - $2000", "$2000 - $3000", "$3000 - $4000", "$4000 - $5000"]



export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    business: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const formBody = new URLSearchParams()
      formBody.append("fullName", formData.fullName)
      formBody.append("email", formData.email)
      formBody.append("mobile", formData.mobile)
      formBody.append("business", formData.website)
      formBody.append("message", formData.service)

      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formBody.toString(),
      })

      await sendThankYouEmail({
        email: formData.email,
        name: formData.fullName,
        mobile: formData.mobile,
        business: formData.business,
        message: formData.message,
      })

      setSuccess(true)
      setFormData({
        fullName: "",
        email: "",
        mobile: "",
        business: "",
        message: "",
      })
    } catch (err) {
      console.error("Error submitting form", err)
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="bg-white px-10 py-16 sm:px-16 sm:py-20 lg:px-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2 lg:gap-16">
         <div className="pt-2">
          <h2 className="text-[24px] font-bold leading-[1.02] tracking-[-0.04em] text-slate-950 sm:text-[34px] md:text-[50px]">
            Get in{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-teal-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-7 text-slate-600">
            Have questions about our AI automation solutions? Want to learn how
            we can help your business grow? Reach out to our team.
          </p>

          <div className="mt-10 space-y-4">
            <InfoRow
              tone="blue"
              title="Email Us"
              lines={["hello@noornova.com"]}
              icon={
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M4.8 6.8h14.4c.7 0 1.3.6 1.3 1.3v9.8c0 .7-.6 1.3-1.3 1.3H4.8c-.7 0-1.3-.6-1.3-1.3V8.1c0-.7.6-1.3 1.3-1.3Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 8l7 6 7-6"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
            />

            <InfoRow
              tone="purple"
              title="Call Us"
              lines={["+1 (800) 555-1234"]}
              icon={
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M6.6 3.5h2.6c.5 0 1 .4 1.1.9l.6 3c.1.5-.1 1-.5 1.2l-1.9 1.1c1.2 2.2 3 4 5.2 5.2l1.1-1.9c.3-.4.8-.6 1.2-.5l3 .6c.5.1.9.6.9 1.1v2.6c0 .7-.6 1.3-1.3 1.3C11 19.1 4.9 13 4.9 4.8c0-.7.6-1.3 1.3-1.3Z"
                    fill="currentColor"
                  />
                </svg>
              }
            />

            <InfoRow
              tone="teal"
              title="Visit Us"
              lines={["San Francisco, CA", "United States"]}
              icon={
                <svg
                  viewBox="0 0 24 24"
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
              }
            />
          </div>
        </div>

        <div className="rounded-3xl border border-[#d9dbf6] bg-[#F3F6FF] p-6 shadow-lg shadow-blue-300 shadow-to-purple-300 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-2">


             <div className="flex flex-col gap-2 justify-start">
                <label className="font-semibold">Name*</label>
            <input
              type="text"
              name="fullName"
              placeholder="Your name"
              value={formData.fullName}
              required
              onChange={handleChange}
              className="w-full rounded-xl bg-white border border-gray-300 p-3 text-gray-900 placeholder-gray-400 transition focus:border-[#3760ff] focus:outline-none focus:ring-2 focus:ring-[#3760ff]/30"
            />
            </div>

             <div className="flex flex-col gap-2 justify-start">
                <label className="font-semibold">Email*</label>

            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              value={formData.email}
              required
              onChange={handleChange}
              className="w-full rounded-xl bg-white border border-gray-300 p-3 text-gray-900 placeholder-gray-400 transition focus:border-[#3760ff] focus:outline-none focus:ring-2 focus:ring-[#3760ff]/30"
            />
            </div>
           

            <div className="flex flex-col gap-2 justify-start">
                <label className="font-semibold">Business Name*</label>
            <input
              type="url"
              name="business"
              placeholder="Your business"
              value={formData.business}
              onChange={handleChange}
              className="w-full rounded-xl bg-white border border-gray-300 p-3 text-gray-900 placeholder-gray-400 transition focus:border-[#3760ff] focus:outline-none focus:ring-2 focus:ring-[#3760ff]/30"
            />
            </div>

             <div className="flex flex-col gap-2 justify-start">
                <label className="font-semibold">Phone*</label>

            <input
              type="tel"
              name="mobile"
              placeholder="+1 (555) 000-0000"
              value={formData.mobile}
              required
              onChange={handleChange}
              className="w-full rounded-xl bg-white border border-gray-300 p-3 text-gray-900 placeholder-gray-400 transition focus:border-[#3760ff] focus:outline-none focus:ring-2 focus:ring-[#3760ff]/30"
            />
            </div>


            <div className="flex flex-col gap-2 justify-start">
                <label className="font-semibold">Message*</label>
                <textarea
              type="text"
              name="message"
              placeholder="Tell us about your needs..."
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full rounded-xl border bg-white  resize-none border-gray-300  p-3 text-gray-900 placeholder-gray-400 transition focus:border-[#3760ff] focus:outline-none focus:ring-2 focus:ring-[#3760ff]/30"
            />
            </div>
             

            
            {error ? (
              <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">{error}</div>
            ) : null}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-gradient-to-r from-blue-500 to-purple-700 text-white py-3 font-medium text-white transition hover:bg-[#ef1f56] disabled:cursor-not-allowed disabled:bg-[#ff2e63]/70"
            >
              {loading ? "Submitting..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}



function InfoRow({ title, lines, icon, tone }) {
  const toneClasses =
    tone === "blue"
      ? "bg-blue-100 text-blue-600"
      : tone === "purple"
        ? "bg-purple-100 text-purple-600"
        : "bg-teal-100 text-teal-700";

  return (
    <div className="flex items-start gap-6">
      <div
        className={`grid h-12 w-12 shrink-0 place-items-center rounded-md ${toneClasses}`}
      >
        <span className="[&>svg]:h-7 [&>svg]:w-7">{icon}</span>
      </div>
      <div className="pt-1">
        <div className="text-md font-semibold text-slate-950">{title}</div>
        <div className="mt-1 space-y-1 text-[15px] leading-5 text-slate-600">
          {lines.map((line) => (
            <div key={line}>{line}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
