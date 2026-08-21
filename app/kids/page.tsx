import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kids & Families | Waymaker's Kids | Meadowbrook Christian Church",
  description:
    "Kids and families are welcome at Meadowbrook Christian Church in Maryville, Tennessee. Learn about Waymaker's Kids on Tuesdays, children's classes on Sundays, and family life at Meadowbrook.",
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
              Maryville, Tennessee where families and children are welcome. From
              Sunday mornings to Waymaker&apos;s Kids during the week, we want
              children to have a place where they can learn, build friendships,
              and know they are cared for.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#waymakers-kids"
                className="inline-flex items-center justify-center rounded-xl bg-[#5c7354] px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-[#4f6448]"
              >
                Waymaker&apos;s Kids
              </a>

              <Link
                href="/visit"
                className="inline-flex items-center justify-center rounded-xl border border-[#cbb89a] bg-white px-6 py-3 text-base font-semibold text-[#1f2937] transition hover:bg-[#f6f1e7]"
              >
                Plan Your Visit
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        id="waymakers-kids"
        className="scroll-mt-28 border-b border-[#e2d9c8] bg-[#f4efe6]"
      >
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#8b6f47]">
                Tuesdays at Meadowbrook
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-[#1f2937] sm:text-4xl">
                Waymaker&apos;s Kids
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#4b5563]">
                Waymaker&apos;s Kids gives children a welcoming place to spend
                Tuesday afternoons with homework help, a snack, fun, and games.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-[#ddd4c5] bg-white p-5 shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5c7354]">
                    When
                  </p>
                  <p className="mt-2 text-lg font-semibold text-[#1f2937]">
                    Tuesdays
                  </p>
                  <p className="mt-1 text-base text-[#4b5563]">
                    3:30–5:30 PM
                  </p>
                </div>

                <div className="rounded-2xl border border-[#ddd4c5] bg-white p-5 shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5c7354]">
                    Where
                  </p>
                  <p className="mt-2 text-lg font-semibold text-[#1f2937]">
                    Meadowbrook Christian Church
                  </p>
                  <p className="mt-1 text-base leading-7 text-[#4b5563]">
                    2332 Grove St
                    <br />
                    Maryville, TN 37804
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-[#1f2937]">
                  What kids can expect
                </h3>

                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-xl border border-[#ddd4c5] bg-white px-4 py-4 text-center font-semibold text-[#374151] shadow-sm">
                    Homework Help
                  </div>

                  <div className="rounded-xl border border-[#ddd4c5] bg-white px-4 py-4 text-center font-semibold text-[#374151] shadow-sm">
                    Snack
                  </div>

                  <div className="rounded-xl border border-[#ddd4c5] bg-white px-4 py-4 text-center font-semibold text-[#374151] shadow-sm">
                    Fun &amp; Games
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-[#d9d2c3] bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5c7354]">
                  Community Partnership
                </p>

                <p className="mt-3 text-base leading-7 text-[#4b5563]">
                  Waymaker&apos;s Kids is offered in partnership with Maryville
                  International Connection.
                </p>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="font-semibold text-[#1f2937]">
                      Meadowbrook Contact
                    </p>
                    <p className="mt-1 text-[#4b5563]">Tracy</p>
                    <a
                      href="tel:8652066661"
                      className="mt-1 inline-block font-semibold text-[#5c7354] transition hover:text-[#4f6448]"
                    >
                      865-206-6661
                    </a>
                  </div>

                  <div>
                    <p className="font-semibold text-[#1f2937]">
                      MIC Contact
                    </p>
                    <p className="mt-1 text-[#4b5563]">Nicki</p>
                    <a
                      href="tel:2179043270"
                      className="mt-1 inline-block font-semibold text-[#5c7354] transition hover:text-[#4f6448]"
                    >
                      217-904-3270
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="overflow-hidden rounded-[2rem] border border-[#d9d2c3] bg-white shadow-[0_18px_44px_rgba(31,41,55,0.10)]">
                <Image
                  src="/images/waymakers-kids.jpg"
                  alt="Waymaker's Kids flyer with Tuesday meeting information at Meadowbrook Christian Church"
                  width={1200}
                  height={652}
                  className="h-auto w-full"
                  priority
                />
              </div>

              <p className="mt-4 text-center text-sm leading-6 text-[#6b7280]">
                Homework help, snacks, fun, and games every Tuesday afternoon.
              </p>
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
              Children are part of Meadowbrook&apos;s church family. We are a
              smaller church, which helps families feel known rather than lost
              in a crowd.
            </p>
          </div>

          <div className="rounded-2xl border border-[#e2d9c8] bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-[#1f2937]">
              Sunday mornings
            </h2>

            <p className="mt-4 text-base leading-7 text-[#4b5563]">
              Sunday begins with optional adult prayer meeting and
              children&apos;s classes from 10:00–10:30 AM. The main service
              begins at 10:45 AM.
            </p>
          </div>

          <div className="rounded-2xl border border-[#e2d9c8] bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-[#1f2937]">
              A growing kids presence
            </h2>

            <p className="mt-4 text-base leading-7 text-[#4b5563]">
              Meadowbrook has a small but growing group of children, and we want
              to keep growing as a church where families feel comfortable,
              encouraged, and connected.
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
                Questions about kids &amp; family life?
              </h3>

              <p className="mt-4 text-base leading-7 text-[#4b5563]">
                If you would like to know more about Sunday mornings,
                Waymaker&apos;s Kids, or what to expect when visiting with
                children, we would be glad to help.
              </p>

              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-[#5c7354] px-5 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-[#4f6448]"
                >
                  Ask About Kids &amp; Family Life
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