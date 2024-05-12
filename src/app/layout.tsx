import type { Metadata } from "next";
import "../styles/reset.css";
import Link from "next/link";
import styles from "./layout.module.scss";

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
      <body>
        <header>
          <nav className={styles.nav}>
            <ul className={styles.list}>
              <li className={styles.list__item}>
                <Link className={styles.list__item__link} href="/">
                  TOP
                </Link>
              </li>
              <div className={styles.separator}></div>
              <li className={styles.list__item}>
                <Link className={styles.list__item__link} href="/skills">
                  SKILLS
                </Link>
              </li>
              <div className={styles.separator}></div>
              <li className={styles.list__item}>
                <Link className={styles.list__item__link} href="/works">
                  WORKS
                </Link>
              </li>
              <div className={styles.separator}></div>
              <li className={styles.list__item}>
                <Link className={styles.list__item__link} href="/contact">
                  CONTACT
                </Link>
              </li>
            </ul>
          </nav>
          {children}
        </header>
      </body>
    </html>
  );
}
