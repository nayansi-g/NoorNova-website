"use client"
import { CalendarCheck, MessageCircle, PhoneCall } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import BookDemoButton from "@/components/BookDemoButton";
import { motion } from "framer-motion";




export default function ContactButtons() {
  return (
    <div className="fixed right-8 bottom-6 z-50 flex flex-col items-end gap-3">
      {/* Call Us Button */}
      {/* <a
        href="tel:+919897165137"
        className="group flex h-12 w-12 items-center  justify-center rounded-full border border-[#0070DC] bg-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
        aria-label="Call TubeHelper"
      >
        <PhoneCall className="h-5 w-5 text-[#0070DC]" />
        <span className="sr-only">Call Us</span>
      </a> */}

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919897165137"
        className="group flex h-12 w-12 mb-2 items-center justify-center rounded-full bg-green-500 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
        aria-label="Chat on WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="h-7 w-7 text-white" />
        <span className="sr-only">WhatsApp</span>
      </a>

       <motion.div
        animate={{ y: [0, -13, 0] }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
      <BookDemoButton className="hero-btn-primary inline-flex h-12 items-center justify-center gap-1 rounded-full px-6 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(74,93,255,0.34)]">
        <CalendarCheck className="h-5 w-5" />
        Book Demo
      </BookDemoButton></motion.div>
    </div>
  );
}
