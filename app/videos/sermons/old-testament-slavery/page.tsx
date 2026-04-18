import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "What Does the Old Testament Really Teach About Slavery? | Meadowbrook Christian Church",
  description:
    "Watch a Bible teaching from Meadowbrook Christian Church in Maryville, Tennessee on what the Old Testament really teaches about slavery.",
  alternates: {
    canonical: "/videos/sermons/old-testament-slavery",
  },
};

export default function OldTestamentSlaveryPage() {
  return (
    <main className="bg-[#f8f6f1] pt-20 sm:pt-24">
      {/* HERO */}
      <section className="border-b border-[#e2d9c8] bg-white">
        <div className="mx-auto max-w-5xl px-6 pb-8 pt-8 sm:px-8 sm:pb-10 sm:pt-10 lg:px-12">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#8b6f47]">
            Sermon Video
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-[#1f2937] sm:text-5xl">
            What Does the Old Testament Really Teach About Slavery?
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#4b5563]">
            Watch this lesson from Meadowbrook Christian Church in Maryville,
            Tennessee as Pastor Matt Hixson teaches what the Old Testament
            really says about slavery and how Christians should think carefully
            and biblically about difficult passages in Scripture.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/videos/sermons"
              className="inline-flex items-center justify-center rounded-xl bg-[#5c7354] px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-[#4f6448]"
            >
              Back to Sermons
            </Link>

            <Link
              href="/visit"
              className="inline-flex items-center justify-center rounded-xl border border-[#cbb89a] bg-white px-6 py-3 text-base font-semibold text-[#1f2937] transition hover:bg-[#f6f1e7]"
            >
              Plan Your Visit
            </Link>
          </div>
        </div>
      </section>

      {/* VIDEO + CONTENT */}
      <section className="mx-auto max-w-5xl px-6 py-12 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[360px_minmax(0,1fr)] lg:items-start">
          
          {/* VIDEO */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-full max-w-[320px] rounded-2xl border border-[#e2d9c8] bg-black shadow-sm overflow-hidden">
              <div className="aspect-[9/16] w-full bg-black">
                <video
                  controls
                  preload="metadata"
                  className="block h-full w-full object-contain"
                  poster="/images/Meadowbrooksign.jpg"
                >
                  <source
                    src="/videos/old-testament-slavery-sermon.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>

          {/* TEXT CONTENT */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-[#1f2937]">
                About this message
              </h2>

              <div className="mt-6 space-y-4 text-base leading-7 text-[#4b5563]">
                <p>
                  This message addresses one of the most difficult questions many
                  people have when reading the Bible: what does the Old Testament
                  say about slavery, and how should Christians understand those
                  passages today?
                </p>

                <p>
                  Pastor Matt Hixson walks through this topic with a commitment to
                  Scripture, careful interpretation, and a desire to help people
                  think faithfully about the Bible rather than avoiding hard
                  questions.
                </p>

                <p>
                  If you are exploring Christianity, returning to church, or
                  looking for a Bible-teaching church in Maryville, Tennessee,
                  this video can help you get a feel for the kind of teaching you
                  can expect at Meadowbrook Christian Church.
                </p>
              </div>
            </div>

            <aside className="rounded-2xl border border-[#e2d9c8] bg-white p-6 shadow-sm">
              <h3 className="text-2xl font-semibold text-[#1f2937]">
                New to Meadowbrook?
              </h3>

              <p className="mt-4 text-base leading-7 text-[#4b5563]">
                Learn service times, location details, and what to expect before
                your first Sunday with us.
              </p>

              <div className="mt-6">
                <Link
                  href="/visit"
                  className="inline-flex items-center justify-center rounded-xl bg-[#5c7354] px-5 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-[#4f6448]"
                >
                  Visit Our Church in Maryville
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}