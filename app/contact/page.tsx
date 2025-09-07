// app/contact/page.tsx
"use client";
import SurveyCta from "@/components/SurveyCTA";

export default function ContactPage() {
  return (
    <main className="w-full max-w-[760px] mx-auto px-6 pt-6 pb-12">
      <h1
        className="
          mb-2
          text-[clamp(28px,3vw,44px)]
          font-semibold tracking-tight
          font-display
          text-white
        "
      >
        Contact Us
      </h1>
      <div className="h-px bg-teal-200/70 mb-6" />

      <div className="space-y-8 text-[17px] lg:text-[18px] leading-[1.7]">
        <p>
          Aquatela Tech is a grassroots startup, and we thrive on community support. Whether you are
          donating time, services, or funds, we appreciate your interest in helping us grow.
        </p>

        <p>
          Please email us at{" "}
          <a
            href="mailto:info@aquatela.tech"
            className="font-semibold underline underline-offset-4 hover:text-teal-200/60"
          >
            info@aquatela.tech
          </a>{" "}
          if you would like to become involved.
        </p>

        {/* New Survey section above Time */}
        <SurveyCta />

        <section>
          <h2 className="text-xl font-semibold font-display text-white mb-2">Time</h2>
          <div className="h-px bg-teal-200/70 mb-3" />
          <p>
            We are always grateful for volunteers, whether you have a few hours or want to contribute long-term.
            When reaching out, please share:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>How much time you are willing to give</li>
            <li>Your availability</li>
            <li>Skills or tasks you are comfortable with</li>
            <li>What inspired you to get involved</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold font-display text-white mb-2">Services</h2>
          <div className="h-px bg-teal-200/70 mb-3" />
          <p>
            Do you have a specialized skill or resource you would like to offer? From graphic design, legal
            support, and grant writing to engineering expertise, your contribution can make a real impact.
          </p>
          <p className="mt-2">Support can come in many forms, such as:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Donating materials or parts for buoy production</li>
            <li>Offering workspace or testing environments</li>
            <li>Sharing technical services or consulting time</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold font-display text-white mb-2">Funds</h2>
          <div className="h-px bg-teal-200/70 mb-3" />
          <p>
            Small community donations can be made directly through our{" "}
            <a href="/donate" className="font-semibold underline underline-offset-4 hover:text-teal-200/60">
              Donate page
            </a>
            . If you are considering a larger contribution that goes beyond what can be handled there, we
            would love to connect directly. Please let us know:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>The amount you are interested in contributing</li>
            <li>
              Whether you would like your support to go toward a specific initiative (for example buoy
              development, dashboard improvements, or outreach)
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
