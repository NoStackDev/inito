import React, { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends HTMLAttributes<HTMLHeadingElement> {}

export default function H1({ children, className }: Props) {
  return (
    <h1
      className={twMerge(
        "text-left text-5xl lg:text-6xl text-primary/dark-green pr-[5.375rem] lg:w-[493px] lg:pr-0 font-bold",
        className
      )}
    >
      {children}
    </h1>
  );
}
