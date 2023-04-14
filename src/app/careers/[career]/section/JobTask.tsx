import H2 from "@/ui/H2";
import React from "react";

type Props = {};

export default function JobTask({}: Props) {
  return (
    <section className="w-full px-4 md:px-8 lg:px-[6.25rem] mt-8 md:mt-10 lg:mt-14">
      <div>
        <H2>You will be:</H2>
        <ul className="mt-4 md:mt-5 lg:mt-6 pl-4 flex flex-col gap-4 md:gap-5 lg:gap-6">
          <li className="text-sm lg:text-base text-primary/dark-green list-disc">
            Building and nurturing relationships with existing clients and
            watching over exceptional customer experience on a daily basis
          </li>
          <li className="text-sm lg:text-base text-primary/dark-green list-disc">
            Managing client portfolio and revenue
          </li>
          <li className="text-sm lg:text-base text-primary/dark-green list-disc">
            Growing the accounts, analysing customer needs, and providing
            tailor-made solutions
          </li>
          <li className="text-sm lg:text-base text-primary/dark-green list-disc">
            Upselling products and services in order to grow our business with
            current clients
          </li>
          <li className="text-sm lg:text-base text-primary/dark-green list-disc">
            Taking care of crisis management
          </li>
        </ul>
      </div>
    </section>
  );
}
