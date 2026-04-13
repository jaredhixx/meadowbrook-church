import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beliefs | Meadowbrook Christian Church",
  description:
    "Learn about the beliefs, mission, and biblical foundation of Meadowbrook Christian Church in Maryville, Tennessee.",
};

export default function BeliefsPage() {
  return (
    <main className="min-h-screen bg-[#faf7f2] text-[#1f2937]">
      <section className="border-b border-[#d9d2c3] bg-gradient-to-b from-[#f7f3eb] to-[#faf7f2]">
        <div className="mx-auto max-w-5xl px-6 py-12 md:px-10 md:py-14">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c7354]">
            Beliefs
          </p>

          <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight text-[#1f2937] md:text-5xl">
            What Meadowbrook Christian Church believes
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-[#4b5563]">
            Meadowbrook Christian Church seeks to follow Jesus Christ, honor the
            authority of Scripture, and help people grow in their understanding
            of God’s truth.
          </p>
        </div>
      </section>

      <section className="border-b border-[#d9d2c3] bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-10">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c7354]">
              A Note to Visitors
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1f2937] md:text-4xl">
              We welcome people who are seeking Jesus Christ and His kingdom
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-[#4b5563]">
              <p>
                We welcome everyone who is seeking the Kingdom of Jesus Christ
                and His righteousness. Therefore, we do not expect a certain
                set of beliefs from visitors or those who are not yet believers
                in Christ.
              </p>

              <p>
                Additionally, people who are new to the faith are often unaware
                of certain teachings. We are all growing in our understanding of
                Jesus’ teaching and ministry.
              </p>

              <p>
                There is no individual, or even local congregation, which is
                without shortcomings in knowledge and interpretation of
                Scripture. However, throughout history there is a core of facts
                from Scripture which have been deemed as fundamental.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#d9d2c3] bg-[#faf7f2]">
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c7354]">
                Our Mission
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1f2937] md:text-4xl">
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

                <p>
                  In short, we gather to honor God, strengthen one another, and
                  make disciples.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-[#d9d2c3] bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c7354]">
                Scripture
              </p>

              <h3 className="mt-3 text-2xl font-bold tracking-tight text-[#1f2937]">
                The Bible is our authority
              </h3>

              <p className="mt-5 text-base leading-8 text-[#4b5563]">
                Meadowbrook Christian Church holds Scripture as its authority
                and seeks to follow Jesus Christ according to the apostles’
                teaching.
              </p>

              <p className="mt-5 text-base leading-8 text-[#4b5563]">
                We are an independent, non-denominational church that wants to
                be identified by His name only. We are a self-governing
                community of believers, allowing the Scriptures to be the rule
                for our faith and practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#d9d2c3] bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-10">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c7354]">
              Teaching Resources
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1f2937] md:text-4xl">
              This section will continue to grow
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-[#4b5563]">
              <p>
                Instead of printing long doctrinal statements, we plan to
                develop a series of teaching videos which address various
                doctrinal issues.
              </p>

              <p>
                In time, we also hope to produce videos which address social and
                scientific questions related to the Bible.
              </p>

              <p>
                This section is a work in progress, and additional teaching
                resources and sermon videos will be added in the future.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-[#d9d2c3] bg-[#faf7f2] p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-[#1f2937]">
                Beliefs Videos
              </h3>
              <p className="mt-3 text-base leading-7 text-[#4b5563]">
                Future teaching videos will help explain important biblical and
                doctrinal topics in a clear and thoughtful way.
              </p>
            </div>

            <div className="rounded-2xl border border-[#d9d2c3] bg-[#faf7f2] p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-[#1f2937]">
                Sermon Videos
              </h3>
              <p className="mt-3 text-base leading-7 text-[#4b5563]">
                Sermon videos and additional teaching content will be added here
                as they become available.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-10">
          <div className="rounded-3xl border border-[#d9d2c3] bg-white p-8 shadow-sm md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c7354]">
              Church History
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1f2937] md:text-4xl">
              Rooted in Scripture and serving for generations
            </h2>

            <div className="mt-5 space-y-5 text-base leading-8 text-[#4b5563]">
              <p>
                Meadowbrook Christian Church began as a local congregation in
                1955 in the home of Dr. Harold Noe.
              </p>

              <p>
                As a church which holds Scripture as its authority, we also
                trace our beginning to our Savior as well as the apostles’
                teachings in Acts 2:42.
              </p>

              <p>
                Meadowbrook is an independent, non-denominational church that
                seeks to follow Jesus Christ and wants to be identified by His
                name only. We are, however, in fellowship with other
                congregations locally and nationwide.
              </p>

              <p>
                We believe we are Christians only, but not the only Christians.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}