import Button from "../Button/Button";
import SubTitle from "../Header/SubTitle";
import styles from "./Result.module.css";

import { ResultPropsType } from "../../_type/type";
import { displayOptions } from "../../util/reducer/initialState";

export default function Result({
  dispatch,
  score = 0,
  wrongLength,
}: ResultPropsType) {
  function handlClick(type: string) {
    dispatch({ type });
  }

  const correct = score !== 0 ? Number(score / 5) : 0;

  return (
    <div className={styles.container}>
      <SubTitle text="결과" size="4rem" />
      <div className={styles.result_info}>
        <span>최종점수: {score}점</span>
        <span>정답수 {correct}개</span>
        <span>오답수 {wrongLength}개</span>
      </div>
      <div className={styles.footer}>
        {wrongLength !== 0 && (
          <Button
            text="오답노트"
            onClick={() => handlClick(displayOptions.wrong)}
          />
        )}
        <Button
          text="다시풀기"
          onClick={() => handlClick(displayOptions.ready)}
        />
      </div>
    </div>
  );
}
