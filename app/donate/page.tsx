// app/donate/page.tsx
"use client";
import Link from "next/link";

export default function DonatePage() {
  return (
    <main className="w-full max-w-[760px] mx-auto px-6 pt-6 pb-12">
      <h1 className="mb-2 text-[clamp(28px,3vw,44px)] font-semibold tracking-tight font-display text-white">
        Donate
      </h1>
      <div className="h-px bg-teal-200/70 mb-6" />

      <div className="space-y-6 text-[17px] lg:text-[18px] leading-[1.7]">
        <p>
          Every contribution, big or small, helps move Aquatela forward. These
          community donations are the difference between having just an idea and
          building real working prototypes that grow into finished products in
          the water. We are truly grateful for your support, and it is what
          makes this possible.
        </p>

        {/* Centered, shrink-wrapped container */}
        <div className="flex justify-center">
          <div className="rounded-2xl border border-white/20 p-5 max-w-[360px] w-full">
            {/* Stripe Buy Button */}
            <div className="flex justify-center mb-2">
              <stripe-buy-button
                buy-button-id="buy_btn_1S4YCOR8Rap5GNIZvuMhlUVs"
                publishable-key="pk_live_51S447sR8Rap5GNIZuOqG3aIMTAlS5GLfjnz5iE2qhQ4aA4H5BE7XaWmTrQ9so0Q1IOnkkdzbz2D3zozksQGYLBF800kANbSjPI"
              >
              </stripe-buy-button>
            </div>

            {/* Not tax-deductible note (tight bottom) */}
            <p className="text-white/80 text-sm text-center">
              Aquatela Tech LLC is not a 501(c)(3). Contributions are{" "}
              <span className="font-semibold">not tax-deductible</span>.
            </p>

            {/* Fallback link if JS is disabled */}
            <noscript>
              <div className="flex justify-center mt-4">
                <a
                  href="https://donate.stripe.com/bJe4gBbklfK6epVaka97G00"
                  className="inline-flex items-center justify-center rounded-full border border-white/50 px-5 py-3 text-[17px]"
                >
                  Open secure payment page
                </a>
              </div>
            </noscript>
          </div>
        </div>

        {/* Outside the box, centered */}
        <p className="text-white/70 text-sm text-center">
          If you prefer, contact us at{" "}
          <Link href="/contact" className="underline">
            Contact
          </Link>{" "}
          for other ways to support.
        </p>
      </div>
    </main>
  );
}
