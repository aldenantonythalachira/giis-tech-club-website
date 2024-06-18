"use client";
import Image from "next/image";
import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { PinContainer } from "@/components/ui/3d-pin";
import { LinkPreview } from "@/components/ui/link-preview";

export default function Projects() {
  const { ref } = useSectionInView("Partnerships");

  return (
    <section ref={ref} id="partnerships" className="scroll-mt-28 mb-28">
      <SectionHeading>Our Partners</SectionHeading>
      <div className="h-[40rem] w-full flex items-center justify-center ">
      
        <PinContainer
          title="hackclub.com"
          href="https://hackclub.com/"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-500">
              HACK CLUB
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                Hack Club is a global nonprofit network of high school coding
                clubs. It aims to empower students to become makers and leaders
                through coding, entrepreneurship, and creativity.GIIS Tech Club (Global Indian International School) is fiscally sponsored by The Hack Foundation (d.b.a. Hack Club), a 501(c)(3) nonprofit (EIN: 81-2908499).
              </span>
            </div>
            <Image
            src="https://assets.hackclub.com/flag-orpheus-top.svg"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
          </div>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
              <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">
                © 2024 Hack Club. 501(c)(3) nonprofit (EIN: 81-2908499)
              </li>
            </ul>
        </PinContainer>
        
      </div>
    </section>
  );
}
