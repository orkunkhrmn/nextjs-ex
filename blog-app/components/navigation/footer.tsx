import React from "react";
import PaddingContainer from "../layout/padding-container";
import siteConfig from "@/config/site";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="py-8 border-t mt-10">
      <PaddingContainer>
        <div>
          <h2 className="text-3xl font-bold">{siteConfig.siteName}</h2>
          <p className="max-w-md mt-2 text-lg text-neutral-700">
            {siteConfig.description}
          </p>
        </div>
        {/* Social and currentlySection */}
        <div className="flex flex-wrap justify-between mt-6 gap-4">
          <div>
            <div className="text-lg font-medium">#blogging</div>
            <div>Social Links</div>
          </div>
          <div>
            <div className="text-sm text-neutral-400">Currently At</div>
            <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-md shadow-md">
              <div className="w-2 h-2 rounded-full bg-emerald-400" />
              {siteConfig.currentlyAt}
            </div>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="flex items-center gap-4 justify-between flex-wrap border-t py-3 mt-16">
          <div className="text-sm text-neutral-400">
            All Rights Reserved &copy; {new Date().getFullYear()}{" "}
            {siteConfig.siteName}
          </div>
          <div className="tex-sm">
            <Link
              className="underline underline-offset-4"
              href="https://twitter.com/"
            >
              @orkunkhrmn
            </Link>
          </div>
        </div>
      </PaddingContainer>
    </div>
  );
};

export default Footer;
