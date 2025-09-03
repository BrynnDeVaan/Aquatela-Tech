// app/devices/the-dream/page.tsx
"use client";
import Image from "next/image";

export default function TheDreamPage() {
  return (
    <main className="w-full max-w-[760px] mx-auto px-6 pt-6 pb-12">
      <h1 className="mb-2 text-[clamp(28px,3vw,44px)] font-semibold tracking-tight font-display text-white">
        The Dream
      </h1>
      <div className="h-px bg-teal-200/70 mb-6" />

      <div className="space-y-8 text-[17px] lg:text-[18px] leading-[1.7]">
        <section className="space-y-4">
          <h2 className="text-[clamp(20px,2.2vw,28px)] font-semibold font-display text-white">Future Devices</h2>
          <div className="h-px bg-teal-200/70 mb-2" />
          <p>
            We imagine a family of devices designed for different places and purposes. A buoy with a
            customizable suite of sensors could float in a public lake or river, collecting
            round-the-clock measurements. A dock-mounted unit could watch over the shoreline of a cabin
            or park. Even a compact backyard device could help track runoff, garden water, or a private pond.
          </p>
          <p>
            Each design would be tailored to its setting, but all would share the same qualities:
            durable, affordable, and easy to use. Communities could choose the sensors that matter most,
            pH, dissolved oxygen, temperature, turbidity, or more, and connect them into the broader
            network without needing technical expertise. Solar power and wireless connectivity would
            keep them running for months with little maintenance. The dream is not one device, but a
            toolkit that adapts to where people live, work, and play.
          </p>
        </section>

        <Image
          src="/the-dream-photo-1.png"
          alt="Concept image for Aquatela's future devices and dashboard"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          className="rounded-3xl"
          priority
        />

        <section className="space-y-4">
          <h2 className="text-[clamp(20px,2.2vw,28px)] font-semibold font-display text-white">Global Dashboard</h2>
          <div className="h-px bg-teal-200/70 mb-2" />
          <p>
            Devices are only half the picture. Their real value comes from working together. Right now,
            water data is fragmented and decentralized, scattered across agencies, research groups, and
            private labs. Our dream is to aggregate this information into one living system.
          </p>
          <p>
            Every deployed device would stream data into a shared international dashboard, where local
            measurements become part of a global picture. With real-time updates, patterns start to
            emerge: seasonal changes, pollution events, or sudden drops in oxygen. These insights could
            trigger early warnings and alerts, helping communities act before problems escalate.
          </p>
          <p>
            And while the dashboard could serve scientists, city planners, and policymakers, our priority
            is the public. We envision a free, accessible map on our website where anyone can check the
            quality of their local water. Whether you are a swimmer, a pet owner, or a conservationist,
            you should be able to open a page and know at a glance if the water is safe.
          </p>
          <p>
            The dream is simple but transformative: devices in the hands of communities everywhere,
            feeding into a single source of truth about water health. A network that turns uncertainty
            into confidence and data into action.
          </p>
        </section>
      </div>
    </main>
  );
}
