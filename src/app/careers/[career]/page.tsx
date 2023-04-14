import React from "react";
import CareerOverview from "./section/CareerOverview";
import Breadcrumb from "@/components/Breadcrumb";
import JobInfo from "./section/JobInfo";
import JobDescription from "./section/JobDescription";
import Qualifications from "./section/Qualifications";
import JobTask from "./section/JobTask";
import ClosingMessage from "./section/ClosingMessage";

type Props = {};

export default function Career({}: Props) {
  return (
    <div>
      <Breadcrumb />
      <CareerOverview />
      <JobInfo />
      <JobDescription />
      <Qualifications />
      <JobTask />
      <ClosingMessage />
    </div>
  );
}
