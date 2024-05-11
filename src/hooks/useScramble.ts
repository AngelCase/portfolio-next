import type { ScrambleProps } from "@/types/scrambleProps";
import { useState } from "react";

export function useScramble(props: ScrambleProps) {
  const target = props.initStr;
  const [current, setCurrent] = useState("");
  let isRunning = false;
  let index = 0;

  // 文字列に対してスクランブル演出を行う
  const scramble = () => {
    // 多重起動はしない
    if (isRunning) {
      return;
    }
    isRunning = true;

    index = 0;

    const update = () => {
      // ターゲットを少しずつ表示
      const targetpart = target.slice(0, index);
      index++;

      // ランダム文字列を生成
      let randomPart = "";
      for (let i = 0; i < props.randomLength; i++)
        randomPart += getRandomChar(props.randomChars);

      // 表示する文字列を更新
      setCurrent(targetpart + randomPart);
    };

    // 一定時間ごとに文字列を更新
    const timerId = setInterval(update, props.wait);

    // 一定時間後に終了
    const finishTime = props.wait * (target.length + 8); // 全表示し終わってもちょっと待つ
    setTimeout(() => {
      isRunning = false;
      clearInterval(timerId);
      setCurrent(target);
    }, finishTime);
  };

  return { scramble, current };
}

function getRandomChar(chars: string): string {
  return chars[Math.floor(Math.random() * chars.length)];
}
