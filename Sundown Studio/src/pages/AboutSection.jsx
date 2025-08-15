import React from "react";
import Circle from '../components/Circle'
const AboutSection = () => {
  return (
    <section className="h-[155vh] w-full">
      <div className="flex items-center pt-22 uppercase font-bold banner">
        <div className="flex text-[10vw] items-center">
          <h1>Content</h1>
          <div className="dot"></div>
          <h1>Environment</h1>
          <div className="dot"></div>
          <h1>Experience</h1>
          <div className="dot"></div>
        </div>
        <div className="flex text-[10vw] items-center">
          <h1>Content</h1>
          <div className="dot"></div>
          <h1>Environment</h1>
          <div className="dot"></div>
          <h1>Experience</h1>
          <div className="dot"></div>
        </div>
        <div className="flex text-[10vw] items-center">
          <h1>Content</h1>
          <div className="dot"></div>
          <h1>Environment</h1>
          <div className="dot"></div>
          <h1>Experience</h1>
          <div className="dot"></div>
        </div>
        <div className="flex text-[10vw] items-center">
          <h1>Content</h1>
          <div className="dot"></div>
          <h1>Environment</h1>
          <div className="dot"></div>
          <h1>Experience</h1>
          <div className="dot"></div>
        </div>
      </div>

      <div className="flex justify-between mt-34 px-14 text-[2.5vw] font-bold leading-[35px] break-words relative">
      <Circle/>
          <h2 className="text-5xl w-[60%] relative z-4">
            We are a group of design-driven, goal-focused creators, producers,
            and designers who believe that the details make all the difference.
          </h2>
        <div className="h-screen relative z-4">
          <div className="card pt-28 px-16">
            <img className="h-40 w-60 rounded-lg fit-cover"
            src="/Holding_thumb.webp" alt="" />
            <p className="font-normal text-sm w-60 p-1 py-8">
              We love to create, we love to solve, we love to collaborate, and
              we love to turn amazing ideas into reality. We’re here to partner
              with you through every step of the process and know that
              relationships are the most important things we build.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
