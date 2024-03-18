import Button from "../Button/Button";
import SubTitle from "../Header/SubTitle";
import styles from "./Ready.module.css";

import { useQuiz } from "../../hooks/useQuiz";
import { displayOptions } from "../../context/reducers/initialState";
import { handleDispatch } from "../../utils/handleDispatch";

export default function Ready() {
  const { dispatch } = useQuiz();

  return (
    <div className={styles.container}>
      <SubTitle text="문제를 골라주세요!" color="blue" />
      <Button
        text="HTML"
        onClick={() => handleDispatch(dispatch, displayOptions.html)}
      />
      <Button
        text="Css"
        onClick={() => handleDispatch(dispatch, displayOptions.css)}
      />
      <Button
        text="자바스크립트"
        onClick={() => handleDispatch(dispatch, displayOptions.javascript)}
      />
      <Button
        text="리액트"
        onClick={() => handleDispatch(dispatch, displayOptions.react)}
      />
    </div>
  );
}
