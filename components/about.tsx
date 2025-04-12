"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

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

      
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
  I decided to follow my passion for programming and dove deep into the world of web development. Along the way, I discovered that what excites me most is <span className="italic">solving complex problems</span>. There's nothing quite like the satisfaction of cracking a tough challenge. Over time, I’ve built a solid foundation in{" "}
  <span className="font-medium">
    React, Python, Java, C++, Node.js, PostgreSQL, and MongoDB
  </span>
  , and I’ve also worked with TypeScript, JavaScript, and Go. I'm always exploring new technologies and sharpening my skills.
</p>

<p>
  <span className="italic">Outside of code</span>, I love running, watching anime, and spending time with my dog. I’m currently diving into{" "}
  <span className="font-medium">Cybersecurity and Android Development</span>, and I also enjoy{" "}
  <span className="font-medium">teaching coding</span> and helping others on their learning journeys.
</p>

    </motion.section>
  );
}
