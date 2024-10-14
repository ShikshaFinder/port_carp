import { FileUpload } from "../components/ui/file-upload";
import React from 'react';
import { BackgroundLines } from "../components/ui/background-lines";

function index() {
  // const words = ["better", "cute", "beautiful", "modern"];

  return (
    <>
      <div className="h-[40rem] flex flex-col md:flex-row justify-center items-center px-4">
        <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
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
    </>
  );
}

export default index;
