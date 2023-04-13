import H2 from "@/ui/H2";
import Paragraph from "@/ui/Paragraph";
import Image from "next/image";
import React from "react";

type Props = {};

export default function Benefits({}: Props) {
  return (
    <section className="w-full px-4 md:px-8 lg:px-[6.25rem] mt-20 lg:mt-28">
      <div>
        <H2>Benefits</H2>
        <Paragraph className="mt-4 md:mt-5 lg:mt-6">
          We place a strong emphasis on the employee experience, which includes
          programs, events, and departamental advocates for diversity and
          inclusion.
        </Paragraph>
      </div>

      <div className="mt-6 md:mt-8 lg:mt-10 flex flex-col gap-4 md:grid md:grid-cols-3 lg:gap-10">
        <div className="p-6 md:p-7 lg:p-8 bg-additional/light-purple rounded-3xl">
          <Image
            src="/firstaid.svg"
            height={60}
            width={60}
            alt="first aid illustration"
          />
          <h3 className="font-bold text-primary/dark-green text-base lg:text-3xl mt-4 md:mt-5 lg:mt-6">
            Medical insurance
          </h3>
          <Paragraph className="mt-2 md:mt-3 lg:mt-4">
            We need you at 100%. With all-inclusive health, dental and vision
            plans, you can stay healthy.
          </Paragraph>
        </div>

        <div className="p-6 md:p-7 lg:p-8 bg-additional/light-purple rounded-3xl">
          <Image
            src="/pto.svg"
            height={60}
            width={60}
            alt="clock illustration"
          />
          <h3 className="font-bold text-primary/dark-green text-base lg:text-3xl mt-4 md:mt-5 lg:mt-6">
            Flexible PTO
          </h3>
          <Paragraph className="mt-2 md:mt-3 lg:mt-4">
            Take what you need when you need it. No accruals. No use it or lose
            it. Need some time? Sounds good to us!
          </Paragraph>
        </div>

        <div className="p-6 md:p-7 lg:p-8 bg-additional/light-purple rounded-3xl">
          <Image
            src="/money.svg"
            height={60}
            width={60}
            alt="money illustration"
          />
          <h3 className="font-bold text-primary/dark-green text-base lg:text-3xl mt-4 md:mt-5 lg:mt-6">
            Competitive Salary
          </h3>
          <Paragraph className="mt-2 md:mt-3 lg:mt-4">
            You know your value. We’re proud to offer our team fair and
            considerate compensation.
          </Paragraph>
        </div>

        <div className="p-6 md:p-7 lg:p-8 bg-additional/light-purple rounded-3xl">
          <Image src="/sun.svg" height={60} width={60} alt="sun illustration" />
          <h3 className="font-bold text-primary/dark-green text-base lg:text-3xl mt-4 md:mt-5 lg:mt-6">
            Holidays
          </h3>
          <Paragraph className="mt-2 md:mt-3 lg:mt-4">
            A solid work-life balance is essensial. That is maintained in part
            through our flexible vacation policy and holiday calendar.
          </Paragraph>
        </div>

        <div className="p-6 md:p-7 lg:p-8 bg-additional/light-purple rounded-3xl">
          <Image
            src="/handshake.svg"
            height={60}
            width={60}
            alt="handshake illustration"
          />
          <h3 className="font-bold text-primary/dark-green text-base lg:text-3xl mt-4 md:mt-5 lg:mt-6">
            401k
          </h3>
          <Paragraph className="mt-2 md:mt-3 lg:mt-4">
            Being the future-focused company, you can invest in completely
            customized 401(k) plan.
          </Paragraph>
        </div>

        <div className="p-6 md:p-7 lg:p-8 bg-additional/light-purple rounded-3xl">
          <Image
            src="/appleLogo.svg"
            height={60}
            width={60}
            alt="apple logo illustration"
          />
          <h3 className="font-bold text-primary/dark-green text-base lg:text-3xl mt-4 md:mt-5 lg:mt-6">
            Devices provided
          </h3>
          <Paragraph className="mt-2 md:mt-3 lg:mt-4">
            Get supplied with newest devices. We provide what you need to work
            comfortably and productively.
          </Paragraph>
        </div>
      </div>
    </section>
  );
}
