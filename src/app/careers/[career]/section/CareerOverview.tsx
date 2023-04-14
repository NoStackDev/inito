"use client";

import H1 from "@/ui/H1";
import React from "react";
import { usePathname } from "next/navigation";
import Paragraph from "@/ui/Paragraph";
import Button from "@/ui/Button";

type Props = {};

export default function CareerOverview({}: Props) {
  const pathname = usePathname();
  const splitPathname = pathname.split("/");
  const jobPosition = splitPathname[splitPathname.length - 1].split('-').map(position => {
    return position[0].toUpperCase() + position.slice(1)
  }).join(' ')

  return (
    <section className="w-full px-4 md:px-8 lg:px-[6.25rem] mt-4 md:mt-6 lg:mt-8">
      <H1>{jobPosition}</H1>

      <p className="text-sm lg:text-base text-primary/dark-green font-medium mt-6 md:mt-7 lg:mt-8">
        San Francisco, California, United States or Remote
      </p>

      <h4 className="text-base font-medium underline underline-offset-1 text-primary/dark-green mt-4 md:mt-6 lg:mt-8">
        Business Department
      </h4>

      <Paragraph className="mt-4 md:mt-6 lg:mt-8">
        Our mission is to help entrepreneurs and innovators shape the world
        through beautiful software. We care about trust, taking ownership, and
        transparency. We offer a safe, inclusive and productive environment for
        all team members, and we’re always open to feedback. If you want to work
        from home and be a full time employee, great! We want to create the
        right opportunities for you.
      </Paragraph>

      <Button className="mt-4 md:hidden">Apply</Button>
    </section>
  );
}
