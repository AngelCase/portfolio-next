"use client";

import { useHackScramble } from "@/hooks/useHackScramble";
import { useEffect } from "react";
import styles from "./TextSubListItem.module.scss";

export default function TextSubListItem({ text }: { text: string }) {
  const { scramble, current } = useHackScramble(text);

  useEffect(() => {
    scramble();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <li className={styles.subList__item}>{current}</li>
    </div>
  );
}
