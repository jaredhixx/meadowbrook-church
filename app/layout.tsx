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
  title: {
    default: "Meadowbrook Christian Church | Maryville, TN",
    template: "%s | Meadowbrook Christian Church",
  },
  description:
        "Meadowbrook Christian Church is a welcoming Christian church in Maryville, Tennessee. Join us Sundays at 10:30 AM.",
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
    telephone: "(865) 982-8241",
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
        opens: "10:30",
        closes: "12:00",
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
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:px-10 lg:grid-cols-[1.25fr_0.9fr_1fr]">
            <div>
              <h2 className="text-xl font-bold tracking-tight text-[#1f2937]">
                Meadowbrook Christian Church
              </h2>
              <p className="mt-3 max-w-xl text-base leading-7 text-[#4b5563]">
                A welcoming Christian church in Maryville, Tennessee where you
                can worship, grow in faith, and feel at home.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c7354]">
                Service Time
              </h3>
              <p className="mt-4 text-base leading-7 text-[#4b5563]">
                Sunday at 10:30 AM
              </p>

              <h3 className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-[#5c7354]">
                Location
              </h3>
              <p className="mt-4 text-base leading-7 text-[#4b5563]">
                2332 Grove St
                <br />
                Maryville, TN 37804
              </p>

              <h3 className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-[#5c7354]">
                Contact
              </h3>
              <p className="mt-4 text-base leading-7 text-[#4b5563]">
                (865) 982-8241
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5c7354]">
                Next Steps
              </h3>

              <div className="mt-4 rounded-2xl border border-[#d9d2c3] bg-[#faf7f2] p-5">
                <p className="text-base leading-7 text-[#4b5563]">
                  New here? Start by planning your first visit or connecting
                  with Meadowbrook on Facebook.
                </p>

                <div className="mt-5 flex flex-col gap-3">
                  <Link
                    href="/visit"
                    className="inline-flex items-center justify-center rounded-xl bg-[#5c7354] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#4f6448]"
                  >
                    Plan Your Visit
                  </Link>

                  <a
                    href="https://www.facebook.com/MeadowbrookChristianChurch/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-xl border border-[#bdaa86] bg-white px-5 py-3 text-sm font-semibold text-[#1f2937] transition hover:bg-[#f6f1e7]"
                  >
                    Visit Facebook Page
                  </a>

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