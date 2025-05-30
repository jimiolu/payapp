import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="h-[70vh] flex flex-col lg:flex-row items-center gap-10">
      <div className="flex-1">
        <div className="flex flex-col gap-10 h-full  justify-center text-basecolor">
          <div className="flex flex-col gap-4 items-center lg:items-start text-center lg:text-start">
            <h1 className="text-5xl md:text-6xl text-primary font-medium leading-tight">
              Create simple, secure payment links.
            </h1>
            <p className="text-lg text-gray-600 w-[90%]">
              One place where you can generate smart links for your next
              payment. Most creative way to request and make payments now.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-4">
            <Link href="signup">
              <Button className="py-7 px-8 text-base cursor-pointer">
                Get started free
              </Button>
            </Link>
            <span className="text-gray-500">No credit card required</span>
          </div>
        </div>
      </div>

      <div className="flex-1 hidden lg:block">
        <Image src="/img.svg" alt="Banner" width={500} height={500} />
      </div>
    </div>
  );
};

export default Hero;
