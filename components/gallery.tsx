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
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  )
  const { ref } = useSectionInView("Gallery");
  const items = [
    { imageUrl: "/web_dev2.JPG", description: "Web Development Workshop"},
    {imageUrl: "/web_dev1.JPG", description: "Web Development Workshop"},
    { imageUrl: "/app_dev1.JPG", description: "App Development Workshop"},
    { imageUrl: "/app_dev2.JPG", description: "App Development Workshop"},
    { imageUrl: "/game_dev1.jpg", description: "Game Development Workshop"},
    { imageUrl: "/game_dev2.JPG", description: "Game Development Workshop"},
    { imageUrl: "/robotics_ai3.jpg", description: "Robotics and AI Workshop"},
    {imageUrl: "/robotics_ai2.jpg", description: "Robotics and AI Workshop"},
    { imageUrl: "/robotics_ai1.jpg", description: "Robotics and AI Workshop"},
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
      <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-sm"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
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
    </Carousel>
    </div>
    </motion.section>
  );
}
