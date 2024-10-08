import type {Metadata} from "next";

import Link from "next/link";

import "./globals.css";

export const metadata: Metadata = {
  title: "Reviews",
  description: "Generated by colidevs CLI",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="container m-auto grid min-h-screen grid-rows-[auto,1fr,auto] bg-white px-4 font-sans antialiased [background:linear-gradient(180deg,rgb(245,245,245)_54%,rgba(200.81,200.81,200.81,0.81)_100%)]">
        <header className="m-6 rounded-3xl bg-[#cfc3d6b2] text-center text-5xl font-semibold leading-[5rem] tracking-wide text-neutral-800 shadow-[0px_4px_4px_#00000040] ">
          <h1>PRODUCTOS</h1>
        </header>
        <main className="py-8">{children}</main>
        <footer className="text-center leading-[4rem] opacity-70">
          © {new Date().getFullYear()} Reviews
        </footer>
      </body>
    </html>
  );
}

// dentro del header
//<Link href="/">Reviews</Link>
