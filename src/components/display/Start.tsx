import QuestionItem from "../Item/QuestionItem";
import Button from "../Button/Button";

import { StartPropsType } from "../../_type/type";
import { displayOptions } from "../../util/reducer/initialState";

export default function Start({
  questions,
  index,
  dispatch,
  answer,
  score,
}: StartPropsType) {
  const questionLength = questions.length;
  const isAnswer = answer !== null;

  function handleClick(type: string) {
    dispatch({ type });
  }

  return (
    <>
      <QuestionItem
        question={questions[index]}
        index={index}
        dispatch={dispatch}
        answer={answer}
        score={score}
        questionLength={questionLength}
      />
      {index !== 19 && isAnswer && (
        <Button onClick={() => handleClick("NEXT")} text="Next" />
      )}
      {index === 19 && isAnswer && (
        <Button
          onClick={() => handleClick(displayOptions.result)}
          text="결과보기"
        />
      )}
    </>
  );
}
