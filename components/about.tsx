"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>GIIS Tech Club</SectionHeading>
      
     <CardContainer className="inter-var mb-3">
  <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-10 border flex flex-col justify-center items-center">
    <CardItem
      translateZ="50"
      className="text-xl font-bold text-neutral-600 dark:text-white"
    >
      About Us
    </CardItem>
    <CardItem
      as="p"
      translateZ="60"
      className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 text-center"
    >
      With a decade of empowering students in technology, we've fostered innovation and excellence. Through workshops, seminars, and interactive sessions, we've nurtured a community of learners in programming, app development, web development, AI, game development, and more. Our OT members guide students to thrive in the digital age. We promote collaboration and creativity through the largest hackathon- GIIS Hackathon every year, sharpening skills in problem-solving and critical thinking. Our alumni shine in prestigious universities and successful tech careers. Stay connected for the latest events and initiatives as we continue to innovate, inspire, and impact the world of technology!
    </CardItem>
  </CardBody>
</CardContainer>
  </motion.section>
  );
}