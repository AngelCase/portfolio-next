"use client";

import { useTypeScramble } from "@/hooks/useTypeScramble";
import { useEffect } from "react";

export default function Home() {
  const { scramble, current } = useTypeScramble("WELCOME TO MY PORTFOLIO");

  // NOTE: 何度も実行されないようuseEffectに空の依存配列を渡している
  useEffect(() => {
    scramble();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <h1>{current}</h1>;
}
