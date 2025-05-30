"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";
import MobileNavigation from "./MobileNavigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="root-container my-8">
      <div className="hidden lg:flex ">
        <div className="nav-property">
          {/* Logo  */}
          <Link href="/">
            <div className="flex items-center gap-1">
              <Image src="/icon.svg" alt="Logo" width={35} height={35} />
              <span className="text-4xl font-semibold text-primary capitalize tracking-tight">
                quide
              </span>
            </div>
          </Link>

          <ul className="flex flex-row items-center gap-8">
            <li>
              <Link
                href="/pricing"
                className={cn(
                  "text-base cursor-pointer capitalize",
                  pathname === "/pricing" ? "text-primary" : "text-basecolor"
                )}
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="/docs"
                className={cn(
                  "text-base cursor-pointer capitalize",
                  pathname === "/docs" ? "text-primary" : "text-basecolor"
                )}
              >
                Docs
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className={cn(
                  "text-base cursor-pointer capitalize",
                  pathname === "/blog" ? "text-primary" : "text-basecolor"
                )}
              >
                Blog
              </Link>
            </li>
          </ul>

          <div className="flex items-center gap-5 text-basecolor">
            <Link href="/login">
              <Button className="py-5 rounded-md cursor-pointer bg-white border-2 border-gray-200 font-normal text-basecolor text-base hover:bg-gray-50">
                Log in
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="py-5 text-base font-normal rounded-md cursor-pointer">
                Get started free
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden">
        <div className="nav-property">
          {/* Logo  */}
          <Link href="/">
            <div className="flex items-center gap-1">
              <Image src="/icon.svg" alt="Logo" width={30} height={30} />
              <span className="text-3xl font-semibold text-primary capitalize tracking-tight">
                quide
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-5">
            <Link href="/signup">
              <Button className="py-4 text-base font-normal rounded-md cursor-pointer">
                Get started free
              </Button>
            </Link>
            <MobileNavigation />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
