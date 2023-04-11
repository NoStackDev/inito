import React from "react";
import H2 from "../components/ui/H2";
import Span from "../components/ui/Span";
import Paragraph from "../components/ui/Paragraph";
import Button from "../components/ui/Button";
import Image from "next/image";

type Props = {};

export default function About1({}: Props) {
  return (
    <section className="w-full lg:min-h-screen px-4 md:px-8 lg:px-[6.25rem] mt-20 lg:mt-28">
      <div className="rounded-3xl bg-additional/light-purple flex flex-col gap-10 items-center">
        <div className="flex flex-col md:flex-row md:items-center lg:items-start gap:6 lg:gap-10">
          <div className="p-6 md:px-12 lg:px-20 md:py-20 lg:py-24 flex flex-col gap-4 lg:gap-8 lg:flex-grow lg:flex-shrink lg:basis-56">
            <H2>
              Predict and confirm your ovulation with <Span>actual</Span> data
            </H2>
            <Paragraph>
              Unlike most ovulation tests that only give you "yes/no" results,
              Inito provides <strong>real numerical values</strong> of your
              fertility hormones.
            </Paragraph>
            <Paragraph>
              If you have irregular cycles, actual data is necessary to know
              exactly when you ovulate, and when is the best time to try to
              conceive.
            </Paragraph>
            <Button className="mt-6 lg:mt-12">Get the Inito kit</Button>
          </div>
          <div className="relative bg-star3 w-full lg:bg-star4 bg-no-repeat bg-auto bg-right-top lg:flex-grow lg:flex-shrink lg:basis-56 rounded-tr-3xl">
            <Image
              src="/image3.png"
              height={600}
              width={355}
              alt="phone showing fertility chart"
              className="w-[11.5rem] h-auto lg:h-[37.5rem] lg:w-auto relative translate-x-20 translate-y-5 lg:translate-x-8 lg:translate-y-20"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse md:items-center gap:6 lg:gap-10">
          <div className="p-6 md:px-12 lg:px-20 md:py-20 lg:py-24 flex flex-col gap-4 lg:gap-8 lg:flex-grow lg:flex-shrink lg:basis-56">
            <H2>
              Never <Span>miss</Span> a day again with Inito
            </H2>
            <Paragraph>
              Inito tracks up to <strong>6 fertile days </strong> and confirms
              ovulation by measuring all 3 hormones in just 5 minutes:
            </Paragraph>
            <div className="flex items-center gap-[8px]">
              <div className="h-[0.75rem] w-[0.75rem] bg-[#3BBCD4] rounded-full"></div>{" "}
              <Paragraph>
                Estrogen, which rises 3-4 days before ovulation
              </Paragraph>
            </div>
            <div className="flex items-center gap-[8px]">
              <div className="h-[0.75rem] w-[0.75rem] bg-[#3BBCD4] rounded-full"></div>{" "}
              <Paragraph>
                LH, which surges 24-36 hours before ovulation{" "}
              </Paragraph>
            </div>
            <div className="flex items-center gap-[8px]">
              <div className="h-[0.75rem] w-[0.75rem] bg-[#3BBCD4] rounded-full"></div>{" "}
              <Paragraph>
                Progesterone (PdG), which rises after ovulation{" "}
              </Paragraph>
            </div>
          </div>
          <div className="w-full lg:flex-grow lg:flex-shrink lg:basis-56">
            <Image
              src="/image4.png"
              height={600}
              width={600}
              alt="fertility and ovulation tracking graph"
              className="w-[21.4rem] h-auto lg:h-[37.5rem] lg:w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
