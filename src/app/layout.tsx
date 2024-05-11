import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/reset.css";
import "../styles/globals.scss";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <header>
          <nav className="nav">
            <ul className="list">
              <li className="list__item">
                <Link href="/">TOP</Link>
              </li>
              <div className="separator"></div>
              <li className="list__item">
                <Link href="/skills">SKILLS</Link>
              </li>
              <div className="separator"></div>
              <li className="list__item">
                <Link href="/works">WORKS</Link>
              </li>
              <div className="separator"></div>
              <li className="list__item">
                <Link href="/contact">CONTACT</Link>
              </li>
            </ul>
          </nav>
          {children}
        </header>
      </body>
    </html>
  );
}
