import { displayType, initialStateType } from "../../types/type";

export const displayOptions = {
  ready: "READY",
  html: "HTML",
  css: "CSS",
  javascript: "JAVASCRIPT",
  react: "REACT",
  start: "START",
  result: "RESULT",
  wrong: "WRONG",
};

export const initialState: initialStateType = {
  questions: [],
  index: 0,
  answer: null,
  score: 0,
  display: displayOptions.ready as displayType,
  wrongNote: [],
};
