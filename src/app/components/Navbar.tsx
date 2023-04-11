"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Logo from "public/logo.svg";
import Button from "@/ui/Button";
import clsx from "clsx";

type Props = {};

const Navbar = (props: Props) => {
  const navbarRef = useRef<HTMLElement>(null);
  const openMenuRef = useRef<HTMLDivElement>(null);
  const closeMenuRef = useRef<HTMLDivElement>(null);
  const navMenuRef = useRef<HTMLDivElement>(null);
  const blurOverlayRef = useRef<HTMLDivElement>(null);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

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
    if (navMenuRef.current && openMenuRef.current && blurOverlayRef.current) {
      openMenuRef.current.dataset.show =
        openMenuRef.current.dataset.show === "false" ? "true" : "false";
      navMenuRef.current.dataset.show =
        navMenuRef.current.dataset.show === "false" ? "true" : "false";
      blurOverlayRef.current.dataset.show =
        blurOverlayRef.current.dataset.show === "false" ? "true" : "false";
      document.getElementsByTagName("body")[0].style.overflow =
        navMenuRef.current.dataset.show === "false" ? "" : "hidden";
    }
  };

  return (
    <>
      <nav
        className={clsx(
          "z-10 w-full backdrop-blur flex-none transition-all duration-[600ms] lg:z-40 bg-secondary/white supports-backdrop-blur:bg-secondary-white/60 dark:bg-transparent flex justify-between items-center px-4 md:px-8 lg:px-[6.25rem] py-4 md:py-6 sticky",
          (visible && "top-0") || "-top-[100%]"
        )}
        ref={navbarRef}
      >
        {/* logo */}
        <Image src={Logo} alt="logo" className="md:w-28 md:h-auto lg:w-14" />

        {/* links */}
        <ul className="hidden lg:flex lg:items-center gap-10 font-medium text-base">
          <li>
            <a href="#about" className="text-primary/dark-green">
              About
            </a>
          </li>
          <li>
            <a href="#stories" className="text-primary/dark-green">
              Stories
            </a>
          </li>
          <li>
            <a href="#blog" className="text-primary/dark-green">
              Blog
            </a>
          </li>
          <li>
            <a href="#faq" className="text-primary/dark-green">
              FAQ
            </a>
          </li>
          <li>
            <a href="#contacts" className="text-primary/dark-green">
              Contacts
            </a>
          </li>
          <Button className="font-bold hidden lg:block">
            Get the Inito kit
          </Button>
        </ul>

        {/* menu icon  */}
        <div
          aria-label="show menu"
          onClick={() => onOpenCloseClick()}
          ref={openMenuRef}
          className="data-[show=true]:hidden lg:!hidden"
          data-show="false"
        >
          <div className="relative w-7 h-1 bg-[#000000] before:content-[''] after:content-[''] before:bg-[#000000] after:bg-[#000000] before:w-7 after:w-7 before:h-1 after:h-1 before:absolute after:absolute before:-top-2 after:-bottom-2"></div>
        </div>
      </nav>

      {/* overlay  */}
      <div
        className="fixed h-screen w-screen bg-primary/dark-green/70 backdrop-blur-sm z-20 data-[show=false]:hidden overflow-hidden lg:!hidden"
        ref={blurOverlayRef}
        data-show="false"
        onClick={() => onOpenCloseClick()}
      ></div>

      {/* nav */}
      <div
        className="fixed top-4 right-4 w-full max-w-xs bg-primary/acquamarine rounded-3xl shadow-lg p-6 md:p-10 text-base font-semibold text-slate-900 bg-primary-100 flex flex-col gap-3  md:gap-6 z-40 data-[show=false]:hidden lg:!hidden"
        data-show="false"
        ref={navMenuRef}
      >
        {/* close menu icon  */}
        <div
          className="self-end"
          onClick={() => onOpenCloseClick()}
          ref={closeMenuRef}
          aria-label="close menu"
        >
          <div
            className={clsx(
              "relative w-7 h-1 transition-all duration-[600ms] before:content-[''] after:content-[''] before:bg-[#000000] after:bg-[#000000] before:w-7 after:w-7 before:h-1 after:h-1 before:transition-all after:transition-all before:duration-[600ms] after:duration-[600ms] before:absolute after:absolute before:rotate-45 after:-rotate-45"
            )}
          ></div>
        </div>

        {/* links */}
        <ul className="flex flex-col gap-8 md:gap-16 text-secondary/white font-bold">
          <li>
            <a
              href="#hero"
              className=" text-white-100 md:text-3xl"
              onClick={() => onOpenCloseClick()}
            >
              HOW IT WORKS
            </a>
          </li>
          <li>
            <a
              href="#about"
              className=" text-white-100 md:text-3xl"
              onClick={() => onOpenCloseClick()}
            >
              ABOUT
            </a>
          </li>
          <li>
            <a
              href="#work"
              className=" text-white-100 md:text-3xl"
              onClick={() => onOpenCloseClick()}
            >
              WORK
            </a>
          </li>
          <li>
            <a
              href="#pricing"
              className=" text-white-100 md:text-3xl"
              onClick={() => onOpenCloseClick()}
            >
              PRICING
            </a>
          </li>
          <li>
            <a
              href="#blog"
              className=" text-white-100 md:text-3xl"
              onClick={() => onOpenCloseClick()}
            >
              BLOG
            </a>
          </li>
          <li>
            <a
              href="#faq"
              className=" text-white-100 md:text-3xl"
              onClick={() => onOpenCloseClick()}
            >
              FAQ
            </a>
          </li>
          <li>
            <Button className="font-bold">Get the Inito kit</Button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
