import Button from "../Button/Button";
import SubTitle from "../Header/SubTitle";
import WrongItem from "../Item/WrongItem";
import styles from "./Wrong.module.css";

import { useQuiz } from "../../hooks/useQuiz";
import { displayOptions } from "../../context/reducers/initialState";
import { handleDispatch } from "../../utils/handleDispatch";

export default function Wrong() {
  const { dispatch, wrongNote } = useQuiz();

  return (
    <div className={styles.container}>
      <SubTitle text="오답노트" size="4rem" color="#e72525" />
      <Button
        text="다시풀기"
        onClick={() => handleDispatch(dispatch, displayOptions.ready)}
      />
      <ul className={styles.ul}>
        {wrongNote.map((wrongItem) => (
          <li key={wrongItem.question}>
            <WrongItem wrongItem={wrongItem} />
          </li>
        ))}
      </ul>
    </div>
  );
}
