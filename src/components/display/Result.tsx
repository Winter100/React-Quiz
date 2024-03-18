import Button from "../Button/Button";
import SubTitle from "../Header/SubTitle";
import styles from "./Result.module.css";

import { useQuiz } from "../../hooks/useQuiz";
import { displayOptions } from "../../context/reducers/initialState";
import { handleDispatch } from "../../utils/handleDispatch";

export default function Result() {
  const { dispatch, score, wrongNote } = useQuiz();
  const wrongLength = wrongNote.length;

  const correct = score !== 0 ? Number(score / 5) : 0;

  return (
    <div className={styles.container}>
      <SubTitle text="결과" size="4rem" />
      <div className={styles.result_info}>
        <span>최종점수: {score}점</span>
        <span>
          정답 <span className={styles.correct}>{correct}</span>개
        </span>
        <span>
          오답 <span className={styles.wrong}>{wrongLength}</span>개
        </span>
      </div>
      <div className={styles.footer}>
        {wrongLength !== 0 && (
          <Button
            text="오답노트"
            onClick={() => handleDispatch(dispatch, displayOptions.wrong)}
          />
        )}
        <Button
          text="다시풀기"
          onClick={() => handleDispatch(dispatch, displayOptions.ready)}
        />
      </div>
    </div>
  );
}
