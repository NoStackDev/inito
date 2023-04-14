"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

type Props = {};

export default function Breadcrumb({}: Props) {
  const pathname = usePathname();
  const splitPathname = pathname.split("/");
  const breadCrumb = splitPathname.map((crumb) => {
    const newCrumb = crumb
      .split("-")
      .map((word) => {
        try {
          const newWord = word[0].toUpperCase() + word.slice(1);
          return newWord;
        } catch {
          return word;
        }
      })
      .join(" ");
    return newCrumb;
  });

  return (
    <div className="px-4 md:px-8 lg:px-[6.25rem] mt-8 md:mt-10 lg:mt-14 text-sm lg:text-base text-secondary/sage">
      {breadCrumb.map((crumb, index) => {
        return index === 0 ? (
          <span key={index}>
            <Link href="/">Home</Link>
          </span>
        ) : (
          <span key={index}>
            {" > "}
            <Link
              href={pathname
                .split("/")
                .slice(0, index + 1)
                .join("/")}
            >
              {crumb}
            </Link>
          </span>
        );
      })}
    </div>
  );
}
