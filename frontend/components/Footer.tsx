import { Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="border-t pt-20 pb-10">
      <div className="root-container">
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          <div className="flex-1 space-y-10">
            <div className="flex flex-col gap-8">
              {/* Logo  */}
              <Link href="/">
                <div className="flex items-center gap-1">
                  <Image src="/icon.svg" alt="Logo" width={40} height={40} />
                  <span className="text-5xl font-semibold text-primary capitalize tracking-tight">
                    quide
                  </span>
                </div>
              </Link>

              <div className="flex gap-1">
                <Link
                  href="https://instagram.com/indisishq"
                  target="_blank"
                  className="hover:bg-neutral-200 hover:rounded-md p-1 hover:transition-all hover:duration-500"
                >
                  <img src="/icon12.svg" alt="XIcon" className="size-6" />
                </Link>
                <Link
                  href="https://x.com/indisis"
                  target="_blank"
                  className="hover:bg-neutral-200 hover:rounded-md p-1 hover:transition-all hover:duration-500"
                >
                  <img src="/icon8.svg" alt="XIcon" className="size-6" />
                </Link>
                <Link
                  href="https://linkedin.com/company/indisis"
                  target="_blank"
                  className="hover:bg-neutral-200 hover:rounded-md p-1 hover:transition-all hover:duration-500"
                >
                  <img src="/icon9.svg" alt="XIcon" className="size-6" />
                </Link>
                <Link
                  href="https://facebook.com/indisishq"
                  target="_blank"
                  className="hover:bg-neutral-200 hover:rounded-md p-1 hover:transition-all hover:duration-500"
                >
                  <img src="/icon10.svg" alt="XIcon" className="size-6" />
                </Link>
                <Link
                  href="https://youtube.com/@indisishq"
                  target="_blank"
                  className="hover:bg-neutral-200 hover:rounded-md p-1 hover:transition-all hover:duration-500"
                >
                  <img src="/icon11.svg" alt="XIcon" className="size-6" />
                </Link>
              </div>

              <div className="space-y-2">
                <p className="font-light text-neutral-500">
                  Do Not Sell or Share My Info <br /> Cookies settings
                </p>
                <p className="text-neutral-600">
                  &copy; {new Date().getFullYear()} Indisis, LLC.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-3 grid grid-cols-2 gap-10 lg:flex lg:justify-between w-full">
            <div className="text-basecolor space-y-4">
              <h4 className="text-lg font-medium">Company</h4>
              <div className="text-neutral-600 flex flex-col gap-2">
                <Link href="#">About us</Link>
                <Link href="#">Careers</Link>
                <Link href="#">Security</Link>
                <Link href="#">Status</Link>
                <Link href="#">Terms & privacy</Link>
              </div>
            </div>
            <div className="text-basecolor space-y-4">
              <h4 className="text-lg font-medium">Resources</h4>
              <div className="text-neutral-600 flex flex-col gap-2">
                <Link href="#">Documentation</Link>
                <Link href="#">Discord Server</Link>
                <Link href="#">Glossary</Link>
                <Link href="#">Terms of Engagement</Link>
                <Link href="#">Changelog</Link>
              </div>
            </div>
            <div className="text-basecolor space-y-4">
              <h4 className="text-lg font-medium">Developer</h4>
              <div className="text-neutral-600 flex flex-col gap-2">
                <Link href="#">Help center</Link>
                <Link href="#">Pricing</Link>
                <Link href="#">Blog</Link>
                <Link href="#">Community</Link>
                <Link href="#">Affiliates</Link>
              </div>
            </div>
            <div className="text-basecolor space-y-4">
              <h4 className="text-lg font-medium">Quide for</h4>
              <div className="text-neutral-600 flex flex-col gap-2">
                <Link href="#">Enterprise</Link>
                <Link href="#">Small business</Link>
                <Link href="#">Personal</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 bg-primary root-container py-1 text-white text-center">
        <Link href="https://indisis.co" target="_blank">Powered by Indisis, LLC. | <span>www.indisis.co</span></Link>
      </div>
    </div>
  );
};

export default Footer;
