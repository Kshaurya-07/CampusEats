"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { Store, ChefHat, Clock, TrendingUp, CheckCircle } from "lucide-react";
import { SectionHeading } from "../common/SectionHeading";
import { Button } from "../ui/Button";
import { PLACEHOLDER_IMAGES } from "@/lib/placeholder-images";
import { TornEdge } from "../common/TornEdge";

interface PartnerGalleryProps {
  onJoinOutletWaitlist: () => void;
}

interface VideoCardProps {
  src: string;
  poster: string;
  title: string;
  tag: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ src, poster, title, tag }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      video.pause();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="group relative rounded-3xl overflow-hidden border-3 border-cream/20 shadow-[6px_8px_0px_rgba(255,239,217,0.2)] bg-black aspect-[9/14] flex flex-col justify-end p-5">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-95 transition-opacity duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/40 to-transparent pointer-events-none" />

      <div className="relative z-10 text-cream">
        <span className="inline-block px-3 py-1 bg-orange text-dark font-andika font-bold text-xs uppercase tracking-wider rounded-full mb-1.5 border border-dark">
          {tag}
        </span>
        <h4 className="font-londrina uppercase text-2xl text-cream tracking-wide leading-tight">
          {title}
        </h4>
      </div>
    </div>
  );
};

export const PartnerGallery: React.FC<PartnerGalleryProps> = ({
  onJoinOutletWaitlist,
}) => {
  return (
    <section id="partners" className="relative bg-dark text-cream py-24 px-4 sm:px-6 overflow-hidden">
      {/* Top Torn Edge */}
      <div className="absolute top-0 left-0 right-0">
        <TornEdge position="top" color="dark" />
      </div>

      <div className="relative max-w-6xl mx-auto z-10 pt-4">
        {/* Section Heading */}
        <SectionHeading
          badge="For Campus Outlets"
          badgeVariant="orange"
          title="Transforming Campus Food Service"
          subtitle="Partner with CampusEats to smooth out peak-hour rush, digitize food street counters, and serve hundreds of orders with zero counter chaos."
          theme="dark"
        />

        {/* Benefits for Outlets */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
          <div className="bg-[#301000] p-5 rounded-2xl border-2 border-cream/20">
            <ChefHat className="w-6 h-6 text-orange mx-auto mb-2" />
            <h4 className="font-londrina text-xl uppercase text-cream">Showcase Digitally</h4>
            <p className="text-xs text-cream/70 font-inter mt-1">Live digital menus on student phones</p>
          </div>
          <div className="bg-[#301000] p-5 rounded-2xl border-2 border-cream/20">
            <Clock className="w-6 h-6 text-orange mx-auto mb-2" />
            <h4 className="font-londrina text-xl uppercase text-cream">Advance Orders</h4>
            <p className="text-xs text-cream/70 font-inter mt-1">Receive orders prior to break bells</p>
          </div>
          <div className="bg-[#301000] p-5 rounded-2xl border-2 border-cream/20">
            <Store className="w-6 h-6 text-orange mx-auto mb-2" />
            <h4 className="font-londrina text-xl uppercase text-cream">Scheduled Slots</h4>
            <p className="text-xs text-cream/70 font-inter mt-1">Cook at steady batches without panic</p>
          </div>
          <div className="bg-[#301000] p-5 rounded-2xl border-2 border-cream/20">
            <TrendingUp className="w-6 h-6 text-orange mx-auto mb-2" />
            <h4 className="font-londrina text-xl uppercase text-cream">Reduce Congestion</h4>
            <p className="text-xs text-cream/70 font-inter mt-1">Faster counter throughput & less crowd</p>
          </div>
        </div>

        {/* 3 Looping Videos Gallery */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <VideoCard
            src={PLACEHOLDER_IMAGES.videoFoodPrep}
            poster={PLACEHOLDER_IMAGES.howItWorks1}
            tag="Live Prep"
            title="Fresh Kitchen Order Workflow"
          />
          <VideoCard
            src={PLACEHOLDER_IMAGES.videoOutletKitchen}
            poster={PLACEHOLDER_IMAGES.howItWorks2}
            tag="Counter Flow"
            title="Scheduled Food Pickup Desks"
          />
          <VideoCard
            src={PLACEHOLDER_IMAGES.videoDeliveryRun}
            poster={PLACEHOLDER_IMAGES.howItWorks3}
            tag="Peer Delivery"
            title="Student Couriers to Dorm Blocks"
          />
        </div>

        {/* CTA Bar */}
        <div className="mt-14 bg-orange text-dark p-8 sm:p-10 rounded-4xl border-3 border-dark shadow-[6px_8px_0px_#401500] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h3 className="font-londrina uppercase text-3xl sm:text-4xl leading-tight">
              Ready to Partner Your Food Outlet?
            </h3>
            <p className="mt-1 font-inter text-sm sm:text-base text-dark/80">
              Join the 5–10 selected food stalls participating in the January 2027 VIT-AP launch.
            </p>
          </div>
          <Button
            variant="dark"
            size="lg"
            onClick={onJoinOutletWaitlist}
            className="shrink-0"
            showArrow
          >
            Become a Partner Outlet
          </Button>
        </div>
      </div>
    </section>
  );
};
