"use client";

import React from "react";
import Paragraph from "../components/ui/Paragraph";
import Image from "next/image";
import Carousel from "../components/Carousel";

type Props = {};

export default function Testimonials({}: Props) {
  return (
    <section className="w-full mt-20 lg:mt-28 px-4 lg:px-[6.25rem]">
      <div>
        <Carousel>
          <div className="relative w-full bg-additional/light-purple rounded-3xl bg-background6 bg-no-repeat bg-left-bottom bg-[length:10.8rem_8.4rem] p-6 lg:p-10 lg:pr-24 flex flex-col lg:flex-row-reverse gap-4 lg:gap-44 lg:justify-start lg:items-center">
            <div className="flex flex-col gap-4">
              <h4 className="text-[1.125rem] font-bold text-primary/dark-green">
                Inito tells you all you need to monitor your fertility
              </h4>
              <Paragraph className="text-secondary/sage">
                I made comparisons with other brands to allow me to choose the
                better product better. Inito tests all three of the hormones -
                LH, Estrogen, and Progesterone all in one stick. How can other
                products ignore measuring progesterone? It’s a no brainer! You
                guys are tops. I highly recommend Inito
              </Paragraph>
            </div>

            <div className="w-full">
              <Image
                src="/five-stars.svg"
                width={98.86}
                height={12}
                alt="5 star review"
              />
              <p className="mt-2 text-sm font-semibold text-primary/dark-green">
                Krista Wilhelm
              </p>
              <p className="mt-1 text-xsm font-medium text-secondary/grey-green">
                May 22, 2021
              </p>
            </div>
            <Image
              src="/spots.svg"
              width={80.7}
              height={76.76}
              alt="spots illustrations"
              className="absolute right-0 -top-10"
            />
          </div>

          <div className="relative w-full bg-additional/light-purple rounded-3xl bg-background6 bg-no-repeat bg-left-bottom bg-[length:10.8rem_8.4rem] p-6 lg:p-10 lg:pr-24 flex flex-col lg:flex-row-reverse gap-4 lg:gap-44 lg:justify-start lg:items-center">
            <div className="flex flex-col gap-4">
              <h4 className="text-[1.125rem] font-bold text-primary/dark-green">
                Inito tells you all you need to monitor your fertility
              </h4>
              <Paragraph className="text-secondary/sage">
                I made comparisons with other brands to allow me to choose the
                better product better. Inito tests all three of the hormones -
                LH, Estrogen, and Progesterone all in one stick. How can other
                products ignore measuring progesterone? It’s a no brainer! You
                guys are tops. I highly recommend Inito
              </Paragraph>
            </div>

            <div className="w-full">
              <Image
                src="/five-stars.svg"
                width={98.86}
                height={12}
                alt="5 star review"
              />
              <p className="mt-2 text-sm font-semibold text-primary/dark-green">
                crysta Wilhelm
              </p>
              <p className="mt-1 text-xsm font-medium text-secondary/grey-green">
                May 22, 2021
              </p>
            </div>
            <Image
              src="/spots.svg"
              width={80.7}
              height={76.76}
              alt="spots illustrations"
              className="absolute right-0 -top-10"
            />
          </div>

          <div className="relative w-full bg-additional/light-purple rounded-3xl bg-background6 bg-no-repeat bg-left-bottom bg-[length:10.8rem_8.4rem] p-6 lg:p-10 lg:pr-24 flex flex-col lg:flex-row-reverse gap-4 lg:gap-44 lg:justify-start lg:items-center">
            <div className="flex flex-col gap-4">
              <h4 className="text-[1.125rem] font-bold text-primary/dark-green">
                Inito tells you all you need to monitor your fertility
              </h4>
              <Paragraph className="text-secondary/sage">
                I made comparisons with other brands to allow me to choose the
                better product better. Inito tests all three of the hormones -
                LH, Estrogen, and Progesterone all in one stick. How can other
                products ignore measuring progesterone? It’s a no brainer! You
                guys are tops. I highly recommend Inito
              </Paragraph>
            </div>

            <div className="w-full">
              <Image
                src="/five-stars.svg"
                width={98.86}
                height={12}
                alt="5 star review"
              />
              <p className="mt-2 text-sm font-semibold text-primary/dark-green">
                chrysta Wilhelm
              </p>
              <p className="mt-1 text-xsm font-medium text-secondary/grey-green">
                May 22, 2021
              </p>
            </div>
            <Image
              src="/spots.svg"
              width={80.7}
              height={76.76}
              alt="spots illustrations"
              className="absolute right-0 -top-10"
            />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
