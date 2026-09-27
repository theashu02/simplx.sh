"use client";

import { useState } from "react";
import Image from "next/image";
import { NotFoundURL } from "@/lib/socialLogos";
import { useWaitlist } from "@/hooks/useWaitlist";

export default function Home() {
  const [email, setEmail] = useState("");
  const { joinWaitlist, loading, success, error, setError } = useWaitlist();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes("@")) {
      await joinWaitlist(email);
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
            {!success ? (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-2 w-full relative"
              >
                <div className="flex-1 flex flex-col">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError(null);
                    }}
                    placeholder="you@email.com"
                    required
                    disabled={loading}
                    className="w-full px-4 py-3.5 md:px-5 md:py-4 bg-[#012f2c]/5 border border-[#012f2c]/10 text-[#012f2c] placeholder:text-[#012f2c]/30 text-sm font-medium outline-none transition-all duration-300 focus:border-[#012f2c]/25 focus:bg-[#012f2c]/8 focus:shadow-[0_0_0_4px_rgba(1,47,44,0.06)] disabled:opacity-50"
                  />
                  {error && (
                    <span className="text-red-500/80 text-[10px] font-bold uppercase tracking-wide mt-1 text-left ml-1 absolute -bottom-5">
                      {error}
                    </span>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-3.5 md:px-7 md:py-4 bg-[#012f2c] text-[#e4fdb0] font-bold text-xs tracking-widest uppercase transition-all duration-300 hover:bg-[#012f2c]/85 active:scale-[0.97] cursor-pointer whitespace-nowrap disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center min-w-35"
                >
                  {loading ? (
                    <svg
                      className="animate-spin h-4 w-4 text-[#e4fdb0]"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  ) : (
                    "JOIN WAITLIST"
                  )}
                </button>
              </form>
            ) : (
              <div className="flex flex-col gap-2 animate-[fadeSlideIn_0.4s_ease-out_both]">
                <p className="text-[#012f2c] font-bold text-2xl tracking-wide">
                  You&apos;re on the list ✓
                </p>
                <p className="text-[#012f2c]/60 text-base">
                  We&apos;ll reach out to{" "}
                  <span className="text-[#012f2c] font-semibold">{email}</span>
                </p>
                <p className="text-[#012f2c]/40 text-sm font-medium mt-1">
                  Check your spam folder if you don&apos;t see the email
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
              sizes="(max-width: 768px) 220px, (max-width: 1200px) 380px, 450px"
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
