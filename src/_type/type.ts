import { Dispatch } from "react";
import { displayOptions, initialState } from "../util/reducer/initialState";

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

export type QuizState = typeof initialState;

export type QuizAction = {
  type: string;
  payload?: number;
};

export interface QuizItemPropsType {
  question: QuizQuestion;
  index: number;
  answer: null | number;
  dispatch: Dispatch<QuizAction>;
  questionLength: number;
  score: number;
}

export interface StartPropsType {
  questions: QuizQuestion[];
  index: number;
  answer: null | number;
  dispatch: Dispatch<QuizAction>;
  score: number;
}

export interface ResultPropsType {
  dispatch: Dispatch<QuizAction>;
  score: number;
  wrongLength: number;
}

export type CommentaryPropsType = {
  questions: QuizQuestion[];
  index: number;
};

export type WrongPropsType = {
  wrongNote: QuizQuestion[];
  dispatch: Dispatch<QuizAction>;
};
