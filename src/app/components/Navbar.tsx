"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Logo from "public/logo.svg";
import Button from "@/ui/Button";
import clsx from "clsx";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  const navListRef = useRef<HTMLUListElement>(null);
  const blurOverlayRef = useRef<HTMLDivElement>(null);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [showNavLinks, setShowNavLinks] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  const onOpenCloseClick = () => {
    setShowNavLinks(!showNavLinks);
    if (blurOverlayRef.current && navListRef.current) {
      blurOverlayRef.current.dataset.show =
        blurOverlayRef.current.dataset.show === "false" ? "true" : "false";
      navListRef.current.dataset.open =
        navListRef.current.dataset.open === "false" ? "true" : "false";
      document.body.style.overflow =
        document.body.style.overflow === "hidden" ? "" : "hidden";
    }
  };

  return (
    <>
      <nav
        className={clsx(
          "z-20 w-full backdrop-blur flex-none transition-all duration-[600ms] lg:z-40 bg-secondary/white supports-backdrop-blur:bg-secondary-white/60 dark:bg-transparent flex justify-between items-center px-4 md:px-8 lg:px-[6.25rem] py-4 md:py-6 sticky",
          (visible && "top-0") || "-top-[100%]"
        )}
      >
        {/* logo */}
        <Link href="/">
          <Image src={Logo} alt="logo" className="md:w-28 md:h-auto lg:w-14" />
        </Link>

        {/* links */}
        <ul
          className=" max-h-0 lg:max-h-fit absolute lg:relative top-[100%] lg:top-0 left-0 bg-secondary/white w-full lg:w-auto flex flex-col lg:flex-row items-center px-4 md:px-8 lg:px-0 py-1 md:py-2 lg:py-0  gap-2 md:gap-4 lg:gap-10 font-medium text-4xl md:text-5xl lg:text-base overflow-hidden transition-all duration-[600ms] ease-in-out data-[open=true]:h-auto data-[open=true]:max-h-screen"
          data-open={showNavLinks}
          ref={navListRef}
        >
          <li className="w-full lg:w-auto text-center py-4 md:py-8 lg:py-0 border-b lg:border-0 border-primary/dark-green/30">
            <a
              href="#about"
              className="text-primary/dark-green"
              onClick={() => onOpenCloseClick()}
            >
              About
            </a>
          </li>
          <li className="w-full lg:w-auto text-center py-4 md:py-8 lg:py-0 border-b lg:border-0 border-primary/dark-green/30">
            <a
              href="#stories"
              className="text-primary/dark-green"
              onClick={() => onOpenCloseClick()}
            >
              Stories
            </a>
          </li>
          <li className="w-full lg:w-auto text-center py-4 md:py-8 lg:py-0 border-b lg:border-0 border-primary/dark-green/30">
            <Link
              href="/careers"
              className="text-primary/dark-green"
              onClick={() => onOpenCloseClick()}
            >
              Careers
            </Link>
          </li>
          <li className="w-full lg:w-auto text-center py-4 md:py-8 lg:py-0 border-b lg:border-0 border-primary/dark-green/30">
            <a
              href="#faq"
              className="text-primary/dark-green"
              onClick={() => onOpenCloseClick()}
            >
              FAQ
            </a>
          </li>
          <li className="w-full lg:w-auto text-center py-4 md:py-8 lg:py-0">
            <a
              href="#contacts"
              className="text-primary/dark-green"
              onClick={() => onOpenCloseClick()}
            >
              Contacts
            </a>
          </li>
          <Button
            className="font-bold hidden lg:block"
            onClick={() => onOpenCloseClick()}
          >
            Get the Inito kit
          </Button>
        </ul>

        {/* menu icon  */}
        <div
          aria-label="show menu"
          onClick={() => onOpenCloseClick()}
          className="lg:!hidden relative flex flex-col h-7 md:h-11 justify-between"
        >
          <div
            className={clsx(
              "relative  w-6 md:w-10 h-1 bg-[#000000] transition-all duration-[600ms] ease-in-out",
              showNavLinks && "rotate-45 origin-left"
            )}
          ></div>
          <div
            className={clsx(
              "relative  w-6 md:w-10 h-1 bg-[#000000] transition-all duration-[600ms] ease-in-out",
              showNavLinks &&
                "-rotate-45 w-8 md:w-14 -translate-x-1 md:-translate-x-2"
            )}
          ></div>
          <div
            className={clsx(
              "relative  w-6 md:w-10 h-1 bg-[#000000] transition-all duration-[600ms] ease-in-out",
              showNavLinks && "rotate-45 origin-right"
            )}
          ></div>
        </div>
      </nav>

      {/* overlay  */}
      <div
        className="fixed top-0 h-0 w-screen bg-secondary/sage/30 backdrop-blur-sm z-10 overflow-hidden transition-all duration-[600ms] ease-in-out data-[show=true]:h-screen lg:!hidden"
        ref={blurOverlayRef}
        data-show={showNavLinks}
        onClick={() => onOpenCloseClick()}
      ></div>
    </>
  );
};

export default Navbar;
