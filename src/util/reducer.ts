import { QuizAction, QuizState } from "../_type/type";

export function reducer(state: QuizState, action: QuizAction): QuizState {
  const { type, payload } = action;
  let question;

  switch (type) {
    case "NEXT":
      return { ...state, index: state.index + 1, answer: null };
    case "ANSWER":
      question = state.questions.at(state.index);
      return {
        ...state,
        answer: payload ?? state.answer,
        score:
          action.payload === question?.answer ? state.score + 5 : state.score,
      };
    default:
      return state;
  }
}
