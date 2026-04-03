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
          This summer, Aquatela Tech is focused on deploying four monitoring systems across the Twin Cities, 
          with two installations along the Mississippi River in Minneapolis and two deployments in Lake Minnetonka.
        </p>

        <Image
          src="/2026-deployment-map.png"
          alt="Map of 2026 Device Deployments"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          className="rounded-3xl"
          priority
        />

        <p>
          Along the Mississippi, we will be installing two dock-mounted monitoring systems, referred to as Aquatela 
          Current, which are designed to continuously track core water quality metrics such as temperature, total 
          dissolved solids (TDS), and electrical conductivity (EC), while transmitting that data directly to our 
          dashboard. This marks an important step for us, as it is our first time deploying a fixed, dock-based 
          system in a flowing river environment, and we are particularly interested in understanding how consistent, 
          real-time data behaves in a system with constant movement and variability.
        </p>

        <p>
          In parallel, we are deploying two floating buoy systems, Aquatela Hydro Drift, in Lake Minnetonka. These 
          deployments allow us to test our system in a contrasting environment, where water conditions are more stable 
          and influenced by different ecological and human factors, while still collecting comparable data across locations.
        </p>

        {/* Photos of 2026 Devices*/}
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/current.jpg"
            alt="Aquatela Current Dock Device"
            width={0}
            height={0}
            sizes="50vw"
            style={{ width: "100%", height: "auto" }}
            className="rounded-3xl"
          />
          <Image
            src="/hydro-drift.jpg"
            alt="Aquatela Hydro Drift Buoy"
            width={0}
            height={0}
            sizes="50vw"
            style={{ width: "100%", height: "auto" }}
            className="rounded-3xl"
          />
        </div>

        <p>
          Our goal this summer is not just deployment, but expansion in both technical capability and community engagement. 
          We are actively working on improving the usability and clarity of our dashboard, refining hardware design based on 
          real-world conditions, and building stronger relationships with the communities and stakeholders connected to each 
          deployment site.
        </p>

        <p>This phase is ultimately about understanding what works in practice, not just in theory, and using that understanding 
          to guide how Aquatela can remain both accessible and affordable as we continue to grow.
        </p>

      </div>
    </main>
  );
}
