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
  I’m a passionate full-stack developer with strong skills in{" "}
  <span className="font-medium">React</span> and{" "}
  <span className="font-medium">Python</span>, and experience working with{" "}
  <span className="font-medium">Java, C++, Node.js, PostgreSQL, and MongoDB</span>. I’m also familiar with{" "}
  <span className="font-medium">TypeScript, JavaScript, and Go</span>.
</p>

<p className="mb-3">
  I enjoy solving problems by breaking them down and finding simple, effective solutions that work well. I’m currently looking for a full-time software developer role where I can work on meaningful projects and keep learning and growing.
</p>

<p>
  Outside of coding, I like running, watching anime, and spending time with time. I’m also learning{" "}
  <span className="font-medium">Cyber Security</span> and{" "}
  <span className="font-medium">Android Development</span>, and I love helping others learn to code too.
</p>


    </motion.section>
  );
}
