import Paragraph from "@/ui/Paragraph";
import React from "react";

type Props = {};

export default function ClosingMessage({}: Props) {
  return (
    <section className="w-full px-4 md:px-8 lg:px-[6.25rem] mt-8 md:mt-10 lg:mt-14 flex flex-col gap-4">
      <Paragraph>Don't hesitate and apply right away!</Paragraph>
      <Paragraph>
        Please send your CV in English, as the whole recruitment process will be
        led in this language.
      </Paragraph>
      <Paragraph>
        Don't hesitate and apply right away! In case of questions - drop us a
        line at jobs@inito.com!
      </Paragraph>
    </section>
  );
}
