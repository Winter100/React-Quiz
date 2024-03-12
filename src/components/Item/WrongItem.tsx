import { QuizQuestion } from "../../_type/type";
import styles from "./WrongItem.module.css";

export default function WrongItem({ wrongItem }: { wrongItem: QuizQuestion }) {
  return (
    <li className={styles.container}>
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
    </li>
  );
}
