import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Treasure Seekers VBS | Vacation Bible School in Maryville, TN",
  description:
    "Treasure Seekers VBS is coming to Meadowbrook Christian Church in Maryville, Tennessee on June 3, 4, and 5 from 6:00–8:00 PM. Supper provided. Preschool through high school welcome.",
  alternates: {
    canonical: "/vbs",
  },
};

const trustImages = [
  {
    src: "/images/kids/kids-5.jpg",
    alt: "Children enjoying time together at Meadowbrook Christian Church",
    label: "Kids Welcome",
  },
  {
    src: "/images/community/families.jpg",
    alt: "Families and children spending time together at Meadowbrook Christian Church",
    label: "Family Friendly",
  },
  {
    src: "/images/kids/kids2.jpg",
    alt: "Kids activity time at Meadowbrook Christian Church",
    label: "Church Life",
  },
];

export default function VbsPage() {
  return (
    <main className="bg-[#f8f6f1] pt-20 sm:pt-24">
      <section className="border-b border-[#e2d9c8] bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#8b6f47]">
                Vacation Bible School
              </p>

              <h1 className="text-4xl font-bold tracking-tight text-[#1f2937] sm:text-5xl">
                Treasure Seekers VBS is coming to Meadowbrook
              </h1>

              <p className="mt-6 text-lg leading-8 text-[#4b5563]">
                Join Meadowbrook Christian Church in Maryville, Tennessee for
                Treasure Seekers VBS on June 3, 4, and 5 from 6:00–8:00 PM.
                Supper is provided, and children from preschool through high
                school are welcome.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="tel:18652066661"
                  className="inline-flex items-center justify-center rounded-xl bg-[#5c7354] px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-[#4f6448]"
                >
                  Call to RSVP
                </a>

                <Link
                  href="/visit"
                  className="inline-flex items-center justify-center rounded-xl border border-[#cbb89a] bg-white px-6 py-3 text-base font-semibold text-[#1f2937] transition hover:bg-[#f6f1e7]"
                >
                  Plan Your Visit
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#e2d9c8] bg-[#f8f6f1] p-3 shadow-[0_24px_70px_rgba(31,41,55,0.12)]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-[#e7dfd1]">
                <Image
                  src="/images/kids/kids-5.jpg"
                  alt="Children enjoying time together at Meadowbrook Christian Church"
                  fill
                  priority
                  sizes="(min-width: 1024px) 520px, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="px-4 py-4">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c7354]">
                  Real church family
                </p>

                <p className="mt-2 text-base leading-7 text-[#4b5563]">
                  Meadowbrook is a small, welcoming church where children,
                  students, and families can feel comfortable from the start.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-2xl border border-[#e2d9c8] bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-[#1f2937]">
              June 3, 4, and 5
            </h2>

            <p className="mt-4 text-base leading-7 text-[#4b5563]">
              Treasure Seekers VBS will meet for three evenings at Meadowbrook
              Christian Church.
            </p>
          </div>

          <div className="rounded-2xl border border-[#e2d9c8] bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-[#1f2937]">
              6:00–8:00 PM
            </h2>

            <p className="mt-4 text-base leading-7 text-[#4b5563]">
              Each evening will run from 6:00–8:00 PM, and supper will be
              provided.
            </p>
          </div>

          <div className="rounded-2xl border border-[#e2d9c8] bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-[#1f2937]">
              Preschool–High School
            </h2>

            <p className="mt-4 text-base leading-7 text-[#4b5563]">
              Children and students from preschool through high school are
              welcome to join us.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-[#e2d9c8] bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#8b6f47]">
                Theme
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-[#1f2937]">
                God knows me. God is wise and good. God keeps his promises.
              </h2>

              <div className="mt-6 space-y-4 text-base leading-7 text-[#4b5563]">
                <p>
                  Treasure Seekers VBS is a special opportunity for children and
                  students to learn, participate, and be encouraged in a
                  welcoming church environment.
                </p>

                <p>
                  Meadowbrook is a small, personal church where families can
                  feel comfortable, ask questions, and get connected.
                </p>

                <p>
                  If you are looking for Vacation Bible School in Maryville,
                  Tennessee or a family-friendly church near Alcoa, we would
                  love to welcome your family.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-[#e2d9c8] bg-[#f8f6f1] p-6">
              <h3 className="text-2xl font-semibold text-[#1f2937]">
                VBS Details
              </h3>

              <div className="mt-5 space-y-4 text-base leading-7 text-[#4b5563]">
                <p>
                  <strong className="text-[#1f2937]">Event:</strong> Treasure
                  Seekers VBS
                </p>

                <p>
                  <strong className="text-[#1f2937]">Dates:</strong> June 3, 4,
                  and 5
                </p>

                <p>
                  <strong className="text-[#1f2937]">Time:</strong> 6:00–8:00 PM
                </p>

                <p>
                  <strong className="text-[#1f2937]">Ages:</strong> Preschool
                  through high school
                </p>

                <p>
                  <strong className="text-[#1f2937]">Food:</strong> Supper
                  provided
                </p>

                <p>
                  <strong className="text-[#1f2937]">RSVP:</strong>{" "}
                  <a href="tel:18652066661" className="font-semibold underline">
                    1-865-206-6661
                  </a>
                </p>
              </div>

              <div className="mt-6">
                <a
                  href="tel:18652066661"
                  className="inline-flex items-center justify-center rounded-xl bg-[#5c7354] px-5 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-[#4f6448]"
                >
                  Call 1-865-206-6661
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="mb-8 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#8b6f47]">
            A place families can trust
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-[#1f2937]">
            Real people, real church life, and a warm welcome for your family
          </h2>

          <p className="mt-5 text-base leading-7 text-[#4b5563]">
            These photos show real Meadowbrook church life and help first-time
            families know what kind of church they are visiting.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {trustImages.map((image) => (
            <div
              key={image.src}
              className="overflow-hidden rounded-3xl border border-[#e2d9c8] bg-white shadow-sm"
            >
              <div className="relative aspect-[4/3] bg-[#e7dfd1]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5c7354]">
                  {image.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16 sm:px-8 lg:px-12">
        <div className="rounded-3xl border border-[#e2d9c8] bg-white p-8 shadow-sm sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-[#1f2937]">
                We would love to welcome your family
              </h2>

              <p className="mt-5 text-base leading-7 text-[#4b5563]">
                Whether your family already attends Meadowbrook or you are
                visiting for the first time, Treasure Seekers VBS is a great way
                to connect with our church.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
              <a
                href="tel:18652066661"
                className="inline-flex items-center justify-center rounded-xl bg-[#5c7354] px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-[#4f6448]"
              >
                RSVP by Phone
              </a>

              <Link
                href="/kids"
                className="inline-flex items-center justify-center rounded-xl border border-[#cbb89a] bg-white px-6 py-3 text-base font-semibold text-[#1f2937] transition hover:bg-[#f6f1e7]"
              >
                Kids & Families
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}