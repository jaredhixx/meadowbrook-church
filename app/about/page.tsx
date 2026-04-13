import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Meadowbrook Christian Church",
  description:
    "Learn about Meadowbrook Christian Church in Maryville, TN. Discover our Bible-based teaching, welcoming church family, and heart for serving Maryville, Alcoa, and the surrounding area.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#faf7f2] text-[#1f2937]">
      <section className="border-b border-[#d9d2c3] bg-gradient-to-b from-[#f7f3eb] to-[#faf7f2]">
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c7354]">
            About Meadowbrook
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-[#1f2937] md:text-5xl">
            A welcoming, Bible-based church in Maryville, Tennessee
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#4b5563]">
            Meadowbrook Christian Church is a small church in Maryville, TN with
            a simple mission: love people, teach the Bible, and help people
            grow in faith. We want every person who visits to feel welcomed,
            valued, and encouraged.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-[#d9d2c3] bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#6b7280]">
                Church Type
              </p>
              <p className="mt-2 text-xl font-semibold text-[#1f2937]">
                Bible-based Christian church
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
              A small church where people matter
            </h2>
<p className="mt-5 text-lg leading-8 text-[#4b5563]">
  Pastor Matt Hixson has spent over 35 years in ministry, including
  more than 20 years serving as a missionary in China. He has also
  taught and served as a professor at Johnson University and several
  other universities, helping students and communities grow in their
  understanding of the Christian faith.
</p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-[#d9d2c3] bg-[#faf7f2] p-6">
              <h3 className="text-xl font-semibold text-[#1f2937]">
                We believe the Bible matters
              </h3>
              <p className="mt-3 text-base leading-7 text-[#4b5563]">
                Teaching and preaching are centered on God’s Word. Meadowbrook
                Christian Church wants people to know the truth of Scripture and
                grow in their relationship with Christ.
              </p>
            </div>

            <div className="rounded-2xl border border-[#d9d2c3] bg-[#faf7f2] p-6">
              <h3 className="text-xl font-semibold text-[#1f2937]">
                We believe people matter
              </h3>
              <p className="mt-3 text-base leading-7 text-[#4b5563]">
                Every person matters to God, and every visitor matters here. We
                want people to feel genuinely welcomed and cared for.
              </p>
            </div>

            <div className="rounded-2xl border border-[#d9d2c3] bg-[#faf7f2] p-6">
              <h3 className="text-xl font-semibold text-[#1f2937]">
                We believe church should feel approachable
              </h3>
              <p className="mt-3 text-base leading-7 text-[#4b5563]">
                Visiting a church for the first time can feel intimidating. We
                want Meadowbrook to feel simple, clear, and welcoming from the
                start.
              </p>
            </div>

            <div className="rounded-2xl border border-[#d9d2c3] bg-[#faf7f2] p-6">
              <h3 className="text-xl font-semibold text-[#1f2937]">
                We care about families
              </h3>
              <p className="mt-3 text-base leading-7 text-[#4b5563]">
                Kids are welcome at Meadowbrook, and the church is continuing to
                grow that area. The church also does Vacation Bible School and
                wants families to feel comfortable visiting.
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
                Pastor Matt Hixson
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#4b5563]">
                Pastor Matt Hixson has spent over 35 years in ministry,
                including serving as a professor and campus outreach pastor at
                multiple universities in the United States and Asia.
              </p>

              <div className="mt-6 space-y-4 text-base leading-7 text-[#4b5563]">
<p>
  Much of his life’s work has focused on connecting with people
  who did not grow up in church or are exploring faith for the
  first time. He has spent years building relationships across
  cultures and backgrounds, helping people ask honest questions
  and take meaningful steps toward God.
</p>

<p>
  He is also the father of three adopted children, and his life
  reflects a deep commitment to family, compassion, and serving
  others. His teaching style is thoughtful, approachable, and
  focused on helping people grow in a real and lasting faith.
</p>

                <p>
                  In March of 2026, Meadowbrook Christian Church called Pastor
                  Matt to serve as its pastor. His heart continues to shape the
                  church as a place where people can be known, welcomed, and
                  encouraged as they pursue a relationship with God.
                </p>
              </div>
            </div>

<div>
  <div className="overflow-hidden rounded-3xl border border-[#d9d2c3] shadow-sm">
    <div className="relative aspect-[4/3] w-full">
      <img
        src="/images/pastortalking1.jpg"
        alt="Pastor Matt Hixson talking with a member at Meadowbrook Christian Church"
        className="h-full w-full object-cover"
      />
    </div>
  </div>

  <div className="mt-6 rounded-2xl border border-[#d9d2c3] bg-[#faf7f2] p-6">
    <p className="text-base leading-8 text-[#374151]">
      “There are no insignificant people here. There are no questions
      you cannot ask, and no limits on God’s love.”
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
              Our Heart
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1f2937] md:text-4xl">
              Serving Maryville, Alcoa, and the surrounding area
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#4b5563]">
              Meadowbrook Christian Church is located in Maryville, Tennessee
              and welcomes people from Maryville, Alcoa, and nearby parts of
              Blount County who are looking for a faithful Christian church.
            </p>

            <div className="mt-8 space-y-5">
              <div className="rounded-2xl border border-[#d9d2c3] bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-[#1f2937]">
                  Local and personal
                </h3>
                <p className="mt-2 text-base leading-7 text-[#4b5563]">
                  This is a local church with a personal feel, not a large or
                  distant experience.
                </p>
              </div>

              <div className="rounded-2xl border border-[#d9d2c3] bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-[#1f2937]">
                  Welcoming to first-time visitors
                </h3>
                <p className="mt-2 text-base leading-7 text-[#4b5563]">
                  Whether you have been in church for years or are just starting
                  to look again, you are welcome here.
                </p>
              </div>

              <div className="rounded-2xl border border-[#d9d2c3] bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-[#1f2937]">
                  Focused on faith and growth
                </h3>
                <p className="mt-2 text-base leading-7 text-[#4b5563]">
                  Meadowbrook wants to help people grow closer to God through
                  biblical teaching, Christian fellowship, and faithful service.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-3xl border border-[#d9d2c3] bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c7354]">
                A Simple Promise
              </p>

              <h3 className="mt-3 text-2xl font-bold tracking-tight text-[#1f2937]">
                You will not be just another face in the crowd
              </h3>

              <p className="mt-5 text-base leading-8 text-[#4b5563]">
                Meadowbrook Christian Church is a small church, and that is one
                of its strengths. People are known here. Visitors are welcomed
                here. Families are welcomed here. If you are looking for a
                church home in Maryville, this may be the kind of place you have
                been hoping to find.
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
              If you are searching for a church in Maryville TN, a Christian
              church near Alcoa, or a smaller church where people know your
              name, Meadowbrook Christian Church would love to welcome you.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/visit"
                className="inline-flex items-center justify-center rounded-xl bg-[#5c7354] px-6 py-3 text-base font-semibold text-white transition hover:bg-[#4f6448]"
              >
                Plan Your Visit
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-[#bdaa86] bg-[#faf7f2] px-6 py-3 text-base font-semibold text-[#1f2937] transition hover:bg-[#f6f1e7]"
              >
                Contact the Church
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}