"use client";

import React, { useState } from "react";
import { X, CheckCircle, Sparkles, Loader2, ArrowRight } from "lucide-react";
import { BRAND_NAME, CAMPUS_LOCATION } from "@/constants/brand";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultRole?: "student" | "outlet" | "delivery";
}

export const WaitlistModal: React.FC<WaitlistModalProps> = ({
  isOpen,
  onClose,
  defaultRole = "student",
}) => {
  const [role, setRole] = useState<"student" | "outlet" | "delivery">(defaultRole);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [blockOrOutlet, setBlockOrOutlet] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          contact,
          role,
          blockOrOutlet,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to join waitlist");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setName("");
    setContact("");
    setBlockOrOutlet("");
    setSubmitted(false);
    setError(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-lg bg-cream rounded-3xl border-3 border-dark shadow-[8px_10px_0px_#401500] p-6 sm:p-8 text-dark max-h-[92vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-dark/10 hover:bg-dark hover:text-cream flex items-center justify-center transition-colors border border-dark"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-orange/20 border-2 border-dark text-orange rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-9 h-9 text-dark" />
            </div>
            <h3 className="font-londrina text-3xl sm:text-4xl uppercase tracking-wide">
              You&apos;re On The List!
            </h3>
            <p className="mt-2 text-sm sm:text-base font-inter text-dark/80 max-w-md mx-auto">
              Thank you, <span className="font-bold">{name}</span>! We&apos;ll notify you via{" "}
              <span className="font-semibold">{contact}</span> as soon as early access opens at{" "}
              {CAMPUS_LOCATION} (Jan 2027).
            </p>
            <div className="mt-6 p-4 bg-orange/20 rounded-2xl border border-dark/30 text-xs text-dark/90 font-inter">
              🎉 <strong>Next Steps:</strong> We are coordinating with VIT-AP Food Street outlets to
              finalize digital menus and slot schedules.
            </div>
            <button
              onClick={handleReset}
              className="mt-6 px-6 py-2.5 bg-dark text-cream font-andika font-bold rounded-full hover:bg-[#301000] border-2 border-dark"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-orange px-3 py-0.5 rounded-full text-xs font-andika font-bold uppercase tracking-wider text-dark border border-dark">
                Early Access MVP
              </span>
              <span className="text-xs text-dark/60 font-inter">{CAMPUS_LOCATION}</span>
            </div>

            <h3 className="font-londrina text-3xl sm:text-4xl uppercase tracking-wide leading-none">
              Join The {BRAND_NAME} Waitlist
            </h3>
            <p className="mt-2 text-sm font-inter text-dark/75">
              Be the first to experience queue-free ordering and doorstep delivery across VIT-AP.
            </p>

            {/* Role Selector Tabs */}
            <div className="mt-5 mb-5 grid grid-cols-3 gap-2 p-1 bg-dark/10 rounded-2xl border border-dark/20">
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

            {error && (
              <div className="mb-4 p-3 bg-red-100 border border-red-500 text-red-700 text-xs rounded-xl font-inter">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-andika font-bold uppercase tracking-wider mb-1 text-dark/80">
                  Full Name <span className="text-orange">*</span>
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
                  {role === "outlet" ? "Contact Number / Business Email" : "VIT-AP Email or Mobile Number"}{" "}
                  <span className="text-orange">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder={
                    role === "outlet"
                      ? "e.g. outlet@domain.com or 9876543210"
                      : "e.g. student@vitap.ac.in or 9876543210"
                  }
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border-2 border-dark bg-white font-inter text-sm focus:outline-none focus:ring-2 focus:ring-orange"
                />
              </div>

              <div>
                <label className="block text-xs font-andika font-bold uppercase tracking-wider mb-1 text-dark/80">
                  {role === "outlet"
                    ? "Outlet / Stall Name at Food Street"
                    : role === "delivery"
                    ? "Hostel Block (e.g. MH-1, LH-2)"
                    : "Hostel Block or Day Scholar (Optional)"}
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
                  className="w-full py-3 px-6 bg-orange text-dark font-andika font-bold text-base rounded-full border-2 border-dark shadow-[3px_4px_0px_#401500] hover:bg-orange-hover hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-[2px] active:translate-y-[2px] flex items-center justify-center gap-2 transition-all disabled:opacity-60 cursor-pointer"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Saving your spot...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5" />
                      <span>Join Early Access Waitlist</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-center text-dark/60 font-inter">
                We respect your inbox. Only official launch notifications for VIT-AP Campus.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
