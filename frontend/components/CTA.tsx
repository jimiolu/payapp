import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const CTA = () => {
  return (
    <div className="root-container pt-10 pb-20">
      <div className="bg-primary border rounded-xl shadow-lg">
        <div className="flex flex-col md:flex-row items-center justify-between p-10 md:px-10 md:py-2 lg:px-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold text-white">Turn Your Link Into Income</h3>
            <p className="lg:w-[70%] text-neutral-100">
              Create a payment link in seconds and start earning from your
              audience, clients, or community—zero friction.
            </p>
            <Link href="/signup">
                <Button className="bg-neutral-100 text-basecolor py-6 px-8 cursor-pointer hover:bg-neutral-200">Get Started</Button>
            </Link>
          </div>
          <div className="max-w-82 overflow-hidden hidden md:block">
            <Image src="/img6.svg" alt="CTA" width={500} height={500} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
