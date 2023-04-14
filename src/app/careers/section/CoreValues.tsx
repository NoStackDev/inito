"use client";

import Carousel from "@/components/Carousel";
import H2 from "@/ui/H2";
import Paragraph from "@/ui/Paragraph";
import Span from "@/ui/Span";
import clsx from "clsx";
import Image from "next/image";
import React, { useState } from "react";

type Props = {};

export default function CoreValues({}: Props) {
  const [coreValue, setCoreValue] = useState(0);

  return (
    <section className="w-full px-4 md:px-8 lg:px-[6.25rem] mt-20 lg:mt-28">
      <H2>Core values</H2>
      <div className="mt-4 md:mt-6 lg:mt-10 flex flex-col md:flex-row gap-2 lg:gap-9">
        <h3
          className={clsx(
            "text-base lg:text-3xl",
            (coreValue === 0 && "text-primary/dark-green font-bold") ||
              "text-secondary/grey-green font-medium"
          )}
        >
          01 Build extraordinary products
        </h3>
        <h3
          className={clsx(
            "text-base lg:text-3xl",
            (coreValue === 1 && "text-primary/dark-green font-bold") ||
              "text-secondary/grey-green font-medium"
          )}
        >
          02 Solve Hard Problems
        </h3>
        <h3
          className={clsx(
            "text-base lg:text-3xl",
            (coreValue === 2 && "text-primary/dark-green font-bold") ||
              "text-secondary/grey-green font-medium"
          )}
        >
          03 Sell to the world
        </h3>
        <h3
          className={clsx(
            "text-base lg:text-3xl",
            (coreValue === 3 && "text-primary/dark-green font-bold") ||
              "text-secondary/grey-green font-medium"
          )}
        >
          04 Team is family
        </h3>
        <h3
          className={clsx(
            "text-base lg:text-3xl",
            (coreValue === 4 && "text-primary/dark-green font-bold") ||
              "text-secondary/grey-green font-medium"
          )}
        >
          05 Be Creatively Scrappy
        </h3>
      </div>

      <div className="mt-6 md:mt-8 lg:mt-10 flex flex-col md:grid md:grid-cols-2 gap-14 md:gap-12 md:place-items-center">
        <Image
          src="/ovulationConfirmed.png"
          width={600}
          height={600}
          alt="ovulation confirmed shown on phone screen with the inito test device place horizontally above the phone"
        />

        <Carousel setCurrentSlideIndex={setCoreValue}>
          <div className="lg:px-20">
            <div>
              <p className="text-4xl text-secondary/grey font-bold">01</p>

              <div className="mt-4 flex">
                <h3 className="font-bold text-3xl lg:text-5xl text-primary/dark-green">
                  <Span className="font-bold text-3xl lg:text-5xl text-primary/dark-green">
                    Build
                  </Span>{" "}
                  extraordinary products
                </h3>

                <Image
                  src="/strokes.svg"
                  height={46}
                  width={48}
                  alt="decoration strokes"
                  className="w-5 h-5 hidden md:inline-block lg:w-auto lg:h-auto -translate-y-[100%] lg:-translate-x-[50%]"
                />

                <Image
                  src="/starstroke.svg"
                  height={46}
                  width={48}
                  alt="decoration strokes"
                  className="w-5 h-5 md:hidden lg:w-auto lg:h-auto -translate-y-[50%] lg:-translate-x-[50%] "
                />
              </div>

              <Paragraph className="mt-4 lg:mt-6">
                Be objective. Look for opportunities to learn. Focus on the
                cause, not the symptom. Nothing is ever as bad as it seems.
              </Paragraph>

              <div className="w-full h-[1px] bg-secondary/light-grey my-4 lg:my-10"></div>

              <div>
                <p className="text-additional/purple-1 font-bold text-base lg:text-3xl">
                  “We all have the same goal. If you go the extra mile, then we
                  all do.”
                </p>

                <div className="mt-6">
                  <p className="font-semibold text-sm text-primary/dark-green">
                    Krista Wilhelm
                  </p>
                  <p className="text-secondary/grey-green text-xsm mt-1">
                    Engineer
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:px-20">
            <div>
              <p className="text-4xl text-secondary/grey font-bold">02</p>

              <div className="mt-4 flex">
                <h3 className="font-bold text-3xl lg:text-5xl text-primary/dark-green">
                  <Span className="font-bold text-3xl lg:text-5xl text-primary/dark-green">
                    Solve
                  </Span>{" "}
                  Hard Problems
                </h3>

                <Image
                  src="/strokes.svg"
                  height={46}
                  width={48}
                  alt="decoration strokes"
                  className="w-5 h-5 hidden md:inline-block lg:w-auto lg:h-auto -translate-y-[100%] lg:-translate-x-[50%]"
                />

                <Image
                  src="/starstroke.svg"
                  height={46}
                  width={48}
                  alt="decoration strokes"
                  className="w-5 h-5 md:hidden lg:w-auto lg:h-auto -translate-y-[50%] lg:-translate-x-[50%] "
                />
              </div>

              <Paragraph className="mt-4 lg:mt-6">
                Be objective. Look for opportunities to learn. Focus on the
                cause, not the symptom. Nothing is ever as bad as it seems.
              </Paragraph>

              <div className="w-full h-[1px] bg-secondary/light-grey my-4 lg:my-10"></div>

              <div>
                <p className="text-additional/purple-1 font-bold text-base lg:text-3xl">
                  “We all have the same goal. If you go the extra mile, then we
                  all do.”
                </p>

                <div className="mt-6">
                  <p className="font-semibold text-sm text-primary/dark-green">
                    Krista Wilhelm
                  </p>
                  <p className="text-secondary/grey-green text-xsm mt-1">
                    Engineer
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:px-20">
            <div>
              <p className="text-4xl text-secondary/grey font-bold">03</p>

              <div className="mt-4 flex">
                <h3 className="font-bold text-3xl lg:text-5xl text-primary/dark-green">
                  Sell to the{" "}
                  <Span className="font-bold text-3xl lg:text-5xl text-primary/dark-green">
                    world
                  </Span>
                </h3>

                <Image
                  src="/strokes.svg"
                  height={46}
                  width={48}
                  alt="decoration strokes"
                  className="w-5 h-5 hidden md:inline-block lg:w-auto lg:h-auto -translate-y-[100%] lg:-translate-x-[50%]"
                />

                <Image
                  src="/starstroke.svg"
                  height={46}
                  width={48}
                  alt="decoration strokes"
                  className="w-5 h-5 md:hidden lg:w-auto lg:h-auto -translate-y-[50%] lg:-translate-x-[50%] "
                />
              </div>

              <Paragraph className="mt-4 lg:mt-6">
                Be objective. Look for opportunities to learn. Focus on the
                cause, not the symptom. Nothing is ever as bad as it seems.
              </Paragraph>

              <div className="w-full h-[1px] bg-secondary/light-grey my-4 lg:my-10"></div>

              <div>
                <p className="text-additional/purple-1 font-bold text-base lg:text-3xl">
                  “We all have the same goal. If you go the extra mile, then we
                  all do.”
                </p>

                <div className="mt-6">
                  <p className="font-semibold text-sm text-primary/dark-green">
                    Krista Wilhelm
                  </p>
                  <p className="text-secondary/grey-green text-xsm mt-1">
                    Engineer
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:px-20">
            <div>
              <p className="text-4xl text-secondary/grey font-bold">04</p>

              <div className="mt-4 flex">
                <h3 className="font-bold text-3xl lg:text-5xl text-primary/dark-green">
                  Team is{" "}
                  <Span className="font-bold text-3xl lg:text-5xl text-primary/dark-green">
                    family
                  </Span>
                </h3>

                <Image
                  src="/strokes.svg"
                  height={46}
                  width={48}
                  alt="decoration strokes"
                  className="w-5 h-5 hidden md:inline-block lg:w-auto lg:h-auto -translate-y-[100%] lg:-translate-x-[50%]"
                />

                <Image
                  src="/starstroke.svg"
                  height={46}
                  width={48}
                  alt="decoration strokes"
                  className="w-5 h-5 md:hidden lg:w-auto lg:h-auto -translate-y-[50%] lg:-translate-x-[50%] "
                />
              </div>

              <Paragraph className="mt-4 lg:mt-6">
                Be objective. Look for opportunities to learn. Focus on the
                cause, not the symptom. Nothing is ever as bad as it seems.
              </Paragraph>

              <div className="w-full h-[1px] bg-secondary/light-grey my-4 lg:my-10"></div>

              <div>
                <p className="text-additional/purple-1 font-bold text-base lg:text-3xl">
                  “We all have the same goal. If you go the extra mile, then we
                  all do.”
                </p>

                <div className="mt-6">
                  <p className="font-semibold text-sm text-primary/dark-green">
                    Krista Wilhelm
                  </p>
                  <p className="text-secondary/grey-green text-xsm mt-1">
                    Engineer
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:px-20">
            <div>
              <p className="text-4xl text-secondary/grey font-bold">05</p>

              <div className="mt-4 flex">
                <h3 className="font-bold text-3xl lg:text-5xl text-primary/dark-green">
                  Be{" "}
                  <Span className="font-bold text-3xl lg:text-5xl text-primary/dark-green">
                    Creatively Scrappy
                  </Span>
                </h3>

                <Image
                  src="/strokes.svg"
                  height={46}
                  width={48}
                  alt="decoration strokes"
                  className="w-5 h-5 hidden md:inline-block lg:w-auto lg:h-auto -translate-y-[100%] lg:-translate-x-[50%]"
                />

                <Image
                  src="/starstroke.svg"
                  height={46}
                  width={48}
                  alt="decoration strokes"
                  className="w-5 h-5 md:hidden lg:w-auto lg:h-auto -translate-y-[50%] lg:-translate-x-[50%] "
                />
              </div>

              <Paragraph className="mt-4 lg:mt-6">
                Be objective. Look for opportunities to learn. Focus on the
                cause, not the symptom. Nothing is ever as bad as it seems.
              </Paragraph>

              <div className="w-full h-[1px] bg-secondary/light-grey my-4 lg:my-10"></div>

              <div>
                <p className="text-additional/purple-1 font-bold text-base lg:text-3xl">
                  “We all have the same goal. If you go the extra mile, then we
                  all do.”
                </p>

                <div className="mt-6">
                  <p className="font-semibold text-sm text-primary/dark-green">
                    Krista Wilhelm
                  </p>
                  <p className="text-secondary/grey-green text-xsm mt-1">
                    Engineer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
