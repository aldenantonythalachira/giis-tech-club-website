"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Button } from "@/components/ui/moving-border";

export default function Intro() {
  const { ref } = useSectionInView("Home",0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const words = `Welcome to the Official Website of the GIIS Tech Club`;

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/tech_club.jpg"
              alt="GIIS TECH CLUB"
              width={192}
              height={192}
              quality={95}
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-[#AED6F1] shadow-xl"
            />
          </motion.div>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 font-medium !leading-[1.5] sm:text-xl md:text-2xl lg:text-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <TextGenerateEffect words={words} />
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <a href="https://www.instagram.com/giistechclub/" target="_blank">
          <Button
            style={{ borderRadius: "1.75rem", width: "60px", height: "60px" }} // Increased width and height
            className="bg-[#AED6F1] flex items-center justify-center text-gray-700 hover:text-gray-950 rounded-lg focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          >
            <BsInstagram style={{ fontSize: "2rem" }} />{" "}
            {/* Increased the font size of the Instagram icon */}
          </Button>
        </a>
      </motion.div>
    </section>
  );
}
