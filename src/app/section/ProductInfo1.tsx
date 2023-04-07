import React from "react";
import Image from "next/image";
import H3 from "../components/ui/H3";
import Span from "../components/ui/Span";
import Paragraph from "../components/ui/Paragraph";
import Button from "../components/ui/Button";

type Props = {};

export default function ProductInfo1({}: Props) {
  return (
    <section className="w-full px-4 lg:px-[6.25rem] mt-10 lg:mt-20 flex flex-col lg:flex-row-reverse gap-6 lg:gap-10 lg:items-center">
      <div className="relative lg:flex-grow lg:flex-shrink lg:basis-56">
        <Image
          src="/inito-device.png"
          width={516}
          height={555.86}
          alt="phone with the inito device next to it"
          className="h-auto w-fill bg-additional/light-purple rounded-3xl"
        />
        <Image
          src="/download-app-store.png"
          width={160}
          height={47}
          alt="download from the app store"
          aria-label="click or tap to download from the app store"
          className="h-auto w-[5.7rem] lg:w-40 absolute right-[5%] bottom-[12%]"
        />
        <Image
          src="/image5.svg"
          width={193.86}
          height={70.32}
          alt="ovulation confirmed notification"
          className="h-auto w-[12.1rem] lg:w-[21.19rem] absolute top-[10%] left[50%] translate-x-[64%]"
        />
      </div>
      <div className="lg:px-[3.75rem] flex flex-col gap-4 lg:gap-6 lg:flex-grow lg:flex-shrink lg:basis-56">
        <div className="flex gap-1">
          <H3>
            Inito <Span>tracks</Span> everything so you don’t have to
          </H3>
          <Image
            src="/strokes.svg"
            height={46}
            width={48}
            alt="decoration strokes"
            className="w-5 h-5 lg:w-auto lg:h-auto -translate-y-[50%] lg:-translate-x-[100%]"
          />
        </div>
        <Paragraph>
          The Inito Fertility Monitor comes with a free easy-to-use App, so you
          can track your fertile days with ease and know exactly when you
          ovulate.
        </Paragraph>
        <div>
          <Paragraph>Our App notifies you for everything:</Paragraph>
          <ul>
            <li className="text-secondary/sage text-sm lg:text-base">
              • Your fertility levels
            </li>
            <li className="text-secondary/sage text-sm lg:text-base">
              • When to test on the right days
            </li>
            <li className="text-secondary/sage text-sm lg:text-base">
              • When you’ve successfully ovulated
            </li>
            <li className="text-secondary/sage text-sm lg:text-base">
              • And when to roll into bed!
            </li>
          </ul>
        </div>
        <Button className="mt-6 lg:mt-10">Get the Inito kit</Button>
      </div>
    </section>
  );
}
