import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LogIn, Menu } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const MobileNavigation = () => {
  const pathname = usePathname();
  return (
    <div className="">
      <Sheet>
        <SheetTrigger className="bg-primary p-[6px]">
          <Menu className="size-6 text-white" />
        </SheetTrigger>
        <SheetContent
          side="left"
          className="w-full pt-10"
          aria-hidden="false"
          aria-describedby={undefined}
        >
          <SheetHeader>
            <SheetTitle>
              <span className="uppercase text-gray-500 font-normal">menu</span>
            </SheetTitle>
          </SheetHeader>
          <div className="px-4 flex flex-col justify-between h-full pb-20">
            <ul className="flex flex-col gap-8">
              <li>
                <Link
                  href="/pricing"
                  className={cn(
                    "text-xl cursor-pointer capitalize",
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
                    "text-xl cursor-pointer capitalize",
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
                    "text-xl cursor-pointer capitalize",
                    pathname === "/blog" ? "text-primary" : "text-basecolor"
                  )}
                >
                  Blog
                </Link>
              </li>
            </ul>

            <Link
              href="login"
              className="flex items-center gap-2 text-basecolor"
            >
              <span className="text-xl">Log in</span>
              <LogIn />
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavigation;
