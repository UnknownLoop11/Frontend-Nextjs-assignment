import React from "react";

// Next imports
import Link from "next/link";
import Image from "next/image";

// UI Components
import IconButton from "../common/IconButton";

// Constants
import { quickLinks, socialMediaLinks } from "@/app/utils/constants";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="md:relative p-4 md:p-8 flex flex-wrap-reverse md:flex-row gap-x-12 border-t-2">
        <div className="max-sm:mx-auto max-sm:border-t-2 max-sm:py-3 flex gap-x-16 text-center items-center ">
          {/* Brand Logo & Name */}
          <div className="flex flex-col justify-center items-center gap-y-1.5">
            <Image
              src={"/brand-logo.png"}
              alt="Brand-logo"
              width={80}
              height={80}
              priority
            />
            <Image
              src={"/brand-title.png"}
              alt="Brand-title"
              width={128}
              height={128}
              priority
            />
          </div>

          {/* Social Media Links */}
          <div className="md:absolute top-10 right-4">
            <h4 className="text-base">NOUS SUIVRE</h4>
            <div className="flex gap-x-1.5">
              {socialMediaLinks.map((link, idx) => {
                return (
                  <IconButton
                    key={idx}
                    src={link.src}
                    alt={link.alt}
                    size={24}
                    className={"border rounded-md shadow-sm"}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* Quick Links */}
        {Object.keys(quickLinks).map((key, idx) => {
          return (
            <div key={idx} className="space-y-3 p-2 text-start">
              <h4 className="text-lg font-semibold">{key}</h4>
              <ul className="list-none space-y-2">
                {quickLinks[key].map((link, idx) => {
                  return (
                    <li key={idx} className="text-sm">
                      <Link href={"#"}>{link}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
