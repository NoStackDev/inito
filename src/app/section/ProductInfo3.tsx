import React from "react";
import H2 from "../components/ui/H2";
import Paragraph from "../components/ui/Paragraph";
import Span from "../components/ui/Span";
import Button from "../components/ui/Button";
import Image from "next/image";

type Props = {};

export default function ProductInfo3({}: Props) {
  return (
    <section className="w-full mt-20 lg:mt-28 px-4 lg:px-[6.25rem] flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-10">
      <div>
        <H2>
          Your own fertility lab at your <Span>fingertips</Span>
        </H2>
        <Paragraph className="mt-4 lg:mt-8">
          Easy-to-read fertility diagnostic results directly on your iPhone, in
          just 5 minutes.
        </Paragraph>
        <Button className="mt-6 lg:mt-10">Get the Inito kit</Button>
        <p className="text-secondary/grey-green font-medium text-xsm mt-6">
          * The Inito Fertility Monitor currently supports iPhone 7 and up.
          Android phones are not supported at the moment.
        </p>
      </div>

      <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <Image
            src="/lab1.png"
            height={214}
            width={320}
            alt="a glass of urine ready to for test"
            className="w-full h-auto"
          />
          <div className="flex gap-4 items-center justify-start">
            <span className="rounded-full font-bold text-[1.5rem] text-primary/dark-green bg-additional/grey-purple py-3 px-6">
              1
            </span>
            <p className="text-primary/dark-green font-medium text-base">
              Dip the test strip in urine for 15 seconds.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <Image
            src="/lab2.png"
            height={214}
            width={320}
            alt="a glass of urine ready to for test"
            className="w-full h-auto"
          />
          <div className="flex gap-4 items-center justify-start">
            <span className="rounded-full font-bold text-[1.5rem] text-primary/dark-green bg-additional/grey-purple py-3 px-6">
              2
            </span>
            <p className="text-primary/dark-green font-medium text-base">
              Attach the Inito Fertility Monitor to your iPhone*.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <Image
            src="/lab3.png"
            height={214}
            width={320}
            alt="a glass of urine ready to for test"
            className="w-full h-auto"
          />
          <div className="flex gap-4 items-center justify-start">
            <span className="rounded-full font-bold text-[1.5rem] text-primary/dark-green bg-additional/grey-purple py-3 px-6">
              3
            </span>
            <p className="text-primary/dark-green font-medium text-base">
              Insert the test strip into the Inito Fertility Monitor.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <Image
            src="/lab4.png"
            height={214}
            width={320}
            alt="a glass of urine ready to for test"
            className="w-full h-auto"
          />
          <div className="flex gap-4 items-center justify-start">
            <span className="rounded-full font-bold text-[1.5rem] text-primary/dark-green bg-additional/grey-purple py-3 px-6">
              4
            </span>
            <p className="text-primary/dark-green font-medium text-base">
              Get personalized results on our App in 5 minutes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
