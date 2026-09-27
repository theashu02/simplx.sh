"use client";

import { useState } from "react";
import Image from "next/image";
import { NotFoundURL } from "@/lib/socialLogos";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes("@")) {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-dvh w-full overflow-hidden bg-[#e4fdb0] flex items-center justify-center px-4 sm:px-6 md:px-16 relative selection:bg-[#012f2c] selection:text-[#e4fdb0]">
      {/* Main layout */}
      <div className="max-w-350 w-full flex flex-col md:flex-row items-center justify-center md:justify-between relative z-10 py-8 md:py-0">
        {/* Left — Text + Waitlist */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6 md:gap-8 z-20 shrink-0">
          <h2
            className="text-[#012f2c] font-black leading-[0.85] md:leading-[0.82] tracking-tighter m-0 p-0 animate-[fadeSlideIn_0.7s_ease-out_both]"
            style={{ fontSize: "clamp(90px, 18vw, 300px)" }}
          >
            SimP
            <br />
            Lx.sh
          </h2>

          {/* Waitlist */}
          <div className="w-full max-w-sm sm:max-w-md md:max-w-sm animate-[fadeSlideIn_0.7s_ease-out_0.2s_both]">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 w-full">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  required
                  className="flex-1 px-4 py-3.5 md:px-5 md:py-4 bg-[#012f2c]/5 border border-[#012f2c]/10 text-[#012f2c] placeholder:text-[#012f2c]/30 text-sm font-medium outline-none transition-all duration-300 focus:border-[#012f2c]/25 focus:bg-[#012f2c]/8 focus:shadow-[0_0_0_4px_rgba(1,47,44,0.06)]"
                />
                <button
                  type="submit"
                  className="px-6 py-3.5 md:px-7 md:py-4 bg-[#012f2c] text-[#e4fdb0] font-bold text-xs tracking-widest uppercase transition-all duration-300 hover:bg-[#012f2c]/85 active:scale-[0.97] cursor-pointer whitespace-nowrap"
                >
                  JOIN WAITLIST
                </button>
              </form>
            ) : (
              <div className="flex flex-col gap-1 animate-[fadeSlideIn_0.4s_ease-out_both]">
                <p className="text-[#012f2c] font-bold text-sm tracking-wide">
                  You&apos;re on the list ✓
                </p>
                <p className="text-[#012f2c]/40 text-xs">
                  We&apos;ll reach out to{" "}
                  <span className="text-[#012f2c]/70 font-semibold">{email}</span>
                </p>
              </div>
            )}
          </div>

          {/* Quote */}
          <p className="text-[#012f2c]/40 text-xs font-medium tracking-widest uppercase animate-[fadeSlideIn_0.7s_ease-out_0.4s_both]">
            🇮🇳 Built in Bharat, by Ashu
          </p>
        </div>

        {/* Right — Image floating over 4*4 */}
        <div
          className="relative flex-1 flex items-center justify-center min-h-[40vh] md:min-h-150 w-full mt-8 md:mt-0"
          suppressHydrationWarning
        >
          {/* Giant "4*4" background text */}
          <div
            className="absolute right-[50%] translate-x-[50%] md:right-[-5%] md:translate-x-0 top-1/2 -translate-y-1/2 text-[#b4f044] font-black leading-none select-none -z-10 tracking-tighter"
            style={{ fontSize: "clamp(180px, 45vw, 700px)" }}
            suppressHydrationWarning
          >
            <span>4*4</span>
          </div>

          {/* Floating character image */}
          <div
            className="relative w-full max-w-45 sm:max-w-55 md:max-w-95 lg:max-w-112.5 aspect-3/4 z-10 md:mr-12 animate-[floatChar_4s_ease-in-out_infinite]"
            suppressHydrationWarning
          >
            <Image
              src={NotFoundURL}
              alt="simplx character"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes floatChar {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-18px);
          }
        }
      `}</style>
    </div>
  );
}
