import Image from "next/image";
import React from "react";

type Props = {};

export default function JobInfo({}: Props) {
  return (
    <section className="w-full px-4 md:px-8 lg:px-[6.25rem] mt-8 md:-10 lg:mt-14 flex flex-col gap-6">
      <div className="flex gap-4 md:gap-5 lg:gap-6 items-center">
        <Image
          src="/star5.svg"
          height={60}
          width={60}
          alt="star illustration"
          className="self-start w-10 h-10 lg:w-[60px] lg:h-[60px]"
        />
        <p className="text-sm lg:text-base text-primary/dark-green">
          <strong>Required skills:</strong> 2-year experience in selling digital
          solutions in business development; C1+ English; experience in working
          with international clients; experience in planning and growing the
          business
        </p>
      </div>

      <div className="flex gap-4 md:gap-5 lg:gap-6 items-center">
        <Image
          src="/money.svg"
          height={60}
          width={60}
          alt="money illustration"
          className="self-start w-10 h-10 lg:w-[60px] lg:h-[60px]"
        />
        <p className="text-sm lg:text-base text-primary/dark-green">
          Base salary + quaterly bonuses
        </p>
      </div>

      <div className="flex gap-4 md:gap-5 lg:gap-6 items-center">
        <Image
          src="/sun.svg"
          height={60}
          width={60}
          alt="sun illustration"
          className="self-start w-10 h-10 lg:w-[60px] lg:h-[60px]"
        />
        <p className="text-sm lg:text-base text-primary/dark-green">
          <strong>B2B:</strong> +20 paid days off
        </p>
      </div>

      <div className="flex gap-4 md:gap-5 lg:gap-6 items-center">
        <Image
          src="/appleLogo.svg"
          height={60}
          width={60}
          alt="apple logo"
          className="self-start w-10 h-10 lg:w-[60px] lg:h-[60px]"
        />
        <p className="text-sm lg:text-base text-primary/dark-green">
          <strong>Perks:</strong> + 2 000$ home office bonus, Multisport card,
          private health insurance, discounts on Apple products, development
          budget, and more!
        </p>
      </div>
    </section>
  );
}
