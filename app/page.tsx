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
    <div className="h-screen w-screen overflow-hidden bg-[#e4fdb0] flex items-center justify-center px-6 md:px-16 relative selection:bg-[#012f2c] selection:text-[#e4fdb0]">
      {/* Main layout */}
      <div className="max-w-350 w-full flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* Left — Text + Waitlist */}
        <div className="flex flex-col items-start gap-8 z-20 shrink-0 mt-10 md:mt-0">
          <h1
            className="text-[#012f2c] font-black uppercase leading-[0.82] tracking-tighter m-0 p-0 animate-[fadeSlideIn_0.7s_ease-out_both]"
            style={{ fontSize: "clamp(72px, 12vw, 200px)" }}
          >
            Simp
            <br />
            Lx.sh
          </h1>

          {/* Waitlist */}
          <div className="w-full max-w-sm animate-[fadeSlideIn_0.7s_ease-out_0.2s_both]">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex gap-2 ml-1 md:ml-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  required
                  className="flex-1 px-5 py-4 bg-[#012f2c]/5 border border-[#012f2c]/10 text-[#012f2c] placeholder:text-[#012f2c]/30 text-sm font-medium outline-none transition-all duration-300 focus:border-[#012f2c]/25 focus:bg-[#012f2c]/8 focus:shadow-[0_0_0_4px_rgba(1,47,44,0.06)]"
                />
                <button
                  type="submit"
                  className="px-7 py-4 bg-[#012f2c] text-[#e4fdb0] font-bold text-xs tracking-widest uppercase transition-all duration-300 hover:bg-[#012f2c]/85 active:scale-[0.97] cursor-pointer whitespace-nowrap"
                >
                  JOIN WAITLIST
                </button>
              </form>
            ) : (
              <div className="flex flex-col gap-1 ml-1 md:ml-3 animate-[fadeSlideIn_0.4s_ease-out_both]">
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
          <p className="text-[#012f2c]/40 text-xs font-medium tracking-widest uppercase ml-1 md:ml-3 animate-[fadeSlideIn_0.7s_ease-out_0.4s_both]">
            🇮🇳 Built in Bharat, by Ashu
          </p>
        </div>

        {/* Right — Image floating over 4*4 */}
        <div
          className="relative flex-1 flex items-center justify-center min-h-100 md:min-h-150 w-full mt-8 md:mt-0"
          suppressHydrationWarning
        >
          {/* Giant "4*4" background text */}
          <div
            className="absolute right-[-10%] md:right-[-5%] top-1/2 -translate-y-1/2 text-[#b4f044] font-black leading-none select-none -z-10 tracking-tighter"
            style={{ fontSize: "clamp(280px, 45vw, 700px)" }}
            suppressHydrationWarning
          >
            <span>4*4</span>
          </div>

          {/* Floating character image */}
          <div
            className="relative w-full max-w-62.5 md:max-w-95 lg:max-w-112.5 aspect-3/4 z-10 md:mr-12 animate-[floatChar_4s_ease-in-out_infinite]"
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
