"use client";

import React, { useState } from "react";
import H2 from "../components/ui/H2";
import Span from "../components/ui/Span";
import Image from "next/image";
import H3 from "../components/ui/H3";
import Paragraph from "../components/ui/Paragraph";
import clsx from "clsx";

type Props = {};

export default function Faq({}: Props) {
  const [openedFaq, setOpenFaq] = useState<null | number>(null);

  const onFaqClick = (faqIndex: number) => {
    if (openedFaq === faqIndex) {
      setOpenFaq(null);
      return;
    }
    setOpenFaq(faqIndex);
  };

  return (
    <section className="w-full mt-20 lg:mt-28 px-4 lg:px-[6.25rem] flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-32">
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
          <div
            className="flex justify-between items-center hover:cursor-pointer"
            onClick={() => onFaqClick(0)}
          >
            <H3 className="text-base lg:text-[1.125rem]">
              What results does Inito give?
            </H3>
            <div
              className={clsx(
                "relative after:content-[''] before:content-[''] after:block before:block after:rotate-90 after:-translate-y-[100%] after:bg-primary/dark-green before:bg-primary/dark-green after:w-3 before:w-3 after:h-[2px] before:h-[2px] after:transition-all after:duration-[600ms] after:ease-in-out",
                openedFaq === 0 && "after:rotate-0"
              )}
            ></div>
          </div>

          <Paragraph
            className={clsx(
              "mt-3 max-h-0 overflow-hidden transition-all duration-[600ms] ease-in-out",
              openedFaq === 0 && "h-auto max-h-72"
            )}
          >
            Inito gives results as: High Fertility, Peak Fertility or Ovulation
            Confirmed. Inito also shows you the charts and actual values of all
            3 hormones.
          </Paragraph>
        </div>

        <div className="p-6 bg-additional/light-purple rounded-3xl">
          <div
            className="flex justify-between items-center hover:cursor-pointer"
            onClick={() => onFaqClick(1)}
          >
            <H3 className="text-base lg:text-[1.125rem]">
              Do I need to use a test strip for each hormone?
            </H3>
            <div
              className={clsx(
                "relative after:content-[''] before:content-[''] after:block before:block after:rotate-90 after:-translate-y-[100%] after:bg-primary/dark-green before:bg-primary/dark-green after:w-3 before:w-3 after:h-[2px] before:h-[2px] after:transition-all after:duration-[600ms] after:ease-in-out",
                openedFaq === 1 && "after:rotate-0"
              )}
            ></div>
          </div>

          <Paragraph
            className={clsx(
              "mt-3 max-h-0 overflow-hidden  transition-all duration-[600ms] ease-in-out",
              openedFaq === 1 && "h-auto max-h-72"
            )}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            molestias reprehenderit amet saepe sapiente, ratione, vitae
            asperiores illo delectus omnis, rem quisquam iste neque ducimus.
            Pariatur!
          </Paragraph>
        </div>

        <div className="p-6 bg-additional/light-purple rounded-3xl">
          <div
            className="flex justify-between items-center hover:cursor-pointer"
            onClick={() => onFaqClick(2)}
          >
            <H3 className="text-base lg:text-[1.125rem]">
              How many test strips are required per cycle?
            </H3>
            <div
              className={clsx(
                "relative after:content-[''] before:content-[''] after:block before:block after:rotate-90 after:-translate-y-[100%] after:bg-primary/dark-green before:bg-primary/dark-green after:w-3 before:w-3 after:h-[2px] before:h-[2px] after:transition-all after:duration-[600ms] after:ease-in-out",
                openedFaq === 2 && "after:rotate-0"
              )}
            ></div>
          </div>

          <Paragraph
            className={clsx(
              "mt-3 max-h-0 overflow-hidden transition-all duration-[600ms] ease-in-out",
              openedFaq === 2 && "h-auto max-h-72"
            )}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
            expedita delectus officiis, a deserunt at et!
          </Paragraph>
        </div>

        <div className="p-6 bg-additional/light-purple rounded-3xl">
          <div
            className="flex justify-between items-center hover:cursor-pointer"
            onClick={() => onFaqClick(3)}
          >
            <H3 className="text-base lg:text-[1.125rem]">
              Will inito work if I have pcos?{" "}
            </H3>
            <div
              className={clsx(
                "relative after:content-[''] before:content-[''] after:block before:block after:rotate-90 after:-translate-y-[100%] after:bg-primary/dark-green before:bg-primary/dark-green after:w-3 before:w-3 after:h-[2px] before:h-[2px] after:transition-all after:duration-[600ms] after:ease-in-out",
                openedFaq === 3 && "after:rotate-0"
              )}
            ></div>
          </div>

          <Paragraph
            className={clsx(
              "mt-3 max-h-0 overflow-hidden transition-all duration-[600ms] ease-in-out",
              openedFaq === 3 && "h-auto max-h-72"
            )}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            nostrum nesciunt optio minima voluptatum repudiandae inventore ullam
            dolore cum, impedit nobis eaque totam corrupti nisi quidem obcaecati
            commodi, fuga dolor.
          </Paragraph>
        </div>

        <div className="p-6 bg-additional/light-purple rounded-3xl">
          <div
            className="flex justify-between items-center hover:cursor-pointer"
            onClick={() => onFaqClick(4)}
          >
            <H3 className="text-base lg:text-[1.125rem]">
              Do medications affect the results?
            </H3>
            <div
              className={clsx(
                "relative after:content-[''] before:content-[''] after:block before:block after:rotate-90 after:-translate-y-[100%] after:bg-primary/dark-green before:bg-primary/dark-green after:w-3 before:w-3 after:h-[2px] before:h-[2px] after:transition-all after:duration-[600ms] after:ease-in-out",
                openedFaq === 4 && "after:rotate-0"
              )}
            ></div>
          </div>

          <Paragraph
            className={clsx(
              "mt-3 max-h-0 overflow-hidden transition-all duration-[600ms] ease-in-out",
              openedFaq === 4 && "h-auto max-h-72"
            )}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
            et quidem eum tenetur doloremque voluptatibus facilis voluptates
            quos?
          </Paragraph>
        </div>

        <div className="p-6 bg-additional/light-purple rounded-3xl">
          <div
            className="flex justify-between items-center hover:cursor-pointer"
            onClick={() => onFaqClick(5)}
          >
            <H3 className="text-base lg:text-[1.125rem]">
              How accurate is Inito?
            </H3>
            <div
              className={clsx(
                "relative after:content-[''] before:content-[''] after:block before:block after:rotate-90 after:-translate-y-[100%] after:bg-primary/dark-green before:bg-primary/dark-green after:w-3 before:w-3 after:h-[2px] before:h-[2px] after:transition-all after:duration-[600ms] after:ease-in-out",
                openedFaq === 5 && "after:rotate-0"
              )}
            ></div>
          </div>

          <Paragraph
            className={clsx(
              "mt-3 max-h-0 overflow-hidden transition-all duration-[600ms] ease-in-out",
              openedFaq === 5 && "h-auto max-h-72"
            )}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            vero et corrupti!
          </Paragraph>
        </div>
      </div>
    </section>
  );
}
