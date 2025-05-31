import Image from "next/image";
import React from "react";

const Howto = () => {
  return (
    <div className="py-24">
      <div className="root-container space-y-16 text-basecolor">
        <div className="justify-items-center space-y-4 text-center">
          <h2 className="text-4xl font-medium">Get Paid in 3 Simple Steps</h2>
          <span className="text-neutral-500">
            Request your next payment hassle free. Just follow these simple
            steps.
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-10 lg:gap-16">
          <div className="space-y-2">
            <Image
              src="/step1.svg"
              alt="Step1"
              width={500}
              height={500}
              priority
              className=""
            />
            <div className="space-y-4">
              <p className="text-neutral-500">Step 1</p>
              <h3 className="text-2xl font-semibold">Create a Payment Link</h3>
              <p className="text-neutral-700">
                Set the amount, add a short description (e.g. “Design
                Consultation”), and click generate. No setup required.
              </p>
            </div>
          </div>
          <div className="space-y-2">
            <Image
              src="/step2.svg"
              alt="Step1"
              width={500}
              height={500}
              priority
              className=""
            />
            <div className="space-y-4">
              <p className="text-neutral-500">Step 2</p>
              <h3 className="text-2xl font-semibold">
                Share the Link Anywhere
              </h3>
              <p className="text-neutral-700">
                Send it via WhatsApp, email, Twitter, Instagram DMs—or embed it
                on your site. You’re in full control.
              </p>
            </div>
          </div>
          <div className="space-y-2">
            <Image
              src="/step3.svg"
              alt="Step1"
              width={500}
              height={500}
              priority
              className=""
            />
            <div className="space-y-4">
              <p className="text-neutral-500">Step 3</p>
              <h3 className="text-2xl font-semibold">Get Paid Instantly</h3>
              <p className="text-neutral-700">
                Your customer pays, you get notified. Track every payment in
                your dashboard—secure, fast, and easy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Howto;
