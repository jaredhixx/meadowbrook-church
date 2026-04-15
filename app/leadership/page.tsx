import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Leadership | Meadowbrook Christian Church",
  description:
    "Meet the leadership of Meadowbrook Christian Church in Maryville, Tennessee, including Pastor Matt Hixson and those serving the church family.",
};

const featuredLeaders = [
  {
    role: "Lead Pastor / Elder",
    name: "Matt Hixson",
    image: "/images/leadership/matt.jpg",
    alt: "Pastor Matt Hixson at Meadowbrook Christian Church",
    bio: [
      "Matt Hixson is a 1991 and 1999 graduate of Johnson University where he earned bachelor’s and master’s degrees in Bible, New Testament, and Missions. He also holds a master’s in education from the University of Tennessee.",
      "Matt served as a missionary in China from 1992-2001 and 2017-2019, starting various Bible studies and helping establish two new churches. He was a professor at Johnson University from 2003-2017.",
      "From 2019-2025 he wrote curriculum for a Bible translation organization, did supply preaching in the area, and led various Bible studies for international students and scholars from area universities, and worked for Knox County Schools.",
      "As a bi-vocational minister, he continues to work for Knox County Schools as well as Meadowbrook Christian Church.",
    ],
  },
  {
    role: "Worship Leader",
    name: "Hope Hixson",
    image: "/images/leadership/hope.jpg",
    alt: "Hope Hixson at Meadowbrook Christian Church",
    bio: [
      "Hope has a bachelor’s degree in Bible and elementary education from Johnson University and a master’s in education from the University of Tennessee.",
      "She has been married to Matt for over thirty-five years and during that time they have been partners in various ministries.",
    ],
  },
  {
    role: "Member Care",
    name: "Edna Sipe",
    image: "/images/leadership/edna.jpg",
    alt: "Edna Sipe at Meadowbrook Christian Church",
    bio: [
      "Edna has been part of Meadowbrook Christian Church since 1972. She was married at the church and welcomed her son in 1975.",
      "Over the years, she has faithfully served by teaching classes and caring for others in the church family.",
      "She worked at Big Lots for 26 years before retiring in 2013, and since then has been able to spend more time serving and supporting the life of the church.",
    ],
  },
  {
    role: "Discipleship & Youth Ministry",
    name: "Travis and Tara Farley",
    image: "/images/leadership/farley.jpg",
    alt: "Travis and Tara Farley at Meadowbrook Christian Church",
    bio: [
      "Travis has over 30 years of experience with industrial automation. He has been married to Tara for 35 years, and not long after their marriage they served as the youth ministers of Meadowbrook. He enjoys outdoor activities and spending time with family and friends.",
      "Tara has a bachelor’s degree in Nursing from Tennessee Wesleyan University and a master’s degree as a Family Nurse Practitioner from Tennessee Tech University. She has been a nurse for over 20 years and has been part of Meadowbrook since she was six years old.",
      "Together, they serve Meadowbrook through discipleship and youth ministry, helping invest in the next generation of the church.",
    ],
  },
  {
    role: "Children’s Ministry & Administration",
    name: "Tracy Best",
    image: "/images/leadership/tracy.jpg",
    alt: "Tracy Best at Meadowbrook Christian Church",
    bio: [
      "Tracy has a bachelor’s degree in Bible & Elementary Education and a M.S. in Technology Education both from Johnson University.",
      "She taught in the Knox County Schools for 30 years and continues to serve Meadowbrook through children’s ministry and administrative support.",
    ],
  },
  {
    role: "Children’s Ministry Intern",
    name: "Josiah Sealy",
    image: "/images/leadership/josiah.jpg",
    alt: "Josiah Sealy at Meadowbrook Christian Church",
    bio: [
      "Josiah is from Knoxville, Tennessee.",
      "He is a rising senior working on his degree in Bible with a focus on Children’s Ministry at Johnson University.",
      "He has volunteered with the children at his home church through Vacation Bible School, Children’s Church, Church Camp and more.",
      "In Josiah’s free time, he likes to play sports and frisbee golf with his friends.",
    ],
  },
];

export default function LeadershipPage() {
  return (
    <div className="min-h-screen bg-[#faf7f2] text-[#1f2937]">
      <section className="border-b border-[#d9d2c3] bg-gradient-to-b from-[#f7f3eb] to-[#faf7f2]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c7354]">
            Leadership
          </p>

          <p className="mt-4 font-serif text-2xl italic text-[#5c7354] md:text-3xl">
            Passion for God, a Heart for People.
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight md:text-5xl">
            Meet the people serving Meadowbrook
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#4b5563]">
            Meadowbrook Christian Church is served by people who are committed
            to God’s Word, to one another, and to the life of the church.
          </p>
        </div>
      </section>

      <section className="border-b border-[#d9d2c3] bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
          <div className="space-y-10">
            {featuredLeaders.map((leader) => (
              <div
                key={leader.name}
                className="rounded-[30px] border border-[#d9d2c3] bg-[#fcfaf6] p-6 shadow-[0_18px_44px_rgba(31,41,55,0.08)] md:p-8"
              >
                <div className="grid gap-8 lg:grid-cols-[320px_1fr] lg:items-start">
                  <div className="self-start">
                    <div className="overflow-hidden rounded-[24px] border border-[#e7e0d3] bg-[#f3ede2] shadow-sm">
                      <div className="relative aspect-[4/5] w-full">
                        <Image
                          src={leader.image}
                          alt={leader.alt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 320px"
                          className={`object-cover ${
                            leader.name === "Tracy Best"
                              ? "object-[center_25%] scale-190"
                              : leader.name === "Travis and Tara Farley"
                                ? "object-center"
                                : "object-top"
                          }`}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="self-start">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c7354]">
                      {leader.role}
                    </p>

                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1f2937]">
                      {leader.name}
                    </h2>

                    <div className="mt-5 space-y-4 text-base leading-8 text-[#4b5563]">
                      {leader.bio.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
          <div className="rounded-[28px] border border-[#d9d2c3] bg-[#faf7f2] p-8 shadow-sm md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c7354]">
              A Personal Church
            </p>

            <p className="mt-4 max-w-3xl text-lg leading-8 text-[#4b5563]">
              Meadowbrook is a smaller church, and one of its strengths is the
              opportunity to know people personally and grow together in faith.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}