import { ReactNode, createContext, useReducer } from "react";
import { ContextType } from "../types/type";
import { reducer } from "./reducers/reducer";
import { initialState } from "./reducers/initialState";

export const QuizContext = createContext({} as ContextType);

export default function QuizContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [{ questions, index, answer, score, display, wrongNote }, dispatch] =
    useReducer(reducer, initialState);

  return (
    <QuizContext.Provider
      value={{ questions, index, answer, score, display, wrongNote, dispatch }}
    >
      {children}
    </QuizContext.Provider>
  );
}
