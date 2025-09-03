// app/devices/in-the-works/page.tsx
"use client";
import Image from "next/image";

export default function InTheWorksPage() {
  return (
    <main className="w-full max-w-[760px] mx-auto px-6 pt-6 pb-12">
      <h1 className="mb-2 text-[clamp(28px,3vw,44px)] font-semibold tracking-tight font-display text-white">
        In the Works
      </h1>
      <div className="h-px bg-teal-200/70 mb-6" />

      <div className="space-y-8 text-[17px] lg:text-[18px] leading-[1.7]">
        <p>
          Right now, we’re in the exciting (and sometimes messy) stage of building what comes next.
          Our team is setting up our office space and applying for grants to help fund development of
          the next generation of our device.
        </p>

        <Image
          src="/in-the-works-photo-1.jpg"
          alt="Workspace and early build efforts"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          className="rounded-3xl"
          priority
        />

        <p>
          The newest prototype focuses on relaying two core qualities of water directly into our active
          database. But hardware is just one piece of the puzzle, we’re also working on connecting
          information from multiple sources and compiling it into a single, easy-to-use dashboard.
        </p>

        <Image
          src="/in-the-works-photo-2.jpg"
          alt="Prototype and data integration preview"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          className="rounded-3xl"
        />
      </div>
    </main>
  );
}
