"use client";

import React, { useState } from "react";
import { Sparkles, Bike } from "lucide-react";

export const EarningsSlider: React.FC = () => {
  const [deliveriesPerDay, setDeliveriesPerDay] = useState<number>(6);
  const [daysPerWeek, setDaysPerWeek] = useState<number>(5);

  const minRate = 5;
  const maxRate = 10;
  const avgRate = 7.5;

  const dailyMin = deliveriesPerDay * minRate;
  const dailyMax = deliveriesPerDay * maxRate;
  const dailyAvg = deliveriesPerDay * avgRate;

  const weeklyMin = dailyMin * daysPerWeek;
  const weeklyMax = dailyMax * daysPerWeek;

  const monthlyMin = Math.round(dailyMin * (daysPerWeek * 4.33));
  const monthlyMax = Math.round(dailyMax * (daysPerWeek * 4.33));

  return (
    <div className="w-full max-w-xl mx-auto bg-cream p-6 sm:p-8 rounded-3xl border-3 border-dark shadow-[6px_8px_0px_#401500] text-dark">
      <div className="flex items-center justify-between gap-2 border-b-2 border-dark/15 pb-4 mb-6">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-orange flex items-center justify-center border-2 border-dark">
            <Bike className="w-5 h-5 text-dark" />
          </div>
          <div>
            <h4 className="font-londrina text-2xl uppercase tracking-wide leading-none">
              Student Earnings Calculator
            </h4>
            <p className="text-xs font-inter text-dark/70">
              Earning ₹5 to ₹10 per doorstep delivery
            </p>
          </div>
        </div>
        <span className="hidden sm:inline-flex items-center gap-1 bg-orange/20 px-3 py-1 rounded-full text-xs font-andika font-bold">
          <Sparkles className="w-3.5 h-3.5 text-orange" /> Flexible Hours
        </span>
      </div>

      {/* Deliveries Per Day Slider */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <label htmlFor="deliveries-slider" className="font-andika font-bold text-sm sm:text-base">
            Deliveries completed per day:
          </label>
          <span className="font-londrina text-2xl sm:text-3xl text-orange bg-dark px-3 py-0.5 rounded-xl border border-dark leading-none">
            {deliveriesPerDay}
          </span>
        </div>
        <input
          id="deliveries-slider"
          type="range"
          min="1"
          max="20"
          value={deliveriesPerDay}
          onChange={(e) => setDeliveriesPerDay(Number(e.target.value))}
          className="w-full h-3 bg-dark/20 rounded-lg appearance-none cursor-pointer accent-orange"
        />
        <div className="flex justify-between text-xs text-dark/60 mt-1 font-inter">
          <span>1 delivery (between classes)</span>
          <span>10</span>
          <span>20 (free evening)</span>
        </div>
      </div>

      {/* Days Active per Week */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <label className="font-andika font-bold text-sm sm:text-base">
            Days active per week:
          </label>
          <div className="flex gap-2">
            {[3, 5, 7].map((days) => (
              <button
                key={days}
                type="button"
                onClick={() => setDaysPerWeek(days)}
                className={`px-3 py-1 text-xs sm:text-sm font-andika font-bold rounded-lg border-2 border-dark transition-all ${
                  daysPerWeek === days
                    ? "bg-dark text-cream shadow-[2px_2px_0px_#ff9500]"
                    : "bg-cream text-dark hover:bg-dark/10"
                }`}
              >
                {days} Days
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results Box */}
      <div className="bg-dark text-cream p-5 rounded-2xl border-2 border-dark flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <span className="text-xs uppercase tracking-wider text-cream/70 font-andika block">
            Estimated Monthly Earnings
          </span>
          <div className="font-londrina text-3xl sm:text-4xl text-orange mt-1">
            ₹{monthlyMin.toLocaleString("en-IN")} – ₹{monthlyMax.toLocaleString("en-IN")}
          </div>
          <span className="text-xs text-cream/60 font-inter">
            (~₹{weeklyMin.toLocaleString("en-IN")} – ₹{weeklyMax.toLocaleString("en-IN")} / week)
          </span>
        </div>

        <div className="text-right sm:border-l border-cream/20 sm:pl-4 text-center sm:text-right">
          <span className="text-xs text-cream/70 block font-inter">
            Based on average ₹{avgRate} / delivery
          </span>
          <span className="inline-block mt-1 px-3 py-1 bg-orange text-dark font-andika font-bold text-xs rounded-full">
            Zero Platform Commission
          </span>
        </div>
      </div>
    </div>
  );
};
