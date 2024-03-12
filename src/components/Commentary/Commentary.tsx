import styles from "./Commentary.module.css";

import { CommentaryPropsType } from "../../_type/type";

export default function Commentary({ questions, index }: CommentaryPropsType) {
  const { explanation } = questions[index];
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>해설</h2>
      <div className={styles.explanation}>{explanation}</div>
    </div>
  );
}
