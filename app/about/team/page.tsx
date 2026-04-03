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
              CEO & Co-Founder
            </p>
            <div className="h-px bg-teal-200/70 my-2" />
            <p>
              Brynn holds a degree in Computer Science with a concentration in cybersecurity and experience 
              leading teams, fundraising efforts, and community partnerships. She works as an IT Auditor at 
              Ameriprise Financial, focusing on risk assessment and data integrity. At Aquatela Tech, she 
              sets the company direction and product strategy, overseeing the development of the data 
              dashboard & app.
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
              CTO & Co-Founder
            </p>
            <div className="h-px bg-teal-200/70 my-2" />
            <p>
              Sofia holds a degree in General Engineering with experience in sustainable systems and 
              water-quality. She works at Marken Manufacturing, where she designs precision-engineered 
              industrial cutting machines. At Aquatela Tech, she leads technical strategy and engineering 
              design, driving the development of Aquatela’s buoys and dock-mounted water monitoring devices.
            </p>
          </div>
        </div>

        {/* Avery */}
        <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
          <Image
            src="/team-avery.jpg"
            alt="Avery Cook"
            width={192}
            height={192}
            className="rounded-full flex-shrink-0 mb-4 sm:mb-0 w-48 h-48 sm:w-32 sm:h-32 object-cover"
          />
          <div>
            <p className="font-display font-semibold text-xl sm:text-2xl">
              Avery Cook
            </p>
            <p className="font-display text-lg sm:text-xl">
              Community Engagement & Partnerships
            </p>
            <div className="h-px bg-teal-200/70 my-2" />
            <p>
              Avery holds a Master of Public Health and a Master of Social Work, with a focus on bridging 
              the gap between communities and the programs and policies that serve them. At Aquatela Tech, 
              she brings her experience in stakeholder engagement and project management to coordinate 
              opportunities that build community partnerships, support outreach efforts, and expand 
              Aquatela’s network.
            </p>
          </div>
        </div>

        {/* Jacob */}
        <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
          <Image
            src="/team-jacob.jpeg"
            alt="Jacob Clark"
            width={192}
            height={192}
            className="rounded-full flex-shrink-0 mb-4 sm:mb-0 w-48 h-48 sm:w-32 sm:h-32 object-cover"
          />
          <div>
            <p className="font-display font-semibold text-xl sm:text-2xl">
              Jacob Clark
            </p>
            <p className="font-display text-lg sm:text-xl">
              Project Engineer
            </p>
            <div className="h-px bg-teal-200/70 my-2" />
            <p>
              Jacob holds a degree in General Engineering and is pursuing a master’s in Materials Science. 
              He works as a Process Engineer at Boston Scientific, specializing in injection molding, 
              rapid prototyping, and manufacturing process development. At Aquatela Tech, he supports 
              sensor calibration and testing, with a focus on validating the long-term performance in 
              everyday conditions.
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
              Environmental Science & Analysis
            </p>
            <div className="h-px bg-teal-200/70 my-2" />
            <p>
              Zoe holds a degree in Ecology and Evolutionary Biology, with experience in conservation and 
              climate adaptation. They work to raise awareness and secure funding for conservation efforts 
              that protect the Boundary Waters. At Aquatela Tech, they support environmental analysis and 
              interpretation, ensuring water quality data reflects real-world ecological conditions and is 
              actionable for communities.
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
        </div>

        {/* Mickey */}
        <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
          <Image
            src="/team-mickey.jpeg"
            alt="Mickey McClellan"
            width={192}
            height={192}
            className="rounded-full flex-shrink-0 mb-4 sm:mb-0 w-48 h-48 sm:w-32 sm:h-32 object-cover"
          />
          <div>
            <p className="font-display font-semibold text-xl sm:text-2xl">
              Mickey McClellan
            </p>
            <p className="font-display text-lg sm:text-xl">
              Electronics & Systems Advisor
            </p>
            <div className="h-px bg-teal-200/70 my-2" />
            <p>
              Mickey is the founder of Innovative Problem Solvers, a firm specializing in industrial automation, 
              embedded systems, and custom hardware/software integration. He holds a B.S. in Electrical and 
              Electronics Engineering and brings over 15 years of experience designing and deploying systems 
              in industrial environments. At Aquatela Tech, he advises on electronics architecture, sensor 
              integration, and system reliability.
            </p>
          </div>
        </div>

        {/* Patrick */}
        <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
          <Image
            src="/team-patrick.jpeg"
            alt="Patrick Marsh"
            width={192}
            height={192}
            className="rounded-full flex-shrink-0 mb-4 sm:mb-0 w-48 h-48 sm:w-32 sm:h-32 object-cover"
          />
          <div>
            <p className="font-display font-semibold text-xl sm:text-2xl">
              Patrick Marsh
            </p>
            <p className="font-display text-lg sm:text-xl">
              Mechanical Design & Fabrication Advisor
            </p>
            <div className="h-px bg-teal-200/70 my-2" />
            <p>
              Patrick is a partner at Palm Designs, a design-build firm specializing in custom-built sculpture 
              installations. He holds a B.S. in Aerospace Engineering and has experience designing complex 
              industrial fluid systems at Videojet Systems International. He previously served as an Aircraft 
              Maintenance Officer in the United States Air Force, working on high-reliability mechanical systems. 
              At Aquatela Tech, he supports buoy structural design, fabrication, and field deployment, and 
              provides access to workspace and tools for prototyping and testing.
            </p>
          </div>
        </div>

        {/* Maheswari */}
        <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
          <Image
            src="/team-maheswari.jpeg"
            alt="Maheswari Govindaraju"
            width={192}
            height={192}
            className="rounded-full flex-shrink-0 mb-4 sm:mb-0 w-48 h-48 sm:w-32 sm:h-32 object-cover"
          />
          <div>
            <p className="font-display font-semibold text-xl sm:text-2xl">
              Maheswari Govindaraju
            </p>
            <p className="font-display text-lg sm:text-xl">
              Strategic Advisor
            </p>
            <div className="h-px bg-teal-200/70 my-2" />
            <p>
              Maheswari holds an MBA in Finance and Strategy, and a B.E. in Electronics & Communication. 
              She has over 15 years of experience in product strategy, software engineering, and management 
              consulting, including leadership roles at Microsoft, Wayfair, and Nokia. At Aquatela Tech, she 
              provides strategic guidance on roadmap prioritization, stakeholder alignment, platform scalability, 
              and long-term operational sustainability.
            </p>
          </div>
        </div>

          <Image
            src="/team-mentors.jpg"
            alt="Mentors"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className="rounded-3xl mb-6"
          />

          <div className="my-6" />

          <p>
            We’re currently seeking a mentor with expertise in water health, environmental
            science, or aquatic ecosystems to strengthen our impact even further. If this sounds
            like you,{" "}
            <Link href="/contact" className="font-semibold underline underline-offset-4 hover:text-teal-200/60">
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

    </main>
  );
}
