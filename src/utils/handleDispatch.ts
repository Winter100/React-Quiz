import { Dispatch } from "react";
import { QuizAction } from "../types/type";

export function handleDispatch(dispatch: Dispatch<QuizAction>, type: string) {
  dispatch({ type });
}
