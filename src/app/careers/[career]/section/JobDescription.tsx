import React from "react";
import H2 from "@/ui/H2";
import Paragraph from "@/ui/Paragraph";
type Props = {};

export default function JobDescription({}: Props) {
  return (
    <section className="w-full px-4 md:px-8 lg:px-[6.25rem] mt-8 md:mt-10 lg:mt-14">
      <H2>Job description</H2>
      <Paragraph className="mt-4 md:mt-5 lg:mt-6">
        We are excited to be adding a new member to our Business Development
        Team: a Senior Account Manager who will build growth strategy-oriented
        relationships with our existing clients.
      </Paragraph>
    </section>
  );
}
