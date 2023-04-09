import React from "react";
import H2 from "../components/ui/H2";
import Span from "../components/ui/Span";
import Image from "next/image";
import H3 from "../components/ui/H3";
import Paragraph from "../components/ui/Paragraph";

type Props = {};

export default function Faq({}: Props) {
  return (
    <section className="w-full mt-20 lg:mt-28 px-4 lg:px-[6.25rem] flex flex-col lg:flex-row gap-6 lg:gap-32">
      <div className="flex gap-2 lg:gap-8">
        <H2>
          Your <Span>top</Span> questions, answered
        </H2>
        <Image
          src="/strokes.svg"
          height={46}
          width={48}
          alt="decoration strokes"
          className="w-6 h-6 lg:w-auto lg:h-auto -translate-y-[50%] lg:-translate-x-[50%]"
        />
      </div>

      <div className="flex flex-col gap-4 lg:gap-6">
        <div className="p-6 bg-additional/light-purple rounded-3xl">
          <div className="flex justify-between items-center">
            <H3 className="text-base lg:text-[1.125rem]">
              What results does Inito give?
            </H3>
            <div className="relative after:content-[''] before:content-[''] after:block before:block after:rotate-90 after:-translate-y-[100%] after:bg-primary/dark-green before:bg-primary/dark-green after:w-3 before:w-3 after:h-[2px] before:h-[2px]"></div>
          </div>

          <Paragraph className="mt-3">
            Inito gives results as: High Fertility, Peak Fertility or Ovulation
            Confirmed. Inito also shows you the charts and actual values of all
            3 hormones.
          </Paragraph>
        </div>

        <div className="p-6 bg-additional/light-purple rounded-3xl">
          <div className="flex justify-between items-center">
            <H3 className="text-base lg:text-[1.125rem]">
              Do I need to use a test strip for each hormone?
            </H3>
            <div className="relative after:content-[''] before:content-[''] after:block before:block after:rotate-90 after:-translate-y-[100%] after:bg-primary/dark-green before:bg-primary/dark-green after:w-3 before:w-3 after:h-[2px] before:h-[2px]"></div>
          </div>

          <Paragraph className="mt-3">
            Inito gives results as: High Fertility, Peak Fertility or Ovulation
            Confirmed. Inito also shows you the charts and actual values of all
            3 hormones.
          </Paragraph>
        </div>

        <div className="p-6 bg-additional/light-purple rounded-3xl">
          <div className="flex justify-between items-center">
            <H3 className="text-base lg:text-[1.125rem]">
              How many test strips are required per cycle?
            </H3>
            <div className="relative after:content-[''] before:content-[''] after:block before:block after:rotate-90 after:-translate-y-[100%] after:bg-primary/dark-green before:bg-primary/dark-green after:w-3 before:w-3 after:h-[2px] before:h-[2px]"></div>
          </div>

          <Paragraph className="mt-3">
            Inito gives results as: High Fertility, Peak Fertility or Ovulation
            Confirmed. Inito also shows you the charts and actual values of all
            3 hormones.
          </Paragraph>
        </div>

        <div className="p-6 bg-additional/light-purple rounded-3xl">
          <div className="flex justify-between items-center">
            <H3 className="text-base lg:text-[1.125rem]">
              Will inito work if I have pcos?{" "}
            </H3>
            <div className="relative after:content-[''] before:content-[''] after:block before:block after:rotate-90 after:-translate-y-[100%] after:bg-primary/dark-green before:bg-primary/dark-green after:w-3 before:w-3 after:h-[2px] before:h-[2px]"></div>
          </div>

          <Paragraph className="mt-3">
            Inito gives results as: High Fertility, Peak Fertility or Ovulation
            Confirmed. Inito also shows you the charts and actual values of all
            3 hormones.
          </Paragraph>
        </div>

        <div className="p-6 bg-additional/light-purple rounded-3xl">
          <div className="flex justify-between items-center">
            <H3 className="text-base lg:text-[1.125rem]">
              Do medications affect the results?
            </H3>
            <div className="relative after:content-[''] before:content-[''] after:block before:block after:rotate-90 after:-translate-y-[100%] after:bg-primary/dark-green before:bg-primary/dark-green after:w-3 before:w-3 after:h-[2px] before:h-[2px]"></div>
          </div>

          <Paragraph className="mt-3">
            Inito gives results as: High Fertility, Peak Fertility or Ovulation
            Confirmed. Inito also shows you the charts and actual values of all
            3 hormones.
          </Paragraph>
        </div>

        <div className="p-6 bg-additional/light-purple rounded-3xl">
          <div className="flex justify-between items-center">
            <H3 className="text-base lg:text-[1.125rem]">
              How accurate is Inito?
            </H3>
            <div className="relative after:content-[''] before:content-[''] after:block before:block after:rotate-90 after:-translate-y-[100%] after:bg-primary/dark-green before:bg-primary/dark-green after:w-3 before:w-3 after:h-[2px] before:h-[2px]"></div>
          </div>

          <Paragraph className="mt-3">
            Inito gives results as: High Fertility, Peak Fertility or Ovulation
            Confirmed. Inito also shows you the charts and actual values of all
            3 hormones.
          </Paragraph>
        </div>
      </div>
    </section>
  );
}
