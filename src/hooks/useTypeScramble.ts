import type { ScrambleProps } from "@/types/scrambleProps";
import { useScramble } from "./useScramble";

export function useTypeScramble(initStr: string) {
  const props: ScrambleProps = {
    wait: 40,
    initStr,
    randomChars: "_",
    randomLength: 1,
  };
  const scramble = useScramble(props);

  return scramble;
}
