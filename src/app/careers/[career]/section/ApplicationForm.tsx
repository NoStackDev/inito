"use client";

import Button from "@/ui/Button";
import H1 from "@/ui/H1";
import React, { HTMLAttributes, forwardRef, useRef } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  showModal: () => void;
}

const ApplicationForm = forwardRef<HTMLDivElement, Props>(
  ({ showModal }, ref) => {
    return (
      <div
        className="z-50  md:z-10 fixed md:relative h-screen md:h-auto w-screen md:w-auto top-0 bg-primary/dark-green/80 md:bg-additional/light-purple px-4 md:px-6 lg:px-[6.25rem] md:py-[5.5rem] lg:py-28 flex justify-center items-center data-[show='false']:hidden md:data-[show='false']:block"
        data-show="false"
        ref={ref}
      >
        <div className="bg-secondary/white md:bg-additional/light-purple p-6 md:p-0 rounded-md md:rounded-none w-[343px] md:w-auto">
          <div className="flex justify-between items-center">
            <H1>Application</H1>

            <div
              className="md:hidden relative w-6 h-6 before:content-[''] after:content-[''] after:absolute before:absolute before:w-8 after:w-8 before:h-[2px] after:h-[2px] before:bg-primary/dark-green after:bg-primary/dark-green after:rotate-45 before:-rotate-45 before:-translate-y-[50%] before:top-[50%] after:-translate-y-[50%] after:top-[50%] before:-translate-x-[50%] after:-translate-x-[50%]"
              onClick={showModal}
            ></div>
          </div>

          <form className="mt-8 flex flex-col gap-3 md:gap-4 ">
            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="text-sm lg:text-base text-primary/dark-green"
              >
                Full name
              </label>
              <input
                type="text"
                className="border-secondary/light-grey border rounded-md text-sm lg:text-base pl-4 lg:pl-6 py-2 font-normal"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="text-sm lg:text-base text-primary/dark-green"
              >
                Email address
              </label>
              <input
                type="text"
                className="border-secondary/light-grey border rounded-md text-sm lg:text-base pl-4 lg:pl-6 py-2 font-normal"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="text-sm lg:text-base text-primary/dark-green"
              >
                Phone
              </label>
              <input
                type="text"
                name=""
                id=""
                className="border-secondary/light-grey border rounded-md text-sm lg:text-base pl-4 lg:pl-6 py-2 font-normal"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="text-sm lg:text-base text-primary/dark-green"
              >
                Resume
              </label>
              <input
                type="file"
                name=""
                id=""
                className="relative h-20 border-secondary/light-grey border rounded-md text-4xl before:absolute before:top-0 before:left-0 before:h-full before:w-full before:content-['Upload_a_file'] before:text-sm before:md:text-base before:flex before:items-center before:justify-center before:text-primary/dark-green before:bg-secondary/white"
              />
            </div>

            <Button
              intent="submit"
              className="hidden md:block self-center mt-8 
              md:mt-9 lg:mt-10"
            >
              Explore roles
            </Button>
            <Button
              intent="submit"
              className="md:hidden self-center mt-8 md:mt-9 lg:mt-10"
            >
              Apply
            </Button>
          </form>
        </div>
      </div>
    );
  }
);

ApplicationForm.displayName = 'ApplicationForm'

export default ApplicationForm;
