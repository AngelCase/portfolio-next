import TextListItem from "./TextListItem";
import styles from "./TextList.module.scss";
import type { Content } from "./TextListItem";

export default function TextList({ contents }: { contents: Content[] }) {
  const items = contents.map((content) => (
    <TextListItem
      key={content.main}
      main={content.main}
      subItems={content.subItems}
    ></TextListItem>
  ));

  return <ul className={styles.list}>{items}</ul>;
}
