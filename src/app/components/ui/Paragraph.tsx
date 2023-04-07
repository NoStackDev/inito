import React, { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends HTMLAttributes<HTMLParagraphElement> {}

export default function Paragraph({ children, className }: Props) {
  return (
    <p
      className={twMerge(
        "text-left font-medium text-sm lg:text-base text-secondary/sage",
        className
      )}
    >
      {children}
    </p>
  );
}
