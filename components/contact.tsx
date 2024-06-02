"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

const people = [
  {
    id: 1,
    name: "Alden Antony",
    designation: "Head of Web Development",
    image:
      "/tech_club.jpg",
      email:"alden.thalachira@gmail.com"
  }
];

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  
  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact us</SectionHeading>
      <div className="flex flex-col items-center justify-center mb-10 text-center">
  <p>For any further queries, contact us via our <a href="https://www.instagram.com/giistechclub/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Instagram page</a> and for any further suggestions <a href="mailto:alden.thalachira@gmail.com" className="text-blue-600 hover:underline inline-block">email</a></p>
  <span className="mt-2 block">
    <a href="mailto:alden.thalachira@gmail.com" className="text-blue-600 hover:underline inline-block"><AnimatedTooltip items={people} /></a>
  </span>
</div>

    </motion.section>
  );
}
