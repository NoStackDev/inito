"use client";

import React, { useRef } from "react";
import CareerOverview from "./section/CareerOverview";
import Breadcrumb from "@/components/Breadcrumb";
import JobInfo from "./section/JobInfo";
import JobDescription from "./section/JobDescription";
import Qualifications from "./section/Qualifications";
import JobTask from "./section/JobTask";
import ClosingMessage from "./section/ClosingMessage";
import ApplicationForm from "./section/ApplicationForm";

type Props = {};

export default function Career({}: Props) {
  const modalRef = useRef<HTMLDivElement>(null);

  const showModal = () => {
    document.body.style.overflow =
      document.body.style.overflow === "" ? "hidden" : "";
    if (modalRef.current) {
      modalRef.current.dataset.show =
        modalRef.current.dataset.show === "false" ? "true" : "false";
    }
  };
  return (
    <>
      <div>
        <Breadcrumb />
        <CareerOverview showModal={showModal} />
        <JobInfo />
        <JobDescription />
        <Qualifications />
        <JobTask />
        <ClosingMessage />
      </div>
      <ApplicationForm showModal={showModal} ref={modalRef} />
    </>
  );
}
