import React from "react";
import H2 from "../components/ui/H2";
import Paragraph from "../components/ui/Paragraph";
import Span from "../components/ui/Span";
import Image from "next/image";

type Props = {};

export default function About({}: Props) {
  return (
    <section className="w-full px-4 md:px-8 lg:px-[6.25rem] mt-20 lg:mt-28 flex flex-col gap-6 lg:gap-20 items-center">
      <div className="p-6 bg-additional/light-purple md:bg-opacity-0 rounded-3xl flex flex-col md:items-center gap-4 lg:gap-6">
        <div className="flex md:justify-center lg:gap-7">
          <H2 align="center">
            Not all ovulation tests are created <Span>equal</Span>
          </H2>
          <Image
            src="/strokes.svg"
            height={46}
            width={48}
            alt="decoration strokes"
            className="w-5 h-5 lg:w-auto lg:h-auto -translate-y-[50%] lg:-translate-x-[50%]"
          />
        </div>

        <Paragraph className="max-w-lg md:text-center">
          Most ovulation tests predict your fertile days by tracking Estrogen
          and Luteinizing Hormone (LH), but fail to measure the hormone that
          actually confirms your ovulation and supports pregnancy:{" "}
          <strong>Progesterone.</strong>
        </Paragraph>
      </div>

      <div className="p-6 bg-additional/light-purple md:bg-opacity-0 rounded-3xl flex flex-col md:items-center gap-4 lg:gap-6">
        <div className="flex md:justify-center lg:gap-7">
          <H2 align="center">
            What makes <Span>Inito</Span> different?
          </H2>
          <Image
            src="/starstroke.svg"
            height={46}
            width={48}
            alt="decoration strokes"
            className="w-5 h-5 lg:w-auto lg:h-auto -translate-y-[50%] lg:-translate-x-[50%]"
          />
        </div>

        <Paragraph className="max-w-lg md:text-center">
          Inito is the only fertility monitor that measures all{" "}
          <strong>3 hormones</strong> on a single test strip, showing you a full
          picture of your cycles with results unique to your body.
        </Paragraph>
      </div>
    </section>
  );
}
