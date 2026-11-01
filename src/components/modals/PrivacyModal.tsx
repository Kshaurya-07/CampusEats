"use client";

import React from "react";
import { X, ShieldCheck } from "lucide-react";
import { BRAND_NAME, CONTACT_EMAIL } from "@/constants/brand";

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-cream text-dark rounded-3xl border-3 border-dark shadow-[8px_10px_0px_#401500] p-6 sm:p-8 max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          aria-label="Close privacy policy"
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-dark/10 hover:bg-dark hover:text-cream flex items-center justify-center transition-colors border border-dark"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-full bg-orange flex items-center justify-center border border-dark">
            <ShieldCheck className="w-5 h-5 text-dark" />
          </div>
          <span className="font-andika font-bold text-xs uppercase tracking-wider text-dark/70">
            Privacy &amp; Data Ethics
          </span>
        </div>

        <h3 className="font-londrina text-3xl uppercase tracking-wide mb-4">
          {BRAND_NAME} Privacy Policy
        </h3>

        <div className="space-y-4 font-inter text-sm text-dark/85 leading-relaxed">
          <p>
            Welcome to <strong>{BRAND_NAME}</strong>. We are committed to safeguarding the privacy
            of students, faculty, campus outlets, and delivery partners across the VIT-AP University campus.
          </p>

          <h4 className="font-andika font-bold text-base text-dark">1. Information We Collect</h4>
          <p>
            During pre-launch waitlist registration, we collect contact information (such as your full
            name, VIT-AP student email or mobile number, and role). We do not collect payment credentials
            or sensitive personal IDs at this stage.
          </p>

          <h4 className="font-andika font-bold text-base text-dark">2. How We Use Information</h4>
          <p>
            Your information is strictly used to communicate early access status, coordinate launch testing
            slots for VIT-AP Food Street outlets, and send essential service updates. We do not sell or lease
            student contact data to third-party commercial marketing agencies.
          </p>

          <h4 className="font-andika font-bold text-base text-dark">3. Data Security &amp; Retention</h4>
          <p>
            All submitted records are encrypted and stored in secure cloud infrastructure adhering to industry
            standards. You may request removal of your contact information at any time by writing to{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="underline text-orange-logo font-bold">
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </div>

        <div className="mt-6 pt-4 border-t-2 border-dark/15 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-dark text-cream font-andika font-bold rounded-full border-2 border-dark hover:bg-[#301000]"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
