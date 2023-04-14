"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

type Props = {};

export default function Footer({}: Props) {
  const [selectedItem, setSelectedItem] = useState<null | number>(null);

  const onItemClick = (itemIndex: number) => {
    if (selectedItem === itemIndex) {
      setSelectedItem(null);
      return;
    }
    setSelectedItem(itemIndex);
  };

  return (
    <footer className="w-full mt-20 md:mt-24 lg:mt-28 px-4 md:px-8 lg:px-[6.25rem] bg-primary/dark-green">
      <div className="border-b border-secondary/white/10 py-6 md:py-8 lg:py-12 flex flex-col lg:flex-row lg:justify-between lg:items-center">
        <div className="flex flex-col md:flex-row md:items-center gap-4 lg:gap-8">
          <div className="flex gap-4 items-center">
            <Image
              src="/icon-trusted-couples.svg"
              height={48}
              width={48}
              alt="three stars"
              className="w-10 h-10 lg:w-auto lg:h-auto"
            />
            <span className="font-semibold text-sm text-secondary/white">
              TRUSTED BY 20,000+ COUPLES
            </span>
          </div>

          <div className="flex gap-4 items-center">
            <Image
              src="/icon-free-shipping.svg"
              height={48}
              width={48}
              alt="box with files in it"
              className="w-10 h-10 lg:w-auto lg:h-auto"
            />
            <span className="font-semibold text-sm text-secondary/white">
              FREE US SHIPPING
            </span>
          </div>

          <div className="flex gap-4 items-center">
            <Image
              src="/icon-fda-registered.svg"
              height={48}
              width={48}
              alt="check mark"
              className="w-10 h-10 lg:w-auto lg:h-auto"
            />
            <span className="font-semibold text-sm text-secondary/white">
              FDA-REGISTERED (HSA/FSA ELIGIBLE)
            </span>
          </div>
        </div>

        <div className="flex justify-between items-center mt-6 lg:mt-0 pt-6 lg:pt-0 border-t  border-secondary/white/10 lg:border-none">
          <Image
            src="/logoFooter.svg"
            width={105}
            height={40}
            alt="inito logo"
            className="w-20 h-[1.875] lg:hidden"
          />
          <div className="flex gap-8">
            <Image
              src="/facebookLogo.svg"
              height={32}
              width={32}
              alt="facebook logo"
            />
            <Image
              src="/youtubeLogo.svg"
              height={32}
              width={32}
              alt="youtube logo"
            />
            <Image
              src="/linkedinLogo.svg"
              height={32}
              width={32}
              alt="linkedin logo"
            />
          </div>
        </div>
      </div>

      <div className="py-6 md:py-8 lg:py-10 flex justify-between border-b border-secondary/white/10">
        <div className="hidden lg:block lg:self-start w-8/12">
          <Image
            src="/logoFooter.svg"
            width={105}
            height={40}
            alt="inito logo"
            className=""
          />
        </div>

        <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-24">
          <div>
            <div
              className="flex justify-between"
              onClick={() => onItemClick(0)}
            >
              <h3 className="font-bold text-base text-secondary/white">
                Company
              </h3>
              <Image
                src="/chevron.svg"
                height={16}
                width={16}
                alt="chevron"
                className={clsx(
                  "lg:hidden transition-all duration-[600ms]",
                  selectedItem === 0 && "rotate-180 ease-in-out"
                )}
              />
            </div>
            <div
              className={clsx(
                "flex flex-col mt-6 gap-4 lg:gap-6 overflow-hidden transition-all duration-[600ms] ease-in-out",
                (selectedItem === 0 && "h-auto max-h-96") ||
                  "max-h-0 lg:max-h-fit"
              )}
            >
              <Link
                href="#about"
                className="text-base font-medium text-secondary/white/80"
              >
                About
              </Link>
              <Link
                href="/"
                className="text-base font-medium text-secondary/white/80"
              >
                Buy now
              </Link>
              <Link
                href="/"
                className="text-base font-medium text-secondary/white/80"
              >
                Blog
              </Link>
              <Link
                href="/"
                className="text-base font-medium text-secondary/white/80"
              >
                Contacts
              </Link>
            </div>
          </div>

          <div>
            <div
              className="w-full flex justify-between"
              onClick={() => onItemClick(1)}
            >
              <h3 className="font-bold text-base text-secondary/white">
                Support
              </h3>
              <Image
                src="/chevron.svg"
                height={16}
                width={16}
                alt="chevron"
                className={clsx(
                  "lg:hidden transition-all duration-[600ms]",
                  selectedItem === 1 && "rotate-180 ease-in-out"
                )}
              />
            </div>
            <div
              className={clsx(
                "flex flex-col mt-6 gap-4 lg:gap-6 overflow-hidden transition-all duration-[600ms] ease-in-out",
                (selectedItem === 1 && "h-auto max-h-96") ||
                  "max-h-0 lg:max-h-fit"
              )}
            >
              <Link
                href="#faq"
                className="text-base font-medium text-secondary/white/80"
              >
                FAQ
              </Link>
              <Link
                href="#termsAndConditions"
                className="text-base font-medium text-secondary/white/80"
              >
                Terms
              </Link>
              <Link
                href="#termsAndConditions"
                className="text-base font-medium text-secondary/white/80"
              >
                Privacy Policy
              </Link>
              <Link
                href="#termsAndConditions"
                className="text-base font-medium text-secondary/white/80"
              >
                Returns & Warranty
              </Link>
            </div>
          </div>

          <div>
            <div
              className="w-full flex justify-between"
              onClick={() => onItemClick(2)}
            >
              <h3 className="font-bold text-base text-secondary/white">
                Get in touch
              </h3>
              <Image
                src="/chevron.svg"
                height={16}
                width={16}
                alt="chevron"
                className={clsx(
                  "lg:hidden transition-all duration-[600ms]",
                  selectedItem === 2 && "rotate-180 ease-in-out"
                )}
              />
            </div>
            <div
              className={clsx(
                "flex flex-col mt-6 gap-4 lg:gap-6 overflow-hidden transition-all duration-[600ms] ease-in-out",
                (selectedItem === 2 && "h-auto max-h-96") ||
                  "max-h-0 lg:max-h-fit"
              )}
            >
              <Link
                href="#"
                className="text-base font-medium text-secondary/white/80"
              >
                +1 815-369-0989
              </Link>
              <Link
                href="#"
                className="text-base font-medium text-secondary/white/80"
              >
                help@inito.com
              </Link>
              <Link
                href="#"
                className="text-base font-medium text-secondary/white/80"
              >
                355 Bryant Street, Unit 403, San Francisco CA 94107
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div id="termsAndConditions" className="py-6 md:py-8 lg:py-10 flex flex-col gap-4 lg:gap-6">
        <p className="text-xsm lg:text-sm font-medium text-[#FAFAFA]/50">
          † Inito is a medical device registered with the FDA and the return
          policy is to allow flexibility to the consumer while ensuring that
          products safe and effective for us.
        </p>
        <p className="text-xsm lg:text-sm font-medium text-[#FAFAFA]/50">
          The following policy applies for purchases made through inito.com or
          the Inito App. If you purchased your product from Amazon or another
          authorized retailer, please speak with a representative from the
          original place of purchase as Inito must adhere to their policies and
          procedures. Products purchased through an unauthorized reseller are
          not eligible for any refund, cancellation, or replacement.
        </p>
        <p className="text-xsm lg:text-sm font-medium text-[#FAFAFA]/50">
          In order to be eligible for a refund, cancellation, or replacement
          from purchases made on inito.com, customers must provide proof of
          purchase. For prompt service, please email our Customer Care Team and
          provide your order number for any request for the following:
        </p>
        <p className="text-xsm lg:text-sm font-medium text-[#FAFAFA]/50">
          If your order has not shipped, you are eligible for a 100% refund of
          your inito.com order.
        </p>
        <ul>
          <li className="text-xsm lg:text-sm font-medium text-[#FAFAFA]/50">
            - Orders once shipped, are not eligible for any return, refunds or
            exchange.
          </li>
          <li className="text-xsm lg:text-sm font-medium text-[#FAFAFA]/50">
            - Damaged or defective products are covered by our 6-month limited
            warranty applicable from the from the date of purchase. During the
            warranty period, Inito will either repair or replace, at its option,
            any defective Product or part at no charge to you.
          </li>
        </ul>
        <p className="text-xsm lg:text-sm font-medium text-[#FAFAFA]/50">
          © Inito Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
