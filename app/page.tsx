import MainTitle from "./components/MainTitle";
import React from "react";
import Michigan from "./components/MichiganPage";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div>
      <MainTitle />
      <Michigan />
      <Experience />
      <Projects />
    </div>
  );
}
