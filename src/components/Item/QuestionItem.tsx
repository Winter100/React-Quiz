import { QuizItemPropsType } from "../../_type/type";
import styles from "./QuestionItem.module.css";

export default function QuestionItem({
  question,
  index,
  dispatch,
  answer,
  questionLength,
  score,
}: QuizItemPropsType) {
  const hasAnswered = answer !== null;

  return (
    <div className={styles.container}>
      <div className={styles.score}>
        <span>
          점수: {score} / {5 * questionLength}
        </span>
        <span>
          문제수: {index + 1} / {questionLength}
        </span>
      </div>

      <h2 className={styles.title_info}>
        <span className={styles.q_number}>{` [ ${index + 1} ]. `}</span>
        <span className={styles.q_content}>{`${question.question}`}</span>
      </h2>

      <div className={styles.options}>
        {question.options.map((item, i) => (
          <button
            disabled={hasAnswered}
            key={item}
            className={`${styles.option} ${i === answer ? styles.select : ""} ${
              hasAnswered && i === question.answer ? styles.answer : ""
            }`}
            onClick={() => dispatch({ type: "ANSWER", payload: i })}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
