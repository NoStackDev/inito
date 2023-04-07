import { VariantProps, cva } from "class-variance-authority";
import React, { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const h3Variants = cva(
  "text-3xl lg:text-4xl font-bold text-primary/dark-green",
  {
    variants: {
      align: {
        left: "text-left lg:text-left",
        center: "text-left lg:text-center",
      },
    },
    defaultVariants: {
      align: "left",
    },
  }
);

interface H3Props
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof h3Variants> {}
export default function H3({ children, align, className }: H3Props) {
  return (
    <h3 className={twMerge(h3Variants({ align, className }))}>{children}</h3>
  );
}
