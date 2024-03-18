import QuestionItem from "../Item/QuestionItem";
import Button from "../Button/Button";

import { useQuiz } from "../../hooks/useQuiz";
import { displayOptions } from "../../context/reducers/initialState";
import { handleDispatch } from "../../utils/handleDispatch";

export default function Start() {
  const { answer, dispatch, index } = useQuiz();
  const isAnswer = answer !== null;

  return (
    <>
      <QuestionItem />
      {index !== 19 && isAnswer && (
        <Button onClick={() => handleDispatch(dispatch, "NEXT")} text="Next" />
      )}
      {index === 19 && isAnswer && (
        <Button
          onClick={() => handleDispatch(dispatch, displayOptions.result)}
          text="결과보기"
        />
      )}
    </>
  );
}
