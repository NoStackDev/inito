import { VariantProps, cva } from "class-variance-authority";
import React, { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva(
  "bg-primary/acquamarine rounded-3xl text-secondary/white text-base font-semibold px-8 lg:px-9 py-[0.875rem]",
  {
    variants: {
      intent: {
        default: "max-w-fit",
        submit: "w-full",
      },
    },
    defaultVariants: {
      intent: "default",
    },
  }
);

interface Props
  extends HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export default function Button({
  children,
  intent,
  className,
  ...props
}: Props) {
  return (
    <button
      className={twMerge(buttonVariants({ intent }), className)}
      {...props}
    >
      {children}
    </button>
  );
}
