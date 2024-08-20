import React from "react";
import { animate, motion } from "framer-motion";
import { RiReactjsLine } from "react-icons/ri";
import { DiNodejs } from "react-icons/di";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandVite } from "react-icons/tb";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1 whileInView={{opacity:1, y:0}} initial={{opacity:0, y:-100}} transition={{duration:1.5}} className="my-20 text-center text-4xl">Technologies</motion.h1>
      <motion.div whileInView={{opacity:1, x: 0}} initial={{opacity:0, x: -100}} transition={{duration:1.5}} className="flex flex-wrap items-center justify-center gap-4">
        <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-3">
          <FaHtml5 className="text-7xl text-orange-600" />
        </motion.div>

        <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-3">
          <FaCss3Alt className="text-7xl text-blue-600" />
        </motion.div>

        <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-3">
          <FaBootstrap className="text-7xl text-purple-600" />
        </motion.div>

        <motion.div variants={iconVariants(6)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-3">
          <RiTailwindCssFill className="text-7xl text-teal-500" />
        </motion.div>

        <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-3">
          <RiJavascriptFill className="text-7xl text-yellow-500" />
        </motion.div>

        <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-3">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>

        <motion.div variants={iconVariants(4)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-3">
          <TbBrandVite className="text-7xl text-purple-500" />
        </motion.div>

        <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-3">
          <DiNodejs className="text-7xl text-green-600" />
        </motion.div>

        <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-3">
          <SiMysql className="text-7xl text-blue-500" />
        </motion.div>

        <motion.div variants={iconVariants(4)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-3">
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
