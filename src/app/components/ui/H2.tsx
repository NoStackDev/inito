import { VariantProps, cva } from "class-variance-authority";
import React, { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const h2Variants = cva(
  "text-3xl lg:text-4xl font-bold text-primary/dark-green",
  {
    variants: {
      align: {
        left: "text-left mdl:text-left",
        center: "text-left md:text-center",
      },
    },
    defaultVariants: {
      align: "left",
    },
  }
);

interface H2Props
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof h2Variants> {}
export default function H2({ children, align, className }: H2Props) {
  return (
    <h2 className={twMerge(h2Variants({ align, className }))}>{children}</h2>
  );
}
