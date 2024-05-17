"use client";

import { useHackScramble } from "@/hooks/useHackScramble";
import styles from "./WorkContent.module.scss";
import { useEffect } from "react";
import Image from "next/image";

export default function WorkContent({
  children,
  title,
  url,
  image,
  imageAlt,
  imageBorder,
}: {
  children: JSX.Element;
  title: string;
  url: string;
  image: string;
  imageAlt: string;
  imageBorder: boolean;
}) {
  const { scramble, current: mainText } = useHackScramble(title);

  useEffect(() => {
    scramble();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.content} onMouseEnter={() => scramble()}>
      <h2 className={styles.content__title}>{title}</h2>
      <Image
        className={imageBorder ? styles.imageBorder : ""}
        src={image}
        alt={imageAlt}
        width="320"
        height="240"
        loading="lazy"
      />
      {children}
      <a className={styles.content__link} href={url}></a>
    </div>
  );
}
