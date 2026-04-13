import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Give",
  description:
    "Learn about giving to Meadowbrook Christian Church in Maryville, TN and how your support helps the church serve its community.",
};

export default function GivePage() {
  return (
    <main className="min-h-screen bg-[#faf7f2] text-[#1f2937]">
      <section className="border-b border-[#d9d2c3] bg-gradient-to-b from-[#f7f3eb] to-[#faf7f2]">
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c7354]">
            Give
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-[#1f2937] md:text-5xl">
            Support the ministry of Meadowbrook Christian Church
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#4b5563]">
            Giving is one of the ways people support the work of the church and
            help Meadowbrook continue serving families, sharing the Bible, and
            welcoming people in Maryville, Alcoa, and the surrounding area.
          </p>
        </div>
      </section>

      <section className="border-b border-[#d9d2c3] bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c7354]">
                Why Giving Matters
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1f2937] md:text-4xl">
                Your support helps the church continue its mission
              </h2>

              <div className="mt-8 space-y-5">
                <div className="rounded-2xl border border-[#d9d2c3] bg-[#faf7f2] p-6">
                  <h3 className="text-lg font-semibold text-[#1f2937]">
                    Support local ministry
                  </h3>
                  <p className="mt-2 text-base leading-7 text-[#4b5563]">
                    Giving helps Meadowbrook continue serving people in the
                    local community through faithful ministry and church life.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#d9d2c3] bg-[#faf7f2] p-6">
                  <h3 className="text-lg font-semibold text-[#1f2937]">
                    Support a welcoming church home
                  </h3>
                  <p className="mt-2 text-base leading-7 text-[#4b5563]">
                    Financial support helps the church continue providing a
                    place where people can worship, grow, and feel at home.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#d9d2c3] bg-[#faf7f2] p-6">
                  <h3 className="text-lg font-semibold text-[#1f2937]">
                    Support families and future growth
                  </h3>
                  <p className="mt-2 text-base leading-7 text-[#4b5563]">
                    Giving helps Meadowbrook continue welcoming families and
                    growing areas like children’s ministry and VBS.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="rounded-3xl border border-[#d9d2c3] bg-white p-8 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c7354]">
                  Giving Information
                </p>

                <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#1f2937] md:text-3xl">
                  Need giving details?
                </h2>

                <p className="mt-5 text-base leading-8 text-[#4b5563]">
                  For now, please contact Meadowbrook Christian Church directly
                  for current giving information and options.
                </p>

                <div className="mt-8 rounded-2xl border border-[#d9d2c3] bg-[#f7f3eb] p-6">
                  <p className="text-sm font-semibold uppercase tracking-wide text-[#6b7280]">
                    Church Phone
                  </p>
                  <p className="mt-2 text-xl font-semibold text-[#1f2937]">
                    (865) 982-8241
                  </p>
                </div>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-xl bg-[#5c7354] px-6 py-3 text-base font-semibold text-white transition hover:bg-[#4f6448]"
                  >
                    Contact the Church
                  </Link>

                  <Link
                    href="/visit"
                    className="inline-flex items-center justify-center rounded-xl border border-[#bdaa86] bg-[#faf7f2] px-6 py-3 text-base font-semibold text-[#1f2937] transition hover:bg-[#f6f1e7]"
                  >
                    Plan Your Visit
                  </Link>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-[#d9d2c3] bg-[#f7f3eb] p-6">
                <h3 className="text-lg font-semibold text-[#1f2937]">
                  Meadowbrook Christian Church
                </h3>
                <p className="mt-3 text-base leading-7 text-[#4b5563]">
                  2332 Grove St, Maryville, TN 37804
                </p>
                <p className="mt-1 text-base leading-7 text-[#4b5563]">
                  Sunday Service at 10:30 AM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-10">
          <div className="rounded-3xl border border-[#d9d2c3] bg-white p-8 shadow-sm md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c7354]">
              Thank You
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1f2937] md:text-4xl">
              Thank you for supporting Meadowbrook
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-[#4b5563]">
              Every gift helps support the life and ministry of the church.
              Meadowbrook Christian Church is grateful for people who help make
              its work possible.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}