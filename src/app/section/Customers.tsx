import Image from "next/image";
import React from "react";

type Props = {};

export default function Customers({}: Props) {
  return (
    <section className="mt-20 lg:mt-28 flex flex-col gap-7 lg:gap-10 px-4 lg:px-[6.25rem] justify-center items-center">
      <h2 className="text-secondary/grey font-semibold text-sm lg:text-base uppercase">
        AS SEEN ON
      </h2>
      <div className="flex flex-wrap gap-x-14 gap-y-4 lg:gap-x-32 lg:gap-y-6 justify-center">
        <Image
          src="/thisweekLogo.svg"
          height={24}
          width={96.6}
          alt="this week logo"
          className="w-16 h-6 lg:w-auto"
        />

        <Image
          src="/entrepreneurLogo.svg"
          height={24}
          width={122.06}
          alt="entrepreneur logo"
          className="w-20 h-6 lg:w-auto"
        />

        <Image
          src="bloombergLogo.svg"
          height={24}
          width={130.84}
          alt="bloomberg logo"
          className="h-6 w-[5.4rem] lg:w-auto"
        />

        <Image
          src="forbesLogo.svg"
          height={24}
          width={88.2}
          alt="forbes logo"
          className="h-6 w-[3.675rem] lg:w-auto"
        />

        <Image
          src="nbcLogo.svg"
          height={24}
          width={195.6}
          alt="nbc washington 4 news logo"
          className="h-6 w-32 lg:w-auto"
        />
      </div>
    </section>
  );
}
