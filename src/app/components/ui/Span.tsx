import { VariantProps, cva } from "class-variance-authority";
import React, { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const spanVariants = cva("", {
  variants: {
    intent: {
      h1: "text-left text-4xl lg:text-6xl text-primary/dark-green w-[16rem] font-bold underline decoration-primary/acquamarine decoration-[0.1875rem] lg:decoration-[0.3125rem] underline-offset-4 lg:underline-offset-8",
      h2: "text-3xl lg:text-4xl font-bold text-primary/dark-green underline decoration-primary/acquamarine decoration-[0.1875rem] lg:decoration-[0.3125rem] underline-offset-4 lg:underline-offset-8",
    },
  },
  defaultVariants: {
    intent: "h2",
  },
});

interface SpanPropsInterface
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof spanVariants> {}

export default function Span({
  children,
  intent,
  className,
}: SpanPropsInterface) {
  return (
    <span className={twMerge(spanVariants({ intent, className }))}>
      {children}
    </span>
  );
}
