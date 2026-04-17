import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Beliefs in Maryville TN",
  description:
    "Learn about the beliefs, mission, and biblical foundation of Meadowbrook Christian Church in Maryville, Tennessee.",
  alternates: {
    canonical: "/beliefs",
  },
};

const identityPoints = [
  "The Bible is our authority.",
  "We are an independent, non-denominational church.",
  "We seek to follow Jesus Christ and be identified by His name only.",
  "We believe we are Christians only, but not the only Christians.",
];

const historyPoints = [
  {
    title: "1955",
    text: "Meadowbrook Christian Church began as a local congregation in 1955 in the home of Dr. Harold Noe.",
  },
  {
    title: "Acts 2:42",
    text: "As a church which holds Scripture as its authority, we also trace our beginning to our Savior as well as the apostles’ teachings.",
  },
  {
    title: "Independent and self-governing",
    text: "We are a self-governing community of believers, allowing the Scriptures to be the rule for our faith and practices.",
  },
  {
    title: "In fellowship with others",
    text: "We are, however, in fellowship with other congregations locally and nationwide.",
  },
];

export default function BeliefsPage() {
  return (
    <div className="min-h-screen bg-[#faf7f2] text-[#1f2937]">
      <section className="border-b border-[#d9d2c3] bg-gradient-to-b from-[#f7f3eb] to-[#faf7f2]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c7354]">
            Beliefs
          </p>

          <p className="mt-4 font-serif text-2xl italic text-[#5c7354] md:text-3xl">
            Passion for God, a Heart for People.
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight md:text-5xl">
            What Meadowbrook Christian Church believes
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#4b5563]">
            Meadowbrook Christian Church seeks to follow Jesus Christ, honor the
            authority of Scripture, and help people grow in their understanding
            of God’s truth.
          </p>
        </div>
      </section>

      <section className="border-b border-[#d9d2c3] bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c7354]">
                A Note to Visitors
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                You do not have to have everything figured out to come
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-[#4b5563]">
                <p>
                  We welcome everyone who is seeking the Kingdom of Jesus Christ
                  and His righteousness. Therefore, we do not expect a certain
                  set of beliefs from visitors or those who are not yet
                  believers in Christ.
                </p>

                <p>
                  People who are new to the faith are often still learning, and
                  we are all growing in our understanding of Jesus’ teaching and
                  ministry.
                </p>

                <p>
                  There is no individual, or even local congregation, which is
                  without shortcomings in knowledge and interpretation of
                  Scripture. However, throughout history there is a core of
                  facts from Scripture which have been deemed as fundamental.
                </p>
              </div>
            </div>

            <div className="rounded-[30px] border border-[#d9d2c3] bg-[#f8f4ec] p-6 shadow-[0_18px_44px_rgba(31,41,55,0.08)] md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c7354]">
                Identity
              </p>

              <h3 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
                Rooted in Scripture and centered on Christ
              </h3>

              <div className="mt-6 space-y-3">
                {identityPoints.map((point) => (
                  <div
                    key={point}
                    className="rounded-2xl border border-[#e2dccf] bg-white/85 px-4 py-4 shadow-sm"
                  >
                    <p className="text-base leading-7 text-[#374151]">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#d9d2c3] bg-[#faf7f2]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c7354]">
                Our Mission
              </p>

              <p className="mt-3 font-serif text-xl italic text-[#5c7354] md:text-2xl">
                Passion for God, a Heart for People.
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
                Honoring God, strengthening one another, and making disciples
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-[#4b5563]">
                <p>
                  We seek to develop relationships with individuals and families
                  in the Eagleton Community, Maryville, South Knoxville, and
                  beyond.
                </p>

                <p>
                  We strive to develop a community of love and reconciliation
                  where people can come to know and apply the good news of Jesus
                  Christ.
                </p>

                <p>
                  We also strive to help people develop a deeply rooted faith
                  which will help them navigate relationships with family,
                  friends and enemies, neighbors and coworkers, and most
                  importantly, with their Heavenly Father.
                </p>
              </div>
            </div>

            <div className="rounded-[30px] border border-[#d9d2c3] bg-white p-6 shadow-[0_18px_44px_rgba(31,41,55,0.08)] md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c7354]">
                In Short
              </p>

              <blockquote className="mt-4 border-l-4 border-[#5c7354] pl-5">
                <p className="text-2xl font-bold tracking-tight text-[#1f2937] md:text-3xl">
                  We gather to honor God, strengthen one another, and make
                  disciples.
                </p>
              </blockquote>

              <div className="mt-6 rounded-2xl border border-[#e2dccf] bg-[#f8f4ec] px-5 py-5">
                <p className="text-base leading-8 text-[#4b5563]">
                  Meadowbrook seeks to develop a community of love and
                  reconciliation where people can come to know and apply the
                  good news of Jesus Christ.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#d9d2c3] bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
          <div className="rounded-[30px] border border-[#d9d2c3] bg-[#faf7f2] p-8 shadow-sm md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c7354]">
              Church History
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Rooted in Scripture and serving for generations
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-[#4b5563]">
              <p>
                Meadowbrook Christian Church began as a local congregation in
                1955 in the home of Dr. Harold Noe.
              </p>

              <p>
                But as a church which holds Scripture as its authority, we also
                trace our beginning to our Savior as well as the apostles’
                teachings (Acts 2:42).
              </p>

              <p>
                Meadowbrook is an independent, non-denominational church that
                seeks to follow Jesus Christ and wants to be identified by His
                name only.
              </p>

              <p>
                We are a self-governing community of believers, allowing the
                Scriptures to be the rule for our faith and practices. We are,
                however, in fellowship with other congregations locally and
                nationwide.
              </p>

              <p>
                We believe we are Christians only, but not the only Christians.
              </p>

              <p>
                Though we’ve been a community of believers for over seventy
                years, decline in attendance before and after covid left many
                remaining members hungry for spiritual renewal. But we are
                seeing positive signs of growth.
              </p>

              <p>
                We pray: Restore us, O God; make your face shine on us, that we
                may be saved. Psalm 80:3.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {historyPoints.map((point) => (
                <div
                  key={point.title}
                  className="rounded-2xl border border-[#ddd4c5] bg-white px-5 py-5 shadow-sm"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5c7354]">
                    {point.title}
                  </p>
                  <p className="mt-3 text-base leading-7 text-[#4b5563]">
                    {point.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}