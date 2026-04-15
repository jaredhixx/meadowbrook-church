import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SiteHeader from "./components/SiteHeader";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.meadowbrookcc.org"),
  title: {
    default: "Meadowbrook Christian Church | Maryville, TN",
    template: "%s | Meadowbrook Christian Church",
  },
  description:
    "Meadowbrook Christian Church is a welcoming Christian church in Maryville, Tennessee. Join us Sundays at 10:45 AM for Worship & the Word.",
  formatDetection: {
    telephone: false,
    date: false,
    email: false,
    address: false,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const churchSchema = {
    "@context": "https://schema.org",
    "@type": "Church",
    name: "Meadowbrook Christian Church",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2332 Grove St",
      addressLocality: "Maryville",
      addressRegion: "TN",
      postalCode: "37804",
      addressCountry: "US",
    },
    telephone: "(657) 347-2208",
    email: "2meadowbrookcc@gmail.com",
    url: "https://www.meadowbrookcc.org",
    areaServed: [
      {
        "@type": "City",
        name: "Maryville",
      },
      {
        "@type": "City",
        name: "Alcoa",
      },
      {
        "@type": "AdministrativeArea",
        name: "Blount County",
      },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "10:45",
        closes: "12:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Thursday",
        opens: "19:00",
        closes: "20:00",
      },
    ],
    sameAs: ["https://www.facebook.com/MeadowbrookChristianChurch/"],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen bg-[#fdfbf7] text-[#1f2937]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(churchSchema) }}
        />
        <SiteHeader />

        <main>{children}</main>

        <footer className="border-t border-[#d9d2c3] bg-[#faf7f2]">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:px-10 lg:grid-cols-[1.15fr_1fr_1fr]">
            <div>
              <h2 className="text-xl font-bold tracking-tight text-[#1f2937]">
                Meadowbrook Christian Church
              </h2>
              <p className="mt-3 max-w-xl text-base leading-7 text-[#4b5563]">
                A welcoming Christian church in Maryville, Tennessee where you
                can worship, grow in faith, and feel at home.
              </p>

              <p className="mt-4 font-serif text-lg italic text-[#5c7354]">
                Passion for God, a Heart for People.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c7354]">
                Weekly Schedule
              </h3>

              <div className="mt-4 space-y-4 text-base leading-7 text-[#4b5563]">
                <div>
                  <p className="font-semibold text-[#1f2937]">
                    Sunday Worship & the Word
                  </p>
                  <p>10:45 AM–12:00 PM</p>
                </div>

                <div>
                  <p className="font-semibold text-[#1f2937]">
                    Optional Sunday Morning
                  </p>
                  <p>10:00–10:30 AM adult prayer meeting</p>
                  <p>10:00–10:30 AM children&apos;s classes</p>
                  <p>10:30–10:45 AM arrival and fellowship</p>
                </div>

                <div>
                  <p className="font-semibold text-[#1f2937]">
                    Thursday Discussion Group
                  </p>
                  <p>7:00–8:00 PM</p>
                </div>

                <div>
                  <p className="font-semibold text-[#1f2937]">
                    Monthly Potluck Meal
                  </p>
                  <p>Usually the first Sunday of the month</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c7354]">
                Contact & Next Steps
              </h3>

              <div className="mt-4 space-y-1 text-base leading-7 text-[#4b5563]">
                <p>2332 Grove St</p>
                <p>Maryville, TN 37804</p>
                <p>(657) 347-2208</p>
                <p>2meadowbrookcc@gmail.com</p>
              </div>

              <div className="mt-6 flex flex-col gap-3">
                <Link
                  href="/visit"
                  className="inline-flex items-center justify-center rounded-xl bg-[#5c7354] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#4f6448]"
                >
                  Plan Your Visit
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl border border-[#bdaa86] bg-white px-5 py-3 text-sm font-semibold text-[#1f2937] transition hover:bg-[#f6f1e7]"
                >
                  Contact the Church
                </Link>

                <a
                  href="https://maps.google.com/?q=2332+Grove+St+Maryville+TN+37804"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border border-[#bdaa86] bg-white px-5 py-3 text-sm font-semibold text-[#1f2937] transition hover:bg-[#f6f1e7]"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-[#d9d2c3]">
            <div className="mx-auto max-w-6xl px-6 py-5 text-sm text-[#6b7280] md:px-10">
              © {new Date().getFullYear()} Meadowbrook Christian Church. All
              rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}