import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Meadowbrook Christian Church",
  description:
    "Learn about Meadowbrook Christian Church in Maryville, Tennessee, including our mission, history, leadership, and commitment to Scripture.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#faf7f2] text-[#1f2937]">
      <section className="border-b border-[#d9d2c3] bg-gradient-to-b from-[#f7f3eb] to-[#faf7f2]">
        <div className="mx-auto max-w-5xl px-6 py-14 md:px-10 md:py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c7354]">
            About Meadowbrook
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-[#1f2937] md:text-5xl">
            An independent Christian church in Maryville, Tennessee
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#4b5563]">
            Meadowbrook Christian Church seeks to develop relationships with
            individuals and families in the Eagleton Community, Maryville, South
            Knoxville, and beyond. We strive to develop a community of love and
            reconciliation where people can come to know and apply the good news
            of Jesus Christ.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-[#d9d2c3] bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#6b7280]">
                Church Type
              </p>
              <p className="mt-2 text-xl font-semibold text-[#1f2937]">
                Independent Christian church
              </p>
            </div>

            <div className="rounded-2xl border border-[#d9d2c3] bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#6b7280]">
                Location
              </p>
              <p className="mt-2 text-xl font-semibold text-[#1f2937]">
                Maryville, TN
              </p>
            </div>

            <div className="rounded-2xl border border-[#d9d2c3] bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#6b7280]">
                Sunday Service
              </p>
              <p className="mt-2 text-xl font-semibold text-[#1f2937]">
                10:30 AM
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#d9d2c3] bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c7354]">
              Who We Are
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1f2937] md:text-4xl">
              Rooted in Scripture and following Jesus Christ
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#4b5563]">
              Meadowbrook Christian Church began as a local congregation in 1955
              in the home of Dr. Harold Noe. As a church which holds Scripture
              as its authority, we also trace our beginning to our Savior as
              well as the apostles’ teachings in Acts 2:42.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-[#d9d2c3] bg-[#faf7f2] p-6">
              <h3 className="text-xl font-semibold text-[#1f2937]">
                Scripture is our authority
              </h3>
              <p className="mt-3 text-base leading-7 text-[#4b5563]">
                Meadowbrook holds Scripture as its authority and seeks to follow
                Jesus Christ according to the apostles’ teaching.
              </p>
            </div>

            <div className="rounded-2xl border border-[#d9d2c3] bg-[#faf7f2] p-6">
              <h3 className="text-xl font-semibold text-[#1f2937]">
                Independent and non-denominational
              </h3>
              <p className="mt-3 text-base leading-7 text-[#4b5563]">
                We are an independent, non-denominational church that wants to
                be identified by His name only. We are a self-governing
                community of believers, allowing the Scriptures to be the rule
                for our faith and practices.
              </p>
            </div>

            <div className="rounded-2xl border border-[#d9d2c3] bg-[#faf7f2] p-6">
              <h3 className="text-xl font-semibold text-[#1f2937]">
                In fellowship with other congregations
              </h3>
              <p className="mt-3 text-base leading-7 text-[#4b5563]">
                We are in fellowship with other congregations locally and
                nationwide.
              </p>
            </div>

            <div className="rounded-2xl border border-[#d9d2c3] bg-[#faf7f2] p-6">
              <h3 className="text-xl font-semibold text-[#1f2937]">
                Christians only, but not the only Christians
              </h3>
              <p className="mt-3 text-base leading-7 text-[#4b5563]">
                Meadowbrook believes we are Christians only, but not the only
                Christians.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#d9d2c3] bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c7354]">
                Meet the Pastor
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1f2937] md:text-4xl">
                Matt Hixson
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#4b5563]">
                Matt Hixson is a 1991 and 1999 graduate of Johnson University
                where he earned bachelor’s and master’s degrees in Bible, New
                Testament, and Missions. He also holds a master’s in education
                from the University of Tennessee.
              </p>

              <div className="mt-6 space-y-4 text-base leading-7 text-[#4b5563]">
                <p>
                  Matt served as a missionary in China from 1992-2001 and
                  2017-2019, starting various Bible studies and helping
                  establish two new churches. He was a professor at Johnson
                  University from 2003-2017.
                </p>

                <p>
                  From 2019-2025 he wrote curriculum for a Bible translation
                  organization, did supply preaching in the area, and led
                  various Bible studies for international students and scholars
                  from area universities, and worked for Knox County Schools.
                </p>

                <p>
                  As a bi-vocational minister, he continues to work for Knox
                  County Schools as well as Meadowbrook Christian Church. Matt
                  likes developing relationships with people of all ages and
                  from all different backgrounds.
                </p>
              </div>
            </div>

            <div>
              <div className="overflow-hidden rounded-3xl border border-[#d9d2c3] shadow-sm">
                <div className="relative aspect-[4/3] w-full">
                  <img
                    src="/images/pastortalking1.jpg"
                    alt="Matt Hixson talking with a member at Meadowbrook Christian Church"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-[#d9d2c3] bg-[#faf7f2] p-6">
                <p className="text-base leading-8 text-[#374151]">
                  “There are no insignificant people here. There are no
                  questions to avoid asking, and no limits on God’s love.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#d9d2c3]">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 py-16 md:px-10 lg:grid-cols-[1fr_1.05fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c7354]">
              Our Mission
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1f2937] md:text-4xl">
              Honoring God, strengthening one another, and making disciples
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#4b5563]">
              We seek to develop relationships with individuals and families in
              the Eagleton Community, Maryville, South Knoxville, and beyond. We
              strive to develop a community of love and reconciliation where
              people can come to know and apply the good news of Jesus Christ.
            </p>

            <div className="mt-8 space-y-5">
              <div className="rounded-2xl border border-[#d9d2c3] bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-[#1f2937]">
                  Community of love and reconciliation
                </h3>
                <p className="mt-2 text-base leading-7 text-[#4b5563]">
                  Meadowbrook strives to be a community where people can come to
                  know and apply the good news of Jesus Christ.
                </p>
              </div>

              <div className="rounded-2xl border border-[#d9d2c3] bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-[#1f2937]">
                  Deeply rooted faith
                </h3>
                <p className="mt-2 text-base leading-7 text-[#4b5563]">
                  We want to help people develop a deeply rooted faith that will
                  help them navigate relationships with family, friends and
                  enemies, neighbors and coworkers, and most importantly, with
                  their Heavenly Father.
                </p>
              </div>

              <div className="rounded-2xl border border-[#d9d2c3] bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-[#1f2937]">
                  Honor God, strengthen one another, make disciples
                </h3>
                <p className="mt-2 text-base leading-7 text-[#4b5563]">
                  In short, we gather to honor God, strengthen one another, and
                  make disciples.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-3xl border border-[#d9d2c3] bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c7354]">
                Church History
              </p>

              <h3 className="mt-3 text-2xl font-bold tracking-tight text-[#1f2937]">
                Serving as a local congregation since 1955
              </h3>

              <p className="mt-5 text-base leading-8 text-[#4b5563]">
                Meadowbrook Christian Church began as a local congregation in
                1955 in the home of Dr. Harold Noe. As a church which holds
                Scripture as its authority, Meadowbrook seeks to follow Jesus
                Christ and be identified by His name only.
              </p>
            </div>

            <div className="mt-6 overflow-hidden rounded-3xl border border-[#d9d2c3] shadow-sm">
              <iframe
                title="Map to Meadowbrook Christian Church"
                src="https://www.google.com/maps?q=2332%20Grove%20St%20Maryville%20TN%2037804&output=embed"
                className="h-[360px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-10">
          <div className="rounded-3xl border border-[#d9d2c3] bg-white p-8 shadow-sm md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c7354]">
              Learn More or Visit
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1f2937] md:text-4xl">
              We would love to meet you
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-[#4b5563]">
              If you are looking for an independent Christian church in
              Maryville, Meadowbrook Christian Church would love to welcome you.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/visit"
                className="inline-flex items-center justify-center rounded-xl bg-[#5c7354] px-6 py-3 text-base font-semibold text-white transition hover:bg-[#4f6448]"
              >
                Plan Your Visit
              </Link>

              <Link
                href="/leadership"
                className="inline-flex items-center justify-center rounded-xl border border-[#bdaa86] bg-[#faf7f2] px-6 py-3 text-base font-semibold text-[#1f2937] transition hover:bg-[#f6f1e7]"
              >
                Meet Our Leaders
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}