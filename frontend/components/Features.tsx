"use client";

import React from "react";
import { WobbleCard } from "./ui/wobble-card";
import { div } from "motion/react-client";

export function Features() {
  return (
    <div className="root-container space-y-16 pb-20 pt-32">
      <div className="justify-items-center space-y-4 text-center">
        <h2 className="text-4xl font-medium text-basecolor">
          The Quide Link Platform
        </h2>
        <span className="text-neutral-500">
          Payments made easier never than before. Explore the new Payment way for
          your business.
        </span>
      </div>

      {/* Woble card  */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-white min-h-[500px] lg:min-h-[300px] border border-gray-200"
          className=""
        >
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-basecolor">
              No Setup Fees
            </h2>
            <p className="mt-4 text-left text-base/6 text-neutral-500">
              Start creating payment links instantly. No hidden charges or
              onboarding delays. Just plug and go.
            </p>
          </div>
          <img
            src="/linear.webp"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 min-h-[300px] border border-gray-200 bg-white">
          <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-basecolor">
            Track Payments in Real Time
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-500">
            Get instant updates on every transaction. Know who paid, when, and
            how—right from your dashboard.
          </p>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 min-h-[300px] border border-gray-200 bg-white">
          <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-basecolor">
            Mobile-Friendly Experience
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-500">
            Optimized for every device. Create, share, and monitor your payment
            links on the go with ease.
          </p>
        </WobbleCard>
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-white min-h-[500px] lg:min-h-[300px] border border-gray-200"
          className=""
        >
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-basecolor">
              Secure & Trusted
            </h2>
            <p className="mt-4 text-left text-base/6 text-neutral-500">
              Built with enterprise-grade security. Your data and payments stay
              protected every step of the way.
            </p>
          </div>
          <img
            src="/linear.webp"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>
      </div>
    </div>
  );
}
