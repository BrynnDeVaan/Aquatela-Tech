"use client";
import { useEffect, useState } from "react";

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeG9VvtJCqldMfjqDRW3EW2_HFniahaLe2hPRoSoK__3GcnGA/viewform?usp=sharing&ouid=109542767516213843235";

export default function SurveyPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 3000);
    return () => clearTimeout(t);
  }, []);

  if (!open) return null;

  return (
    <aside
      role="dialog"
      aria-label="Take our survey"
      className={[
        "pointer-events-auto fixed z-[60]",
        // mobile <530px → bottom sheet
        "max-[529px]:inset-x-3 max-[529px]:bottom-[calc(env(safe-area-inset-bottom)+12px)]",
        "max-[529px]:w-auto max-[529px]:rounded-2xl",
        // desktop ≥530px → lower-right card
        "min-[530px]:inset-auto min-[530px]:right-4 min-[530px]:bottom-4",
        "min-[530px]:w-[min(92vw,380px)] min-[530px]:rounded-[2rem]",
        // glass look
        "backdrop-blur-xl bg-white/50 supports-[backdrop-filter]:bg-emerald-200/10 shadow-lg",
        "px-5 py-4 text-white",
      ].join(" ")}
    >
      {/* Close button floats in corner */}
      <button
        type="button"
        onClick={() => setOpen(false)}
        aria-label="Close"
        className="absolute top-2 right-2 inline-flex h-8 w-8 items-center justify-center rounded-xl text-white/70 hover:text-white"
      >
        ✕
      </button>

      {/* Inner content has balanced padding so text is optically centered */}
      <div className="text-left">
        <h3 className="font-semibold font-display tracking-tight">Quick survey</h3>
        <p className="mt-1 text-sm text-white/85">
          Market research for the general public. Your input helps improve access to local water data.
        </p>

        <div className="mt-3 flex flex-col min-[530px]:flex-row min-[530px]:justify-start gap-2">
          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="w-full min-[530px]:w-auto text-center inline-flex items-center justify-center rounded-full border border-white/40 px-4 py-2 text-sm font-medium hover:bg-white/10 transition"
          >
            Take the survey
          </a>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="w-full min-[530px]:w-auto text-center rounded-full px-3 py-2 text-sm text-white/80 hover:text-white"
          >
            Not now
          </button>
        </div>
      </div>
    </aside>
  );
}
