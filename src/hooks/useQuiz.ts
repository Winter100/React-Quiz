import { useContext } from "react";
import { QuizContext } from "../context/QuizContextProvider";

export function useQuiz() {
  const quiz = useContext(QuizContext);

  if (!quiz) throw new Error("올바른 Context 범위 내에서 사용해주세요.");

  return quiz;
}
