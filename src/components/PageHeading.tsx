"use client";

import { useTypeScramble } from "@/hooks/useTypeScramble";
import { useEffect } from "react";
import styles from "./PageHeading.module.scss";

export default function PageHeading({ text }: { text: string }) {
  const { scramble, current } = useTypeScramble(text);

  // NOTE: 何度も実行されないようuseEffectに空の依存配列を渡している
  useEffect(() => {
    scramble();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <h1 className={styles.text}>{current}</h1>;
}
