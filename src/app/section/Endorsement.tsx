import React from "react";
import H3 from "../components/ui/H3";
import Image from "next/image";
import Paragraph from "../components/ui/Paragraph";
import Span from "../components/ui/Span";

type Props = {};

export default function Endorsement({}: Props) {
  return (
    <section className="w-full px-4 lg:px-[6.25rem] mt-20 lg:mt-28 flex flex-col lg:flex-row lg:items-center gap-10">
      <div className="flex flex-col gap-8 lg:px-16 lg:flex-grow lg:flex-shrink lg:basis-56">
        <H3 className="font-semibold">
          “Inito is all that you need to give you the <Span>best</Span> chance
          of conception."
        </H3>
        <div className="flex gap-3 items-center">
          <Image
            src="/doctor.png"
            alt="Doctor Rachel Wagner"
            height={82}
            width={82}
          />
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-sm">Dr. Rachel Wagner</span>
            <span className="font-medium text-xsm">MD</span>
          </div>
        </div>
      </div>

      <div className="p-6 lg:px-12 lg:py-[3.75rem] flex flex-col gap-4 lg:gap-8 rounded-3xl bg-additional/light-purple bg-background5 bg-[length:209.03px_137.8px] lg:bg-[length:314.46px_207.33pxl] bg-no-repeat bg-right-bottom lg:flex-grow lg:flex-shrink lg:basis-56">
        <H3 className="font-semibold">Why measure Progesterone?</H3>
        <Paragraph>
          <strong>Anovulation</strong> (having a menstrual cycle with no egg) is
          actually a common occurrence, affecting 1 in 10 women*.
        </Paragraph>

        <Paragraph>
          A sure way to confirm ovulation is a rise in{" "}
          <strong>Progesterone level</strong> after peak fertility. Progesterone
          also supports implantation and elevated levels of PdG during the 7-10
          day window after ovulation correlates to higher chances of a
          successful pregnancy.
        </Paragraph>

        <p className="font-medium text-sm text-primary/acquamarine">
          * Source: National Institutes of Health
        </p>
      </div>
    </section>
  );
}
