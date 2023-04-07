import React from "react";
import Paragraph from "../components/ui/Paragraph";
import H3 from "../components/ui/H3";
import Image from "next/image";

type Props = {};

export default function Testimonials({}: Props) {
  return (
    <section className="w-full mt-20 lg:mt-28 px-4 lg:px-[6.25rem]">
      <div className="relative bg-additional/light-purple rounded-3xl bg-background6 bg-no-repeat bg-left-bottom bg-[length:10.8rem_8.4rem] p-6 lg:p-10 lg:pr-24 flex flex-col lg:flex-row-reverse gap-4 lg:gap-44 lg:justify-start lg:items-center">
        <div className="flex flex-col gap-4">
          <h4 className="text-[1.125rem] font-bold text-primary/dark-green">
            Inito tells you all you need to monitor your fertility
          </h4>
          <Paragraph className="text-secondary/sage">
            I made comparisons with other brands to allow me to choose the
            better product better. Inito tests all three of the hormones - LH,
            Estrogen, and Progesterone all in one stick. How can other products
            ignore measuring progesterone? It’s a no brainer! You guys are tops.
            I highly recommend Inito
          </Paragraph>
        </div>

        <div className="w-28">
          <Image
            src="/five-stars.svg"
            width={98.86}
            height={12}
            alt="5 star review"
          />
          <p>Krista Wilhelm</p>
          <p>May 22, 2021</p>
        </div>
        <Image
          src="/spots.svg"
          width={80.7}
          height={76.76}
          alt="spots illustrations"
          className="absolute right-0 -top-10"
        />
      </div>
    </section>
  );
}
