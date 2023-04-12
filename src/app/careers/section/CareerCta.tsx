import H2 from "@/app/components/ui/H2";
import Span from "@/app/components/ui/Span";
import Button from "@/ui/Button";
import Paragraph from "@/ui/Paragraph";
import Image from "next/image";
import React from "react";

type Props = {};

export default function CareerCta({}: Props) {
  return (
    <section className="w-full px-4 md:px-8 lg:px-[6.25rem] py-4 md:py-8 flex flex-col md:flex-row md:items-center gap-6 md:justify-between bg-backgroundCrumb bg-no-repeat bg-[length:65.85px_65.85px] bg-[left_0px_top_53%] md:bg-[right_46%_top_20px] lg:bg-[right_45%_top_20px]">
      <div className="flex flex-col gap-4 md:gap-6 lg:gap-10">
        <H2>
          Live your <Span>best</Span> life
        </H2>
        <Paragraph className="md:pr-10 lg:pr-20">
          We’re puzzle-solvers—combining a highly-personalized approach with an
          experienced team
        </Paragraph>
        <Button className="mt-6 md:mt-10 lg:mt-[50px]">Learn more</Button>
      </div>

      <div className="mt-6 md:mt">
        <Image
          src="/office.png"
          height={530}
          width={685}
          alt="open office with plants, a laptop placed on a couple with empty chairs, floor to ceiling glass window"
        />
      </div>
    </section>
  );
}
