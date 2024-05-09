"use client";
import { TypeAnimation } from "react-type-animation";

function MainTitle() {
  return (
    <div>
      <p className="font-bold font-sans text-main-name flex justify-center">
        Rishab Gupta
      </p>
      <div className="flex justify-center">
        <TypeAnimation
          sequence={[
            "I'm a Visionary.",
            2000,
            "I'm a Developer.",
            2000,
            "I'm a Software Engineer.",
            2000,
            "I'm a College Student.",
            2000,
          ]}
          speed={25}
          repeat={Infinity}
          style={{ fontSize: "2em" }}
        />
      </div>
    </div>
  );
}
export default MainTitle;
