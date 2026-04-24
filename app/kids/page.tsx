import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kids & Families | Family Friendly Church in Maryville, TN",
  description:
    "Kids are welcome at Meadowbrook Christian Church in Maryville, Tennessee. Learn what families can expect on Sunday, including children’s classes, VBS, and a small welcoming church environment.",
  alternates: {
    canonical: "/kids",
  },
};

export default function KidsPage() {
  return (
    <main className="bg-[#f8f6f1] pt-20 sm:pt-24">
      <section className="border-b border-[#e2d9c8] bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#8b6f47]">
              Kids & Families
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-[#1f2937] sm:text-5xl">
              Kids are welcome at Meadowbrook
            </h1>

            <p className="mt-6 text-lg leading-8 text-[#4b5563]">
              Meadowbrook Christian Church is a small, welcoming church in
              Maryville, Tennessee where families and children are welcome. If
              you are looking for a family-friendly church near Maryville or
              Alcoa, we would love to meet you.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/visit"
                className="inline-flex items-center justify-center rounded-xl bg-[#5c7354] px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-[#4f6448]"
              >
                Plan Your Visit
              </Link>

              <Link
                href="/connect"
                className="inline-flex items-center justify-center rounded-xl border border-[#cbb89a] bg-white px-6 py-3 text-base font-semibold text-[#1f2937] transition hover:bg-[#f6f1e7]"
              >
                Explore Connect
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-2xl border border-[#e2d9c8] bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-[#1f2937]">
              Children are welcome
            </h2>

            <p className="mt-4 text-base leading-7 text-[#4b5563]">
              Children are part of Meadowbrook’s church family. We are a smaller
              church, which helps families feel known rather than lost in a
              crowd.
            </p>
          </div>

          <div className="rounded-2xl border border-[#e2d9c8] bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-[#1f2937]">
              Sunday mornings
            </h2>

            <p className="mt-4 text-base leading-7 text-[#4b5563]">
              Sunday begins with optional adult prayer meeting and children’s
              classes from 10:00–10:30 AM. The main service begins at 10:45 AM.
            </p>
          </div>

          <div className="rounded-2xl border border-[#e2d9c8] bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-[#1f2937]">
              A growing kids presence
            </h2>

            <p className="mt-4 text-base leading-7 text-[#4b5563]">
              Meadowbrook has a small but growing group of children, and we want
              to keep growing as a church where families feel comfortable and
              encouraged.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-[#e2d9c8] bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#8b6f47]">
                What Families Can Expect
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-[#1f2937]">
                A simple, personal church environment for families
              </h2>

              <div className="mt-6 space-y-4 text-base leading-7 text-[#4b5563]">
                <p>
                  Visiting a church with children can feel intimidating,
                  especially when you do not know what to expect. At Meadowbrook,
                  you do not need to have everything figured out before you come.
                </p>

                <p>
                  Families are welcome to arrive during the relaxed 10:30–10:45
                  AM window, meet people, get settled, and join the main service
                  at 10:45 AM.
                </p>

                <p>
                  Our smaller size means families can ask questions, meet real
                  people, and find their place at a pace that feels natural.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-[#e2d9c8] bg-[#f8f6f1] p-6">
              <h3 className="text-2xl font-semibold text-[#1f2937]">
                Vacation Bible School
              </h3>

              <p className="mt-4 text-base leading-7 text-[#4b5563]">
                Meadowbrook has offered VBS and wants to continue growing as a
                church where children can learn, participate, and feel welcome.
              </p>

              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-[#5c7354] px-5 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-[#4f6448]"
                >
                  Ask About Kids & Family Life
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="rounded-3xl border border-[#e2d9c8] bg-white p-8 shadow-sm sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-[#1f2937]">
                Looking for a family-friendly church in Maryville?
              </h2>

              <p className="mt-5 text-base leading-7 text-[#4b5563]">
                We would love for your family to visit Meadowbrook Christian
                Church. Whether you are new to church, returning after time
                away, or looking for a smaller church where your family can be
                known, you are welcome here.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
              <Link
                href="/visit"
                className="inline-flex items-center justify-center rounded-xl bg-[#5c7354] px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-[#4f6448]"
              >
                Plan Your First Visit
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-[#cbb89a] bg-white px-6 py-3 text-base font-semibold text-[#1f2937] transition hover:bg-[#f6f1e7]"
              >
                Contact Meadowbrook
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}