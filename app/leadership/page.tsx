import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leadership | Meadowbrook Christian Church",
  description:
    "Meet the leadership of Meadowbrook Christian Church in Maryville, Tennessee, including Pastor Matt Hixson and the leaders serving the church family.",
};

const leadersWithBio = [
  {
    role: "Lead Pastor / Elder",
    name: "Matt Hixson",
    bio: [
      "Matt Hixson is a 1991 and 1999 graduate of Johnson University where he earned bachelor’s and master’s degrees in Bible, New Testament, and Missions. He also holds a master’s in education from the University of Tennessee.",
      "Matt served as a missionary in China from 1992-2001 and 2017-2019, starting various Bible studies and helping establish two new churches. He was a professor at Johnson University from 2003-2017.",
      "From 2019-2025 he wrote curriculum for a Bible translation organization, did supply preaching in the area, and led various Bible studies for international students and scholars from area universities, and worked for Knox County Schools.",
      "As a bi-vocational minister, he continues to work for Knox County Schools as well as Meadowbrook Christian Church. Matt likes developing relationships with people of all ages and from all different backgrounds. In his free time he likes to read, swim, and watch football.",
    ],
  },
  {
    role: "Worship Leader / Deacon",
    name: "Hope Hixson",
    bio: [
      "Hope has a bachelor’s degree in elementary education from Johnson University and a master’s in education from the University of Tennessee.",
      "She has been married to Matt for over thirty-five years and during that time they have been partners in various ministries. Hope has experience leading women’s Bible studies and enjoys leading worship.",
      "In her free time, Hope likes to play piano, visit her grandbabies, and plan activities for her students.",
    ],
  },
  {
    role: "Children’s Ministry & Administration",
    name: "Tracy Best",
    bio: [
      "Tracy has a bachelor’s degree in Bible & Elementary Education and a M.S. in Technology Education, both from Johnson University.",
      "She taught in the Knox County Schools for 30 years. She has been married to Lynn for almost 20 years and is his helpmate on their produce farm. They met and got married at Meadowbrook Christian Church.",
      "Tracy has taught Sunday School for every age group at Meadowbrook. In her free time, she likes to read, spend time with her family, and do crafts.",
    ],
  },
  {
    role: "Children’s Ministry Intern",
    name: "Josiah Sealy",
    bio: [
      "Josiah Sealy is a rising senior at Johnson University.",
      "He is majoring in Bible with a concentration in preaching and youth ministry.",
    ],
  },
];

const leadersByRole = [
  {
    role: "Discipleship & Youth Ministry",
    name: "Travis and Tara Farley",
  },
  {
    role: "Member Care",
    name: "Edna Sipe",
  },
];

export default function LeadershipPage() {
  return (
    <main className="min-h-screen bg-[#faf7f2] text-[#1f2937]">
      <section className="border-b border-[#d9d2c3] bg-gradient-to-b from-[#f7f3eb] to-[#faf7f2]">
        <div className="mx-auto max-w-5xl px-6 py-12 md:px-10 md:py-14">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c7354]">
            Leadership
          </p>

          <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight text-[#1f2937] md:text-5xl">
            Meet the leaders serving Meadowbrook Christian Church
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-[#4b5563]">
            Meadowbrook Christian Church is led by people who care deeply about
            God, His Word, and the people of this church family. We are grateful
            for the pastors, ministry leaders, and servants who help guide,
            teach, encourage, and support the life of the church.
          </p>
        </div>
      </section>

      <section className="border-b border-[#d9d2c3] bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c7354]">
              Church Leadership
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1f2937] md:text-4xl">
              Pastoral and ministry leadership
            </h2>
          </div>

          <div className="mt-10 space-y-8">
            {leadersWithBio.map((leader) => (
              <div
                key={leader.name}
                className="rounded-3xl border border-[#d9d2c3] bg-[#faf7f2] p-8 shadow-sm"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c7354]">
                  {leader.role}
                </p>

                <h3 className="mt-3 text-2xl font-bold tracking-tight text-[#1f2937] md:text-3xl">
                  {leader.name}
                </h3>

                <div className="mt-5 space-y-3 text-base leading-8 text-[#4b5563]">
                  {leader.bio.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#d9d2c3] bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c7354]">
              Additional Ministry Roles
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1f2937] md:text-4xl">
              Serving the church in important ways
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {leadersByRole.map((leader) => (
              <div
                key={leader.name}
                className="rounded-2xl border border-[#d9d2c3] bg-[#faf7f2] p-6 shadow-sm"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c7354]">
                  {leader.role}
                </p>

                <h3 className="mt-3 text-xl font-semibold text-[#1f2937]">
                  {leader.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-10">
          <div className="rounded-3xl border border-[#d9d2c3] bg-white p-8 shadow-sm md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c7354]">
              A Personal Church
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1f2937] md:text-4xl">
              Leadership rooted in relationships and service
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-[#4b5563]">
              Meadowbrook Christian Church is a smaller church, and one of its
              strengths is the opportunity to know people personally. Our prayer
              is that this leadership page helps you get a sense of the people
              serving here and the heart behind the ministries of the church.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}