"use client";

import React, { useEffect, useRef } from "react";
import { X } from "lucide-react";

interface DemoVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoVideoModal: React.FC<DemoVideoModalProps> = ({
  isOpen,
  onClose,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.play().catch(() => {});
    } else if (!isOpen && videoRef.current) {
      videoRef.current.pause();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-dark rounded-3xl border-3 border-cream/30 shadow-[8px_10px_0px_#ff9500] p-4 text-cream overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          aria-label="Close demo video"
          className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-cream text-dark hover:bg-orange flex items-center justify-center transition-colors border-2 border-dark"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-3 pl-2 pt-1">
          <span className="text-xs font-andika font-bold uppercase tracking-wider text-orange">
            CampusEats Walkthrough
          </span>
          <h3 className="font-londrina text-2xl uppercase tracking-wide">
            How Slot-Based Campus Ordering Works
          </h3>
        </div>

        <div className="relative aspect-video rounded-2xl overflow-hidden bg-black border-2 border-dark/60">
          <video
            ref={videoRef}
            src="/media/video-placeholder.mp4"
            controls
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
