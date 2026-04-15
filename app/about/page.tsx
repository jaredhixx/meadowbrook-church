import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | Meadowbrook Christian Church",
  description:
    "Learn about Meadowbrook Christian Church in Maryville, Tennessee, including our mission, history, and commitment to Scripture.",
};

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  text: string;
};

type InfoCardProps = {
  title: string;
  value: string;
};

type IdentityItemProps = {
  text: string;
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#faf7f2] text-[#1f2937]">
      <section className="border-b border-[#d9d2c3] bg-gradient-to-b from-[#f7f3eb] to-[#faf7f2]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c7354]">
            About Meadowbrook
          </p>

          <p className="mt-4 font-serif text-2xl italic text-[#5c7354] md:text-3xl">
            Passion for God, a Heart for People.
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight md:text-5xl">
            An independent Christian church in Maryville, Tennessee
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#4b5563]">
            Meadowbrook Christian Church seeks to develop relationships with
            individuals and families in the Eagleton Community, Maryville, South
            Knoxville, and beyond. We strive to develop a community of love and
            reconciliation where people can come to know and apply the good news
            of Jesus Christ.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            <InfoCard title="Church Type" value="Independent Christian church" />
            <InfoCard title="Location" value="Maryville, TN" />
            <InfoCard title="Sunday Service" value="10:30 AM" />
          </div>
        </div>
      </section>

      <section className="border-b border-[#d9d2c3] bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <SectionHeader
                eyebrow="Who We Are"
                title="Rooted in Scripture and following Jesus Christ"
                text="Meadowbrook Christian Church began as a local congregation in 1955 in the home of Dr. Harold Noe. As a church which holds Scripture as its authority, we also trace our beginning to our Savior as well as the apostles’ teachings in Acts 2:42."
              />
            </div>

            <div className="rounded-[28px] border border-[#d9d2c3] bg-[#f8f4ec] p-6 shadow-sm">
              <div className="space-y-4">
                <IdentityItem text="The Bible is our authority." />
                <IdentityItem text="We are an independent, non-denominational church." />
                <IdentityItem text="We seek to follow Jesus Christ and be identified by His name only." />
                <IdentityItem text="We believe we are Christians only, but not the only Christians." />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#d9d2c3] bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div>
              <SectionHeader
                eyebrow="Meet the Pastor"
                title="Matt Hixson"
                text="Matt Hixson is a graduate of Johnson University with degrees in Bible, New Testament, and Missions, and also holds a master’s in education from the University of Tennessee."
              />

              <div className="mt-6 space-y-4 text-base leading-7 text-[#4b5563]">
                <p>
                  Matt served as a missionary in China from 1992 to 2001 and
                  again from 2017 to 2019, helping establish churches and Bible
                  studies.
                </p>

                <p>
                  He was a professor at Johnson University from 2003 to 2017
                  and later worked in curriculum development, local ministry,
                  and Knox County Schools.
                </p>

                <p>
                  As a bi-vocational minister, he continues to serve both the
                  church and the local community.
                </p>
              </div>
            </div>

            <div>
              <div className="overflow-hidden rounded-[28px] border border-[#d9d2c3] shadow-sm">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/leadership/matt.jpg"
                    alt="Pastor Matt Hixson"
                    fill
                    className="object-cover object-top"
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

      <section className="border-b border-[#d9d2c3] bg-[#faf7f2]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <SectionHeader
                eyebrow="Our Mission"
                title="Honoring God, strengthening one another, and making disciples"
                text="We seek to develop relationships with individuals and families and to build a community where people can come to know and apply the good news of Jesus Christ."
              />

              <div className="mt-6 space-y-4 text-base leading-7 text-[#4b5563]">
                <p>
                  We strive to help people develop a deeply rooted faith that
                  guides their relationships and their walk with God.
                </p>
              </div>
            </div>

            <div className="rounded-[28px] border border-[#d9d2c3] bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c7354]">
                In Short
              </p>

              <blockquote className="mt-4 border-l-4 border-[#5c7354] pl-5">
                <p className="text-2xl font-bold tracking-tight">
                  We gather to honor God, strengthen one another, and make
                  disciples.
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
          <div className="rounded-[28px] border border-[#d9d2c3] bg-white p-8 shadow-sm md:p-10">
            <SectionHeader
              eyebrow="Visit"
              title="We would love to meet you"
              text="If you are looking for a church in Maryville, Meadowbrook Christian Church would be glad to welcome you."
            />

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
    </div>
  );
}

function SectionHeader({ eyebrow, title, text }: SectionHeaderProps) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c7354]">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
        {title}
      </h2>
      <p className="mt-5 text-lg leading-8 text-[#4b5563]">{text}</p>
    </div>
  );
}

function InfoCard({ title, value }: InfoCardProps) {
  return (
    <div className="rounded-2xl border border-[#d9d2c3] bg-white p-6 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#6b7280]">
        {title}
      </p>
      <p className="mt-3 text-xl font-semibold tracking-tight text-[#1f2937]">
        {value}
      </p>
    </div>
  );
}

function IdentityItem({ text }: IdentityItemProps) {
  return (
    <div className="rounded-2xl border border-[#e2dccf] bg-white/85 px-4 py-4 shadow-sm">
      <p className="text-base leading-7 text-[#374151]">{text}</p>
    </div>
  );
}