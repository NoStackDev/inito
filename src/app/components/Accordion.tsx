"use client";

import React, { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {}

export default function Accordion({ children, className, ...props }: Props) {

    
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}
