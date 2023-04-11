import React from "react";
import Image from "next/image";
import H3 from "../components/ui/H3";
import Span from "../components/ui/Span";
import Paragraph from "../components/ui/Paragraph";
import Button from "../components/ui/Button";

type Props = {};

export default function ProductInfo2({}: Props) {
  return (
    <section className="w-full px-4 md:px-8 lg:px-10 mt-10 md:mt-16 lg:mt-20">
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-10  md:items-center">
        <Image
          src="/hormone-values.png"
          width={516}
          height={555.86}
          alt="phone with the inito device next to it"
          className="h-auto w-fill bg-additional/light-purple rounded-3xl lg:flex-grow lg:flex-shrink lg:basis-56"
        />
        <div className="lg:px-[3.75rem] flex flex-col gap-4 md:gap-5 lg:gap-6 lg:flex-grow lg:flex-shrink lg:basis-56">
          <div className="flex gap-1">
            <H3>
              Get charts and actual values of your <Span>hormones</Span>
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

          <Button className="mt-6 md:mt-8 lg:mt-10">Get the Inito kit</Button>
        </div>
      </div>
    </section>
  );
}
