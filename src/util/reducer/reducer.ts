import { javaScriptQuizData } from "./../../questions/jsQuestions";
import {
  QuizAction,
  QuizQuestion,
  QuizState,
  displayType,
} from "../../_type/type";
import { displayOptions } from "./initialState";
import { reactQuizData } from "../../questions/reactQuestions";
import { htmlQuizData } from "../../questions/htmlQuestion";
import { CssQuizData } from "../../questions/cssQuestions";

export function reducer(state: QuizState, action: QuizAction): QuizState {
  const { type, payload } = action;
  let question;

  switch (type) {
    case "NEXT":
      return { ...state, index: state.index + 1, answer: null };
    case "ANSWER":
      question = state.questions.at(state.index) as QuizQuestion;
      return {
        ...state,
        wrongNote:
          payload !== question?.answer
            ? [...state.wrongNote, { ...question }]
            : state.wrongNote,
        answer: Number(payload),
        score: payload === question?.answer ? state.score + 5 : state.score,
      };
    case displayOptions.ready:
      return {
        ...state,
        answer: null,
        index: 0,
        score: 0,
        questions: [],
        wrongNote: [],
        display: displayOptions.ready as displayType,
      };
    case displayOptions.html:
      return {
        ...state,
        answer: null,
        index: 0,
        score: 0,
        questions: htmlQuizData,
        wrongNote: [],
        display: displayOptions.start as displayType,
      };
    case displayOptions.css:
      return {
        ...state,
        answer: null,
        index: 0,
        score: 0,
        questions: CssQuizData,
        wrongNote: [],
        display: displayOptions.start as displayType,
      };
    case displayOptions.javascript:
      return {
        ...state,
        answer: null,
        index: 0,
        score: 0,
        questions: javaScriptQuizData,
        wrongNote: [],
        display: displayOptions.start as displayType,
      };
    case displayOptions.react:
      return {
        ...state,
        answer: null,
        index: 0,
        score: 0,
        questions: reactQuizData,
        wrongNote: [],
        display: displayOptions.start as displayType,
      };

    // case displayOptions.start:
    //   return {
    //     ...state,
    //     answer: null,
    //     index: 0,
    //     score: 0,
    //     wrongNote: [],
    //     display: displayOptions.start as displayType,
    //   };
    case displayOptions.result:
      return {
        ...state,
        answer: null,
        display: displayOptions.result as displayType,
      };
    case displayOptions.wrong:
      return {
        ...state,
        answer: null,
        index: 0,
        score: 0,
        display: displayOptions.wrong as displayType,
      };
    default:
      return state;
  }
}
