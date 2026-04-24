import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "What Does the Old Testament Say About Slavery? | Meadowbrook Christian Church",
  description:
    "Watch Pastor Matt Hixson of Meadowbrook Christian Church in Maryville, Tennessee teach what the Old Testament says about slavery and how Christians should understand difficult Bible passages.",
  alternates: {
    canonical: "/videos/sermons/old-testament-slavery",
  },
};

const videoSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "What Does the Old Testament Say About Slavery?",
  description:
    "Pastor Matt Hixson of Meadowbrook Christian Church in Maryville, Tennessee teaches what the Old Testament says about slavery and how Christians should understand difficult Bible passages.",
  thumbnailUrl: ["https://i.ytimg.com/vi/KhOlBvmfx2Y/hqdefault.jpg"],
  uploadDate: "2026-04-24",
  embedUrl: "https://www.youtube.com/embed/KhOlBvmfx2Y",
  contentUrl: "https://youtu.be/KhOlBvmfx2Y",
  publisher: {
    "@type": "Organization",
    name: "Meadowbrook Christian Church",
    url: "https://www.meadowbrookcc.org",
  },
};

export default function OldTestamentSlaveryPage() {
  return (
    <main className="bg-[#f8f6f1]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap gap-4">
            <Link
              href="/videos/sermons"
              className="inline-flex items-center justify-center rounded-xl bg-[#5c7354] px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-[#4f6448]"
            >
              Back to Sermons
            </Link>

            <Link
              href="/visit"
              className="inline-flex items-center justify-center rounded-xl border border-[#d0c7b8] bg-white px-6 py-3 text-base font-semibold text-[#1f2937] transition hover:bg-[#f6f1e7]"
            >
              Plan Your Visit
            </Link>
          </div>

          <h1 className="max-w-3xl text-3xl font-bold text-[#1f2937] sm:text-4xl">
            What Does the Old Testament Say About Slavery?
          </h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-12 px-6 pb-16 lg:grid-cols-2">
        <div className="flex w-full justify-center">
          <div className="relative w-full max-w-sm">
            <div className="relative w-full" style={{ paddingTop: "177.78%" }}>
              <iframe
                src="https://www.youtube.com/embed/KhOlBvmfx2Y"
                title="What Does the Old Testament Say About Slavery?"
                className="absolute left-0 top-0 h-full w-full rounded-xl shadow-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div>
            <h2 className="text-2xl font-bold text-[#1f2937]">
              About this message
            </h2>

            <div className="mt-4 space-y-4 text-base leading-7 text-[#4b5563]">
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
                this message will give you a clear picture of the kind of
                teaching you can expect at Meadowbrook Christian Church.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-[#e2d9c8] bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-[#1f2937]">
              New to Meadowbrook?
            </h3>

            <p className="mt-3 text-base leading-7 text-[#4b5563]">
              Learn service times, location details, and what to expect before
              your first Sunday with us.
            </p>

            <div className="mt-5">
              <Link
                href="/visit"
                className="inline-flex items-center justify-center rounded-xl bg-[#5c7354] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#4f6448]"
              >
                Plan Your Visit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}