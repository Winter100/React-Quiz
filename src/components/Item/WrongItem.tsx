import styles from "./WrongItem.module.css";

import { QuizQuestion } from "../../types/type";

export default function WrongItem({ wrongItem }: { wrongItem: QuizQuestion }) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{wrongItem.question}</h3>
      <span className={styles.options}>
        {wrongItem.options.map((item, i) => (
          <span
            className={`${
              i === wrongItem.answer ? styles.answer : styles.wrong
            }`}
          >
            {item}
          </span>
        ))}
      </span>
      <span className={styles.explanation}>{wrongItem.explanation}</span>
    </div>
  );
}
