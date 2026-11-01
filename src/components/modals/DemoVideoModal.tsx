"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
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
  const [hasOpened, setHasOpened] = useState(false);

  const handleClose = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      setHasOpened(true);
      const timer = setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.play().catch(() => {
            // Browser autoplay restrictions may require user gesture
          });
        }
      }, 50);
      return () => clearTimeout(timer);
    } else {
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleClose]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md transition-opacity duration-200 ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none select-none invisible"
      }`}
      onClick={handleClose}
      aria-hidden={!isOpen}
    >
      <div
        className="relative w-full max-w-3xl bg-dark rounded-3xl border-3 border-cream/30 shadow-[4px_6px_0px_#ff9500] sm:shadow-[8px_10px_0px_#ff9500] p-4 sm:p-6 text-cream overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="pr-2">
            <span className="text-xs font-andika font-bold uppercase tracking-wider text-orange block">
              CampusEats Walkthrough
            </span>
            <h3 className="font-londrina text-xl sm:text-3xl uppercase tracking-wide leading-tight">
              How slot-based campus ordering works
            </h3>
          </div>
          <button
            onClick={handleClose}
            aria-label="Close demo video"
            className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-cream text-dark hover:bg-orange flex items-center justify-center transition-colors border-2 border-dark"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        <div className="relative aspect-video rounded-2xl overflow-hidden bg-black border-2 border-dark/60">
          <video
            ref={videoRef}
            src="/media/campuseats-demo.mp4"
            poster="/media/campuseats-demo-poster.jpg"
            controls
            playsInline
            preload={hasOpened ? "auto" : "none"}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
