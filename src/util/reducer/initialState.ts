import { displayType, initialStateType } from "../../_type/type";

export const displayOptions = {
  ready: "READY",
  javascript: "JAVASCRIPT",
  react: "REACT",
  start: "START",
  result: "RESULT",
  wrong: "WRONG",
};

export const initialState: initialStateType = {
  questions: [], // null로 초기값 설정후 리듀서로 넣어주기?
  index: 0,
  answer: null,
  score: 0,
  display: displayOptions.ready as displayType,
  wrongNote: [],
};
