"use client";

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import cowsayTemplate from "../../assets/cowsayWhite.png";
import LinkedInIcon from "../../assets/LinkedInIcon.png";
import mailIcon from "../../assets/mailIcon.png";
import githubIcon from "../../assets/githubIcon.png";
import scrollDownGif from "../../assets/scrollDownGif.gif";

function MainTitle() {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-80 space-y-4 relative">
        <p className="text-white font-bold text-7xl">Rishab Gupta</p>
        <div className="relative text-2xl text-white font-mono z-10 -mt-16 pt-3">
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
        <div className="absolute top-1/2 w-full flex justify-center -mt-10 mr-44">
          <Image
            src={cowsayTemplate}
            alt="Cow with templated speech bubble"
            layout="fixed"
            width={635}
            height={255}
          />
        </div>
      </div>
      <div className="absolute top-[70%] left-1/2 transform -translate-x-1/2 translate-y-15 flex space-x-4">
        <a
          href="https://github.com/rishabumich"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={githubIcon}
            alt="Mail Social Icon"
            width={45}
            height={45}
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
            width={45}
            height={45}
          />
        </a>
        <a
          href="mailto:rishabg@umich.edu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={mailIcon} alt="Mail Social Icon" width={45} height={45} />
        </a>
      </div>
      <div className="absolute flex justify-center bottom-0 left-1/2 transform -translate-x-20">
        <Image
          src={scrollDownGif}
          alt="Gif of Arrow pointing downwards"
          width={150}
          height={150}
        />
      </div>
    </>
  );
}

export default MainTitle;
