"use client";
import Image from "next/image";
import Link from "next/link";

export default function TeamPage() {
  return (
    <main className="w-full max-w-[760px] mx-auto px-6 pt-6 pb-12">
      <h1
        className="mb-2 text-[clamp(28px,3vw,44px)] font-semibold tracking-tight font-display text-white"
      >
        Meet the Team
      </h1>
      <div className="h-px bg-teal-200/70 mb-8" />

      <div className="space-y-12 text-[17px] lg:text-[18px] leading-[1.7]">
        {/* Brynn */}
        <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
          <Image
            src="/team-brynn.jpg"
            alt="Brynn DeVaan"
            width={192}
            height={192}
            className="rounded-full flex-shrink-0 mb-4 sm:mb-0 w-48 h-48 sm:w-32 sm:h-32 object-cover"
          />
          <div>
            <p className="font-display font-semibold text-xl sm:text-2xl">
              Brynn DeVaan
            </p>
            <p className="font-display text-lg sm:text-xl">
              Co-Founder, Head of Technology
            </p>
            <div className="h-px bg-teal-200/70 my-2" />
            <p>
              Brynn is a recent Computer Science graduate with a concentration in cybersecurity
              and a passion for ethical, real-world technology. Her expertise spans web
              development, server management, and IoT integration, all grounded in a strong
              commitment to human-centered design. As Head of Technology, Brynn leads Aquatela
              Tech’s technical vision, ensuring our systems are powerful, secure, and built to
              serve the public good.
            </p>
          </div>
        </div>

        {/* Sofia */}
        <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
          <Image
            src="/team-sofia.jpg"
            alt="Sofia Garcia"
            width={192}
            height={192}
            className="rounded-full flex-shrink-0 mb-4 sm:mb-0 w-48 h-48 sm:w-32 sm:h-32 object-cover"
          />
          <div>
            <p className="font-display font-semibold text-xl sm:text-2xl">
              Sofia Garcia
            </p>
            <p className="font-display text-lg sm:text-xl">
              Co-Founder, Head of Engineering
            </p>
            <div className="h-px bg-teal-200/70 my-2" />
            <p>
              Sofia is a design engineer with a degree in general engineering and a hands-on
              background in sustainable design, water-quality prototyping, and machine
              development. From restoring trails in Appalachia to engineering solutions for
              biomedical startups, Sofia blends empathy and precision in every project. As Head
              of Engineering, she leads hardware development, ensuring our water monitoring
              tools are effective, durable, and easy to use.
            </p>
          </div>
        </div>

        {/* Zoe */}
        <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
          <Image
            src="/team-zoe.jpg"
            alt="Zoe Diaz-Moore"
            width={192}
            height={192}
            className="rounded-full flex-shrink-0 mb-4 sm:mb-0 w-48 h-48 sm:w-32 sm:h-32 object-cover"
          />
          <div>
            <p className="font-display font-semibold text-xl sm:text-2xl">
              Zoe Diaz-Moore
            </p>
            <p className="font-display text-lg sm:text-xl">
              Outreach & Environmental Engagement
            </p>
            <div className="h-px bg-teal-200/70 my-2" />
            <p>
              Zoe is a recent graduate in Ecology and Evolutionary Biology, with a passion for
              conservation and climate adaptation. Their work includes ecosystem restoration in
              Ecuador and wildlife care at a local aviary. At Aquatela Tech, Zoe brings their
              love for the natural world into community outreach, bridging environmental science
              with public engagement and helping us build a platform that connects with real
              people.
            </p>
          </div>
        </div>

        {/* Mentors */}
        <div>
          <h2
            className="mb-2 text-[clamp(22px,2.5vw,32px)] font-semibold tracking-tight font-display text-white"
          >
            Mentors and Advisors
          </h2>
          <div className="h-px bg-teal-200/70 mb-6" />

          <Image
            src="/team-mentors.jpg"
            alt="Mentors"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className="rounded-3xl mb-6"
          />

          <p>
            Aquatela Tech is backed by a growing team of mentors. Our core mentors, Mickey
            McClellan, Patrick Marsh, and Stuart DeVaan encompass widespread knowledge across STEM
            and entrepreneurship fields. They have played a vital role in providing resources and
            knowledge towards launching this project.
          </p>

          <div className="my-6" />

          <p>
            We’re currently seeking a mentor with expertise in water health, environmental
            science, or aquatic ecosystems to strengthen our impact even further. If this sounds
            like you,{" "}
            <Link href="/contact" className="underline underline-offset-4">
              visit our Contact Us page
            </Link>
            .
          </p>

          <div className="my-6" />

          <p>
            We’re incredibly proud of the people behind this mission, and excited for those who
            want to join us.
          </p>
        </div>
      </div>
    </main>
  );
}
