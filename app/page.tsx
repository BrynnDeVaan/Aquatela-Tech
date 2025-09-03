// app/page.tsx
"use client";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="w-full mx-auto">
      {/* Hero full-bleed */}
      <header
        className="relative isolate -mt-28 mx-[calc(50%-50vw)]"
        style={{ ["--nav-h" as any]: "7rem" }}
      >
        <div className="absolute inset-0 -z-10 bg-[url('/map.png')] bg-cover bg-top" />
        <div className="absolute inset-0 -z-10 bg-black/40" />

        <div className="min-h-[72vh] pt-[var(--nav-h)] grid place-items-center">
          <div className="px-6 w-full max-w-[820px] mx-auto text-center -mt-14">
            <h1 className="text-balance text-[clamp(36px,4.5vw,60px)] font-semibold tracking-tight font-display text-white">
              Real-time water-quality insights
            </h1>
            <p className="mt-5 mx-auto max-w-[660px] text-[19px] lg:text-[21px] leading-[1.75] text-white/90">
              Aquatela Tech builds affordable monitoring devices and a unified dashboard so communities
              can see clear, trustworthy water data when it matters.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-5">
              <Link
                href="/about/mission"
                className="rounded-xl border-2 border-teal-200/70 px-6 py-3.5 text-[17px] font-medium text-white hover:bg-teal-200/10 transition"
              >
                Our Mission
              </Link>
              <Link
                href="/devices/proto-onda"
                className="rounded-xl border-2 border-teal-200/70 px-6 py-3.5 text-[17px] font-medium text-white hover:bg-teal-200/10 transition"
              >
                Devices
              </Link>
              <Link
                href="/contact"
                className="rounded-xl border-2 border-teal-200/70 px-6 py-3.5 text-[17px] font-medium text-white hover:bg-teal-200/10 transition"
              >
                Get Involved
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* What we do */}
      <section className="w-full max-w-[760px] mx-auto px-6 pt-14 pb-10 space-y-4 text-[17px] lg:text-[18px] leading-[1.7]">
        <h2 className="text-[clamp(22px,2.5vw,30px)] font-semibold font-display text-white">
          What we do
        </h2>
        <div className="h-px bg-teal-200/70 mb-4" />
        <Image
          src="/home-photo-1.jpg"
          alt="What we do"
          width={1200}
          height={200}
          className="w-full h-[80px] sm:h-[100px] object-cover rounded-xl"
        />
        <p>
          Waterways change fast. Flooding, pollution, and aging infrastructure can shift conditions
          day to day. People need simple ways to track what is happening in local lakes and rivers.
        </p>
        <p>
          We pair low-cost, resilient sensors with a dashboard that blends our device data with
          weather feeds and public sources. AI helps surface current conditions and early trends so
          residents, students, and planners can act.
        </p>
      </section>

      {/* Twin Cities */}
      <section className="w-full max-w-[760px] mx-auto px-6 pb-10 space-y-4 text-[17px] lg:text-[18px] leading-[1.7]">
        <h2 className="text-[clamp(22px,2.5vw,30px)] font-semibold font-display text-white">
          Rooted in the Twin Cities
        </h2>
        <div className="h-px bg-teal-200/70 mb-4" />
        <Image
          src="/home-photo-2.jpg"
          alt="Twin Cities"
          width={1200}
          height={200}
          className="w-full h-[80px] sm:h-[100px] object-cover rounded-xl"
        />
        <p>
          We grew up around lakes and rivers in Minneapolis–Saint Paul. Conversations with
          neighbors, stories of sick pets and flooded homes, and repeated beach closures shaped our
          focus. Access to water information is unequal. We aim to close that gap.
        </p>
        <Link
          href="/about/community"
          className="inline-block underline underline-offset-4 hover:text-teal-200/60"
        >
          Read about our community
        </Link>
      </section>

      {/* Building the platform */}
      <section className="w-full max-w-[760px] mx-auto px-6 pb-10 space-y-4 text-[17px] lg:text-[18px] leading-[1.7]">
        <h2 className="text-[clamp(22px,2.5vw,30px)] font-semibold font-display text-white">
          Building the platform
        </h2>
        <div className="h-px bg-teal-200/70 mb-4" />
        <Image
          src="/home-photo-3.jpeg"
          alt="Building the platform"
          width={1200}
          height={200}
          className="w-full h-[80px] sm:h-[100px] object-cover rounded-xl"
        />
        <p>
          Our first deployed buoy informed the dashboard design and field practices in moving water
          under changing levels. Now we are expanding to stream key water qualities into an active
          database and a single, easy interface.
        </p>
        <Link
          href="/devices/proto-onda"
          className="inline-block underline underline-offset-4 hover:text-teal-200/60"
        >
          Explore Proto Onda
        </Link>
      </section>

      {/* Contact */}
      <section className="w-full max-w-[760px] mx-auto px-6 pb-16 text-[17px] lg:text-[18px] leading-[1.7]">
        <h2 className="text-[clamp(22px,2.5vw,30px)] font-semibold font-display text-white mb-3">
          Get involved
        </h2>
        <div className="h-px bg-teal-200/70 mb-4" />
        <p className="mb-3">
          Support with time, services, or funds. Every contribution helps expand access to clear
          water data.
        </p>
        <p className="mb-4">
          <Link href="/contact" className="underline underline-offset-4 hover:text-teal-200/60">
            Visit our Contact Us page
          </Link>
        </p>
      </section>
    </main>
  );
}
