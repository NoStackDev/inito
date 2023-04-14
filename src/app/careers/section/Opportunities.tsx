"use client";

import H2 from "@/ui/H2";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

type Props = {};

export default function Opportunities({}: Props) {
  const [showDepartments, setShowDepartments] = useState(false);
  return (
    <section className="w-full px-4 md:px-8 lg:px-[6.25rem] mt-20 lg:mt-28">
      <H2>Opportunities</H2>

      <div className="mt-6 md:mt-8 lg:mt-14 md:flex">
        <div className="md:border-r border-secondary/light-grey md:pr-20">
          <h3 className="hidden md:block text-3xl font-bold text-primary/dark-green">
            Departments
          </h3>
          <div
            className="flex gap-1 md:mt-8 lg:mt-10"
            onClick={() => setShowDepartments(!showDepartments)}
          >
            <span className="font-bold text-base lg:text-3xl text-primary/acquamarine">
              All Departments (100)
            </span>
            <Image
              src="/caretDown.svg"
              height={16}
              width={16}
              alt="caret"
              className={clsx(
                "stroke-primary/dark-green transition-all duration-[600ms] ease-in-out fill-primary/dark-green md:hidden",
                showDepartments && "rotate-180"
              )}
            />
          </div>

          <div
            className={clsx(
              "max-h-0 md:max-h-fit overflow-hidden transition-all duration-[600ms] ease-in-out flex flex-col gap-6 md:py-8 lg:py-10 md:gap-8 lg:gap-10",
              showDepartments && "h-auto max-h-screen"
            )}
          >
            <Link
              href="/carees/#"
              className="font-medium text-base lg:text-3xl text-primary/dark-green mt-4 md:mt-0"
            >
              Business Development (10)
            </Link>
            <Link
              href="/carees/#"
              className="font-medium text-base lg:text-3xl text-primary/dark-green"
            >
              Engineering (12)
            </Link>
            <Link
              href="/carees/#"
              className="font-medium text-base lg:text-3xl text-primary/dark-green"
            >
              Research (28)
            </Link>
            <Link
              href="/carees/#"
              className="font-medium text-base lg:text-3xl text-primary/dark-green"
            >
              Marketing (10)
            </Link>
            <Link
              href="/carees/#"
              className="font-medium text-base lg:text-3xl text-primary/dark-green"
            >
              Information Technology (10)
            </Link>
            <Link
              href="#"
              className="font-medium text-base lg:text-3xl text-primary/dark-green"
            >
              Employee Experience (10)
            </Link>
            <Link
              href="#"
              className="font-medium text-base lg:text-3xl text-primary/dark-green"
            >
              Data Science/Analytics (7)
            </Link>
            <Link
              href="/carees/#"
              className="font-medium text-base lg:text-3xl text-primary/dark-green"
            >
              Sales & Partnerships (3)
            </Link>
            <Link
              href="/carees/#"
              className="font-medium text-base lg:text-3xl text-primary/dark-green"
            >
              Strategy & Planning (10)
            </Link>
          </div>
        </div>

        <div className="mt-4 md:mt-0 grow md:pl-20  border-t py-6 md:py-0 md:border-t-0 border-secondary/light-grey">
          <h3 className="text-3xl font-bold text-primary/dark-green">Roles</h3>

          <div className="flex flex-col gap-6 md:gap-8 lg:gap-10 mt-6 md:mt-8 lg:mt-10">
            <Link href="/careers/account-manager" className="group flex justify-between">
              <span className="text-base lg:text-4xl font-bold text-secondary/sage">
                Account Manager, Business
              </span>

              <Image
                src="/arrow1.svg"
                height={16}
                width={32}
                alt="arrow"
                className="w-6 h-auto lg:w-8 transition-all duration-[600ms] ease-in-out -translate-x-full group-hover:translate-x-0"
              />
            </Link>

            <Link href="/careers/#" className="group flex justify-between">
              <span className="text-base lg:text-4xl font-bold text-secondary/sage">
                Lead Test Engineer
              </span>

              <Image
                src="/arrow1.svg"
                height={16}
                width={32}
                alt="arrow"
                className="w-6 h-auto lg:w-8 transition-all duration-[600ms] ease-in-out -translate-x-full group-hover:translate-x-0"
              />
            </Link>

            <Link href="/careers/#" className="group flex justify-between">
              <span className="text-base lg:text-4xl font-bold text-secondary/sage">
                Engineering Manager
              </span>

              <Image
                src="/arrow1.svg"
                height={16}
                width={32}
                alt="arrow"
                className="w-6 h-auto lg:w-8 transition-all duration-[600ms] ease-in-out -translate-x-full group-hover:translate-x-0"
              />
            </Link>

            <Link href="/careers/#" className="group flex justify-between">
              <span className="text-base lg:text-4xl font-bold text-secondary/sage">
                Sales Strategy Manager
              </span>

              <Image
                src="/arrow1.svg"
                height={16}
                width={32}
                alt="arrow"
                className="w-6 h-auto lg:w-8 transition-all duration-[600ms] ease-in-out -translate-x-full group-hover:translate-x-0"
              />
            </Link>

            <Link href="/careers/#" className="group flex justify-between">
              <span className="text-base lg:text-4xl font-bold text-secondary/sage">
                Senior Software Engineer
              </span>

              <Image
                src="/arrow1.svg"
                height={16}
                width={32}
                alt="arrow"
                className="w-6 h-auto lg:w-8 transition-all duration-[600ms] ease-in-out -translate-x-full group-hover:translate-x-0"
              />
            </Link>

            <Link href="/careers/#" className="group flex justify-between">
              <span className="text-base lg:text-4xl font-bold text-secondary/sage">
                Supervisor, Analytics
              </span>

              <Image
                src="/arrow1.svg"
                height={16}
                width={32}
                alt="arrow"
                className="w-6 h-auto lg:w-8 transition-all duration-[600ms] ease-in-out -translate-x-full group-hover:translate-x-0"
              />
            </Link>

            <Link href="/careers/#" className="group flex justify-between">
              <span className="text-base lg:text-4xl font-bold text-secondary/sage">
                Senior Business Analyst
              </span>

              <Image
                src="/arrow1.svg"
                height={16}
                width={32}
                alt="arrow"
                className="w-6 h-auto lg:w-8 transition-all duration-[600ms] ease-in-out -translate-x-full group-hover:translate-x-0"
              />
            </Link>

            <Link href="/careers/#" className="group flex justify-between">
              <span className="text-base lg:text-4xl font-bold text-secondary/sage">
                IT Support Specialist
              </span>

              <Image
                src="/arrow1.svg"
                height={16}
                width={32}
                alt="arrow"
                className="w-6 h-auto lg:w-8 transition-all duration-[600ms] ease-in-out -translate-x-full group-hover:translate-x-0"
              />
            </Link>

            <Link href="/careers/#" className="group flex justify-between">
              <span className="text-base lg:text-4xl font-bold text-secondary/sage">
                Talent Operations Manager
              </span>

              <Image
                src="/arrow1.svg"
                height={16}
                width={32}
                alt="arrow"
                className="w-6 h-auto lg:w-8 transition-all duration-[600ms] ease-in-out -translate-x-full group-hover:translate-x-0"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
