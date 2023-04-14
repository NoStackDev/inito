import H2 from "@/ui/H2";
import React from "react";

type Props = {};

export default function Qualifications({}: Props) {
  return (
    <section className="w-full px-4 md:px-8 lg:px-[6.25rem] mt-8 md:mt-10 lg:mt-14">
      <div>
        <H2>Ready to apply? First check if you have:</H2>
        <ul className="mt-4 md:mt-5 lg:mt-6 pl-4 flex flex-col gap-4 md:gap-5 lg:gap-6">
          <li className="text-sm lg:text-base text-primary/dark-green list-disc">
            At least 2 years of relevant, similar industry-specific experience
            in business development
          </li>
          <li className="text-sm lg:text-base text-primary/dark-green list-disc">
            Proven track of planning and growing business and selling to
            international clients for at least 1 year
          </li>
          <li className="text-sm lg:text-base text-primary/dark-green list-disc">
            Proven record of working with big enterprise clients
          </li>
          <li className="text-sm lg:text-base text-primary/dark-green list-disc">
            Excellent command of written and spoken English (CEFR C1+)
          </li>
          <li className="text-sm lg:text-base text-primary/dark-green list-disc">
            Impressive written and verbal communication skills and interpersonal
            abilities
          </li>
          <li className="text-sm lg:text-base text-primary/dark-green list-disc">
            Strong negotiations skills
          </li>
          <li className="text-sm lg:text-base text-primary/dark-green list-disc">
            Proven ability to plan and execute a strategy for selling new
            services
          </li>
          <li className="text-sm lg:text-base text-primary/dark-green list-disc">
            Technical knowledge sufficient to understand code review reports and
            discuss general technical problems with a client
          </li>
        </ul>
      </div>
    </section>
  );
}
