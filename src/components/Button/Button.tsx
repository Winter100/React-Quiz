import { QuizAction } from "../../_type/type";
import styles from "./Button.module.css";

export default function Button({
  dispatch,
  text,
}: {
  dispatch: React.Dispatch<QuizAction>;
  text: string;
}) {
  return (
    <button
      className={styles.button}
      onClick={() => dispatch({ type: "NEXT" })}
    >
      {text}
    </button>
  );
}
