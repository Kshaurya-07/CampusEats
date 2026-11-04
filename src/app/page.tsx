"use client";

import React, { useState, useEffect } from "react";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { BigMarquee } from "@/components/sections/BigMarquee";
import { AboutSection } from "@/components/sections/AboutSection";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { OutletsSection } from "@/components/sections/OutletsSection";
import { EarningsPromo } from "@/components/sections/EarningsPromo";
import { IconMarquee } from "@/components/sections/IconMarquee";
import { WhyCampusEats } from "@/components/sections/WhyCampusEats";
import { ProofSection } from "@/components/sections/ProofSection";
import { PartnerGallery } from "@/components/sections/PartnerGallery";
import { QueueBanner } from "@/components/sections/QueueBanner";
import { RoadmapSection } from "@/components/sections/RoadmapSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { Footer } from "@/components/layout/Footer";
import { WaitlistModal } from "@/components/modals/WaitlistModal";
import { DemoVideoModal } from "@/components/modals/DemoVideoModal";
import { PrivacyModal } from "@/components/modals/PrivacyModal";
import { ScrollReveal3D } from "@/components/effects/Scroll3D";

export default function HomePage() {
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const [waitlistRole, setWaitlistRole] = useState<"student" | "outlet" | "delivery">("student");
  const [demoVideoOpen, setDemoVideoOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (params.get("demo") === "1" || window.location.hash === "#demo") {
        setDemoVideoOpen(true);
      }
      if (params.get("footer") === "1" || window.location.hash === "#footer") {
        setTimeout(() => {
          window.scrollTo(0, document.body.scrollHeight);
        }, 200);
      }
    }
  }, []);

  const openWaitlist = (role: "student" | "outlet" | "delivery" = "student") => {
    setWaitlistRole(role);
    setWaitlistOpen(true);
  };

  return (
    <main className="min-h-screen flex flex-col justify-between">
      {/* 1. Top Announcement Bar */}
      <AnnouncementBar onJoinWaitlist={() => openWaitlist("student")} />

      {/* 2. Floating Navbar */}
      <Navbar onJoinWaitlist={() => openWaitlist("student")} />

      {/* 3. Hero Carousel */}
      <HeroSection onJoinWaitlist={() => openWaitlist("student")} />

      {/* 4. Big Marquee */}
      <ScrollReveal3D>
        <BigMarquee />
      </ScrollReveal3D>

      {/* 5. About & Our Story */}
      <ScrollReveal3D>
        <AboutSection
          onOpenDemo={() => setDemoVideoOpen(true)}
          onJoinWaitlist={() => openWaitlist("student")}
        />
      </ScrollReveal3D>

      {/* 6. How It Works (3 Steps) */}
      <ScrollReveal3D>
        <HowItWorks />
      </ScrollReveal3D>

      {/* 7. Outlets & Menus */}
      <ScrollReveal3D>
        <OutletsSection onJoinWaitlist={() => openWaitlist("student")} />
      </ScrollReveal3D>

      {/* 8. Delivery Partner Promo & Earnings Calculator */}
      <ScrollReveal3D>
        <EarningsPromo onJoinDeliveryWaitlist={() => openWaitlist("delivery")} />
      </ScrollReveal3D>

      {/* 9. Dual-Direction Icon Marquee */}
      <ScrollReveal3D>
        <IconMarquee />
      </ScrollReveal3D>

      {/* 10. Why CampusEats Advantage Grid */}
      <ScrollReveal3D>
        <WhyCampusEats />
      </ScrollReveal3D>

      {/* 11. Proof & Validation Cards */}
      <ScrollReveal3D>
        <ProofSection />
      </ScrollReveal3D>

      {/* 12. Partner With Us (Outlet Video Gallery) */}
      <ScrollReveal3D>
        <PartnerGallery onJoinOutletWaitlist={() => openWaitlist("outlet")} />
      </ScrollReveal3D>

      {/* 13. Campus Congestion Callout Banner */}
      <ScrollReveal3D>
        <QueueBanner onJoinWaitlist={() => openWaitlist("student")} />
      </ScrollReveal3D>

      {/* 14. Product Roadmap */}
      <ScrollReveal3D>
        <RoadmapSection />
      </ScrollReveal3D>

      {/* 15. Final CTA Waitlist Form */}
      <ScrollReveal3D>
        <FinalCtaSection />
      </ScrollReveal3D>

      {/* 16. Footer */}
      <Footer
        onOpenPrivacy={() => setPrivacyOpen(true)}
        onJoinWaitlist={() => openWaitlist("student")}
      />

      {/* Global Interactive Modals */}
      <WaitlistModal
        isOpen={waitlistOpen}
        onClose={() => setWaitlistOpen(false)}
        defaultRole={waitlistRole}
      />

      <DemoVideoModal
        isOpen={demoVideoOpen}
        onClose={() => setDemoVideoOpen(false)}
      />

      <PrivacyModal
        isOpen={privacyOpen}
        onClose={() => setPrivacyOpen(false)}
      />
    </main>
  );
}
