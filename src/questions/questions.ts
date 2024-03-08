const quizData = [
  {
    question: "자바스크립트에서 '===' 연산자는 무엇을 검사하는가?",
    options: ["A. 동등성", "B. 일치성", "C. 대입", "D. 인스턴스"],
    answer: 1, // 'B'에 해당하는 인덱스
  },
  {
    question: "자바스크립트에서 'use strict';의 목적은 무엇인가?",
    options: [
      "A. 코드의 실행 속도를 높이기",
      "B. 안전하게 코드를 작성하기 위해",
      "C. 변수를 자동으로 선언하기",
      "D. 모든 오류를 무시하기",
    ],
    answer: 1, // 'B'에 해당하는 인덱스
  },
  {
    question: "리액트에서 함수 컴포넌트는 어떤 것을 반환해야 하는가?",
    options: ["A. 객체", "B. 배열", "C. JSX", "D. 문자열"],
    answer: 2, // 'C'에 해당하는 인덱스
  },
  {
    question:
      "리액트에서 함수 컴포넌트의 상태를 관리하기 위해 사용하는 훅은 무엇인가?",
    options: ["A. useState", "B. useEffect", "C. useContext", "D. useReducer"],
    answer: 0, // 'A'에 해당하는 인덱스
  },
  {
    question: "JSX에서 스타일을 적용하기 위해 어떤 형태로 작성해야 하는가?",
    options: ["A. 문자열", "B. 배열", "C. 객체", "D. 숫자"],
    answer: 2, // 'C'에 해당하는 인덱스
  },
  {
    question:
      "리액트에서 컴포넌트의 생명주기 메소드 중에서 초기 렌더링을 위해 반드시 정의해야 하는 메소드는?",
    options: [
      "A. getDerivedStateFromProps",
      "B. shouldComponentUpdate",
      "C. componentDidMount",
      "D. render",
    ],
    answer: 3, // 'D'에 해당하는 인덱스
  },
  {
    question: "자바스크립트에서 배열의 첫 번째 요소를 제거하는 메소드는?",
    options: ["A. pop()", "B. shift()", "C. unshift()", "D. push()"],
    answer: 1, // 'B'에 해당하는 인덱스
  },
  {
    question: "자바스크립트에서 'null'과 'undefined'의 차이는?",
    options: [
      "A. 'null'은 값이 없음을 의미하고, 'undefined'는 값이 할당되지 않음을 의미한다.",
      "B. 'null'과 'undefined'는 동일하다.",
      "C. 'null'은 값이 할당되지 않음을 의미하고, 'undefined'는 값이 없음을 의미한다.",
      "D. 'null'은 참조가 없음을 의미하고, 'undefined'는 값이 없음을 의미한다.",
    ],
    answer: 0, // 'A'에 해당하는 인덱스
  },
  {
    question: "자바스크립트에서 'this' 키워드는 어떤 객체를 가리키는가?",
    options: [
      "A. 현재 실행 컨텍스트의 객체",
      "B. 모든 객체",
      "C. 전역 객체",
      "D. 함수 객체",
    ],
    answer: 0, // 'A'에 해당하는 인덱스
  },
  {
    question: "리액트에서 'props'의 용도는 무엇인가?",
    options: [
      "A. 컴포넌트의 상태를 관리",
      "B. 컴포넌트 간에 데이터를 전달",
      "C. 컴포넌트의 생명주기를 관리",
      "D. 컴포넌트의 이벤트를 처리",
    ],
    answer: 1, // 'B'에 해당하는 인덱스
  },
  {
    question: "자바스크립트에서 배열의 마지막 요소를 추가하는 메소드는?",
    options: ["A. pop()", "B. shift()", "C. unshift()", "D. push()"],
    answer: 3, // 'D'에 해당하는 인덱스
  },
  {
    question:
      "자바스크립트의 비동기 처리 방식 중 하나인 'Promise'는 어떤 상태를 가질 수 있는가?",
    options: [
      "A. pending, resolved, rejected",
      "B. pending, fulfilled, rejected",
      "C. waiting, fulfilled, rejected",
      "D. waiting, resolved, rejected",
    ],
    answer: 1, // 'B'에 해당하는 인덱스
  },
  {
    question: "리액트에서 'props'는 변경할 수 있는가?",
    options: [
      "A. 예, 변경 가능하다.",
      "B. 아니오, 변경할 수 없다.",
      "C. 예, 하지만 권장되지 않는다.",
      "D. 아니오, 하지만 권장되지 않는다.",
    ],
    answer: 1, // 'B'에 해당하는 인덱스
  },
  {
    question: "리액트에서 'state'는 변경할 수 있는가?",
    options: [
      "A. 예, 변경 가능하다.",
      "B. 아니오, 변경할 수 없다.",
      "C. 예, 하지만 권장되지 않는다.",
      "D. 아니오, 하지만 권장되지 않는다.",
    ],
    answer: 0, // 'A'에 해당하는 인덱스
  },
  {
    question: "리액트에서 컴포넌트의 재렌더링을 트리거하는 것은 무엇인가?",
    options: [
      "A. props의 변경",
      "B. state의 변경",
      "C. props와 state의 변경",
      "D. 컴포넌트의 메소드 호출",
    ],
    answer: 2, // 'C'에 해당하는 인덱스
  },
  {
    question: "자바스크립트에서 객체를 복사하는 방법 중 하나는?",
    options: [
      "A. = 연산자를 사용한다.",
      "B. 복사 생성자를 사용한다.",
      "C. Object.assign() 함수를 사용한다.",
      "D. 모든 것이 참조로 복사된다.",
    ],
    answer: 2, // 'C'에 해당하는 인덱스
  },
  {
    question:
      "자바스크립트에서 함수를 다른 함수의 인자로 전달하는 기능은 무엇인가?",
    options: ["A. 콜백", "B. 프로미스", "C. 아이템", "D. 클로저"],
    answer: 0, // 'A'에 해당하는 인덱스
  },
  {
    question:
      "리액트에서 특정 DOM 요소에 직접 접근할 때 사용하는 것은 무엇인가?",
    options: ["A. refs", "B. props", "C. state", "D. context"],
    answer: 0, // 'A'에 해당하는 인덱스
  },
  {
    question: "자바스크립트에서 ES6에서 도입된 변수 선언 키워드는 무엇인가?",
    options: ["A. var", "B. let, const", "C. static", "D. final"],
    answer: 1, // 'B'에 해당하는 인덱스
  },
  {
    question:
      "리액트에서 전역 상태 관리를 위해 사용하는 컨텍스트 API의 메소드는 무엇인가?",
    options: ["A. useContext", "B. useGlobal", "C. useStore", "D. useShared"],
    answer: 0, // 'A'에 해당하는 인덱스
  },
];

// 퀴즈 데이터를 변수로 활용
console.log(quizData);
