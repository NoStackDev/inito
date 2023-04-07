import React, { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends HTMLAttributes<HTMLButtonElement> {}

export default function Button({ children, className }: Props) {
  return (
    <button
      className={twMerge(
        "bg-primary/acquamarine max-w-fit rounded-3xl text-secondary/white text-base font-semibold px-8 lg:px-9 py-[0.875rem]",
        className
      )}
    >
      {" "}
      {children}
    </button>
  );
}
