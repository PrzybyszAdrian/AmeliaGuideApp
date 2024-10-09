"use client";

import Link from "next/link";
import React, { useRef } from "react";

const Page = () => {
  const textRef = useRef<HTMLDivElement>(null);

  const handleSpeech = () => {
    if (textRef.current) {
      const text = textRef.current.innerText || "";
      const speech = new SpeechSynthesisUtterance(text);
      speech.lang = "en-US"; // Adjust the language if needed
      window.speechSynthesis.speak(speech);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[100dvh] px-4 md:px-6 py-12 md:py-24 bg-[#2a2a2a]">
      <div ref={textRef} className="max-w-xl text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-[#e0e0e0]">
          Welcome to Memory Walk
        </h1>
        <p className="text-lg md:text-xl text-[#b5b5b5]">
          Memory Walk is an immersive AI guide through Auschwitz-Birkenau, providing insights into one of history&apos;s most tragic chapters.
          <br />
          Join us in preserving the memory of the past.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/about"
            className="inline-flex h-10 items-center justify-center px-6 text-sm font-medium bg-[#3d3d3d] text-white shadow-sm hover:bg-[#575757] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-lg"
          >
            Begin Your Journey
          </Link>
        </div>
      </div>
      <button
        onClick={handleSpeech}
        className="mt-4 inline-flex h-10 items-center justify-center px-6 text-sm font-medium bg-[#37aa9d] text-white shadow-sm hover:bg-[#2f8b7e] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-lg"
      >
        Read Aloud
      </button>
    </div>
  );
};

export default Page;
