import { WrongPropsType } from "../../_type/type";
import { displayOptions } from "../../util/reducer/initialState";

import Button from "../Button/Button";
import SubTitle from "../Header/SubTitle";
import WrongItem from "../Item/WrongItem";
import styles from "./Wrong.module.css";

export default function Wrong({ wrongNote, dispatch }: WrongPropsType) {
  function handlClick(type: string) {
    dispatch({ type });
  }

  return (
    <div className={styles.container}>
      <SubTitle text="오답노트" size="4rem" />
      <Button
        text="다시풀기"
        onClick={() => handlClick(displayOptions.ready)}
      />
      <ul>
        {wrongNote.map((wrongItem) => (
          <WrongItem key={wrongItem.question} wrongItem={wrongItem} />
        ))}
      </ul>
    </div>
  );
}
