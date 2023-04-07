import React from "react";
import H1 from "@/ui/H1";
import Paragraph from "@/ui/Paragraph";
import Button from "@/ui/Button";
import Span from "@/ui/Span";
import Image from "next/image";

type Props = {};

export default function Hero({}: Props) {
  return (
    <section className="w-screen pl-4 lg:pl-[6.25rem] bg-additional/light-purple flex flex-col lg:flex-row gap-10 lg:gap-11 lg:items-center">
      <div className="flex flex-col">
        <H1>
          Track your fertility hormones at home, in{" "}
          <Span intent="h1">5 minutes.</Span>
        </H1>
        <Paragraph className="mt-4 lg:mt-10 lg:w-[493px]">
          Get accurate results of Estrogen, LH and Progesterone with Inito, the
          all-in-one, FDA-registered fertility monitor.
        </Paragraph>
        <Button aria-label="learn more" className="mt-6 lg:mt-[3.125rem]">
          Learm more
        </Button>
      </div>
      <div className="relative w-full h-[370px] lg:h-screen bg-star1 bg-[length:310px_320px] bg-no-repeat bg-[right_-0.5rem_bottom] lg:bg-star2 lg:bg-[length:620px_640px] lg:bg-right-top">
        <Image
          src="/image1.png"
          width={803}
          height={820}
          alt="hand holding a phone up displaying the hormone chart"
          className="w-auto lg:h-screen absolute right-0 bottom-0"
        />
      </div>
    </section>
  );
}
