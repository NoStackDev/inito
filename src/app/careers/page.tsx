import React from "react";
import CareerCta from "./section/CareerCta";
import CoreValues from "./section/CoreValues";
import Benefits from "./section/Benefits";
import Opportunities from "./section/Opportunities";

type Props = {};

export default function Careers({}: Props) {
  return (
    <>
      <CareerCta />
      <CoreValues />
      <Benefits />
      <Opportunities />
    </>
  );
}
