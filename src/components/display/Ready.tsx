import { Dispatch } from "react";
import { QuizAction } from "../../_type/type";
import Button from "../Button/Button";
import SubTitle from "../Header/SubTitle";
import styles from "./Ready.module.css";
import { displayOptions } from "../../util/reducer/initialState";

export default function Ready({
  dispatch,
}: {
  dispatch: Dispatch<QuizAction>;
}) {
  function handleClick(type: string) {
    // 타입에 따라 문제 변경
    dispatch({ type });
  }

  return (
    <div className={styles.container}>
      <div>
        <SubTitle text="문제를 골라주세요!" />
      </div>

      <Button
        text="자바스크립트"
        onClick={() => handleClick(displayOptions.javascript)}
      />
      <Button text="리액트" onClick={() => handleClick(displayOptions.react)} />
    </div>
  );
}
