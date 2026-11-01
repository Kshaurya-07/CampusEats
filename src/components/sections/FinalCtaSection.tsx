"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, CheckCircle, Loader2, ArrowRight, Users } from "lucide-react";
import { BRAND_NAME, CAMPUS_LOCATION, LAUNCH_TIMELINE } from "@/constants/brand";
import { TornEdge } from "../common/TornEdge";

export const FinalCtaSection: React.FC = () => {
  const [role, setRole] = useState<"student" | "outlet" | "delivery">("student");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [blockOrOutlet, setBlockOrOutlet] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [waitlistCount, setWaitlistCount] = useState<number | null>(null);

  // Fetch real count from API (only shown if real > 0)
  useEffect(() => {
    fetch("/api/waitlist")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && typeof data.count === "number" && data.count > 0) {
          setWaitlistCount(data.count);
        }
      })
      .catch(() => {
        // Silently omit counter if unable to fetch
      });
  }, [submitted]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, contact, role, blockOrOutlet }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to register");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Unable to submit. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative bg-dark text-cream pt-24 pb-20 px-4 sm:px-6 overflow-hidden">
      {/* Top Torn Edge Transitioning from Cream Roadmap */}
      <div className="absolute top-0 left-0 right-0">
        <TornEdge position="top" color="dark" />
      </div>

      <div className="relative max-w-4xl mx-auto z-10 pt-4">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-orange text-dark text-xs font-andika font-bold uppercase tracking-wider mb-3 border border-dark">
            <Sparkles className="w-3.5 h-3.5" /> Early Access
          </span>
          <h2 className="font-londrina uppercase text-5xl sm:text-7xl text-cream leading-[0.9] tracking-tight">
            Start Today.
          </h2>
          <p className="mt-4 font-inter text-base sm:text-xl text-cream/80 max-w-xl mx-auto">
            Join the waitlist to receive priority access, launch meal perks, and queue-free dining
            at {CAMPUS_LOCATION}.
          </p>

          {/* Real Counter (Shown ONLY if legitimate count > 0 from API) */}
          {waitlistCount !== null && waitlistCount > 0 && (
            <div className="mt-4 inline-flex items-center gap-2 bg-cream/10 px-4 py-1.5 rounded-full border border-cream/20 text-xs font-andika text-cream">
              <Users className="w-4 h-4 text-orange" />
              <span>
                <strong>{waitlistCount}</strong> verified campus members already registered!
              </span>
            </div>
          )}
        </div>

        {/* Form Container */}
        <div className="bg-cream text-dark p-6 sm:p-10 rounded-4xl border-4 border-cream shadow-[8px_12px_0px_#ff9500]">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-orange/20 border-2 border-dark text-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-10 h-10 text-dark" />
              </div>
              <h3 className="font-londrina text-3xl sm:text-4xl uppercase tracking-wide">
                Welcome to {BRAND_NAME}!
              </h3>
              <p className="mt-2 font-inter text-sm sm:text-base text-dark/80 max-w-md mx-auto">
                Thank you, <span className="font-bold">{name}</span>! We&apos;ve reserved your priority
                spot for {LAUNCH_TIMELINE}.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 px-6 py-2 bg-dark text-cream font-andika font-bold text-xs uppercase tracking-wider rounded-full border-2 border-dark hover:bg-[#301000]"
              >
                Register Another User
              </button>
            </div>
          ) : (
            <div>
              {/* Role Select Pills */}
              <div className="flex justify-center mb-6">
                <div className="grid grid-cols-3 gap-2 p-1.5 bg-dark/10 rounded-2xl border border-dark/20 w-full max-w-md">
                  <button
                    type="button"
                    onClick={() => setRole("student")}
                    className={`py-2 text-xs sm:text-sm font-andika font-bold rounded-xl transition-all ${
                      role === "student"
                        ? "bg-dark text-cream shadow-[2px_2px_0px_#ff9500]"
                        : "text-dark hover:bg-dark/5"
                    }`}
                  >
                    Student
                  </button>
                  <button
                    type="button"
                    onClick={() => setRole("outlet")}
                    className={`py-2 text-xs sm:text-sm font-andika font-bold rounded-xl transition-all ${
                      role === "outlet"
                        ? "bg-dark text-cream shadow-[2px_2px_0px_#ff9500]"
                        : "text-dark hover:bg-dark/5"
                    }`}
                  >
                    Campus Outlet
                  </button>
                  <button
                    type="button"
                    onClick={() => setRole("delivery")}
                    className={`py-2 text-xs sm:text-sm font-andika font-bold rounded-xl transition-all ${
                      role === "delivery"
                        ? "bg-dark text-cream shadow-[2px_2px_0px_#ff9500]"
                        : "text-dark hover:bg-dark/5"
                    }`}
                  >
                    Delivery Partner
                  </button>
                </div>
              </div>

              {error && (
                <div className="mb-4 p-3 bg-red-100 border border-red-500 text-red-700 text-xs rounded-xl font-inter text-center">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-andika font-bold uppercase tracking-wider mb-1 text-dark/80">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Arjun Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border-2 border-dark bg-white font-inter text-sm focus:outline-none focus:ring-2 focus:ring-orange"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-andika font-bold uppercase tracking-wider mb-1 text-dark/80">
                      {role === "outlet" ? "Contact Number / Email *" : "VIT-AP Email or Phone *"}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={
                        role === "outlet"
                          ? "outlet@domain.com or 9876543210"
                          : "student@vitap.ac.in or 9876543210"
                      }
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border-2 border-dark bg-white font-inter text-sm focus:outline-none focus:ring-2 focus:ring-orange"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-andika font-bold uppercase tracking-wider mb-1 text-dark/80">
                    {role === "outlet"
                      ? "Stall Name at Food Street"
                      : role === "delivery"
                      ? "Hostel Block (e.g. MH-1, LH-2)"
                      : "Hostel Block or Day Scholar"}
                  </label>
                  <input
                    type="text"
                    placeholder={
                      role === "outlet"
                        ? "e.g. Juice Junction Stall #5"
                        : "e.g. Block MH-2, Room 402"
                    }
                    value={blockOrOutlet}
                    onChange={(e) => setBlockOrOutlet(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border-2 border-dark bg-white font-inter text-sm focus:outline-none focus:ring-2 focus:ring-orange"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-6 bg-orange text-dark font-andika font-bold text-base sm:text-lg rounded-full border-2 border-dark shadow-[3px_4px_0px_#401500] hover:bg-orange-hover hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-[2px] active:translate-y-[2px] flex items-center justify-center gap-2 transition-all disabled:opacity-60 cursor-pointer"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Reserving your spot...</span>
                      </>
                    ) : (
                      <>
                        <span>Join Early Access Waitlist</span>
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
