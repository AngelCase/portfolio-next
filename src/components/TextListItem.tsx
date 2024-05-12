"use client";

import { useHackScramble } from "@/hooks/useHackScramble";
import { useEffect } from "react";
import TextSubListItem from "./TextSubListItem";
import styles from "./TextListItem.module.scss";

export type Content = {
  main: string;
  subItems?: string[];
};

export default function TextListItem({ main, subItems = [] }: Content) {
  const { scramble, current: mainText } = useHackScramble(main);

  useEffect(() => {
    scramble();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const subItemList = subItems.map((subItem) => (
    <TextSubListItem key={subItem} text={subItem}></TextSubListItem>
  ));

  return (
    <div>
      <li className={styles.mainItem}>{mainText}</li>
      <ul className={styles.subList}>{subItemList}</ul>
    </div>
  );
}
