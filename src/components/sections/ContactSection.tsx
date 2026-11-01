"use client";

import React from "react";
import { Mail, MessageCircle, Instagram, Linkedin, Twitter, MapPin } from "lucide-react";
import { SectionHeading } from "../common/SectionHeading";
import {
  CONTACT_EMAIL,
  WHATSAPP_URL,
  SOCIAL_LINKS,
  CAMPUS_LOCATION,
  BRAND_NAME,
} from "@/constants/brand";

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="relative bg-cream text-dark py-24 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <SectionHeading
          badge="Official Communication"
          badgeVariant="orange"
          title="Let’s Connect"
          subtitle="Have questions about our launch, dietary options, or stall onboarding? Get in touch with our campus student team."
          theme="cream"
        />

        {/* Contact Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {/* Card 1: Official Email */}
          <div className="bg-white p-7 rounded-3xl border-3 border-dark shadow-[4px_6px_0px_#401500] hover:shadow-[6px_8px_0px_#ff9500] transition-all duration-300 flex flex-col justify-between text-center items-center">
            <div className="w-14 h-14 rounded-2xl bg-orange flex items-center justify-center border-2 border-dark mb-4">
              <Mail className="w-7 h-7 text-dark" />
            </div>
            <h4 className="font-londrina uppercase text-2xl text-dark mb-1">Email Us</h4>
            <p className="font-inter text-xs text-dark/70 mb-4">
              Direct inquiries, partnership outreach &amp; suggestions
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="px-5 py-2 rounded-full bg-dark text-cream font-andika font-bold text-xs uppercase tracking-wider border-2 border-dark hover:bg-orange hover:text-dark transition-colors inline-block"
            >
              {CONTACT_EMAIL}
            </a>
          </div>

          {/* Card 2: WhatsApp Helpline */}
          <div className="bg-white p-7 rounded-3xl border-3 border-dark shadow-[4px_6px_0px_#401500] hover:shadow-[6px_8px_0px_#ff9500] transition-all duration-300 flex flex-col justify-between text-center items-center">
            <div className="w-14 h-14 rounded-2xl bg-[#25D366] flex items-center justify-center border-2 border-dark mb-4">
              <MessageCircle className="w-7 h-7 text-white" />
            </div>
            <h4 className="font-londrina uppercase text-2xl text-dark mb-1">WhatsApp Chat</h4>
            <p className="font-inter text-xs text-dark/70 mb-4">
              Quick student assistance &amp; waitlist status support
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2 rounded-full bg-dark text-cream font-andika font-bold text-xs uppercase tracking-wider border-2 border-dark hover:bg-[#25D366] hover:text-white transition-colors inline-block"
            >
              Chat on WhatsApp
            </a>
          </div>

          {/* Card 3: Location / Campus */}
          <div className="bg-white p-7 rounded-3xl border-3 border-dark shadow-[4px_6px_0px_#401500] hover:shadow-[6px_8px_0px_#ff9500] transition-all duration-300 flex flex-col justify-between text-center items-center">
            <div className="w-14 h-14 rounded-2xl bg-orange flex items-center justify-center border-2 border-dark mb-4">
              <MapPin className="w-7 h-7 text-dark" />
            </div>
            <h4 className="font-londrina uppercase text-2xl text-dark mb-1">Campus Ground</h4>
            <p className="font-inter text-xs text-dark/70 mb-4">
              Headquarters for Food Street hub operations
            </p>
            <span className="font-andika font-bold text-xs text-dark bg-cream px-4 py-2 rounded-full border border-dark">
              {CAMPUS_LOCATION}
            </span>
          </div>
        </div>

        {/* Social Channels Strip */}
        <div className="mt-12 text-center">
          <p className="font-andika font-bold text-xs uppercase tracking-wider text-dark/60 mb-4">
            Follow {BRAND_NAME} on Campus Channels
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border-2 border-dark shadow-[2px_3px_0px_#401500] hover:bg-orange transition-all font-andika text-xs font-bold"
            >
              <Instagram className="w-4 h-4" /> Instagram
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border-2 border-dark shadow-[2px_3px_0px_#401500] hover:bg-orange transition-all font-andika text-xs font-bold"
            >
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
            <a
              href={SOCIAL_LINKS.twitter}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border-2 border-dark shadow-[2px_3px_0px_#401500] hover:bg-orange transition-all font-andika text-xs font-bold"
            >
              <Twitter className="w-4 h-4" /> X (Twitter)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
