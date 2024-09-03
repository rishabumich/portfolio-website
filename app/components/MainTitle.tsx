"use client";

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import cowsayTemplate from "../../assets/cowsayWhite.png";
import downloadSVG from "../../assets/download.svg";
import LinkedInIcon from "../../assets/LinkedInIcon.png";
import mailIcon from "../../assets/mailIcon.png";
import githubIcon from "../../assets/githubIcon.png";
import scrollDownGif from "../../assets/scrollDownGif.gif";
import Particle from "./Particle";

function MainTitle() {
  return (
    <div className="min-h-screen bg-bg-theme items-center">
      <div className="flex justify-end z-10 pr-3 pt-3">
        <button
          className=" text-white p-2 px-6 rounded-lg hover:bg-slate-600 ease-in duration-100 "
          onClick={() => {
            const pdfUrl =
              "https://drive.google.com/file/d/1XV9rlNiTq-3MxIf-EkIYtNQHZqGanWdI/view?usp=sharing";
            window.open(pdfUrl, "_blank");
          }}
        >
          <div className="flex justify-between space-x-3">
            {/* <Image
              src={downloadSVG}
              alt="Download Icon Small" 
              style={{
                filter:
                  "invert(100%) sepia(100%) saturate(0%) hue-rotate(138deg) brightness(102%) contrast(102%)",
              }}
            /> */}
            <p className="text-lg">Resume</p>
          </div>
        </button>
      </div>
      <Particle />
      <div className="flex flex-col justify-center items-center">
        <p className="text-white mt-80 font-bold text-4xl sm:text-4xl md:text-6xl lg:text-8xl">
          Rishab Gupta
        </p>
        <div className="sm:text-xl md:text-2xl lg:text-3xl text-white font-mono z-10 mt-3">
          <TypeAnimation
            sequence={[
              "I'm a Visionary.",
              2000,
              "I'm a Developer.",
              2000,
              "I'm a Builder.",
              2000,
              "I'm an Entrepreneur.",
              2000,
              "I'm a Software Engineer.",
              2000,
              "I'm a College Student.",
              2000,
            ]}
            speed={25}
            repeat={Infinity}
            wrapper="div"
          />
        </div>
        {/* <Image
          src={cowsayTemplate}
          alt="Cow with templated speech bubble"
          layout="fixed"
          width={635}
          height={255}
          className="mr-44"
        /> */}
        <div className="flex justify-between space-x-4 mt-16">
          <a
            href="https://github.com/rishabumich"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={githubIcon}
              alt="Mail Social Icon"
              className="w-12 h-12 hover:w-14 hover:h-14 transition-all duration-500 ease-in-out"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/rishab-gupta04/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={LinkedInIcon}
              alt="LinkedIn Social Icon"
              className="w-12 h-12 hover:w-14 hover:h-14 transition-all duration-300 ease-in-out"
            />
          </a>
          <a
            href="mailto:rishabg@umich.edu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={mailIcon}
              alt="Mail Social Icon"
              className="w-12 h-12 hover:w-14 hover:h-14 transition-all duration-300 ease-in-out"
            />
          </a>
        </div>
        {/* <div className="absolute flex justify-center bottom-0 left-1/2 transform -translate-x-20">
          <Image
            src={scrollDownGif}
            alt="Gif of Arrow pointing downwards"
            width={150}
            height={150}
          />
        </div> */}
      </div>
    </div>
  );
}

export default MainTitle;
