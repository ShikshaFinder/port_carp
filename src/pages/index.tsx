import { FileUpload } from "../components/ui/file-upload";
import React from "react";
import { BackgroundLines } from "../components/ui/background-lines";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import { LampContainer } from "@/components/ui/lamp";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
// import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";
import { useTransform, useScroll } from "framer-motion";


function index() {
  const wordz = [
    {
      text: "Join ",
    },
    {
      text: "The WaitList",
    },
    {
      text: "Now !",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  
const ref = React.useRef(null);

const { scrollYProgress } = useScroll({
  target: ref,
  offset: ["start start", "end start"],
}); 
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
  const word = `
  Tired of searching through endless documents? & Bored of typing to get answers?`;

 const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
 const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
 const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
 const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
 const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);
  return (
    <>
      <div className="h-[40rem] flex flex-col md:flex-row justify-center items-center px-4">
        <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
          {" "}
          <br />
          <TypewriterEffectSmooth words={words} /> <br />
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
      <TextGenerateEffect words={word} />
      {/* <br /> <TextGenerateEffect words={word2} /> */}
      {/* <GoogleGeminiEffect
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]}
      /> */}
      <div className="flex flex-col items-center justify-center h-[40rem]  ">
        <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
          The road to freedom starts from here
        </p>
        <TypewriterEffectSmooth words={wordz} />
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
          <input
            type="text"
            placeholder="hello@gmail.com"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full relative z-10 mt-4 bg-neutral-50 placeholder:text-neutral-700 p-3"
          />
        </div><br />
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
          <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
            Join now
          </button>
        </div>
      </div>
      {/* hiiii */}
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
      <div className="h-[40rem] flex flex-col md:flex-row justify-center items-center px-4">
        <BackgroundLines
          className="flex items-center justify-center w-full flex-col px-4"
          children={undefined}
        ></BackgroundLines>
      </div>
    </>
  );
}

export default index;
