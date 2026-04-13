import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/visit", label: "Visit" },
  { href: "/about", label: "About" },
  { href: "/leadership", label: "Leadership" },
  { href: "/contact", label: "Contact" },
  { href: "/give", label: "Give" },
  { href: "/beliefs", label: "Beliefs" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[linear-gradient(to_bottom,rgba(248,244,237,0.72),rgba(244,239,230,0.60))] backdrop-blur-[20px]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.22),rgba(255,255,255,0.06)_42%,transparent)]" />
        <div className="absolute left-0 right-0 top-0 h-px bg-white/50" />
        <div className="absolute left-[-3rem] top-[-3rem] h-24 w-24 rounded-full bg-white/45 blur-3xl md:h-32 md:w-32" />
        <div className="absolute right-[8%] top-[-2.5rem] h-20 w-20 rounded-full bg-[#e9dfcf]/45 blur-3xl md:h-28 md:w-28" />
        <div className="absolute inset-x-0 bottom-0 h-12 bg-[linear-gradient(to_bottom,transparent,rgba(32,24,12,0.03))]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 md:px-8 lg:px-10">
        <div className="flex min-h-[78px] items-center justify-between gap-6">
          <Link
            href="/"
            className="group min-w-0 rounded-2xl transition"
            aria-label="Meadowbrook Christian Church home"
          >
            <div className="flex flex-col">
<div className="flex items-center gap-2">
  <svg
    className="h-[14px] w-[14px] text-[#9b8f7a]"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <rect x="10.5" y="3" width="3" height="18" rx="1.2" />
    <rect x="6" y="10.5" width="12" height="3" rx="1.2" />
  </svg>

  <span className="text-[0.66rem] font-semibold uppercase tracking-[0.28em] text-[#867b6c]">
    Meadowbrook
  </span>
</div>

              <span className="mt-0.5 text-[1.18rem] font-semibold leading-none tracking-[-0.03em] text-[#1f2937] md:text-[1.3rem]">
                Christian Church
              </span>

              <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.83rem] md:text-[0.88rem]">
                <span className="text-[#6b7280]">Maryville, Tennessee</span>
                <span className="hidden h-1 w-1 rounded-full bg-[#b9a789] sm:inline-block" />
                <span className="font-semibold text-[#5c7354]">
                  Sunday at 10:30 AM
                </span>
              </div>

              <span className="mt-2 h-px w-0 bg-[linear-gradient(to_right,#d9cfbe,#bca37b,#d9cfbe)] transition-all duration-300 group-hover:w-full" />
            </div>
          </Link>

          <div className="hidden lg:flex lg:items-center lg:gap-12">
            <nav
              aria-label="Primary"
              className="flex items-center gap-7"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group relative py-2 text-[0.95rem] font-medium text-[#4b5563] transition duration-200 hover:text-[#1f2937]"
                >
                  <span>{link.label}</span>
                  <span className="absolute left-0 right-0 bottom-[0.35rem] mx-auto h-px w-full origin-center scale-x-0 bg-[linear-gradient(to_right,transparent,#9b8562,transparent)] transition-transform duration-200 group-hover:scale-x-100" />
                </Link>
              ))}
            </nav>

            <Link
              href="/visit"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-[#5c7354]/15 bg-[linear-gradient(135deg,#6f8a66,#5c7354_58%,#4a5f44)] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(31,41,55,0.18)] transition-all duration-200 hover:-translate-y-[1px] hover:shadow-[0_20px_40px_rgba(31,41,55,0.22)]"
            >
              <span className="absolute inset-0 bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.14),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="relative">Plan Your Visit</span>
            </Link>
          </div>

          <div className="lg:hidden">
            <details className="group relative">
              <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-2xl border border-[#d9d0c1] bg-[linear-gradient(to_bottom,rgba(255,255,255,0.88),rgba(248,243,235,0.84))] text-[#1f2937] shadow-[0_8px_18px_rgba(31,41,55,0.08)] transition hover:border-[#cdbfae] hover:bg-white">
                <span className="sr-only">Open menu</span>
                <div className="flex flex-col gap-1.5">
                  <span className="block h-0.5 w-5 rounded-full bg-current" />
                  <span className="block h-0.5 w-5 rounded-full bg-current" />
                  <span className="block h-0.5 w-5 rounded-full bg-current" />
                </div>
              </summary>

              <div className="absolute right-0 mt-3 w-[270px] overflow-hidden rounded-[1.5rem] border border-[#e5dccd] bg-[linear-gradient(to_bottom,rgba(251,248,243,0.98),rgba(246,241,232,0.96))] p-3 shadow-[0_24px_48px_rgba(31,41,55,0.14)] backdrop-blur-[14px]">
                <div className="mb-2 rounded-2xl border border-white/70 bg-white/45 px-4 py-3">
                  <p className="text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-[#867b6c]">
                    Meadowbrook
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[#1f2937]">
                    Christian Church
                  </p>
                  <div className="mt-2 space-y-1 text-xs">
                    <p className="text-[#6b7280]">Maryville, Tennessee</p>
                    <p className="font-semibold text-[#5c7354]">
                      Sunday at 10:30 AM
                    </p>
                  </div>
                </div>

                <nav
                  aria-label="Mobile primary"
                  className="flex flex-col gap-1 text-sm font-medium text-[#374151]"
                >
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="rounded-xl px-4 py-3 transition hover:bg-white hover:text-[#1f2937]"
                    >
                      {link.label}
                    </Link>
                  ))}

                  <div className="pt-2">
                    <Link
                      href="/visit"
                      className="inline-flex w-full items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#6d8764,#5c7354_58%,#4f6448)] px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_20px_rgba(31,41,55,0.12)] transition hover:-translate-y-[1px]"
                    >
                      Plan Your Visit
                    </Link>
                  </div>
                </nav>
              </div>
            </details>
          </div>
        </div>
      </div>
    </header>
  );
}