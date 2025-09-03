import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-black/10 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-6 sm:grid-cols-3">
        <div>
          <div className="font-semibold">Aquatela</div>
          <p className="mt-2 text-sm text-gray-600">
            Real-time water-quality data, refined into clear insights.
          </p>
        </div>
        <div>
          <div className="font-semibold">Company</div>
          <ul className="mt-2 space-y-1 text-sm">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/devices">Devices</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Legal</div>
          <ul className="mt-2 space-y-1 text-sm">
            <li><Link href="/terms">Terms</Link></li>
            <li><Link href="/privacy">Privacy</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-black/10">
        <div className="mx-auto max-w-6xl px-4 py-4 text-xs text-gray-500">
          © {new Date().getFullYear()} Aquatela Tech LLC.
        </div>
      </div>
    </footer>
  );
}
