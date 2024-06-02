"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Autoplay from "embla-carousel-autoplay";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { useRef, useState } from "react";
import Image from 'next/image'
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/utils/cn";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function About() {
  const { ref } = useSectionInView("Gallery");
  const items = [
    { imageUrl: "/web_dev2.jpg", description: "Web Development Workshop"},
    {imageUrl: "/web_dev1.jpg", description: "Web Development Workshop"},
    { imageUrl: "/app_dev1.jpg", description: "App Development Workshop"},
    { imageUrl: "/app_dev2.jpg", description: "App Development Workshop"},
    { imageUrl: "/game_dev1.jpg", description: "Game Development Workshop"},
    { imageUrl: "/game_dev2.jpg", description: "Game Development Workshop"}
  ];
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="gallery"
    >
      <SectionHeading>Gallery</SectionHeading>
      <div className="h-[40rem] w-full flex items-center justify-center ">
      <Carousel className="w-full max-w-sm">
      <CarouselContent>
      {items.map((item, index) => (
              <CarouselItem key={index}>
                <div className="relative flex items-center justify-center">
                  <DirectionAwareHover imageUrl={item.imageUrl}>
                    <p className="font-bold text-base">{item.description}</p>
                  </DirectionAwareHover>
                </div>
              </CarouselItem>
            ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
    </motion.section>
  );
}
