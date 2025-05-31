import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const WhoFor = () => {
  return (
    <div className="bg-primary py-20">
      <div className="root-container space-y-16 text-basecolor">
        <div className="justify-items-center space-y-4 text-center">
          <h2 className="text-4xl font-medium text-white">
            One Tool. Unlimited Use Cases.
          </h2>
          <span className="text-neutral-200">
            Quide adapts to your workflow—no matter how you work or who you
            serve.
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 wrap-normal lg:grid-cols-3 gap-10">
          <div className="container bg-white aspect-square rounded-lg overflow-hidden">
            <div className="border-t-8 border-secondary" />
            <div className="flex flex-col gap-5 justify-center h-full p-8">
              <h3 className="text-2xl font-semibold">Freelancers & Creators</h3>
              <p className="text-neutral-500 text-sm">
                Whether you're a designer, writer, musician, or coach, Quide
                helps you get paid instantly. Just generate a link, share it
                with your client, and get notified when payment is received. No
                more chasing unpaid gigs.
              </p>
              <Link
                href="/signup"
                className="flex gap-2 items-center text-primary"
              >
                <span>Get started</span>
                <ChevronRight className="size-5" />
              </Link>
              <div className="flex items-center justify-between border-t mt-5 pt-4">
                <img
                  src="/icon6.svg"
                  alt="Canva Icon"
                  className="w-20 grayscale hover:grayscale-0 cursor-pointer"
                />
                <img
                  src="/icon5.webp"
                  alt="Spotify Icon"
                  className="w-20 grayscale hover:grayscale-0 cursor-pointer"
                />
                <img
                  src="/icon4.png"
                  alt="Fiverr Icon"
                  className="w-20 grayscale hover:grayscale-0 cursor-pointer"
                />
              </div>
            </div>
          </div>
          <div className="container bg-white aspect-square rounded-lg overflow-hidden">
            <div className="border-t-8 border-secondary" />
            <div className="flex flex-col gap-5 justify-center h-full p-8">
              <h3 className="text-2xl font-semibold">
                Small Businesses & Sellers
              </h3>
              <p className="text-neutral-500 text-sm">
                Selling products or services through Instagram, WhatsApp, or
                TikTok? Use Quide to create a checkout experience in seconds—no
                developer needed. Perfect for boutiques, local shops, and solo
                entrepreneurs.
              </p>
              <Link
                href="/signup"
                className="flex gap-2 items-center text-primary"
              >
                <span>Get started</span>
                <ChevronRight className="size-5" />
              </Link>
              <div className="flex items-center justify-between border-t mt-5 pt-4">
                <img
                  src="/icon2.png"
                  alt="Instagram Icon"
                  className="w-20 grayscale hover:grayscale-0 cursor-pointer"
                />
                <img
                  src="/icon3.svg"
                  alt="Tiktok Icon"
                  className="w-20 grayscale hover:grayscale-0 cursor-pointer"
                />
                <img
                  src="/icon7.png"
                  alt="Shopify Icon"
                  className="w-20 grayscale hover:grayscale-0 cursor-pointer"
                />
              </div>
            </div>
          </div>
          <div className="container bg-white aspect-square rounded-lg overflow-hidden">
            <div className="border-t-8 border-secondary" />
            <div className="flex flex-col gap-5 justify-center h-full p-8">
              <h3 className="text-2xl font-semibold">Agencies & Consultants</h3>
              <p className="text-neutral-500 text-sm">
                Send a sleek payment link instead of clunky invoices. Add
                descriptions, amounts, and branding to make every payment
                experience feel premium—ideal for consultants, marketers, and
                remote teams.
              </p>
              <Link
                href="/signup"
                className="flex gap-2 items-center text-primary"
              >
                <span>Get started</span>
                <ChevronRight className="size-5" />
              </Link>
              <div className="flex items-center justify-between border-t mt-5 pt-4">
                <img
                  src="/img2.png"
                  alt="Indisis Icon"
                  className="w-20 grayscale hover:grayscale-0 cursor-pointer"
                />
                <img
                  src="/img.png"
                  alt="Perplexity Icon"
                  className="w-20 grayscale hover:grayscale-0 cursor-pointer"
                />
                <img
                  src="/img5.svg"
                  alt="Headspace Icon"
                  className="w-20 grayscale hover:grayscale-0 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoFor;
