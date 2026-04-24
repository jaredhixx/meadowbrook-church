import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Plan Your Visit to a Christian Church in Maryville TN",
  description:
    "Plan your first visit to Meadowbrook Christian Church in Maryville, Tennessee. Get Sunday Worship & the Word time, optional Sunday morning activities, directions, and a simple overview of what to expect.",
  alternates: {
    canonical: "/visit",
  },
};

export default function VisitPage() {
  return (
    <div className="min-h-screen bg-[#faf7f2] text-[#1f2937]">
      <section className="border-b border-[#d9d2c3] bg-gradient-to-b from-[#f7f3eb] via-[#faf7f2] to-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c7354]">
                Plan Your Visit
              </p>

              <p className="mt-4 font-serif text-2xl italic text-[#5c7354] md:text-3xl">
                Passion for God, a Heart for People.
              </p>

              <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                Your first visit to Meadowbrook Christian Church
              </h1>

              <p className="mt-6 text-lg leading-8 text-[#4b5563]">
                We are eager to meet you. At Meadowbrook we welcome everyone
                who is seeking a community of faith and a deeper relationship
                with God. Here there are no special clothes to wear, no
                insignificant people, no questions to avoid asking, and no
                limits on God&apos;s love.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                <InfoCard
                  title="Sunday Main Service"
                  value="10:45 AM"
                  sub="Worship & the Word"
                />
                <InfoCard
                  title="Optional Sunday"
                  value="10:00–10:30 AM"
                  sub="Adult prayer meeting and children&apos;s classes"
                />
                <InfoCard
                  title="Thursday"
                  value="7:00–8:00 PM"
                  sub="Discussion group"
                />
                <InfoCard
                  title="Address"
                  value="2332 Grove St"
                  sub="Maryville, TN 37804"
                />
              </div>

              <p className="mt-5 text-base leading-8 text-[#4b5563]">
                From 10:30–10:45 AM there is time to arrive, meet people, and
                get settled before the main service begins, so first-time
                visitors are welcome to come right at 10:45 AM if that is
                easiest.
              </p>
            </div>

            <div className="lg:flex lg:justify-center">
              <div className="w-full max-w-[380px] overflow-hidden rounded-[28px] border border-[#d9d2c3] bg-white shadow-[0_24px_60px_rgba(31,41,55,0.10)]">
                <div className="border-b border-[#e7e0d3] bg-[#f7f3eb] px-5 py-4">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#5c7354]">
                    Welcome Video
                  </p>

                  <p className="mt-2 text-sm leading-6 text-[#4b5563]">
                    Hear a welcome directly from Meadowbrook Christian Church.
                  </p>
                </div>

                <div className="bg-[#111827] p-3">
                  <div className="relative mx-auto aspect-[9/16] w-full max-w-[267px] overflow-hidden rounded-[22px] bg-black">
                    <iframe
                      src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1910773666208170%2F&show_text=false&width=267&t=0"
                      className="absolute inset-0 h-full w-full"
                      style={{ border: "none", overflow: "hidden" }}
                      scrolling="no"
                      frameBorder="0"
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      allowFullScreen
                      title="Welcome video from Meadowbrook Christian Church"
                    />
                </div>
              </div>

<div className="border-t border-[#e7e0d3] bg-white px-4 py-5 sm:px-5">
  <div className="flex flex-col gap-3">
    <a
      href="https://maps.google.com/?q=2332+Grove+St+Maryville+TN+37804"
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center rounded-xl bg-[#5c7354] px-6 py-4 text-base font-semibold text-white shadow-[0_14px_30px_rgba(31,41,55,0.10)] transition hover:-translate-y-[1px] hover:bg-[#4f6448]"
    >
      Get Directions
    </a>

    <Link
      href="/kids"
      className="inline-flex items-center justify-center rounded-xl border border-[#bdaa86] bg-white px-6 py-4 text-base font-semibold text-[#1f2937] shadow-[0_12px_24px_rgba(31,41,55,0.06)] transition hover:-translate-y-[1px] hover:bg-[#f6f1e7]"
    >
      Kids & Families
    </Link>

    <Link
      href="/groups"
      className="inline-flex items-center justify-center rounded-xl border border-[#bdaa86] bg-white px-6 py-4 text-base font-semibold text-[#1f2937] shadow-[0_12px_24px_rgba(31,41,55,0.06)] transition hover:-translate-y-[1px] hover:bg-[#f6f1e7]"
    >
      Bible Study & Groups
    </Link>

    <Link
      href="/contact"
      className="inline-flex items-center justify-center rounded-xl border border-[#bdaa86] bg-white px-6 py-4 text-base font-semibold text-[#1f2937] shadow-[0_12px_24px_rgba(31,41,55,0.06)] transition hover:-translate-y-[1px] hover:bg-[#f6f1e7]"
    >
      Ask a Question
    </Link>
  </div>
</div>
            </div>
          </div>
          </div>

          

          <div className="mt-10 rounded-[28px] border border-[#d9d2c3] bg-white p-6 shadow-sm md:p-8">
            <div className="grid gap-6 md:grid-cols-2">
              <SimpleCard title="When should I come?">
                You are welcome to come at 10:45 AM for the main service. If
                you would rather arrive a little earlier, 10:30–10:45 AM is a
                relaxed time to meet people and get settled.
              </SimpleCard>

              <SimpleCard title="What should I wear?">
                Wear what makes you comfortable. There are no special clothes to
                wear.
              </SimpleCard>

              <SimpleCard title="What will it feel like?">
                Meadowbrook is a smaller church, so your first visit should feel
                personal instead of overwhelming.
              </SimpleCard>

              <SimpleCard title="Bringing children?">
                Children are welcome, and there are children&apos;s classes from
                10:00–10:30 AM on Sunday mornings.
              </SimpleCard>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#d9d2c3] bg-[#f4efe6]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <SectionHeader
                eyebrow="First Visit Basics"
                title="Simple details before you come"
                text="If you are planning your first visit, here are the main details to know."
              />

              <div className="mt-8 rounded-3xl border border-[#ddd4c5] bg-white/80 p-6 shadow-sm">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c7354]">
                      Sunday Main Service
                    </p>
                    <p className="mt-2 text-base leading-7 text-[#4b5563]">
                      Worship &amp; the Word at 10:45 AM
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c7354]">
                      Optional Sunday Morning
                    </p>
                    <p className="mt-2 text-base leading-7 text-[#4b5563]">
                      10:00–10:30 AM adult prayer meeting and children&apos;s classes
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c7354]">
                      Arrival & Fellowship
                    </p>
                    <p className="mt-2 text-base leading-7 text-[#4b5563]">
                      10:30–10:45 AM
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c7354]">
                      Thursday
                    </p>
                    <p className="mt-2 text-base leading-7 text-[#4b5563]">
                      Discussion group from 7:00–8:00 PM
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c7354]">
                      Fellowship Meal
                    </p>
                    <p className="mt-2 text-base leading-7 text-[#4b5563]">
                      Usually the first Sunday of the month
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c7354]">
                      Families
                    </p>
                    <p className="mt-2 text-base leading-7 text-[#4b5563]">
                      Children are welcome
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="grid gap-4 sm:grid-cols-2">
                <TrustImageCard
                  src="/images/kids/kids-5.jpg"
                  alt="Children at Meadowbrook Christian Church"
                />
                <TrustImageCard
                  src="/images/community/families.jpg"
                  alt="Families at Meadowbrook Christian Church"
                />
              </div>

              <div className="mt-6 rounded-3xl border border-[#d9d2c3] bg-white p-6 shadow-sm">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#5c7354]">
                  Families and Kids
                </p>

                <p className="mt-3 text-base leading-8 text-[#4b5563]">
                  Our church is blessed with some wonderful, joyful children.
                  Families are welcome at Meadowbrook.
                </p>

                <p className="mt-4 text-base leading-8 text-[#4b5563]">
                  We gather to honor God, strengthen one another, and make
                  disciples.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#d9d2c3] bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-center">
            <div>
              <SectionHeader
                eyebrow="Location"
                title="Easy to find in Maryville"
                text="Meadowbrook Christian Church is located at 2332 Grove St in Maryville, Tennessee and is convenient for visitors from Maryville, Alcoa, and surrounding areas."
              />

              <div className="mt-8 rounded-3xl border border-[#d9d2c3] bg-[#f8f4ec] p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-[#1f2937]">
                  Easy to arrive without stress
                </h3>

                <p className="mt-3 text-base leading-8 text-[#4b5563]">
                  Parking is straightforward, and the smaller size of the
                  church helps your first visit feel comfortable from the moment
                  you arrive.
                </p>

                <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="https://maps.google.com/?q=2332+Grove+St+Maryville+TN+37804"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-xl bg-[#5c7354] px-6 py-3 text-base font-semibold text-white shadow-[0_14px_30px_rgba(31,41,55,0.10)] transition hover:-translate-y-[1px] hover:bg-[#4f6448]"
                  >
                    Get Directions
                  </a>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-xl border border-[#bdaa86] bg-white px-6 py-3 text-base font-semibold text-[#1f2937] shadow-[0_12px_24px_rgba(31,41,55,0.06)] transition hover:-translate-y-[1px] hover:bg-[#f6f1e7]"
                  >
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
                This Sunday
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1f2937] md:text-4xl">
                We would love to welcome you
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#4b5563]">
                If you are looking for a church in Maryville, Meadowbrook
                Christian Church would be glad to welcome you this Sunday.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://maps.google.com/?q=2332+Grove+St+Maryville+TN+37804"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-[#5c7354] px-6 py-3 text-base font-semibold text-white shadow-[0_14px_30px_rgba(31,41,55,0.10)] transition hover:-translate-y-[1px] hover:bg-[#4f6448]"
              >
                Get Directions
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-[#bdaa86] bg-white px-6 py-3 text-base font-semibold text-[#1f2937] shadow-[0_12px_24px_rgba(31,41,55,0.06)] transition hover:-translate-y-[1px] hover:bg-[#f6f1e7]"
              >
                Ask a Question
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
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

function SimpleCard({
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