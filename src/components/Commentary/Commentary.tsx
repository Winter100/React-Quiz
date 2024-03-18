import styles from "./Commentary.module.css";

import { useQuiz } from "../../hooks/useQuiz";

export default function Commentary() {
  const { questions, index } = useQuiz();
  const { explanation } = questions[index];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>해설</h2>
      <div className={styles.explanation}>{explanation}</div>
    </div>
  );
}
