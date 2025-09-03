// components/SiteHeader.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

type OpenKey = "about" | "devices" | null;

const about = [
  { href: "/about/mission", label: "Our Mission" },
  { href: "/about/community", label: "Our Community" },
  { href: "/about/team", label: "The Team" },
];

const devices = [
  { href: "/devices/proto-onda", label: "Proto Onda" },
  { href: "/devices/in-the-works", label: "In the Works" },
  { href: "/devices/the-dream", label: "The Dream" },
];

const D_OPEN = 520;
const D_CLOSE = 160;
const EASE = "cubic-bezier(.22,.61,.36,1)";

export default function SiteHeader() {
  const [open, setOpen] = useState<OpenKey>(null);
  const [stack, setStack] = useState(false);

  // Mobile state
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSub, setMobileSub] = useState<OpenKey>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  const linkRef = useRef<HTMLAnchorElement>(null);
  const logoRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLSpanElement>(null);
  const flipRunning = useRef(false);

  const aboutRef = useRef<HTMLUListElement>(null);
  const devicesRef = useRef<HTMLUListElement>(null);

  const submenuMeasured = useMemo(() => {
    if (open === "about" && aboutRef.current) return aboutRef.current.offsetHeight;
    if (open === "devices" && devicesRef.current) return devicesRef.current.offsetHeight;
    return 0;
  }, [open]);

  const spacerHeight = (open ? 8 : 0) + submenuMeasured; // 8px = mt-2

  const cancelFlip = () => {
    const logo = logoRef.current, title = titleRef.current;
    if (!logo || !title) return;
    logo.style.transition = "";
    title.style.transition = "";
    logo.style.transform = "";
    title.style.transform = "";
    flipRunning.current = false;
  };

  const runFlipBack = () => {
    if (flipRunning.current) return;
    const logo = logoRef.current, title = titleRef.current;
    if (!logo || !title) { setStack(false); return; }
    flipRunning.current = true;

    const l1 = logo.getBoundingClientRect();
    const t1 = title.getBoundingClientRect();

    setStack(false);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const l2 = logo.getBoundingClientRect();
        const t2 = title.getBoundingClientRect();

        const dxL = l1.left - l2.left;
        const dyL = l1.top - l2.top;
        const s = (l1.height / (l2.height || 1)) || 1;

        const dxT = t1.left - t2.left;
        const dyT = t1.top - t2.top;

        logo.style.transform  = `translate(${dxL}px, ${dyL}px) scale(${s}) translateZ(0)`;
        title.style.transform = `translate(${dxT}px, ${dyT}px) translateZ(0)`;
        void logo.offsetWidth;

        const trans = `transform ${D_CLOSE}ms ${EASE}`;
        logo.style.transition = trans;
        title.style.transition = trans;

        logo.style.transform  = "translate(0,0) scale(1) translateZ(0)";
        title.style.transform = "translate(0,0) translateZ(0)";

        const done = (e: TransitionEvent) => {
          if (e.propertyName !== "transform") return;
          logo.removeEventListener("transitionend", done);
          title.removeEventListener("transitionend", done);
          cancelFlip();
        };
        logo.addEventListener("transitionend", done);
        title.addEventListener("transitionend", done);
      });
    });
  };

  useEffect(() => {
    if (open) {
      cancelFlip();
      setStack(true);
      return;
    }
    if (stack) runFlipBack();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      setOpen((o) => o);
      setIsDesktop(window.innerWidth >= 768);
    };
    
    // Set initial value
    setIsDesktop(window.innerWidth >= 768);
    
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const onMouseLeaveAll = () => setOpen(null);

  const Underline = ({ children }: { children: React.ReactNode }) => (
    <span className="relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[1px] after:w-full after:scale-x-0 after:origin-left after:bg-current after:transition-transform after:duration-200 group-hover:after:scale-x-100">
      {children}
    </span>
  );

  const Chevron = ({ rotated }: { rotated: boolean }) => (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className={["h-4 w-4 transition-transform duration-300 ease-in-out", rotated ? "rotate-90" : "rotate-0"].join(" ")}
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    >
      <path d="M7 5l6 5-6 5" />
    </svg>
  );

  return (
    <div className="fixed inset-x-0 top-4 z-50 pointer-events-none" onMouseLeave={onMouseLeaveAll}>
      <div className="px-4 sm:px-6 md:px-8">
        <div
          className="pointer-events-auto mx-auto max-w-5xl rounded-[2rem] backdrop-blur bg-white/30 supports-[backdrop-filter]:bg-white/10 shadow-lg px-6 sm:px-8 md:px-10 py-4"
          style={{ ["--spacer" as any]: `${spacerHeight}px` } as React.CSSProperties}
        >
          <div
            className="grid items-center md:items-start"
            style={{ gridTemplateColumns: "auto 1fr", gridTemplateRows: "auto auto", columnGap: "1.5rem" }}
          >
            {/* LEFT: logo + title (kept left, vertically centered on mobile) */}
            <Link
              ref={linkRef}
              href="/"
              className={`${stack ? "flex flex-col items-start justify-between" : "flex items-center gap-2"} ${isDesktop ? "self-center" : ""}`}
              style={{
                gridColumn: "1 / 2",
                gridRow: isDesktop ? "1 / 3" : "1 / 2", // Span both rows on desktop, only first row on mobile
                height: isDesktop 
                  ? (stack ? "calc(28px + var(--spacer))" : "28px") 
                  : "28px", // Dynamic height on desktop, fixed on mobile
                transition: `height ${D_OPEN}ms ${EASE}`,
                willChange: "height",
                ...(isDesktop ? {} : { display: "flex", alignItems: "center" }), // Only override alignment on mobile
              }}
              aria-label="Aquatela Tech Home"
            >
              <span
                ref={logoRef}
                className="relative rounded-md"
                style={{
                  display: "block",
                  aspectRatio: "1 / 1",
                  width: stack ? "100%" : "28px",
                  height: stack ? "100%" : "28px",
                  minWidth: "28px",
                  minHeight: "28px",
                  overflow: "hidden",
                  transition: stack
                    ? `width ${D_OPEN}ms ${EASE}, height ${D_OPEN}ms ${EASE}`
                    : "none",
                  contain: "layout paint size",
                  willChange: "transform,width,height",
                  backfaceVisibility: "hidden" as any,
                  transform: "translateZ(0)",
                  transformOrigin: "top left",
                }}
              >
                <Image src="/logo.png" alt="Aquatela Tech" fill className="object-contain rounded-md" priority />
              </span>

              <span
                ref={titleRef}
                className="mt-1 font-medium tracking-tight [font-family:var(--font-pridi)] whitespace-nowrap leading-tight text-2xl"
                style={{
                  display: "inline-block",
                  willChange: "transform",
                  backfaceVisibility: "hidden",
                  transform: "translateZ(0)",
                }}
              >
                Aquatela Tech
              </span>
            </Link>

            {/* DESKTOP NAV (md and up) */}
            <nav
              className="[font-family:var(--font-gantari)] justify-self-end hidden md:block"
              style={{ gridColumn: "2 / 3", gridRow: "1 / 2" }}
            >
              <div className="flex items-center gap-6">
                {/* About Us */}
                <div className="relative">
                  <button
                    onMouseEnter={() => setOpen("about")}
                    className="group inline-flex items-center gap-2 whitespace-nowrap py-1 text-md"
                    aria-haspopup="true"
                    aria-expanded={open === "about"}
                  >
                    <Underline>About Us</Underline>
                    <Chevron rotated={open === "about"} />
                  </button>
                  <ul
                    ref={aboutRef}
                    className={[
                      "absolute left-0 top-full mt-2 space-y-1 whitespace-nowrap text-sm",
                      open === "about"
                        ? "opacity-100 translate-y-0 transition-all duration-300 ease-in-out"
                        : "opacity-0 -translate-y-2 pointer-events-none transition-all duration-150 ease-in-out",
                    ].join(" ")}
                  >
                    {about.map((i, idx) => (
                      <li
                        key={i.href}
                        className="transition-all ease-in-out"
                        style={{
                          transitionDuration: open === "about" ? "300ms" : "150ms",
                          transitionDelay: open === "about" ? `${idx * 50}ms` : "0ms",
                          transform: open === "about" ? "translateX(0)" : "translateX(-10px)",
                          opacity: open === "about" ? 1 : 0,
                        }}
                      >
                        <Link
                          href={i.href}
                          className="block py-1 text-sm hover:font-semibold transition-all duration-200 ease-in-out hover:translate-x-1"
                        >
                          {i.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Devices */}
                <div className="relative">
                  <button
                    onMouseEnter={() => setOpen("devices")}
                    className="group inline-flex items-center gap-2 whitespace-nowrap py-1 text-md"
                    aria-haspopup="true"
                    aria-expanded={open === "devices"}
                  >
                    <Underline>Devices</Underline>
                    <Chevron rotated={open === "devices"} />
                  </button>
                  <ul
                    ref={devicesRef}
                    className={[
                      "absolute left-0 top-full mt-2 space-y-1 whitespace-nowrap text-sm",
                      open === "devices"
                        ? "opacity-100 translate-y-0 transition-all duration-300 ease-in-out"
                        : "opacity-0 -translate-y-2 pointer-events-none transition-all duration-150 ease-in-out",
                    ].join(" ")}
                  >
                    {devices.map((i, idx) => (
                      <li
                        key={i.href}
                        className="transition-all ease-in-out"
                        style={{
                          transitionDuration: open === "devices" ? "300ms" : "150ms",
                          transitionDelay: open === "devices" ? `${idx * 50}ms` : "0ms",
                          transform: open === "devices" ? "translateX(0)" : "translateX(-10px)",
                          opacity: open === "devices" ? 1 : 0,
                        }}
                      >
                        <Link
                          href={i.href}
                          className="block py-1 text-sm hover:font-semibold transition-all duration-200 ease-in-out hover:translate-x-1"
                        >
                          {i.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact */}
                <div className="relative" onMouseEnter={() => setOpen(null)}>
                  <Link href="/contact" className="group whitespace-nowrap py-1 text-md">
                    <Underline>Contact Us</Underline>
                  </Link>
                </div>
              </div>
            </nav>

            {/* MOBILE TRIGGER */}
            <div
              className="justify-self-end md:hidden flex items-center"
              style={{ gridColumn: "2 / 3", gridRow: "1 / 2" }}
            >
              <button
                aria-label="Open menu"
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen((v) => !v)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl outline-none focus:outline-none focus-visible:outline-none ring-0 focus:ring-0"
              >
                {/* Transparent by default; apply hover-only glass tint */}
                <span className="absolute inset-0 rounded-xl transition-colors duration-200 hover:bg-white/45 supports-[backdrop-filter]:hover:bg-white/35 hover:backdrop-blur pointer-events-none" />
                <span className="sr-only">Menu</span>
                <svg
                  className={`h-6 w-6 transition-transform duration-300 ${mobileOpen ? "rotate-90 opacity-0" : "opacity-100"}`}
                  viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg
                  className={`-ml-6 h-6 w-6 transition-all duration-300 ${mobileOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"}`}
                  viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2"
                >
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>

            {/* RIGHT spacer for DESKTOP */}
            <div
              className="hidden md:block"
              style={{
                gridColumn: "2 / 3",
                gridRow: "2 / 3",
                height: `var(--spacer)` as any,
                transition: `height ${D_OPEN}ms ${EASE}`,
                pointerEvents: "none",
                willChange: "height",
              }}
            />

            {/* MOBILE PANEL */}
            <div
              className="md:hidden"
              style={{ gridColumn: "1 / 3", gridRow: "2 / 3" }}
            >
              <div
                className={[
                  "overflow-hidden transition-[max-height,opacity] duration-300 ease-out",
                  mobileOpen ? "max-h-[60vh] opacity-100" : "max-h-0 opacity-0",
                ].join(" ")}
              >
                <ul className="[font-family:var(--font-gantari)] pt-3 pb-1 text-base">
                  {/* About Us */}
                  <li className="border-t border-white/40">
                    <button
                      className="group flex w-full items-center justify-between py-3"
                      onClick={() =>
                        setMobileSub((s) => (s === "about" ? null : "about"))
                      }
                      aria-expanded={mobileSub === "about"}
                      aria-controls="m-about-sub"
                    >
                      <Underline>About Us</Underline>
                      <Chevron rotated={mobileSub === "about"} />
                    </button>
                    <ul
                      id="m-about-sub"
                      className={[
                        "pl-3 space-y-1 overflow-hidden transition-[max-height,opacity,transform] duration-300 ease-out",
                        mobileSub === "about"
                          ? "max-h-64 opacity-100 translate-y-0"
                          : "max-h-0 opacity-0 -translate-y-1",
                      ].join(" ")}
                    >
                      {about.map((i) => (
                        <li key={i.href}>
                          <Link
                            href={i.href}
                            className="block py-2 text-sm transition-all duration-200 ease-in-out hover:font-semibold hover:translate-x-1"
                            onClick={() => setMobileOpen(false)}
                          >
                            {i.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>

                  {/* Devices */}
                  <li className="border-t border-white/40">
                    <button
                      className="group flex w-full items-center justify-between py-3"
                      onClick={() =>
                        setMobileSub((s) => (s === "devices" ? null : "devices"))
                      }
                      aria-expanded={mobileSub === "devices"}
                      aria-controls="m-devices-sub"
                    >
                      <Underline>Devices</Underline>
                      <Chevron rotated={mobileSub === "devices"} />
                    </button>
                    <ul
                      id="m-devices-sub"
                      className={[
                        "pl-3 space-y-1 overflow-hidden transition-[max-height,opacity,transform] duration-300 ease-out",
                        mobileSub === "devices"
                          ? "max-h-64 opacity-100 translate-y-0"
                          : "max-h-0 opacity-0 -translate-y-1",
                      ].join(" ")}
                    >
                      {devices.map((i) => (
                        <li key={i.href}>
                          <Link
                            href={i.href}
                            className="block py-2 text-sm transition-all duration-200 ease-in-out hover:font-semibold hover:translate-x-1"
                            onClick={() => setMobileOpen(false)}
                          >
                            {i.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>

                  {/* Contact */}
                  <li className="border-t border-white/40">
                    <Link
                      href="/contact"
                      className="group block py-3"
                      onClick={() => setMobileOpen(false)}
                    >
                      <Underline>Contact Us</Underline>
                    </Link>
                  </li>

                  <li className="border-t border-white/40" />
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}