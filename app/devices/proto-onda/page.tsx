// app/devices/proto-onda/page.tsx
"use client";
import Image from "next/image";

export default function ProtoOndaPage() {
  return (
    <main className="w-full max-w-[760px] mx-auto px-6 pt-6 pb-12">
      <h1 className="mb-2 text-[clamp(28px,3vw,44px)] font-semibold tracking-tight font-display text-white">
        Prototype Onda
      </h1>
      <div className="h-px bg-teal-200/70 mb-6" />

      <div className="space-y-8 text-[17px] lg:text-[18px] leading-[1.7]">
        <Image
          src="/proto-onda-photo-1.jpg"
          alt="Proto Onda buoy in water"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          className="rounded-3xl"
          priority
        />

        <h2 className="text-2xl font-semibold font-display text-white mt-8 mb-2">Where it started</h2>
        <div className="h-px bg-teal-200/70 mb-3" />
        <p>
          AquaCheck was the original concept: a low-cost, solar-powered buoy designed to measure
          water quality and identify early signs of bacterial contamination in freshwater.
          Developed in 2024 at Cornell College by Sofia Garcia and Garnett Strack, the goal
          was straightforward but ambitious, create a floating device that could measure
          properties like pH, temperature, and dissolved oxygen, and use those metrics to
          predict when harmful bacteria like E. coli might be present.
        </p>

        {/* Photos 2 and 3 */}
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/proto-onda-photo-2.jpg"
            alt="Proto Onda build photo 2"
            width={0}
            height={0}
            sizes="50vw"
            style={{ width: "100%", height: "auto" }}
            className="rounded-3xl"
          />
          <Image
            src="/proto-onda-photo-3.jpg"
            alt="Proto Onda build photo 3"
            width={0}
            height={0}
            sizes="50vw"
            style={{ width: "100%", height: "auto" }}
            className="rounded-3xl"
          />
        </div>

        <p>
          The prototype was designed with affordability in mind (under $600 total cost) and
          built with widely available materials like PVC pipe and an Arduino-based
          microcontroller. Despite budget and timeline constraints, AquaCheck was able to
          measure and transmit real-time water data including: Temperature, pH, Total
          Dissolved Solids (TDS), Oxidation-Reduction Potential (ORP), and Dissolved Oxygen (DO).
        </p>

        <h2 className="text-2xl font-semibold font-display text-white mt-8 mb-2">
          From AquaCheck to Proto Onda
        </h2>
        <div className="h-px bg-teal-200/70 mb-3" />
        <p>
          During the capstone, the original buoy then called AquaCheck was deployed in several
          lakes and rivers across Iowa. At the time, all data was collected live, without any
          way to track trends over multiple days or seasons. That made it hard to draw
          long-term conclusions, but it was still a strong starting point. We learned a lot
          about the mechanics of data collection, even if the insights were not yet scalable
          or actionable.
        </p>

        {/* Photos 4 and 5 */}
        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-3">
            <Image
              src="/proto-onda-photo-4.jpeg"
              alt="Proto Onda field test 4"
              width={0}
              height={0}
              sizes="(min-width: 640px) 60vw, 100vw"
              style={{ width: "100%", height: "auto" }}
              className="rounded-3xl"
            />
          </div>
          <div className="col-span-2">
            <Image
              src="/proto-onda-photo-5.png"
              alt="Proto Onda field test 5"
              width={0}
              height={0}
              sizes="(min-width: 640px) 40vw, 100vw"
              style={{ width: "100%", height: "auto" }}
              className="rounded-3xl"
            />
          </div>
        </div>

        <p>
          After graduation, the project continued, and became more focused. While AquaCheck
          aimed to tackle water contamination broadly, Proto Onda became a refined proof of
          concept, a real-time monitoring buoy that could collect data and broadcast it to a
          local server.
        </p>
        <p>
          This version allowed us to test sensor performance, waterproofing, data storage, and
          deployment logistics. We were finally able to leave the buoy in the water for a full
          week, which was huge. The system worked, but it also revealed important limitations.
          Some sensors underperformed or drifted, and we ran into challenges with calibration,
          data reliability, and continuous power.
        </p>

        {/* Photo 6 */}
        <Image
          src="/proto-onda-photo-6.png"
          alt="Proto Onda deployment 6"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          className="rounded-3xl"
        />

        <p>
          Ultimately, it showed us what we needed next, a system that could stay in the water
          longer, provide continuous data over time, and adapt to seasonal or environmental
          changes. Proto Onda gave us the foundation to start solving those bigger challenges.
        </p>

        <h2 className="text-2xl font-semibold font-display text-white mt-8 mb-2">A Shift in Focus</h2>
        <div className="h-px bg-teal-200/70 mb-3" />
        <p>
          Since then, Aquatela Tech’s focus has evolved. Rather than designing and distributing
          individual buoys that operate in isolation, we are now prioritizing data
          infrastructure, a centralized dashboard that brings together water quality data from
          multiple sources our own buoys, open-source sensors, and third-party feeds like
          weather or land use data.
        </p>

        <p>
          Our mission is still to make water data accessible and actionable, but now we are
          leading with the platform. Instead of just building buoys, we are developing the
          systems and AI needed to turn real-time data into real-world impact, focusing on
          long-term trends and overall water health, not just bacteria detection.
        </p>

        <p className="font-semibold">Proto Onda is just the beginning.</p>
      </div>
    </main>
  );
}
