import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact | Meadowbrook Christian Church",
  description:
    "Contact Meadowbrook Christian Church in Maryville, Tennessee. Find our phone number, email, address, Sunday main service time, and simple ways to ask questions or plan your visit.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#faf7f2] text-[#1f2937]">
      <section className="border-b border-[#d9d2c3] bg-gradient-to-b from-[#f7f3eb] to-[#faf7f2]">
        <div className="mx-auto max-w-5xl px-6 pt-12 pb-16 md:px-10 md:pt-14 md:pb-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c7354]">
            Contact Meadowbrook
          </p>

          <p className="mt-4 font-serif text-2xl italic text-[#5c7354] md:text-3xl">
            Passion for God, a Heart for People.
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-[#1f2937] md:text-5xl">
            Contact Meadowbrook Christian Church
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#4b5563]">
            We would love to hear from you. Whether you have a question, want to
            plan your first visit, or would like someone to pray for you,
            Meadowbrook Christian Church is here to help.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-4">
            <div className="rounded-2xl border border-[#d9d2c3] bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#6b7280]">
                Phone
              </p>
              <p className="mt-2 text-xl font-semibold text-[#1f2937]">
                (657) 347-2208
              </p>
            </div>

            <div className="rounded-2xl border border-[#d9d2c3] bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#6b7280]">
                Email
              </p>
              <p className="mt-2 break-all text-lg font-semibold text-[#1f2937]">
                2meadowbrookcc@gmail.com
              </p>
            </div>

            <div className="rounded-2xl border border-[#d9d2c3] bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#6b7280]">
                Address
              </p>
              <p className="mt-2 text-xl font-semibold text-[#1f2937]">
                2332 Grove St
              </p>
              <p className="text-base text-[#4b5563]">Maryville, TN 37804</p>
            </div>

            <div className="rounded-2xl border border-[#d9d2c3] bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#6b7280]">
                Sunday Main Service
              </p>
              <p className="mt-2 text-xl font-semibold text-[#1f2937]">
                10:45 AM
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#d9d2c3] bg-white">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 py-16 md:px-10 lg:grid-cols-[1fr_1.05fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c7354]">
              Reach Out
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1f2937] md:text-4xl">
              Questions, prayer, or planning a visit
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#4b5563]">
              If you are looking for a church in Maryville TN, searching for
              churches near Alcoa TN, or simply have questions about
              Meadowbrook Christian Church, we would be glad to connect with
              you.
            </p>

            <div className="mt-8 space-y-5">
              <div className="rounded-2xl border border-[#d9d2c3] bg-[#faf7f2] p-6">
                <h3 className="text-xl font-semibold text-[#1f2937]">
                  Call the church
                </h3>
                <p className="mt-3 text-base leading-7 text-[#4b5563]">
                  The simplest way to reach Meadowbrook Christian Church right
                  now is by phone.
                </p>
                <a
                  href="tel:+16573472208"
                  className="mt-5 inline-flex items-center justify-center rounded-xl bg-[#5c7354] px-5 py-3 text-base font-semibold text-white transition hover:bg-[#4f6448]"
                >
                  Call (657) 347-2208
                </a>
              </div>

              <div className="rounded-2xl border border-[#d9d2c3] bg-[#faf7f2] p-6">
                <h3 className="text-xl font-semibold text-[#1f2937]">
                  Email the church
                </h3>
                <p className="mt-3 text-base leading-7 text-[#4b5563]">
                  If email is easier for you, feel free to reach out with
                  questions, prayer requests, or first-visit questions.
                </p>
                <a
                  href="mailto:2meadowbrookcc@gmail.com"
                  className="mt-5 inline-flex items-center justify-center rounded-xl border border-[#bdaa86] bg-white px-5 py-3 text-base font-semibold text-[#1f2937] transition hover:bg-[#f6f1e7]"
                >
                  Email 2meadowbrookcc@gmail.com
                </a>
              </div>

              <div className="rounded-2xl border border-[#d9d2c3] bg-[#faf7f2] p-6">
                <h3 className="text-xl font-semibold text-[#1f2937]">
                  Need prayer?
                </h3>
                <p className="mt-3 text-base leading-7 text-[#4b5563]">
                  If you have a prayer need, please call or email the church and
                  let someone know how Meadowbrook can pray for you.
                </p>
              </div>

              <div className="rounded-2xl border border-[#d9d2c3] bg-[#faf7f2] p-6">
                <h3 className="text-xl font-semibold text-[#1f2937]">
                  First-time visitor questions
                </h3>
                <p className="mt-3 text-base leading-7 text-[#4b5563]">
                  Visitors are welcome to come at 10:45 AM for the main service.
                  If arriving a little earlier feels better, 10:30–10:45 AM is
                  a relaxed time to get settled before Worship &amp; the Word
                  begins.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="overflow-hidden rounded-3xl border border-[#d9d2c3] shadow-sm">
              <iframe
                title="Map to Meadowbrook Christian Church"
                src="https://www.google.com/maps?q=2332%20Grove%20St%20Maryville%20TN%2037804&output=embed"
                className="h-[420px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="mt-6 rounded-2xl border border-[#d9d2c3] bg-[#f7f3eb] p-6">
              <h3 className="text-lg font-semibold text-[#1f2937]">
                Meadowbrook Christian Church
              </h3>

              <div className="mt-4 space-y-3 text-base leading-7 text-[#4b5563]">
                <p>2332 Grove St, Maryville, TN 37804</p>
                <p>(657) 347-2208</p>
                <p>2meadowbrookcc@gmail.com</p>
                <p>Sunday Worship &amp; the Word at 10:45 AM</p>
                <p>Optional 10:00–10:30 AM adult prayer meeting and children&apos;s classes</p>
                <p>10:30–10:45 AM arrival and fellowship</p>
                <p>Thursday discussion group at 7:00–8:00 PM</p>
              </div>

              <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://maps.google.com/?q=2332+Grove+St+Maryville+TN+37804"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-[#5c7354] px-5 py-3 text-base font-semibold text-white transition hover:bg-[#4f6448]"
                >
                  Get Directions
                </a>

                <Link
                  href="/visit"
                  className="inline-flex items-center justify-center rounded-xl border border-[#bdaa86] bg-white px-5 py-3 text-base font-semibold text-[#1f2937] transition hover:bg-[#f6f1e7]"
                >
                  Plan Your Visit
                </Link>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-[#d9d2c3] bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-[#1f2937]">
                Simple and welcoming
              </h3>
              <p className="mt-3 text-base leading-7 text-[#4b5563]">
                Meadowbrook is a small church in Maryville, TN where new people
                are welcome and can feel comfortable asking questions before
                visiting.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-10">
          <div className="rounded-3xl border border-[#d9d2c3] bg-white p-8 shadow-sm md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c7354]">
              Visit This Sunday
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1f2937] md:text-4xl">
              We would love to welcome you
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-[#4b5563]">
              If you are searching for a welcoming church in Maryville TN,
              Meadowbrook Christian Church would love the chance to meet you in
              person.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/visit"
                className="inline-flex items-center justify-center rounded-xl bg-[#5c7354] px-6 py-3 text-base font-semibold text-white transition hover:bg-[#4f6448]"
              >
                Plan Your Visit
              </Link>

              <a
                href="tel:+16573472208"
                className="inline-flex items-center justify-center rounded-xl border border-[#bdaa86] bg-[#faf7f2] px-6 py-3 text-base font-semibold text-[#1f2937] transition hover:bg-[#f6f1e7]"
              >
                Call the Church
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}