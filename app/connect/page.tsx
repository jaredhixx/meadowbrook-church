import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Connect at Meadowbrook in Maryville TN",
  description:
    "Learn how to connect at Meadowbrook Christian Church in Maryville, Tennessee. Find opportunities for families, starters, believers, and church fellowship.",
  alternates: {
    canonical: "/connect",
  },
};

const connectionPaths = [
  {
    eyebrow: "For Families with Children",
    title: "Families are welcome at Meadowbrook",
    text: "Our church is blessed with some wonderful, joyful children. Our youth workers are kind and love to mentor these beautiful young souls.",
    points: [
      "Children’s classes on Sunday from 10:00–10:30 AM",
      "Potluck meals",
      "Parent’s Night Out",
      "Game nights",
      "Vacation Bible School",
    ],
  },
  {
    eyebrow: "For Starters",
    title: "A good place to begin asking questions",
    text: "If you have just begun your journey toward faith, we would love to get to know you better. Feel free to reach out to any of our leaders if you have questions.",
    points: [
      "You are welcome to come straight to the 10:45 AM main service",
      "Join worship, prayer, and fellowship in whatever way feels comfortable",
      "Thursday evenings may be the best opportunity to ask questions",
      "Find teaching and discussion related to your needs or interests",
    ],
  },
  {
    eyebrow: "For Believers",
    title: "A church family where you can keep growing",
    text: "For those who are already believers in Christ, we would like to get to know you better and help you proceed toward membership and involvement in the life and ministries of our congregation.",
    points: [
      "Grow in faith and relationships",
      "Move toward membership and involvement",
      "Serve in the life of the congregation",
      "Build deeper connections with the church family",
    ],
  },
];

const fellowshipMoments = [
  {
    title: "Thursday discussion group",
    text: "Thursday evenings from 7:00–8:00 PM may be an especially helpful place for conversation, teaching, discussion, and honest questions.",
  },
  {
    title: "Monthly fellowship meals",
    text: "Potluck meals help people spend time together and build the kind of relationships that make a church feel personal.",
  },
  {
    title: "Game nights and family events",
    text: "Simple events create natural ways for children, families, and visitors to begin getting to know people at Meadowbrook.",
  },
  {
    title: "Vacation Bible School",
    text: "Seasonal events like VBS show Meadowbrook’s desire to serve children and families well.",
  },
];

export default function ConnectPage() {
  return (
    <div className="min-h-screen bg-[#faf7f2] text-[#1f2937]">
      <section className="border-b border-[#d9d2c3] bg-gradient-to-b from-[#f7f3eb] to-[#faf7f2]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c7354]">
            Connect
          </p>

          <p className="mt-4 font-serif text-2xl italic text-[#5c7354] md:text-3xl">
            Passion for God, a Heart for People.
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight md:text-5xl">
            Find your place at Meadowbrook Christian Church
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#4b5563]">
            Meadowbrook is a small church where relationships matter. Whether
            you are raising children, beginning your journey toward faith, or
            looking for a church home, there is a place for you here.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <InfoCard
              title="Sunday Main Service"
              value="10:45 AM"
              text="Worship & the Word."
            />
            <InfoCard
              title="Optional Sunday"
              value="10:00–10:30 AM"
              text="Adult prayer meeting and children’s classes."
            />
            <InfoCard
              title="Thursday Evenings"
              value="7:00–8:00 PM"
              text="A helpful setting for discussion, teaching, and questions."
            />
            <InfoCard
              title="Church Life"
              value="Personal and relational"
              text="A smaller church where people can truly know one another."
            />
          </div>

          <p className="mt-5 max-w-3xl text-base leading-8 text-[#4b5563]">
            From 10:30–10:45 AM on Sundays there is time to arrive, greet
            people, and get settled before the main service begins.
          </p>
        </div>
      </section>

      <section className="border-b border-[#d9d2c3] bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c7354]">
              Connection Paths
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Meadowbrook has a place for different people in different stages
            </h2>
          </div>

          <div className="mt-10 space-y-8">
            {connectionPaths.map((path) => (
              <div
                key={path.title}
                className="rounded-[30px] border border-[#d9d2c3] bg-[#fcfaf6] p-7 shadow-[0_18px_44px_rgba(31,41,55,0.08)] md:p-8"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c7354]">
                  {path.eyebrow}
                </p>

                <h3 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
                  {path.title}
                </h3>

                <p className="mt-5 max-w-3xl text-base leading-8 text-[#4b5563]">
                  {path.text}
                </p>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {path.points.map((point) => (
                    <div
                      key={point}
                      className="rounded-2xl border border-[#e2dccf] bg-white px-5 py-5 shadow-sm"
                    >
                      <p className="text-base leading-7 text-[#374151]">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#d9d2c3] bg-[#f8f4ec]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c7354]">
                Fellowship & Church Life
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                Ordinary moments that help people feel at home
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#4b5563]">
                Connection at Meadowbrook often happens in simple and personal
                ways through meals, conversations, children’s activities, and
                church gatherings.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <TrustImageCard
                  src="/images/community/families.jpg"
                  alt="Families at Meadowbrook Christian Church"
                />
                <TrustImageCard
                  src="/images/kids/kids-5.jpg"
                  alt="Children at Meadowbrook Christian Church"
                />
              </div>
            </div>

            <div className="grid gap-5">
              {fellowshipMoments.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[#d9d2c3] bg-white p-6 shadow-sm"
                >
                  <h3 className="text-xl font-semibold text-[#1f2937]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-[#4b5563]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
          <div className="rounded-[30px] border border-[#d9d2c3] bg-[#faf7f2] p-8 shadow-sm md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c7354]">
              A Good First Step
            </p>

            <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight md:text-4xl">
              Start with Sunday Worship & the Word at 10:45 AM or a Thursday conversation
            </h2>

            <div className="mt-5 max-w-3xl space-y-5 text-base leading-8 text-[#4b5563]">
              <p>
                If you are wondering where to begin, Sunday at 10:45 AM is a
                simple first step for the main service.
              </p>

              <p>
                If you would like to come a little earlier, 10:30–10:45 AM is a
                relaxed time to arrive and get settled.
              </p>

              <p>
                If you are carrying questions or would like a more conversational
                setting, Thursday evening may be especially helpful.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/visit"
                className="inline-flex items-center justify-center rounded-xl bg-[#5c7354] px-6 py-3 text-base font-semibold text-white shadow-[0_14px_30px_rgba(31,41,55,0.10)] transition hover:-translate-y-[1px] hover:bg-[#4f6448]"
              >
                Plan Your Visit
              </Link>

              <a
                href="mailto:2meadowbrookcc@gmail.com"
                className="inline-flex items-center justify-center rounded-xl border border-[#bdaa86] bg-white px-6 py-3 text-base font-semibold text-[#1f2937] shadow-[0_12px_24px_rgba(31,41,55,0.06)] transition hover:-translate-y-[1px] hover:bg-[#f6f1e7]"
              >
                Email the Church
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function InfoCard({
  title,
  value,
  text,
}: {
  title: string;
  value: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-[#d9d2c3] bg-white p-6 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#6b7280]">
        {title}
      </p>
      <p className="mt-3 text-xl font-semibold tracking-tight text-[#1f2937]">
        {value}
      </p>
      <p className="mt-3 text-base leading-7 text-[#4b5563]">{text}</p>
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