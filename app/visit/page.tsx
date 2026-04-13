import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Plan Your Visit | Meadowbrook Christian Church",
  description:
    "Planning to visit Meadowbrook Christian Church in Maryville, TN? Get service time, address, what to expect, and details for families and first-time visitors.",
};

export default function VisitPage() {
  return (
    <main className="min-h-screen bg-[#faf7f2] text-[#1f2937]">
      <section className="border-b border-[#d9d2c3] bg-gradient-to-b from-[#f7f3eb] via-[#faf7f2] to-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c7354]">
              Plan Your Visit
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              Your first visit to Meadowbrook Christian Church
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#4b5563]">
              Visiting a church for the first time can feel uncertain. We want
              to make it simple. Meadowbrook is a welcoming, Bible-based church
              in Maryville where you can feel comfortable from the moment you
              arrive. You will be welcomed, but not overwhelmed, and you do not
              need to worry about having everything figured out before you come.
            </p>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="overflow-hidden rounded-[2rem] border border-[#d9d2c3] bg-white shadow-[0_24px_60px_rgba(31,41,55,0.10)]">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src="/images/pastortalking1.jpg"
                  alt="Pastor Matt Hixson welcoming someone at Meadowbrook Christian Church"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="border-t border-[#e7e0d3] bg-[#fbf8f3] px-6 py-5">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#5c7354]">
                  A Warm Welcome
                </p>
                <p className="mt-3 text-base leading-7 text-[#4b5563]">
                  Meadowbrook is a place where people are greeted personally and
                  visitors can feel at ease from the start.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <TrustImageCard
                src="/images/kids1.jpg"
                alt="Children at Meadowbrook Christian Church"
              />
              <TrustImageCard
                src="/images/families.jpg"
                alt="Families at Meadowbrook Christian Church"
              />
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <InfoCard title="Service Time" value="Sunday at 10:30 AM" />
            <InfoCard
              title="Address"
              value="2332 Grove St"
              sub="Maryville, TN 37804"
            />
            <InfoCard title="Phone" value="(865) 982-8241" />
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://maps.google.com/?q=2332+Grove+St+Maryville+TN+37804"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Get Directions
            </a>

            <Link href="/contact" className="btn-secondary">
              Ask a Question
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-[#d9d2c3] bg-[#f4efe6]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <SectionHeader
                eyebrow="What to Expect"
                title="A simple, welcoming church"
                text="Meadowbrook is a small church, which means your first visit will feel personal instead of overwhelming. You will be welcomed and able to settle in naturally."
              />

              <div className="mt-8 rounded-3xl border border-[#ddd4c5] bg-white/80 p-6 shadow-sm">
                <p className="text-base leading-8 text-[#374151]">
                  You do not need to know exactly what to do before you come.
                  You can arrive, take a breath, and simply be present. This is
                  a church where questions are welcome, people matter, and no
                  one is expected to have everything figured out.
                </p>

                <div className="mt-6 grid gap-4 border-t border-[#e7e0d3] pt-6 sm:grid-cols-2">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c7354]">
                      Service Length
                    </p>
                    <p className="mt-2 text-base leading-7 text-[#4b5563]">
                      Around 60 to 75 minutes
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c7354]">
                      Atmosphere
                    </p>
                    <p className="mt-2 text-base leading-7 text-[#4b5563]">
                      Simple, personal, and Bible-based
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card title="What should I wear?">
                Wear what makes you comfortable. The atmosphere is simple and
                not formal.
              </Card>

              <Card title="Will I feel out of place?">
                No. This is a welcoming church and we love meeting new people.
              </Card>

              <Card title="What is the church like?">
                Bible-based, friendly, and personal. You will not feel like just
                another face in the crowd.
              </Card>

              <Card title="What happens when I arrive?">
                Because Meadowbrook is a smaller church, it is easy to find your
                way and settle in without feeling lost in a crowd.
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#d9d2c3] bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-start">
            <div>
              <SectionHeader
                eyebrow="Families and Kids"
                title="Kids are welcome here"
                text="Families are welcome at Meadowbrook. There are already children attending, and the church is continuing to grow in this area."
              />

              <div className="mt-8 space-y-5">
                <Card title="Bringing children?">
                  Yes. Children are welcome, and families do attend.
                </Card>

                <Card title="Vacation Bible School">
                  Meadowbrook also does VBS, showing a desire to serve families
                  well.
                </Card>

                <Card title="A good fit for families who want something smaller">
                  If large churches feel overwhelming, this may be a better fit.
                </Card>
              </div>
            </div>

            <div>
              <div className="grid gap-4 sm:grid-cols-2">
                <TrustImageCard
                  src="/images/kids2.jpg"
                  alt="Children at Meadowbrook Christian Church"
                />
                <TrustImageCard
                  src="/images/kids3.jpg"
                  alt="Families and children at Meadowbrook Christian Church"
                />
              </div>

              <div className="mt-6 rounded-3xl border border-[#d9d2c3] bg-[#f7f3eb] p-6 shadow-sm">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#5c7354]">
                  Honest and Welcoming
                </p>
                <p className="mt-3 text-base leading-8 text-[#4b5563]">
                  Meadowbrook is still a small church, but families and children
                  are truly welcome here, and this part of the church is
                  continuing to grow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#d9d2c3] bg-[#f8f4ec]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <SectionHeader
                eyebrow="Location"
                title="Easy to find in Maryville"
                text="Meadowbrook Christian Church is located at 2332 Grove St in Maryville, Tennessee and is convenient for visitors from Maryville, Alcoa, and surrounding areas."
              />

              <div className="mt-8 rounded-3xl border border-[#d9d2c3] bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-[#1f2937]">
                  Easy to arrive without stress
                </h3>
                <p className="mt-3 text-base leading-8 text-[#4b5563]">
                  Parking is straightforward, the setting is easy to access, and
                  the smaller size of the church helps your first visit feel
                  comfortable from the moment you pull in.
                </p>

                <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="https://maps.google.com/?q=2332+Grove+St+Maryville+TN+37804"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary"
                  >
                    Get Directions
                  </a>

                  <Link href="/contact" className="btn-secondary">
                    Contact the Church
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <div className="overflow-hidden rounded-[2rem] border border-[#d9d2c3] shadow-[0_18px_44px_rgba(31,41,55,0.10)]">
                <iframe
                  title="Map"
                  src="https://www.google.com/maps?q=2332%20Grove%20St%20Maryville%20TN%2037804&output=embed"
                  className="h-[420px] w-full"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
          <div className="rounded-[2rem] border border-[#d9d2c3] bg-gradient-to-br from-white to-[#f8f4ec] p-8 shadow-[0_18px_44px_rgba(31,41,55,0.08)] md:p-10">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c7354]">
                Next Step
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1f2937] md:text-4xl">
                We would love to welcome you this Sunday
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#4b5563]">
                If you are looking for a church in Maryville, Meadowbrook is a
                place where you can feel at home, be known, and grow in faith.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://maps.google.com/?q=2332+Grove+St+Maryville+TN+37804"
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                Get Directions
              </a>

              <Link href="/contact" className="btn-secondary">
                Contact the Church
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function SectionHeader({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c7354]">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1f2937] md:text-4xl">
        {title}
      </h2>
      <p className="mt-5 text-lg leading-8 text-[#4b5563]">{text}</p>
    </div>
  );
}

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-[#d9d2c3] bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-[#1f2937]">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-[#4b5563]">{children}</p>
    </div>
  );
}

function InfoCard({
  title,
  value,
  sub,
}: {
  title: string;
  value: string;
  sub?: string;
}) {
  return (
    <div className="rounded-2xl border border-[#d9d2c3] bg-white p-6 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#6b7280]">
        {title}
      </p>
      <p className="mt-3 text-xl font-semibold tracking-tight text-[#1f2937]">
        {value}
      </p>
      {sub && <p className="mt-1 text-sm leading-6 text-[#4b5563]">{sub}</p>}
    </div>
  );
}

function TrustImageCard({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="overflow-hidden rounded-[1.5rem] border border-[#d9d2c3] bg-white shadow-sm">
      <div className="relative aspect-[4/3] w-full">
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>
    </div>
  );
}