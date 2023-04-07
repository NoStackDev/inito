import React from "react";
import H2 from "../components/ui/H2";
import Image from "next/image";
import H3 from "../components/ui/H3";
import Span from "../components/ui/Span";
import Paragraph from "../components/ui/Paragraph";
import Button from "../components/ui/Button";

type Props = {};

export default function ProductInfo({}: Props) {
  return (
    <section className="w-full px-4 lg:px-[6.25rem] mt-20 lg:mt-28 flex flex-col gap-10 lg:gap-[3.75rem]">
      <H2>Why Inito is the smarter way to get pregnant</H2>
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 lg:items-center">
        <Image
          src="/model.png"
          width={600}
          height={492}
          alt="model holding inito and the inito packaging"
          className="h-auto w-full lg:w-[30rem] lg:flex-grow lg:flex-shrink lg:basis-56"
        />
        <div className="lg:px-[3.75rem] flex flex-col gap-4 lg:gap-6 lg:flex-grow lg:flex-shrink lg:basis-56">
          <div className="flex gap-1">
            <H3>
              Adapts to your <Span>unique</Span> irregular cycle
            </H3>
            <Image
              src="/starstroke.svg"
              height={46}
              width={48}
              alt="decoration strokes"
              className="w-5 h-5 lg:w-auto lg:h-auto -translate-y-[50%] lg:-translate-x-[100%]"
            />
          </div>
          <Paragraph>
            Most ovulation kits have a set value or a threshold, making them
            likely to give a false read if your hormones fall outside the
            average range.
          </Paragraph>
          <Paragraph>
            Every woman is unique, especially with a condition like PCOS or
            Thyroid which can influence hormone levels. Inito measures real
            values of your hormones to personalize results to the unique you.
          </Paragraph>
          <Button className="mt-6 lg:mt-10">Get the Inito kit</Button>
        </div>
      </div>
    </section>
  );
}
