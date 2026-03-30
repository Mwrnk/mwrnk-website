"use client";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import AnimatedTextCycle from "@/components/ui/animated-text-cycle";

export function HeroName() {
  return (
    <>
      <PointerHighlight
        rectangleClassName="border-neutral-700"
        pointerClassName="text-blue-500"
        containerClassName="block"
      >
        <h1 className="hero-name">Mateus Werneck</h1>
      </PointerHighlight>
      <div className="hero-role">
        <AnimatedTextCycle
          words={[
            "FRONTEND DEVELOPER",
            "REACT DEVELOPER",
            "MOBILE DEVELOPER",
            "FULLSTACK DEVELOPER",
            "UI ENGINEER",
          ]}
          interval={3000}
          className="hero-role"
        />
      </div>
    </>
  );
}
