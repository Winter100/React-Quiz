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
    dispatch({ type });
  }

  return (
    <div className={styles.container}>
      <SubTitle text="문제를 골라주세요!" color="blue" />
      <Button text="HTML" onClick={() => handleClick(displayOptions.html)} />
      <Button text="Css" onClick={() => handleClick(displayOptions.css)} />
      <Button
        text="자바스크립트"
        onClick={() => handleClick(displayOptions.javascript)}
      />
      <Button text="리액트" onClick={() => handleClick(displayOptions.react)} />
    </div>
  );
}
