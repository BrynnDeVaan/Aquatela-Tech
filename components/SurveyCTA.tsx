"use client";
import Link from "next/link";

export default function SurveyCta() {
  return (
    <section className="mt-6">
      <h2 className="text-xl font-semibold font-display text-white mb-2">Survey</h2>
      <div/>
      <p>
        Help guide our roadmap by sharing how you want to see water-quality info. This market research
        survey is for the general public.
      </p>
      <p className="mt-3">
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSeG9VvtJCqldMfjqDRW3EW2_HFniahaLe2hPRoSoK__3GcnGA/viewform?usp=sharing&ouid=109542767516213843235"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-xl border-2 border-teal-200/70 px-5 py-3 text-[16px] font-medium text-white hover:bg-teal-200/10 transition"
        >
          Take the survey
        </Link>
      </p>
    </section>
  );
}
