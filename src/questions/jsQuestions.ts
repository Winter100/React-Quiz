export const javaScriptQuizData = [
  {
    question: "자바스크립트에서 '===' 연산자는 무엇을 검사하는가?",
    options: ["A. 동등성", "B. 일치성", "C. 대입", "D. 인스턴스"],
    answer: 1,
    explanation:
      "일치성(Strict Equality)을 검사하며, 값과 데이터 타입이 모두 같은지 확인합니다.",
  },
  {
    question: "자바스크립트에서 'use strict'; 의 목적은 무엇인가?",
    options: [
      "A. 코드의 실행 속도를 높이기",
      "B. 안전하게 코드를 작성하기 위해",
      "C. 변수를 자동으로 선언하기",
      "D. 모든 오류를 무시하기",
    ],
    answer: 1,
    explanation:
      "안전하게 코드를 작성하기 위한 엄격 모드를 설정합니다. 일반 모드에서는 무시되거나, 묵인될 수 있는 일부 작업들이 엄격 모드에서는 오류를 발생시킵니다.",
  },
  {
    question: "'Hoisting'은 무엇을 의미하는가?",
    options: [
      "A. 변수의 유효 범위를 나타내는 용어",
      "B. 변수나 함수 선언이 마치 코드의 최상단으로 끌어올려지는 듯 한 현상",
      "C. 객체의 속성을 읽어오는 동작",
      "D. 조건문의 결과에 따라 코드 실행 흐름을 변경하는 것",
    ],
    answer: 1,
    explanation:
      "호이스팅은 선언이 물리적으로 이동하는 것이 아니라, JavaScript 엔진이 코드를 해석하고 실행하는 과정에서 선언을 먼저 처리한다는 개념입니다.",
  },
  {
    question: "'Callback' 함수는 어떤 상황에서 주로 사용되는가?",
    options: [
      "A. 비동기 작업이 완료된 후 실행",
      "B. 조건문의 결과에 따라 코드 실행 흐름을 변경할 때",
      "C. 변수를 선언할 때",
      "D. 객체의 메소드를 정의할 때",
    ],
    answer: 0,
    explanation:
      "'Callback' 함수는 매개변수로 함수 객체를 전달해 호출한 함수에서 실행하는 것 을 말한다.",
  },
  {
    question: "'Promise'는 어떤 목적으로 사용되는가?",
    options: [
      "A. 반복문의 결과를 처리하기 위해",
      "B. 비동기 작업을 더 쉽게 다루기 위해",
      "C. 변수를 선언할 때",
      "D. 객체의 속성을 설정하기 위해",
    ],
    answer: 1,
    explanation: "비동기 작업을 더 편리하게 다루기 위한 객체입니다.",
  },
  {
    question: "자바스크립트에서 'this' 키워드는 어떤 객체를 가리키는가?",
    options: [
      "A. 현재 실행 컨텍스트의 객체",
      "B. 모든 객체",
      "C. 전역 객체",
      "D. 함수 객체",
    ],
    answer: 0,
    explanation:
      "'this' 키워드는 현재 실행 중인 함수의 컨텍스트에 따라 다르게 가리키며, 주로 해당 함수가 속한 객체를 가리킵니다.",
  },
  {
    question: "'ES6'는 어떤 목적으로 도입되었는가?",
    options: [
      "A. 더 나은 성능을 위해",
      "B. 브라우저 간 호환성을 향상시키기 위해",
      "C. 보다 효율적인 코드 작성을 위해",
      "D. 비동기 작업을 간편하게 다루기 위해",
    ],
    answer: 2,
    explanation:
      "보다 효율적이고 간결한 코드 작성을 위한 ECMAScript의 6번째 버전입니다.",
  },
  {
    question: "'LocalStorage'와 'SessionStorage'의 차이점은 무엇인가?",
    options: [
      "A. 데이터의 유효 기간",
      "B. 저장 용량",
      "C. 접근 방식",
      "D. 데이터 유지 여부",
    ],
    answer: 0,
    explanation:
      "'LocalStorage'는 영구적으로 데이터를 저장하며, 'SessionStorage'는 세션이 유지되는 동안에만 데이터를 저장합니다.",
  },
  {
    question: "자바스크립트에서 객체를 복사하는 방법 중 하나는?",
    options: [
      "A. = 연산자를 사용한다.",
      "B. 복사 생성자를 사용한다.",
      "C. Object.assign() 함수를 사용한다.",
      "D. 모든 것이 참조로 복사된다.",
    ],
    answer: 2,
    explanation:
      "'Object.assign()' 함수를 사용하여 객체를 복사할 수 있습니다. 이 함수는 얕은 복사를 수행합니다.",
  },
  {
    question: "'RESTful API'의 특징은 무엇인가?",
    options: [
      "A. 상태를 저장하지 않음",
      "B. 세션 기반의 통신",
      "C. 복잡한 상태 전이",
      "D. 모든 통신이 비동기적",
    ],
    answer: 0,
    explanation:
      "RESTful API는 상태를 저장하지 않고, 각 요청 간에 독립적이며 자체적으로 충분한 정보를 가지고 있어야 합니다.",
  },
  {
    question: "자바스크립트에서 배열의 첫 번째 요소를 제거하는 메소드는?",
    options: ["A. pop()", "B. shift()", "C. unshift()", "D. push()"],
    answer: 1,
    explanation:
      "'shift()' 메소드를 사용하여 배열의 첫 번째 요소를 제거할 수 있습니다.",
  },
  {
    question: "자바스크립트에서 'null'과 'undefined'의 차이는?",
    options: [
      "A. 'null'은 값이 없음을 의미하고, 'undefined'는 값이 할당되지 않음을 의미한다.",
      "B. 'null'과 'undefined'는 동일하다.",
      "C. 'null'은 값이 할당되지 않음을 의미하고, 'undefined'는 값이 없음을 의미한다.",
      "D. 'null'은 참조가 없음을 의미하고, 'undefined'는 값이 없음을 의미한다.",
    ],
    answer: 0,
    explanation:
      "'null'은 명시적으로 값이 없음을 나타내며, 'undefined'는 값이 할당되지 않았음을 나타냅니다.",
  },
  {
    question: "자바스크립트에서 배열의 마지막 요소를 추가하는 메소드는?",
    options: ["A. pop()", "B. shift()", "C. unshift()", "D. push()"],
    answer: 3,
    explanation:
      "'push()' 메소드를 사용하여 배열의 마지막에 요소를 추가할 수 있습니다.",
  },
  {
    question: "'WebSockets'은 어떤 용도로 사용되는가?",
    options: [
      "A. 비동기 작업 처리",
      "B. 실시간 양방향 통신",
      "C. 데이터베이스 연결",
      "D. 웹 페이지 스타일링",
    ],
    answer: 1,
    explanation: "실시간 양방향 통신을 위한 표준 프로토콜로 사용됩니다.",
  },
  {
    question: "'Babel'은 무엇인가?",
    options: [
      "A. 테스트 프레임워크",
      "B. 자바스크립트 엔진",
      "C. 코드 변환 도구",
      "D. 패키지 매니저",
    ],
    answer: 2,
    explanation:
      "최신 버전의 자바스크립트 코드를 구형 브라우저에서 실행 가능한 형태로 변환해주는 도구입니다.",
  },
  {
    question: "'CORS'는 어떤 보안 정책을 나타내는가?",
    options: [
      "A. Cross-Origin Request Security",
      "B. Cross-Origin Resource Sharing",
      "C. Cross-Origin Response Security",
      "D. Cross-Origin Request Sharing",
    ],
    answer: 1,
    explanation:
      "다른 도메인 간에 자원을 공유할 수 있도록 하는 보안 정책입니다.",
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
    answer: 1,
    explanation:
      "'Promise'는 비동기 작업의 상태를 나타내며, 대기(pending), 이행(fulfilled), 거부(rejected) 상태 중 하나일 수 있습니다.",
  },
  {
    question: "'TypeScript'는 어떤 언어의 확장인가?",
    options: ["A. Python", "B. JavaScript", "C. Java", "D. C++"],
    answer: 1,
    explanation:
      "자바스크립트의 확장으로, 정적 타입을 지원하는 프로그래밍 언어입니다.",
  },
  {
    question: "자바스크립트에서 'closure'란 무엇인가?",
    options: [
      "A. 함수 호출의 결과",
      "B. 객체의 메소드",
      "C. 전역 변수",
      "D. 함수가 선언될 때의 환경을 기억하는 함수",
    ],
    answer: 3,
    explanation: "함수가 선언될 때의 환경을 기억하는 함수를 가리킵니다.",
  },
  {
    question: "자바스크립트에서 'prototype'은 어떤 역할을 하는가?",
    options: [
      "A. 객체의 속성을 설정하는데 사용",
      "B. 상속을 구현하기 위해 사용",
      "C. 변수의 스코프를 정의하는데 사용",
      "D. 함수의 실행 순서를 제어하는데 사용",
    ],
    answer: 1,
    explanation:
      "상속을 구현하기 위해 사용되며, 객체의 속성과 메소드를 다른 객체에 공유할 수 있게 합니다.",
  },
];
