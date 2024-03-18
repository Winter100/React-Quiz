import { Dispatch } from "react";
import { displayOptions, initialState } from "../context/reducers/initialState";

export interface QuizQuestion {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}

export type displayType = keyof typeof displayOptions;

export interface initialStateType {
  questions: QuizQuestion[];
  index: number;
  answer: null | number;
  score: number;
  display: displayType;
  wrongNote: QuizQuestion[];
}

export interface ContextType extends initialStateType {
  dispatch: Dispatch<QuizAction>;
}

export type QuizState = typeof initialState;

export type QuizAction = {
  type: string;
  payload?: number;
};
