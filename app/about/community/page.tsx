"use client";
import Image from "next/image";
import Link from "next/link";

export default function CommunityPage() {
  return (
    <main className="w-full max-w-[760px] mx-auto px-6 pt-6 pb-12">
      <h1
        className="mb-2 text-[clamp(28px,3vw,44px)] font-semibold tracking-tight font-display text-white"
      >
        Our Community
      </h1>
      <div className="h-px bg-teal-200/70 mb-6" />

      <div className="space-y-8 text-[17px] lg:text-[18px] leading-[1.7]">
        <p>
          Aquatela Tech is rooted in the Twin Cities where the founders grew up surrounded by
          lakes and rivers. From swimming in neighborhood lakes to being turned away by beach
          closures because of E. coli, we have seen how water quality affects daily life.
        </p>

        <p>
          As a local startup, we connect with our community from the start. We talk with neighbors
          along the parkway and listen to stories about how water touches people&apos;s lives, from
          sick pets to flooded homes. We hear strong feedback from people who care about our lakes,
          and we also see that not every community has the same access to information or advocacy.
          That gap is what we aim to fill.
        </p>

        <Image
          src="/Our-Community-Photo-1.jpeg"
          alt="photo"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          className="rounded-3xl"
          priority
        />

        <p>
          One of our first big opportunities came through our friend Phil, who helped us place our
          first buoy, Proto Onda, in the water on his property in Northeast Minneapolis. That launch
          let us collect real data and also showed us challenges like changing river levels and
          site specifics that shaped how we improved our design.{" "}
          <Link href="/devices/proto-onda" className="underline underline-offset-4">
            Read more about Proto Onda here
          </Link>
          .
        </p>

        <p>
          Aquatela Tech is about people. We walk our dogs along the Mississippi River, we swim,
          fish, and paddle in its waters, and we care about the ecosystems and communities that
          depend on it. Keeping the river clean helps keep our neighborhoods, our pets, and our
          futures healthy.
        </p>

        <Image
          src="/Our-Community-Photo-2.png"
          alt="photo"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          className="rounded-3xl"
        />

        <p className="font-semibold">Who we are building for:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Families planning beach days and checking lake temperatures</li>
          <li>Students studying climate change</li>
          <li>City workers managing stormwater systems</li>
          <li>Business owners who want to understand environmental impact</li>
          <li>Anyone who wants to know if their water is safe today</li>
        </ul>

        <p>
          We are starting local, and our vision is global.{" "}
          <Link href="/contact" className="underline underline-offset-4">
            Visit our Contact Us page
          </Link>{" "}
          to get connected, whether you are a data nerd, a nature lover, or someone who cares.
          There is a place for you in the Aquatela community.
        </p>
      </div>
    </main>
  );
}
