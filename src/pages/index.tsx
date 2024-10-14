import { FileUpload } from "../components/ui/file-upload";
import React from 'react';
import { BackgroundLines } from "../components/ui/background-lines";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import { LampContainer } from "@/components/ui/lamp";
import { motion } from "framer-motion";



function index() {
  const words = [
    {
      text: "Talk",
    },
    {
      text: "With",
    },
    {
      text: "Documents",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <>
      <div className="h-[40rem] flex flex-col md:flex-row justify-center items-center px-4">
        <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
          {" "}
          <TypewriterEffectSmooth words={words} />
          <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
            Talk To Your Files <br /> Any Time , Any Where
          </h2>
          <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
            <b> Just drag and drop your file and start talking with AI</b>{" "}
          </p>
        </BackgroundLines>

        <div className="w-full max-w-4xl mx-auto min-h-96 border border-dashed bg-white dark:bg-black border-neutral-900 rounded-lg mt-4 md:mt-0">
          <FileUpload />
        </div>
      </div>
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Learn, have fun, and analyze <br /> with documents just a tap away!
        </motion.h1>
      </LampContainer>
    </>
  );
}

export default index;
